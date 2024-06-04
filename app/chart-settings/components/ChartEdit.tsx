"use client"
import uniqid from 'uniqid';
import { useState } from "react";
import { useUser } from "@/hooks/useUser";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useUploadModal from "@/hooks/useUploadModal";
import toast from "react-hot-toast";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { Song } from '@/types';



interface ChartEditProps {
  songs: Song[];
}


const ChartEdit: React.FC<ChartEditProps> = ({songs}) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const supabaseClient = useSupabaseClient();
	const {
		register,
		handleSubmit,
		reset
	} = useForm<FieldValues>({
		defaultValues: {
			place: '',
			song_id: '',
		}
	});


	const onSubmit: SubmitHandler<FieldValues> = async (values) => {
		try{
			setIsLoading(true);


			const {
				error: supabaseError
			} = await supabaseClient
				.from('chart')
				.insert({
					place: values.place,
					song_id: values.song_id,
			})

			if (supabaseError) {
				setIsLoading(false);
				return toast.error(supabaseError.message)
			}

			router.refresh();
			setIsLoading(false);
			toast.success('Success!');

			reset();
			
		} catch(error) {
			toast.error('Something went wrong');
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className='flex gap-4'>
				<select disabled={isLoading} {...register('song_id', {required: true})} className='rounded-sm' id="song_id">
					{songs.map((item, index) => (
					<option  key={`option-${index}`} id={item.id} value={item.id}>
						{item.title} - {item.author}
					</option>))}
				</select>
				<Input disabled={isLoading} {...register('place', {required: true})} min={1} max={10} type="number" id='place' className='w-24 px-2' placeholder='Type place'/>
				<div className='w-24'>
					<Button type="submit">Save</Button>
				</div>
				
			</form>
		</div>

	);
};

export default ChartEdit;