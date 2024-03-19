"use client";

import Header from "@/components/Header"
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { useRef, useCallback } from "react";
import arrowRight from '../../assets/Arrow 1.png';
import arrowLeft from '../../assets/Arrow 2.png';
import freshPic from '../../assets/ЮТ.jpg';
import lera from '../../assets/Обложка.jpg';
import Widget from "@/components/Widget";

// Import Swiper styles
import 'swiper/css';
import Image from "next/image";


export default function Home() {

  const sliderRef = useRef<SwiperRef>(null);;

  const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div
    className='
    bg-[#e4e4e4] 
    rounded-lg 
    h-full 
    w-full 
    overflow-hidden 
    overflow-y-auto'
    >
      <Header>
        <div className="mb-2">
          <h1 
            className="
            text-black 
              text-3xl 
              font-semibold
            ">
              Welcome back
          </h1>
          <div 
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
          >
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
        </div>
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
                <SwiperSlide className=''>
                    <Widget largeInterval={false}  name={'Lorem dsd dsds fsdf'} picture={freshPic} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis voluptatum tempora voluptates, adipisci pariatur autem. Consequuntur nemo sequi adipisci officiis, molestias nihil, voluptatibus eum aspernatur laborum obcaecati fuga reiciendis ipsam. Veritatis voluptatum tempora voluptates, adipisci pariatur autem. Consequuntur nemo sequi adipisci officiis, molestias nihil, voluptatibus eum aspernatur laborum obcaecati fuga reiciendis ipsam. '}/>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <Widget largeInterval={false} name={'Lorem'} picture={freshPic} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis voluptatum tempora voluptates, adipisci pariatur autem. Consequuntur nemo sequi adipisci officiis, molestias nihil, voluptatibus eum aspernatur laborum obcaecati fuga reiciendis ipsam.'}/>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <Widget largeInterval={false} name={'Lorem'} picture={freshPic} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis voluptatum tempora voluptates, adipisci pariatur autem. Consequuntur nemo sequi adipisci officiis, molestias nihil, voluptatibus eum aspernatur laborum obcaecati fuga reiciendis ipsam.'}/>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <Widget largeInterval={false} name={'Lorem'} picture={freshPic} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis voluptatum tempora voluptates, adipisci pariatur autem. Consequuntur nemo sequi adipisci officiis, molestias nihil, voluptatibus eum aspernatur laborum obcaecati fuga reiciendis ipsam.'}/>
                </SwiperSlide>
            </Swiper>
        </div>
        <button onClick={handlePrev} className='mt-4 h-full cursor-pointer'>
            <Image className='prev' src={arrowLeft} alt="" />
        </button>
        <div className="md:grid mt-4 md:grid-cols-4 md:gap-8 mb-2 flex flex-col gap-2">
          <Widget largeInterval={false}  center={true} name={`New names of Russian rock`} picture={freshPic}/>
          <Widget largeInterval={false}  center={true} name={`New RNB`} picture={lera}/>
          <Widget largeInterval={false}  center={true} name={`New POP`} picture={freshPic}/>
          <Widget largeInterval={false}  center={true} name={`New JAZZ`} picture={lera}/>
          <Widget largeInterval={false}  center={true} name={`New METAL`} picture={lera}/>
          <Widget largeInterval={false}  center={true} name={`New RAP`} picture={freshPic}/>
          <Widget largeInterval={false}  center={true} name={`New SOUL`} picture={lera}/>
          <Widget largeInterval={false}  center={true} name={`New names of Russian rock`} picture={freshPic}/>
        </div>

      </div>
    </div>
  )
}
