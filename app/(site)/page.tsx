import getSongs from '@/actions/getSongs';
import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import PageContent from './component/PageContent';
import Playlists from '../editor-playlists/components/Playlists';

export const revalidate = 0;



export default async function Home() {
  const songs = await getSongs();

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
        <div className="mb-2">
          <h1 className="text-black text-3xl font-semibold">
            Start your day with Frisson
          </h1>
          <div className='
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-3
          mt-4
          '>
            <ListItem image='/images/heart.svg' name='Liked Songs' href='liked'/>
          </div>
        </div>
      </Header>
      <div className='mt-2 mb-7 px-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold'>
            Recent releases
          </h1>
        </div>
        <div>
          <PageContent songs={songs}/>
          
        </div>
        <div className='flex justify-between items-center mt-20'>
          <h1 className='text-2xl font-semibold'>
            Editor playlists
          </h1>
        </div>
        <div>
          <Playlists/>
        </div>
      </div>
    </div>
  );
};