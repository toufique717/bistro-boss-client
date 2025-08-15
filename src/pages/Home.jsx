import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';
import Popularmenu from './Popularmenu';
import Bgfromourmenu from './Bgfromourmenu';
import Testimonial from './Testimonial';
import Bistrobackground from './Bistrobackground';
import Callus from './Callus';

const Home = () => {
    return (
        <div className='mx-4'>
             
            <Banner></Banner>
            {/* <Orderonline></Orderonline> */}
            <Categories></Categories>
             <Bistrobackground></Bistrobackground>
            <Popularmenu></Popularmenu>
            <Callus></Callus>
             
            <Bgfromourmenu></Bgfromourmenu>
            <Testimonial></Testimonial>


        </div>
    );
};

export default Home;