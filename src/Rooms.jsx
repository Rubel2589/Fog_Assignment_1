import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Rooms = () => {
  return (
    <section className="h-[500px] w-full flex justify-center items-center bg-[#FCF8F4] mt-10 overflow-hidden">
      <div className="flex justify-around w-full">
        <div className="flex flex-col text-justify gap-3">
          <div className="flex flex-col text-3xl font-bold">
            <span>50+ Beautiful rooms</span>
            <span>inspiration</span>
          </div>

          <span>
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </span>
          <div>
            <button className="bg-[#b98e2e] px-10 py-3 text-white">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-around mr-5">
        {/* Room Image */}
        <div className="h-[300px] w-[250px] flex items-center justify-center">
          <img src="/room1.png" alt="room1" className="block mx-auto m-0 p-0 align-top" />
        </div>

        {/* Hero Slider */}
        <div id="hero-slider" className="w-[300px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="h-[300px] w-full"
          >
            <SwiperSlide>
              <img src="/room1.png" alt="Room 2" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/room1.png" alt="Room 3" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/room1.png" alt="Room 4" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
