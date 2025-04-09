import { getWineBySlug } from "@/lib/actions/wine.actions";
import WineDetails from "@/components/shared/wine-details";
import { notFound } from "next/navigation";
import AddToCart from "@/components/shared/cart/add-to-cart";
import { getMyCart } from "@/lib/actions/cart.actions";

type Props = {
  params: Promise<{ slug: string }>;
};

const WineDetailsPage = async (props: Props) => {
  const { slug } = await props.params;
  const wine = await getWineBySlug(slug);
  const cart = await getMyCart();

  if (!wine) return notFound();

  return (
    <div className="grid grid-cols-3 gap-4">
      <WineDetails className="col-span-2" wine={wine} />
      <div className="bg-gray-100 p-6 rounded-2xl">
        <h2 className=" uppercase font-bold mb-4">Add To Cart</h2>
        <div>
          <AddToCart cart={cart} item={wine} />
        </div>
      </div>
    </div>
  );
};

export default WineDetailsPage;
