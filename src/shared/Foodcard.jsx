import React from 'react';
import p2 from '../assets/home/01.jpg'

const Foodcard = ({item}) => {
   const {name,image,recipe,price} = items;
    
    return (
        <div>


            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={p2}
                    alt="Spicy Chicken Pizza"
                    className="rounded-xl w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Spicy Chicken Pizza</h2>
                  <p>Hot and cheesy pizza topped with spicy grilled chicken, bell peppers, and onions.</p>
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