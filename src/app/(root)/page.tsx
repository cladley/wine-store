import WineList from "@/components/shared/wine-list";
import { getAllRedWines, getAllWhiteWines } from "@/lib/actions/wine.actions";

const RootPage = () => {
  return (
    <div className="mb-10 flex  flex-col gap-20">
      <div>
        <h2 className="font-bold text-4xl mb-3">Top Reds</h2>
        <WineList action={getAllRedWines} />
      </div>
      <div>
        <h2 className="font-bold text-4xl mb-3">Top Whites</h2>
        <WineList action={getAllWhiteWines} />
      </div>
    </div>
  );
};

export default RootPage;
