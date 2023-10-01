import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SliderCard from "@/components/SliderCard";

const Home = async () => {
  const session = await getServerSession(authOptions);
  console.log(session)
  return (
    <div>
      <Navbar/>
      {/** Hero */}
      <div className="bg-[#AF76AA]">
        <div className="mx-2 px-4 py-4 text-white lg:flex lg:justify-center lg:items-center lg:space-x-12 lg:py-8">
          <div className="lg:w-[50%]">
            <h1 className="text-xl lg:text-4xl font-bold mb-2 lg:mb-4">#BikinBelajarMuEverywhere untuk Jadi Apapun yang Kamu Mau!</h1>
            <p className="mb-4 lg:text-lg">Learnify gak hanya ngasih materi pelajaran, tapi juga fokus di bikin otak makin pinter dalam berpikir.</p>
            <button className="btn btn-warning btn-sm text-xs">Yuk, Ikutan</button>
          </div>
          <div className="flex justify-center my-4 lg:block lg:px-4">
            <Image src='/Kids Studying from Home-amico.svg' alt='' className="lg:w-96" width={400} height={100} />
          </div>
        </div>
      </div>

      {/** List */}
      <div className="m-2 p-4 lg:px-2 lg:py-8 lg:mx-6 lg:my-8 lg:flex lg:justify-center lg:items-center space-x-11">
        <ul className="lg:w-[40%]">
        <h1 className="mb-2 font-bold text-lg lg:text-2xl text-[#7B1FA1]">Makin Jago Bernalar dan Lolos di Semua Latihan dan Ujian di Sekolah Bareng Learnify!</h1>
          <li>
            <div className="flex space-x-2 items-start h-auto my-2 py-2">
              <Image src="/medal.png" 
              alt=""
              width={100}
              height={100}
              className="w-[20%] lg:w-20 h-auto"
              />
              <div className="flex flex-col lg:pl-3">
                <h1 className="mr-2 lg:font-semibold lg:text-lg sm:font-semibold sm:text-base">Raih banyak juara kelas bareng Learnify!</h1>
                <p className="hidden lg:inline sm:inline lg:text-sm sm:text-sm">Bayangin kamu jadi atlet, untuk sehat mungkin bisa usaha sendiri. Tapi untuk menang kompetisi, atlet pasti pakai pelatih siapin segudang program latihan supaya kamu jadi juara.</p>
              </div>
            </div>
          </li>
          <li>
          <div className="flex space-x-2 items-start h-auto my-2 py-2">
              <Image src="/brain.png" 
              alt=""
              width={100}
              height={100}
              className="w-[20%] lg:w-20 h-auto"
              />
              <div className="flex flex-col lg:pl-3">
                <h1 className="mr-2 lg:font-semibold lg:text-lg sm:font-semibold sm:text-base">Berlatih bernalar bareng materi Learnify</h1>
                <p className="hidden lg:inline sm:inline lg:text-sm sm:text-sm">Bayangin kamu jadi atlet, untuk sehat mungkin bisa usaha sendiri. Tapi untuk menang kompetisi, atlet pasti pakai pelatih siapin segudang program latihan supaya kamu jadi juara.</p>
              </div>
            </div>
          </li>
          <li>
          <div className="flex space-x-2 items-start h-auto my-2 py-2">
              <Image src="/list.png" 
              alt=""
              width={100}
              height={100}
              className="w-[20%] lg:w-20 h-auto"
              />
              <div className="flex flex-col lg:pl-3">
                <h1 className="mr-2 lg:font-semibold lg:text-lg sm:font-semibold sm:text-base">Kamu dapat mengerjakan dimanasaja</h1>
                <p className="hidden lg:inline sm:inline lg:text-sm sm:text-sm">Bayangin kamu jadi atlet, untuk sehat mungkin bisa usaha sendiri. Tapi untuk menang kompetisi, atlet pasti pakai pelatih siapin segudang program latihan supaya kamu jadi juara.</p>
              </div>
            </div>
          </li>
        </ul>
        <Image src="/Learning-amico.svg" alt="" width={100} height={100} className="hidden lg:block lg:w-[30rem]"/>
      </div>
      
      <div className="bg-[#AF76AA] py-6 lg:flex lg:flex-col lg:items-center">
        <h1 className="mb-2 mx-3 text-white text-lg font-bold lg:text-2xl lg:mb-6 sm:text-xl sm:mb-4">Dapet apa aja di Learnify?</h1>
        <div className="lg:flex lg:gap-x-6 lg:mx-4 hidden">
          <div className="card card-side bg-base-100 bg-gradient-to-tl from-[#77a3efa4] to-[#4B83E0] shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-warning text-2xl">Materi Lengkap</h2>
              <p className="text-lg w-52 text-white">siap nemenin belajar konsep kapan aja, di mana aja.</p>
            </div>
            <figure><img src="/Kids Studying from Home-bro.svg" alt=""/></figure>
          </div>

          <div className="card card-side bg-base-100 shadow-xl bg-gradient-to-tl from-[#fc95bb9c] to-[#E5437D]">
            <div className="card-body">
              <h2 className="card-title text-warning text-2xl">Kerjakan Kuis</h2>
              <p className="text-lg w-52 text-white">mengerjakan kuis setiap materi secara rutin.</p>
            </div>
            <figure><img src="/Taking notes-bro.svg" alt=""/></figure>
          </div>
        </div>
        <SliderCard style="lg:hidden"/>
      </div>


      <Footer/>
    </div>
  )
}

export default Home

      // <div className="w-64 carousel rounded-box">
      //   <div className="carousel-item w-full">
      //     <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
      //   </div>
      //   <div className="carousel-item w-full">
      //     <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
      //   </div>
      // </div>