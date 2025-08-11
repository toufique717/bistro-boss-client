//import React from 'react';

import image1 from "../assets/home/01.jpg"
import image2 from "../assets/home/02.jpg"
import image3 from "../assets/home/03.png"
import image4 from "../assets/home/04.jpg"
import image5 from "../assets/home/05.png"
import image6 from "../assets/home/06.png"

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div>

            

            <Carousel>
                <div>
                    <img src= {image1}/>
                     
                </div>
                <div>
                     <img src= {image2}/>
                    
                </div>
                <div>
                     <img src= {image3}/>
                     
                </div>

                <div>
                     <img src= {image4}/>
                     
                </div>

                <div>
                     <img src= {image5}/>
                     
                </div>

                <div>
                     <img src= {image6}/>
                     
                </div>


                <div>
                     <img src= {image3}/>
                     
                </div>
            </Carousel>


            
        </div>
    );
};

export default Banner;