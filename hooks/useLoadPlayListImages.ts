import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { Playlist } from '@/types';

const useLoadPlaylistImage = (playlist: Playlist) => {
  const supabaseClient = useSupabaseClient();

  if (!playlist) {
    return null;
  }

  const { data: imageData } = supabaseClient.storage
    .from('playlist_images')
    .getPublicUrl(playlist.image_path);

  return imageData.publicUrl;
};

export default useLoadPlaylistImage;