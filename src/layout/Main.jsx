import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const Main = () => {
    return (
        <div>
             <div className='max-w-screen-x '>
                <Navbar></Navbar>
             </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;