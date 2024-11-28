'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const References = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-10 md:mt-20">
      {/* Updated heading with gradient background and shadow effect */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary border-b-4 border-gray-300 uppercase text-center mb-8 relative z-10">
        BAŞLICA Referanslarımız
      </h1>

      {/* Swiper container with enhanced responsiveness */}
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 40,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {/* Swiper slides with hover effects */}
        {[...Array(9)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/img/spelya_logo.png"
                alt={`logo-${index}`}
                width={133}
                height={155}
                className="w-full h-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default References;
