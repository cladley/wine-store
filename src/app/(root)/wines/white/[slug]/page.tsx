import { getWineBySlug } from "@/lib/actions/wine.actions";
import WineDetails from "@/components/shared/wine-details";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const WineDetailsPage = async (props: Props) => {
  const { slug } = await props.params;

  const wine = await getWineBySlug(slug);

  if (!wine) return notFound();

  return <WineDetails className="col-span-2" wine={wine} />;
};

export default WineDetailsPage;
