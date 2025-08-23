import React from 'react';
import { Helmet } from 'react-helmet-async';
import Coverimage from '../shared/Coverimage';
import cimage from '../assets/menu/dessert-bg.jpeg'
import Popularmenu from '../pages/Popularmenu';
import Menucategory from './Menucategory';
import usemenu from '../hooks/usemenu';
import Setiontitle from '../pages/Setiontitle';


// import desert from '../assets/menu/desert.jpg'
// import pizza from '../assets/menu/pizza.jpg'
// import salad from '../assets/menu/salad.jpg'
// import  soup from '../assets/menu/soup.jpg'

import desertimg from '../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../assets/menu/pizza-bg.jpg'
import saladimg from '../assets/menu/salad-bg.jpg'
import soupimg from '../assets/menu/soup-bg.jpg'
 

const Menu = () => {

    const [menu] = usemenu();
    const offered = menu.filter(item=>item.category === 'offered');
    const desert = menu.filter(item=>item.category === 'dessert');
    const soup = menu.filter(item=>item.category === 'soup');
    const salad = menu.filter(item=>item.category === 'salad');
    const pizza = menu.filter(item=>item.category === 'pizza');
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

            <Setiontitle heading={'--Dont Miss--'}
            subheading={'Todays Offer'}></Setiontitle>

             <Menucategory item={offered}></Menucategory>

             <Menucategory item={desert} title1={'DESSERTS'} title2={'Soups are a comforting and nourishing dish enjoyed worldwide. They can be light and refreshing or hearty and filling, made with vegetables, meats, or legumes. Soups provide warmth, hydration, and essential nutrients. From classic chicken soup to spicy lentil varieties, they bring flavor, health, and comfort to every meal.'} image={desertimg}></Menucategory>

             <Menucategory item={soup} title1={'PIZZA'} title2={'Soups are a comforting and nourishing dish enjoyed worldwide. They can be light and refreshing or hearty and filling, made with vegetables, meats, or legumes. Soups provide warmth, hydration, and essential nutrients. From classic chicken soup to spicy lentil varieties, they bring flavor, health, and comfort to every meal.'} image={pizzaimg}></Menucategory>

             <Menucategory item={salad} title1={'SALADS'} title2={'Soups are a comforting and nourishing dish enjoyed worldwide. They can be light and refreshing or hearty and filling, made with vegetables, meats, or legumes. Soups provide warmth, hydration, and essential nutrients. From classic chicken soup to spicy lentil varieties, they bring flavor, health, and comfort to every meal.'} image={saladimg}></Menucategory>

             <Menucategory item={pizza} title1={'SOUPS'} title2={'Soups are a comforting and nourishing dish enjoyed worldwide. They can be light and refreshing or hearty and filling, made with vegetables, meats, or legumes. Soups provide warmth, hydration, and essential nutrients. From classic chicken soup to spicy lentil varieties, they bring flavor, health, and comfort to every meal.'} image={soupimg}></Menucategory>
        </div>
    );
};

export default Menu;