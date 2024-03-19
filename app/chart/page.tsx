import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";
import AudioList from "@/components/AudioList/AudioList";

export const revalidate = 0;

interface SearchProps {
  searchParams: { title: string }
};

const Chart = async ({ searchParams }: SearchProps) => {

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
      <AudioList className=' '/>
      </div>
    </div>
  );
}

export default Chart;