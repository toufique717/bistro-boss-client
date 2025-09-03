import React from 'react';
import p2 from '../assets/home/01.jpg'

const Foodcard = ({item}) => {

   const {name,image,recipe,price} = item;
    
    return (
        <div>


            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={image}
                    alt="Spicy Chicken Pizza"
                    className="rounded-xl w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <p className='absolute top-12 right-12 bg-black text-white py-1 px-3 rounded-md shadow-md'>${price}</p>
                  <h2 className="card-title">{name}</h2>
                  <p>{recipe}</p>
                  <div className="card-actions">
                    <button className="bg-white rounded-md text-yellow-600 border-b-2 border-yellow-500 px-4 py-2 hover:bg-black hover:text-white transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            
        </div>
    );
};

export default Foodcard;