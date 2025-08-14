 
import Setiontitle from './Setiontitle';


import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import { FaQuoteLeft } from "react-icons/fa";


import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



const Testimonial = () => {
    const[revew,setrevew] = useState([]);
    useEffect(()=>
        {
            fetch('revews.json')
            .then(res=>res.json())
            .then(data=>setrevew(data))
        },[])
    return (
        <div>
            <section>
                <Setiontitle 
                heading={'---What our client say---'}
                subheading={'TESTIMONIALS'}>

                </Setiontitle>
            </section>

            <section>
                 <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         
         {
            revew.map(revew=>

                <SwiperSlide>
 <div className='flex flex-col items-center px-16 py-16'>
                   <p><Rating
      style={{ maxWidth: 180 }}
      value={3}
      readOnly
    /></p>
                    <p className='text-4xl py-4'><FaQuoteLeft /></p>
                    <p>{revew.details}</p>
                     <p className='pt-4 text-xl text-yellow-500'>{revew.name}</p>
 </div>

                </SwiperSlide>

            )
         }
       </Swiper>

            </section>
            
        </div>
    );
};

export default Testimonial;