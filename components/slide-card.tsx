"use client";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderCard = ({ style }: { style: string }) => {
  return (
    <div className={style}>
      {/** Create Me Swiper Js Pagination */}
      <Swiper
        style={{ width: "100%", right: 0 }}
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        // Add this if you want autoplay
      >
        <SwiperSlide
          style={{
            textAlign: "left",
            fontSize: "16px",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          <div className="card card-side bg-gradient-to-tl from-[#77a3efa4] to-[#4B83E0] shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-lg text-warning sm:font-bold sm:text-2xl">
                Materi Lengkap
              </h2>
              <p className="text-sm text-white w-[10rem] sm:text-xl sm:w-[18rem]">
                siap nemenin belajar konsep kapan aja, di mana aja.
              </p>
            </div>
            <figure>
              <img src="/Kids Studying from Home-bro.svg" alt="" />
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "left",
            fontSize: "16px",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          <div className="card card-side bg-gradient-to-tl from-[#fc95bb9c] to-[#E5437D]  shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-lg text-warning sm:font-bold sm:text-2xl">
                Kerjakan Kuis
              </h2>
              <p className="text-sm text-white w-[10rem] sm:text-xl sm:w-[18rem]">
                mengerjakan kuis setiap materi secara rutin.
              </p>
            </div>
            <figure>
              <img src="/Taking notes-bro.svg" alt="" />
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderCard;
