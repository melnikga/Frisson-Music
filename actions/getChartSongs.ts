import { Song, Chart } from '@/types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const getLikedSongs = async (): Promise<Chart[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data } = await supabase
    .from('chart')
    .select('*')
    .order('created_at', { ascending: false });

  if (!data) return [];

	return (data as any) || []
};

export default getLikedSongs;