"use client";

import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { AddToCartItem, Cart } from "@/types";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

type AddToCartProps = {
  item: Omit<AddToCartItem, "qty">;
  cart?: Cart;
};

const AddToCart = ({ item, cart }: AddToCartProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const existingCartItem = cart?.items.find((x) => x.id === item.id);

  const handleAddToCart = async () => {
    startTransition(async () => {
      const result = await addItemToCart({ ...item, qty: 1 });
      if (result?.success) {
        toast(result.message, {
          action: (
            <Button
              className="ml-2 bg-primary text-white hover:bg-gray-800"
              onClick={() => router.push("/cart")}
            >
              Go To Cart
            </Button>
          ),
        });
      } else {
        toast.error(result?.message);
      }
    });
  };

  return (
    <>
      {existingCartItem ? <p>already in the cart</p> : <p>Item not in cart</p>}
      <Button type="button" onClick={handleAddToCart}>
        {isPending ? "Adding..." : "Add to cart"}
      </Button>
    </>
  );
};

export default AddToCart;
