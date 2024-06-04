import { News } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getNews = async (): Promise<News[]> => {
	const supabase = createServerComponentClient({
		cookies: cookies
	});

	const { data, error } = await supabase
		.from('news')
		.select('*')
		.order('created_at', {ascending: false})
	
	if(error){
		console.log(error);
	}
	
	return (data as any) || []
};

export default getNews;