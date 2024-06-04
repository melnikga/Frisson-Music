import { Playlist, Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getPlaylistTracks = async (playlistId: string): Promise<Song[]> => {
	const supabase = createServerComponentClient({
		cookies: cookies
	});

	const { data, error } = await supabase
		.from('editor_playlists_tracks')
		.select('*')
		.order('created_at', {ascending: false})
	
	if(error){
		console.log(error);
	}

	data?.filter(item => item.playlists_id === playlistId)
	
	return (data as any) || []
};

export default getPlaylistTracks;