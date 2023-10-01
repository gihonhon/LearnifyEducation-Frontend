'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='lg:w-[50%] hidden lg:flex lg:justify-center lg:items-center lg:border-l lg:bg-school-texture lg:bg-[-455px] lg:bg-cover'>
    {/** Create Me Swiper Js Pagination */}
    <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }} // Add this if you want autoplay
    >
  <SwiperSlide>
    <div className='flex flex-col items-center'>
        <Image width={300} height={300} src='/Kids Studying from Home-pana.svg' alt=''/>
        <h1 className='font-semibold text-xl mb-2'>Lulus Ujian? Bisa!</h1>
        <p>Kerjakan semua kuis dan<br/>dapatkan nilai yang bagus!</p>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className='flex flex-col items-center'>
        <Image width={300} height={300} src='/Kids Studying from Home-pana.svg' alt=''/>
        <h1 className='font-semibold text-xl mb-2'>Lulus Ujian? Bisa!</h1>
        <p>Kerjakan semua kuis dan<br/>dapatkan nilai yang bagus!</p>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className='flex flex-col items-center'>
        <Image width={300} height={300} src='/Kids Studying from Home-pana.svg' alt=''/>
        <h1 className='font-semibold text-xl mb-2'>Lulus Ujian? Bisa!</h1>
        <p>Kerjakan semua kuis dan<br/>dapatkan nilai yang bagus!</p>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className='flex flex-col items-center'>
        <Image width={300} height={300} src='/Kids Studying from Home-pana.svg' alt=''/>
        <h1 className='font-semibold text-xl mb-2'>Lulus Ujian? Bisa!</h1>
        <p>Kerjakan semua kuis dan<br/>dapatkan nilai yang bagus!</p>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className='flex flex-col items-center'>
        <Image width={300} height={300} src='/Kids Studying from Home-pana.svg' alt=''/>
        <h1 className='font-semibold text-xl mb-2'>Lulus Ujian? Bisa!</h1>
        <p>Kerjakan semua kuis dan <br/>dapatkan nilai yang bagus!</p>
    </div>
  </SwiperSlide>
</Swiper>
</div>
  )
}

export default Slider