import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";


export const revalidate = 0;

interface SearchProps {
  searchParams: { title: string }
};

const Search = async ({ searchParams }: SearchProps) => {

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
            Search
          </h1>
          <SearchInput />
        </div>
      </Header>
      {/* <SearchContent /> */}
    </div>
  );
}

export default Search;