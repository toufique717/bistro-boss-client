import React from 'react';
import Setiontitle from './Setiontitle'
import frimage from '../assets/home/featured.jpg'
import backimage from '../assets/home/banner.jpg'

const Bgfromourmenu = () => {
    return (

        <div className=' py-10 '>
            <div className='p-12 bg-black bg-opacity-50 bg-cover bg-center bg-blend-overlay ' style={{ backgroundImage: `url(${backimage})` }}>

            <div>
                 <Setiontitle 
                 heading={'---check it out---'}
                 subheading={'From Our menu'}></Setiontitle>
            </div>

            <div className='flex gap-4 py-16 px-28'>
                <div>
                    <img src={frimage}/> 

                </div>

                <div className='mt-16 b' >
                     <p className='text-xl'>March-22,2025</p>
                     <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat veniam sint possimus alias vel quaerat quod, aliquam quis, labore non impedit, cupiditate autem quisquam itaque in nihil modi dolor blanditiis libero iste ut vitae ducimus deleniti iure. Quod tempora dolores vero soluta placeat! Unde delectus quasi pariatur laborum consequatur perferendis.</p>


                </div>
            </div>
            
        </div>
        </div>





 

         
    );
};

export default Bgfromourmenu;