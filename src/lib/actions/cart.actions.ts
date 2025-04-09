"use server";

import { cookies } from "next/headers";
import { auth } from "@/auth";
import { prisma } from "@/db/prisma";
import { AddToCartItem, CartItem } from "@/types";
import { cartItemSchema, insertIntoCartSchema } from "../validators";
import { convertToPlainObject, formatError, round2 } from "../utils";
import { revalidatePath } from "next/cache";

// calculate cart price
const calcPrice = (items: AddToCartItem[]) => {
  const itemsPrice = round2(
    items.reduce((acc, item) => acc + Number(item.price) * item.qty, 0)
  );
  // Shipping is free if the order if greater than 100 pounds
  const shippingPrice = round2(itemsPrice > 100 ? 0 : 10);
  const totalPrice = round2(itemsPrice + shippingPrice);

  return {
    itemsPrice: itemsPrice.toFixed(2),
    shippingPrice: shippingPrice.toFixed(2),
    totalPrice: totalPrice.toFixed(2),
  };
};

export const getMyCart = async () => {
  const sessionCartId = (await cookies()).get("sessionCartId")?.value;
  const session = await auth();

  const userId = session?.user?.id ? (session.user.id as string) : undefined;

  const cart = await prisma.cart.findFirst({
    where: userId ? { userId } : { sessionCartId },
  });

  if (!cart) return undefined;

  // Convert decimals and return
  return convertToPlainObject({
    ...cart,
    items: cart.items as CartItem[],
    itemsPrice: cart.itemsPrice.toString(),
    totalPrice: cart.totalPrice.toString(),
    shippingPrice: cart.shippingPrice.toString(),
  });
};

export const addItemToCart = async (wine: AddToCartItem) => {
  try {
    const session = await auth();
    const sessionCartId = (await cookies()).get("sessionCartId")?.value;
    const userId = session?.user?.id ? (session.user.id as string) : undefined;

    const cart = await getMyCart();

    const wineItem = cartItemSchema.parse(wine);

    const product = await prisma.wine.findFirst({
      where: {
        id: wineItem.id,
      },
    });
    if (!product) throw new Error("Product not found");

    // Create a new cart if we don't have one
    if (!cart) {
      const newCart = insertIntoCartSchema.parse({
        userId: userId,
        sessionCartId: sessionCartId,
        items: [wineItem],
        ...calcPrice([wineItem]),
      });

      await prisma.cart.create({
        data: newCart,
      });

      revalidatePath(`/wines/${product.category}/${product.id}`);

      return {
        success: true,
        message: `${product.name} added to cart`,
      };
    } else {
      const productInCart = cart.items.find((p) => p.id === product.id);
      if (productInCart) {
        cart.items.find((p) => p.id === product.id)!.qty =
          productInCart.qty + 1;
      } else {
        cart.items.push(wineItem);
      }

      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: cart.items,
          ...calcPrice(cart.items),
        },
      });

      revalidatePath(`/product/${product.slug}`);

      return {
        success: true,
        message: `${product.name} ${
          productInCart ? "updated in" : "added to"
        } cart`,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
};
