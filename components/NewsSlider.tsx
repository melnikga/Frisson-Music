"use client";

import React from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { useRef, useCallback } from "react";
import Widget from "@/components/Widget";
import freshPic from '../assets/ЮТ.jpg';
import arrowRight from '../assets/Arrow 1.png';
import arrowLeft from '../assets/Arrow 2.png';
import 'swiper/css';
import Image from "next/image";
import getNews from '@/actions/getNews';
import { News } from '@/types';

interface NewsProps {
	news: News[]
}


const NewsSlider: React.FC<NewsProps> = ({news}) => {
	
	const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
  }, []);
	return (
		<>
			<div className='flex justify-between'>
				<h2 className='text-5xl mb-4'>Extra fresh</h2>
				<button onClick={handleNext} className='mt-auto mb-4 h-full'>
						<Image className='next' src={arrowRight} alt="" />
				</button>
				</div>
			<div className='mx-auto flex md:w-1/2'>
			<Swiper
			ref={sliderRef}
			spaceBetween={50}
			slidesPerView={1}
			autoplay= {true}
			
			loop={true}
			>
				{news?.map((item, index)=>(
					<SwiperSlide key={`slide-${index}`} className=''>
						<Widget key={`widget-${index}`} largeInterval={false} data={item}  name={item.title} picture={item.image_path} description={item.description}/>
					</SwiperSlide>
				))}

			</Swiper>
			</div>
			<button onClick={handlePrev} className='mt-4 h-full cursor-pointer'>
			<Image className='prev' src={arrowLeft} alt="" />
			</button>
		</>
		
	);
};

export default NewsSlider;