

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';




import image1 from "../assets/home/salad.jpg"
import image2 from "../assets/home/soup.jpg"
import image3 from "../assets/home/pizza.jpg"
import image4 from "../assets/home/desert.jpg"


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const Categories = () => {


    return (
        <div className=' py-8 '>

            


            <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
             <div className="relative">
             <img src={image1} className="w-full h-96" alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-4xl px-4 py-2">
              Salad
             </p>
             </div>
         </SwiperSlide>


           <SwiperSlide>
             <div className="relative">
             <img src={image2} className="w-full  h-96 " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-4xl px-4 py-2">
              Soup
             </p>
             </div>
         </SwiperSlide>


          <SwiperSlide>
             <div className="relative">
             <img src={image3} className="w-full   h-96 " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-4xl px-4 py-2">
              Pizza
             </p>
             </div>
         </SwiperSlide>



           <SwiperSlide>
             <div className="relative">
             <img src={image4} className="w-full   h-96 " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-4xl px-4 py-2">
              Desert
             </p>
             </div>
         </SwiperSlide>

         
      </Swiper>
            
        </div>
    );
};

export default Categories;