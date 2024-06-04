import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { News } from '@/types';

const useLoadNewsImage = (news: News) => {
  const supabaseClient = useSupabaseClient();

  if (!news) {
    return null;
  }

  const { data: imageData } = supabaseClient.storage
    .from('news_images')
    .getPublicUrl(news.image_path);

  return imageData.publicUrl;
};

export default useLoadNewsImage;