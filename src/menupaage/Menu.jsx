import React from 'react';
import { Helmet } from 'react-helmet-async';
import Coverimage from '../shared/Coverimage';
import cimage from '../assets/menu/dessert-bg.jpeg'
import Popularmenu from '../pages/Popularmenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Menu</title>
            </Helmet>
            <h1>This is menu </h1>
            
            <Coverimage
            image={cimage}
            title1={"Our menu"}
            title2={"Welcome to our restaurant"}>

            </Coverimage>

            <Popularmenu></Popularmenu>
        </div>
    );
};

export default Menu;