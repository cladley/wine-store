import Image from "next/image";
import { Wine } from "@/types";

type Props = {
  wine: Wine;
  className?: string;
};

const WineDetails = async ({ wine, className }: Props) => {
  return (
    <div className={`pt-12 ${className}`}>
      <div className="flex">
        <Image
          src={wine.image || ""}
          width={400}
          height={400}
          alt="Wine bottle image"
        />

        <div>
          <h2 className="text-3xl">{wine.name}</h2>
          <div className="mb-5">
            <p className="text-zinc-500 mb-5 italic">{wine.description}</p>
            <p>
              Region: <strong>{wine.region}</strong>
            </p>
            <p>Price: {wine.price}</p>
            <p>Rating: {wine.rating}</p>
          </div>
          <h3 className="font-thin text-2xl underline underline-offset-4">
            Reviews
          </h3>
          <ul className="mt-2">
            <li className="font-light">&quot;Great wine&quot;</li>
            <li>&quot;Lovely stuff&quot;</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WineDetails;
