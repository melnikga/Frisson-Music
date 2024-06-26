import SearchInput from '@/components/SearchInput';
import Header from '@/components/Header';

import SearchContent from './components/SearchContent';
import getSongsByTitle from '@/actions/getSongByTitle';

export const revalidate = 0;

interface SearchProps {
  searchParams: { title: string };
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (

    <div
      className='
        bg-[#e4e4e4] 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      '
    >
      <Header>
        <div className='mb-2 flex flex-col gap-y-6'>
          <h1 className='text-3xl font-semibold'>Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;