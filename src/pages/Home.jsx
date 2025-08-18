import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';
import Popularmenu from './Popularmenu';
import Bgfromourmenu from './Bgfromourmenu';
import Testimonial from './Testimonial';
import Bistrobackground from './Bistrobackground';
import Callus from './Callus';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='mx-4'>

            <Helmet>
                <title>Bistro Home</title>
            </Helmet>
             
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