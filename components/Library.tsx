"use client";
import {TbPlaylist} from 'react-icons/tb';
import {AiOutlinePlus} from 'react-icons/ai';
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';
import { Song } from '@/types';
import MediaItem from './MediaItem';
import useOnPlay from '@/hooks/useOnPlay';
import useSubscribeModal from '@/hooks/useSubscribeModal';

interface LibraryProps {
	songs: Song[];
}


const Library: React.FC<LibraryProps> = ({
	songs
}) => {

	const subscribeModal = useSubscribeModal();
	const authModal = useAuthModal();
	const uploadModal = useUploadModal();
	const { user, subscription } = useUser();

	const onPlay = useOnPlay(songs);
	const onCLick = () => {
		if (!user) {
			return authModal.onOpen();
		}

		if(!subscription){
			return subscribeModal.onOpen();
		}

		return uploadModal.onOpen();
	}

	return (
		<div className="flex flex-col">
			<div
			className="
			flex
			items-center
			justify-between
			px-5
			pt-4
			"
			>
				<div className="inline-flex items-center gap-x-2">
					<TbPlaylist className={'text-black'} size={26}/>
					<p
					className='text-black
					font-medium
					text-md'
					>Your Library
					</p>
				</div>
					<AiOutlinePlus
					onClick={onCLick}
					size={20}
					className={'hover:text-black text-gray-600 cursor-pointer transition'}
					/>
			</div>
			<div
			className='flex flex-col gap-y-2 mt-4 px-3'
			>
				{songs.map((item) => (
					<MediaItem
						onClick={(id: string) => onPlay(id)}
						key={item.id}
						data={item}
					/>
				))}
			</div>
		</div>
	);
};

export default Library;