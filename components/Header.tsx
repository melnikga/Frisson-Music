"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from 'react-icons/rx';
import {HiHome} from "react-icons/hi"
import { BiSearch } from "react-icons/bi";
import { BiLineChart } from "react-icons/bi";
import Button from './Button';
import {AiOutlinePlus} from 'react-icons/ai';
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import usePlayer from "@/hooks/usePlayer";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}


const Header: React.FC<HeaderProps> = ({
	children, className
}) => {
  const player = usePlayer();
  const authModal = useAuthModal();
	const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const { user, subscription } = useUser();
	const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    player.reset();
    router.refresh();

    if(error) {
      toast.error(error.message)
    } else {
      toast.success('Logged out!')
    }
	}

	return (
		<div
		className={twMerge(
			`h-fit
			bg-gradient-to-b 
			from-gray-400
			p-6
			`, className
		)}
		>
			<div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button 
            onClick={() => router.back()} 
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button 
            onClick={() => router.forward()} 
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button 
            onClick={() => router.push('/')} 
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button 
            onClick={() => router.push('/search')} 
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
          <button 
            onClick={() => router.push('/chart')} 
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <BiLineChart className="text-black" size={20} />
          </button>
          <button 
            onClick={() => router.push('/add-song')} 
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <AiOutlinePlus className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user? (
            <div className="flex gap-x-4 items-center">
              <Button
                onClick={handleLogout}
                className="bg-white px-6 py-2"
              >
                Logout
              </Button>
              <Button
              onClick={() => router.push('/account')}
              className=""
              >
                <FaUserAlt/>
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button  
                    onClick={authModal.onOpen}
                    className="
                      bg-transparent
                      text-black 
                      font-medium
                    "
                  >
                  Sign up
                </Button>
              </div>
              <div>
                <Button  
                  onClick={authModal.onOpen}
                  className="
                    bg-white 
                    text-black 
                    px-6
                    py-2
                    font-medium
                  "
                >
                  Log in
                </Button>
              </div>
            </>
          )}
            
        </div>
      </div>
      {children}
    </div>
	);
};

export default Header;