'use client'
import Image from 'next/image'
// import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false })
// const Footer = dynamic(() => import('../components/Footer'), { ssr: false })



export default function Home() {
  return (
    <main className='w-screen h-screen'>
      {/** Header or Banner Section */}
      <Navbar/>
      <div className='bg-[#AF76AA] h-auto mb-6'>
        <div className='flex justify-center gap-x-44'>
          <div className='flex flex-col items-start my-16'>
            <h1 className='text-4xl font-semibold text-white mt-6'>#BelajarEverywhere untuk <br/> Jadi Apapun yang<br/> Kamu Mau!</h1>
            <p className='text-white text-xl mt-4 mb-12'>Learnify gak hanya ngasih materi pelajaran,<br/> tapi juga fokus di bikin otak makin pinter<br/> dalam berpikir</p>
            <button className='text-[#7C32A1] font-medium px-6 py-2 rounded-xl bg-[#FCC659]'>Yuk, Ikutan!</button>
          </div>
          <div className='my-20'>
            <Image width={400} height={400} src='/Kids Studying from Home-amico.svg' alt='study.png'/>
          </div>
        </div>
      </div>
      {/** Why us */}
      <div className='h-auto mb-6'>
        <div className='flex justify-center gap-x-44'>
          <div className='flex flex-col items-start my-16'>
            <h1 className='text-4xl font-semibold text-[#7B1FA1] mt-6'>Makin Jago Bernalar dan Lolos di Semua<br/> Latihan dan Ujian di Sekolah Bareng Learnify!</h1>
            <div className='flex flex-col items-start mt-2'>
              <div className='flex items-center my-6'>
                <Image width={90} height={10} src='/medal.png' alt='medal.png'/>
                <div className='ml-4'>
                  <h1 className='font-semibold text-xl mb-1 text-[#B789D2]'>Raih banyak juara kelas bareng Learnify!</h1>
                  <p>Bayangin kamu jadi atlet, untuk sehat mungkin bisa usaha sendiri.<br/>Tapi untuk menang kompetisi, atlet pasti pakai pelatih siapin<br/> segudang program latihan supaya kamu jadi juara.</p>
                </div>
              </div>
              <div className='flex items-center my-6'>
                <Image width={90} height={10} src='/brain.png' alt='brain.png'/>
                <div className='ml-4'>
                  <h1 className='font-semibold text-xl mb-1 text-[#B789D2]'>Raih banyak juara kelas bareng Learnify!</h1>
                  <p>Bayangin kamu jadi atlet, untuk sehat mungkin bisa usaha sendiri.<br/>Tapi untuk menang kompetisi, atlet pasti pakai pelatih siapin<br/> segudang program latihan supaya kamu jadi juara.</p>
                </div>
              </div>
              <div className='flex items-center my-6'>
                <Image width={90} height={10} src='/list.png' alt='list.png'/>
                <div className='ml-4'>
                  <h1 className='font-semibold text-xl mb-1 text-[#B789D2]'>Raih banyak juara kelas bareng Learnify!</h1>
                  <p>Bayangin kamu jadi atlet, untuk sehat mungkin bisa usaha sendiri.<br/>Tapi untuk menang kompetisi, atlet pasti pakai pelatih siapin<br/> segudang program latihan supaya kamu jadi juara.</p>
                </div>
              </div>
            </div>
            
          </div>
          <div className='my-20'>
            <Image width={600} height={500} src='/Learning-amico.svg' alt='study.png'/>
            <a href="https://storyset.com/people" className=' font-thin opacity-15'>People illustrations by Storyset</a>
          </div>
        </div>
      </div>
      {/** What you get */}
      <div className='bg-[#AF76AA] h-auto mb-6'>
        <div className='flex justify-center mx-60'>
        <div className='grid grid-cols-2'>
          <div className='col-span-2 text-white font-semibold text-2xl mt-4'>Dapet Apa Aja di Learnify??</div>
          <div className='flex items-center my-6 px-4 mr-2 rounded-2xl bg-gradient-to-tl from-[#4B83E0] to-[#77a3efa4]'>
            <div className='px-4'>
              <h1 className='text-[#FFC007] text-lg font-bold'>Materi Lengkap</h1>
              <p>siap nemenin kamu belajar dengan materi yang lengkap dimana saja dan kapan saja.</p>
            </div>
            <Image width={300} height={300} src='/Kids Studying from Home-bro.svg' alt='materi.png'/>
          </div>
          <div className='flex items-center my-6 px-4 ml-2 rounded-2xl bg-gradient-to-tl from-[#E5437D] to-[#fc95bb9c]'>
            <div className='px-2'>
              <h1 className='text-[#FFC007] text-lg font-bold'>Kuis Setiap Saat</h1>
              <p>mengerjakan kuis setiap materi pembelajaran secara rutin supaya gak kaget waktu ujian.</p>
            </div>
            <Image width={300} height={300} src='/Taking notes-bro.svg' alt='materi.png'/>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
