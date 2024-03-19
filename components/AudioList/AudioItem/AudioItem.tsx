"use client";

import React from 'react';
import freshPic from '../../../assets/ЮТ.jpg';
import like from '../../../assets/like.png';
import play from '../../../assets/play.png';
import { useState } from 'react';
import Image from 'next/image';



function AudioItem(props:any) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
      
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
      
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='rounded-[28px]  bg-white transition-all ease-in-out duration-300 bg-opacity-[30%] py-2 px-4 hover:bg-opacity-[100%] cursor-pointer'>
            <div className="flex justify-between items-center space-x-12">
                <div className='w-16 relative'>
                    <Image className='rounded-[20px]' src={freshPic} alt="" />
                    {isHovered && 
                    <div className='absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2'>
                        <Image className='w-10' src={play} alt="" />
                    </div>}
                    
                    
                </div>
                <div className='text-sm'>
                    Рассекая горизонт - такнельзя
                </div>
                <div className='text-2xl'>
                    3:59
                </div>
                <div className=''>
                    <Image className='w-12' src={like} alt="" />
                </div>
            </div>
        </div>
    );
}

export default AudioItem;