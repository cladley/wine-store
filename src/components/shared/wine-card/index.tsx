import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type WineProps = {
  image: string | null;
  name: string;
  slug: string;
  category: string;
  region: string;
  description: string;
  price: string;
  rating: string;
  isFeatured: boolean;
};

const WineCard = (props: WineProps) => {
  return (
    <div className="relative flex w-full">
      <Link
        className="absolute inset-0"
        href={`/wines/${props.category}/${props.slug}`}
        aria-label="Go to wine"
      ></Link>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <Image
            src={props.image ?? ""}
            alt={props.name}
            width={100}
            height={100}
          />
          <div>
            <p className="text-zinc-500 mb-5">{props.description}</p>
            <p>
              Region: <strong>{props.region}</strong>
            </p>
            <p>Price: {props.price}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WineCard;
