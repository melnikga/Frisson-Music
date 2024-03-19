import Image from 'next/image';
import React, { useState } from 'react';


function Widget({
    picture, 
    name, 
    largeInterval=false, 
    description, 
    center = false}: any){

    const [isActive, setActive] = useState(false);

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
        <div onClick={showContent} className={'min-h-full rounded-[28px] bg-[#489F99] bg-opacity-[30%] transition-all ease-in-out duration-300 py-8 px-6 hover:bg-opacity-[100%] cursor-pointer ' + 
            (largeInterval ? 'space-y-16 active:-translate-x-1/2 active:-scale-x-125 active:scale-125 active:-translate-y-1/3 last:active:-translate-y-1/3 last:active:-translate-x-[178%] widget' : 'space-y-6') }>
            <Image className='rounded-[28px] object-cover w-full h-60' src={picture} alt="" />
            <h3 className={'text-3xl whitespace-pre-line ' + (center ? 'text-center' : '')}>
                {name}
            </h3>
            {description ? <div className=''>{description}</div> : null}
        </div>    
    );
}

export default Widget;