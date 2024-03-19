import React from 'react';
import AudioItem from './AudioItem/AudioItem';

function AudioList({className} :any) {
    
    const AudioItemsArr = [];

    for(let i=0; i < 10; i++){
        AudioItemsArr.push(
                <div className='flex gap-2 items-center'>
                    <AudioItem key={i}/>
                </div>
        )
    }

    return (
        <div className={'space-y-6 px-2' + className}>
            
            <div className='md:grid grid-cols-2 gap-2 flex-col flex'>
            {AudioItemsArr}
            </div>
            
        </div>
    );
}

export default AudioList;