"use client";
import { FaPlay } from "react-icons/fa";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";


const Player = () => {

  return (
    <div 
      className="
        fixed 
        bottom-0 
        bg-white
        w-full 
        py-2 
        h-[70px] 
        px-4
				z-10
      "
    >
			<div className="flex justify-center items-center p-2 gap-6">
				<IoPlayBack className="text-black hover:text-gray-600 cursor-pointer" size={35} />
				<FaPlay className="text-black hover:text-gray-600 cursor-pointer" size={35} />
				<IoPlayForward className="text-black hover:text-gray-600 cursor-pointer" size={35} />
			</div>
      
    </div>
  );
}

export default Player;