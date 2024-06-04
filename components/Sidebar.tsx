"use client";
import {usePathname} from "next/navigation";
import { useMemo } from "react";
import { BiSolidNotification } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiLineChart } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Logo from "../assets/logo.png";
import Image from 'next/image';
import Library from "./Library";
import {AiOutlinePlus} from 'react-icons/ai';
import { BiSolidHome } from "react-icons/bi";
import { Song } from "@/types";
import { twMerge } from "tailwind-merge";
import usePlayer from "@/hooks/usePlayer";

interface SidebarProps {
	children: React.ReactNode;
	songs: Song[]
}

const Sidebar: React.FC<SidebarProps> = ({
	children,
	songs
}) => {
	const pathname = usePathname();
  const player = usePlayer();
	const routes = useMemo(() => [
		{
			icon: BiSolidHome,
			label: 'Home',
			active: pathname === '/',
			href: '/'
		},
		{
			icon: BiSolidNotification,
			label: 'New',
			active: pathname === '/new',
			href: '/new'
		},
		{
			icon: BiLineChart,
			label: 'Chart',
			active: pathname === '/chart',
			href: '/chart'
		},
		{
			icon: BiSearch,
			label: 'Search',
			active: pathname === '/search',
			href: '/search'
		},
		{
			icon: AiOutlinePlus,
			label: 'Add Song',
			active: pathname === '/add-song',
			href: '/add-song'
		},

	], [pathname])

	return (
		<div className={twMerge(
			`
			flex 
			h-full
			`,
			player.activeId && 'h-[calc(100%-80px)]'
		)}>
			<div
			className="
			hidden 
			md:flex 
			flex-col 
			gap-y-2  
			h-full 
			w-[300px] 
			p-2
			"
			>
				<Box>
					<div
					className="flex flex-col gap-y-4 px-5 py-4"
					>
						<Image src={Logo} alt="Logo" className="w-5/6"/>
						{routes.map((item) => (
							<SidebarItem
								key={item.label}
								{...item}
							/>
						))}
					</div>
				</Box>
				<Box className="overflow-y-auto h-full">
					<Library songs={songs}/>
				</Box>
			</div>
			<main className="h-full flex-1 overflow-y-auto p-2">
				{children}
			</main>
		</div>
	)
}

export default Sidebar;