'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter()
  return (
    <footer className='w-screen'>
        <div className='flex flex-col items-center border-2'>
            <h1 className='text-3xl text-[#7C32A1] mt-8 mb-2'>Learnify Education</h1>
            <h1 className='w-[520px] text-center text-lg mb-8'>Learnify Education adalah website pembelajaran online yang bertujuan untuk menyediakan akses mudah dan efektif ke materi pembelajaran yang berkualitas dalam berbagai mata pelajaran.</h1>
        </div>
        <div className='flex justify-between bg-[#7B1FA163] p-2 h-auto'>
            <div className='ml-2 font-medium'>Copyright ©2023 Learnifyeducation</div>
            <div className='mr-2'>
                <button className='mx-4' onClick={() => router.push('/')}>Home</button>
                <button className='mx-4' onClick={() => router.push('/about')}>About</button>
                <button className='mx-4' onClick={() => router.push('/blog')}>Blog</button>
            </div>
        </div>
    </footer>
  )
}

export default Footer