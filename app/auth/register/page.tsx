'use client'
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const Register = () => {
  const router = useRouter();
  return (
    <div className='w-full h-screen flex'>
        <div className='w-[50%] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center border-2 rounded-md p-12'>
                <h1 className='text-2xl font-medium p-2'>Sign Up</h1>
                <h3 className='p-2'>Di Learnify bisa belajar kapan saja kok</h3>
                {/** Form Input for Sign In */}
                <form className='p-2'>
                    <div className='mb-4'>
                        <label htmlFor='text' className='text-sm font-medium'>
                        Fullname
                        </label>
                        <input
                        type='text'
                        id='fullname'
                        className='w-full border py-2 px-4 rounded-md'
                        placeholder='Enter your Fullname'
                    />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='text-sm font-medium'>
                        Email
                        </label>
                        <input
                        type='email'
                        id='email'
                        className='w-full border py-2 px-4 rounded-md'
                        placeholder='Enter your email'
                    />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='text-sm font-medium'>
                        Password
                        </label>
                        <input
                        type='password'
                        id='password'
                        className='w-full border p-2 rounded-md'
                        placeholder='Enter your password'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='text-sm font-medium'>
                        Confirmation Password
                        </label>
                        <input
                        type='password'
                        id='password'
                        className='w-full border p-2 rounded-md'
                        placeholder='Enter your password again'
                        />
                    </div>
                    <button
                    type='submit'
                    className='bg-[#D9D9D9] w-full px-4 py-2 my-3 rounded-md '
                    >
                    Sign Up
                    </button>
                </form>
                <p className='my-2'>Already have an account? <a className='text-blue-600 cursor-pointer' onClick={() => router.push('/auth/login')}>Sign In</a></p>
                <p className='my-2'>By sign in or registering you agree with our <a className='text-blue-600 cursor-pointer'>Terms & Conditions</a></p>
            </div>
        </div>
        <div className='w-[50%] flex justify-center items-center border-l bg-school-texture bg-[-455px] bg-cover'>
            {/** Create Me Swiper Js Pagination */}
            <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }} // Add this if you want autoplay
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
                <p>Kerjakan semua kuis dan<br/>dapatkan nilai yang bagus!</p>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Register