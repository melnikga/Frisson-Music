import useLoadNewsImage from '@/hooks/useLoadNewsImage';
import Image from 'next/image';
import React, { useState } from 'react';


function Widget({
    data,
    picture, 
    name, 
    largeInterval=false, 
    description, 
    center = false}: any){

    const [isActive, setActive] = useState(false);
    const imagePath = useLoadNewsImage(data);
    const showContent = () => {
        setActive(true);
    }
    if(center){
        let nameArr = Array.from(name);
        const count: any = nameArr.map((item, i) => item === ' ' ? item = i : null).filter(item => item !== null);
        if(count.length >= 3){
            nameArr[count[2]] = nameArr[count[2]] + ' \n ';
            name = nameArr.join('');
        }
    }
    return (
        <div onClick={showContent} className='min-h-full rounded-[28px] bg-[#489F99] bg-opacity-[30%] transition-all ease-in-out duration-300 py-8 px-6 hover:bg-opacity-[100%] cursor-pointer space-y-6'>
            <div 
				className="
					relative
					 aspect-video
					rounded-md
					overflow-hidden
				"
			>
                <Image fill className='rounded-[28px] object-cover !h-60' src={imagePath? imagePath : ''} alt="" />
            </div>
            
            <h3 className={'text-3xl whitespace-pre-line ' + (center ? 'text-center' : '')}>
                {name}
            </h3>
            {description ? <div className=''>{description}</div> : null}
        </div>    
    );
}

export default Widget;