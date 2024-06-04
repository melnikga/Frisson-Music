"use client";
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


const AddNews = () => {

	const [isLoading, setIsLoading] = useState(false);
	const uploadModal = useUploadModal();
	const { user } = useUser();
	const supabaseClient = useSupabaseClient();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		reset
	} = useForm<FieldValues>({
		defaultValues: {
			title: '',
			description: '',
			image: null,
		}
	});


	const onSubmit: SubmitHandler<FieldValues> = async (values) => {
		try{
			setIsLoading(true);

			const imageFile = values.image?.[0];

			if(!imageFile || !user){
				toast.error('Missing fields');
				return;
			}

			const uniqueID = uniqid();

			const {
				data: imageData,
				error: imageError,
			} = await supabaseClient
				.storage
				.from('news_images')
				.upload(`image-${values.title}-${uniqueID}`, imageFile, {
					cacheControl: '3600',
					upsert: false
			});
			
			if (imageError) {
				setIsLoading(false);
				return toast.error('Faild image upload')
			}

			const {
				error: supabaseError
			} = await supabaseClient
				.from('news')
				.insert({
					title: values.title,
					description: values.description,
					image_path: imageData.path,
			})

			if (supabaseError) {
				setIsLoading(false);
				return toast.error(supabaseError.message)
			}

			router.refresh();
			setIsLoading(false);
			toast.success('News created created!');

			reset();
			uploadModal.onClose();
			
		} catch(error) {
			toast.error('Something went wrong');
		} finally {
			setIsLoading(false);
		}
	}


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
            Add news
          </h1>
        </div>
      </Header>
			<div className='flex flex-col gap-y-6 mb-7 px-6'>
				<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-y-4"
				>
					<Input
						id='title'
						disabled={isLoading}
						{...register('title', {required: true})}
						placeholder='News title'
					/>
					<textarea
					className='        
					text-black
					flex 
					w-full 
					rounded-md 
					border
					border-transparent
					px-3 
					py-3 
					text-sm 
					file:border-0 
					file:bg-transparent 
					file:text-sm 
					file:font-medium 
					placeholder:text-neutral-400 
					disabled:cursor-not-allowed 
					disabled:opacity-50
					focus:outline-none'
						id='description'
						disabled={isLoading}
						{...register('description', {required: true})}
						placeholder='News description'
					/>
					<div>
						<div className="pb-1">
							Select an image
						</div>
						<Input
						id='image'
						type="file"
						disabled={isLoading}
						accept="image/*"
						{...register('image', {required: true})}
						/>
					</div>
					<Button disabled={isLoading} type="submit" className='w-[300px]'>
						Create
					</Button>
				</form>
			</div>
    </div>

	);
};

export default AddNews;