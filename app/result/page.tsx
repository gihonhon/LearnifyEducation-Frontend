import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { PiBookOpenText } from 'react-icons/pi';
import { BiChevronRight } from 'react-icons/bi';

const Result = () => {
  return (
    <main className='w-screen h-screen'>
        <Navbar/>
        <div className='flex justify-center mt-2 mb-[423px]'>
            <div className='flex flex-col items-start w-full mx-96'>
                <h1 className='font-medium text-3xl mb-2'>Result search for “Example”</h1>
                {/** Limit the item result */}
                <div className='border flex flex-col w-full h-auto'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-medium text-2xl my-2 ml-3'>Materi (1)</h1>
                        <button className='mr-3 px-4 py-2 text-[#7c32a1] font-medium'>Lihat Semua</button>
                    </div>
                    {/** Map array of object from api and  limit just 10 or 12 item just show*/}
                    <div className='flex w-full items-center py-4 border-b-2'>
                        <Image className='ml-2' width={60} height={60} src='/SList.png' alt=''/>
                        <div className='ml-2'>
                            <h1 className='font-medium mb-1'>Title Materi</h1>
                            <p className='bg-gray-300 text-center rounded-lg py-0.5'>Subject</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </main>
  )
}

export default Result