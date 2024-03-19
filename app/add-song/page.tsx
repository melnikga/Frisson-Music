import React from 'react';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Button from '@/components/Button';

const AddSong = () => {
	return (
		<div 
      className="
			bg-[#e4e4e4] 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header>
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-black text-3xl font-semibold">
            Add Your song
          </h1>
        </div>
      </Header>
      <div className='p-6 '>
				<form action="">
					<div className=' space-y-4'>
						<div className='flex flex-col gap-2'>
							<label className='mb-2' htmlFor="title">Title of the song</label>
							<Input title='title' className='md:w-1/2' placeholder='Type title'/>
						</div>
						<div className='flex flex-col gap-2'>
							<label htmlFor='art' className='mb-2' >Attach the file with the cover</label>
							<Input multiple accept="image/*,image/jpeg" title='art' type='file' className='md:w-1/2'/>
						</div>
						<div className='flex flex-col gap-2'>
							<label htmlFor='music' className='mb-2' >Attach the file with the song</label>
							<Input multiple accept="audio/* " title='music' type='file' className='md:w-1/2'/>
						</div>
						<Button type='submit' 
						className="
						bg-white 
						text-black 
						font-medium
						md:w-1/4
						">
							Publish song
						</Button>
					</div>
				</form>
      </div>
    </div>
	);
};

export default AddSong;