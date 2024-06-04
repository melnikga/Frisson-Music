"use client";

import Image from "next/image";

import { Playlist } from "@/types";
import PlayButton from "@/components/PlayButton";
import useLoadPlaylistImage from "@/hooks/useLoadPlayListImages";

interface PlaylistProps {
	data: Playlist;
}

const PlaylistItem: React.FC<PlaylistProps> = ({
	data
}) => {

	const imagePath = useLoadPlaylistImage(data);

	return (
		<div
			className="
				relative
				group
				flex
				flex-col
				items-center
				justify-center
				rounded-md
				overflow-hidden
				gap-x-4
				bg-neutral-400/40
				cursor-pointer
				hover:bg-neutral-400/50
				transition
				p-3
			"
		>
			<div 
				className="
					relative
					aspect-square
					w-full
					h-full
					rounded-md
					overflow-hidden
				"
			>
				<Image
					className="object-cover"
					src={imagePath || '/images/liked.png'}
					fill
					alt="Image"
				/>
			</div>
			<div className="flex flex-col items-start w-full p-4 gap-y-1">
				<p className="font-semibold truncate w-full">
					{data.title}
				</p>
			</div>
			<div className="
				absolute
				bottom-24
				right-5
			">
				<PlayButton/>
			</div>
		</div>
	);
};

export default PlaylistItem;