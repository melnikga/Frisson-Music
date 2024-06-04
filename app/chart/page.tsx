
import Header from "@/components/Header";
import AudioList from "@/components/AudioList/AudioList";
import ChartContent from "./components/ChartContent";
import getChartSongs from "@/actions/getChartSongs";
import getSongs from "@/actions/getSongs";
import getSongsById from "@/actions/getSongById";

export const revalidate = 0;


const Chart = async () => {

  const chart = await getChartSongs()

  const allSongs = await getSongs()

  return (
    <div 
      className="
			bg-[#e4e4e4] 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header>
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-black text-3xl font-semibold">
            Chart
          </h1>
        </div>
      </Header>
      <div>
      
      <ChartContent songs={allSongs} chart = {chart}/>
      </div>
    </div>
  );
}

export default Chart;