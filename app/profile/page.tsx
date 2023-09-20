import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { PiBookOpenText } from 'react-icons/pi';
import { BiChevronRight } from 'react-icons/bi';

const Profile = () => {
  return (
    <main className='w-screen h-screen'>
        <Navbar/>
        <div className='flex justify-center mt-6 mb-[253px]'>
            <div className='flex flex-col border rounded-lg bg-gradient-to-tl from-[#7c32a1] to-purple-500'>
                <div className='flex flex-col items-center border-b-2 mx-2'>
                    <div className='px-4 mt-10'>
                        <Image className='w-[150px] h-[150px] object-cover object-top rounded-full' width={150} height={150} src='/exl-profile.jpg' alt=''/>
                    </div>
                    <h1 className='font-medium text-2xl px-20 text-white'>Fullname</h1>
                    <h3 className='px-20 mb-3 text-white'>email@gmail.com</h3>
                </div>
                <div className='flex justify-between items-center border rounded-md px-2 py-4 mx-2 my-2 text-white'>
                    <h1 className='text-lg font-medium ml-2'>Rank</h1>
                    <h1 className='text-xl font-medium mr-2'>99</h1>
                </div>
            </div>
            <div className='flex flex-col ml-6'>
                <div>
                    <h1 className='flex items-center text-2xl gap-x-2 mb-2 text-[#7c32a1] font-semibold'>
                        <PiBookOpenText/>
                        Saku Belajar</h1>
                    <div className='grid grid-cols-3 gap-x-3 mb-2'>
                        <div className='flex flex-col items-center border py-4 px-20 rounded-md'>
                            <Image width={70} height={70} src='/IconLeaderBoard.png' alt=''/>
                            <h1>Leader Board</h1>
                        </div>
                        <div className='border flex flex-col items-center py-4 px-20 rounded-md'>
                            <Image width={70} height={70} src='/IconBookMark.png' alt=''/>
                            <h1>Bookmark</h1>
                        </div>
                        <div className='border flex flex-col items-center py-4 px-20 rounded-md'>
                            <Image width={70} height={70} src='/IconQuizzPassed.png' alt=''/>
                            <h1>Quiz Passed</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='flex items-center text-2xl gap-x-2 mb-2 text-[#7c32a1] font-semibold'>
                        <PiBookOpenText/>
                        Saku Belajar</h1>
                    <div className='w-full flex items-center justify-between p-2 mb-2'>
                        <h1 className='text-xl'>Ubah Profil</h1>
                        <span className='text-2xl'><BiChevronRight/></span>
                    </div>
                    <div className='w-full flex items-center justify-between p-2 mb-2'>
                        <h1 className='text-xl'>Keluar</h1>
                        <span className='text-2xl'><BiChevronRight/></span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </main>
  )
}

export default Profile