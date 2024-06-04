'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Chart, Song } from '@/types';
import { useUser } from '@/hooks/useUser';
import MediaItem from '@/components/MediaItem';
import LikeButton from '@/components/LikeButton';
import useOnPlay from '@/hooks/useOnPlay';

interface ChartContentProps {
  songs: Song[];
  chart: Chart[]
}

const ChartContent: React.FC<ChartContentProps> = ({ songs, chart }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  console.log(user);

  const onPlay = useOnPlay(songs);

  const sortedChart = chart.sort((a, b) => a.place - b.place);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div
        className='
          flex 
          flex-col 
          gap-y-2 
          w-full px-6 
          text-neutral-400
        '
      >
        Chart is not ready.
      </div>
    );
  }
  return (
    <div className='flex flex-col gap-y-2 w-full p-6'>
    {sortedChart.map((chartItem) => {
      const song = songs.find(song => song.id === chartItem.song_id);
      if (song) {
        return (
          <div key={song.id} className='flex items-center gap-x-4 w-full'>
            <div>{chartItem.place}</div>
            <div className='flex-1'>
              <MediaItem data={song} />
            </div>
            <LikeButton songId={song.id} />
          </div>
        );
      }
      return null;
    })}
    </div>
  );
};

export default ChartContent;