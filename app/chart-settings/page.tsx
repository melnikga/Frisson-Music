
import Button from '@/components/Button';
import Header from '@/components/Header';
import ChartContent from '../chart/components/ChartContent';
import getChartSongs from '@/actions/getChartSongs';
import ChartEdit from './components/ChartEdit';
import getSongs from '@/actions/getSongs';



const EditorPlaylistsSettings = async () => {
	const songs = await getSongs()

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
            Chart Settings
          </h1>
					<div>
					<ChartEdit songs={songs}/>
					</div>
        </div>
      </Header>
    </div>
  );
};

export default EditorPlaylistsSettings;