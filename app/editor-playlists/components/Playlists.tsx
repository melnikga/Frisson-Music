import useOnPlay from '@/hooks/useOnPlay';
import SongItem from '@/components/SongItem';
import getPlaylists from '@/actions/getPlaylists';
import PlaylistItem from './PlaylistItem';


const PageContent = async () => {

	const playlists = await getPlaylists();

  if (playlists.length === 0) {
    return <div className='mt-4 text-neutral-400'>No songs available.</div>;
  }

  return (
    <div
      className='
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
      '
    >
      {playlists.map((item) => (
        <PlaylistItem
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
};

export default PageContent;