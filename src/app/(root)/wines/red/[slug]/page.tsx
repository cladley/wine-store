import { getWineBySlug } from "@/lib/actions/wine.actions";
import WineDetails from "@/components/shared/wine-details";

type Props = {
  params: Promise<{ slug: string }>;
};

const WineDetailsPage = async (props: Props) => {
  const { slug } = await props.params;

  return <WineDetails slug={slug} action={getWineBySlug} />;
};

export default WineDetailsPage;
