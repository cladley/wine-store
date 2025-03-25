import { prisma } from "@/db/prisma";
import WineCard from "../wine-card";
// import { convertToPlainObject } from "@/lib/utils";

const WineList = async (props: { action: () => Promise<any> }) => {
  const wines = await props.action();

  if (wines.length === 0) {
    return <p className="text-2xl">No wines added</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {wines.map((w) => (
        <WineCard key={w.slug} {...w} />
      ))}
    </div>
  );
};

export default WineList;
