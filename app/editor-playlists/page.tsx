
import Button from '@/components/Button';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';
import Playlists from './components/Playlists';


const EditorPlaylistsSettings = () => {
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
      <Header className='from-bg-neutral-900'>
        <div className='mb-2 flex flex-col gap-y-6'>
          <h1 className=' text-3xl font-semibold'>
            Editor Playlists Settings
          </h1>
					<Button className='w-[300px]'>
						Add new playlist
					</Button>
					<Playlists/>
        </div>
      </Header>
    </div>
  );
};

export default EditorPlaylistsSettings;