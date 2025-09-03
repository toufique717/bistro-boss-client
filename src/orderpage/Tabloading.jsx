import React from 'react';
import Foodcard from '../shared/Foodcard';

const Tabloading = ({item}) => {
    return (
        <div>
             <div className="grid grid-cols-3">



                
               {
                      item.map(item=>
                      <Foodcard


                         item={item}
                            key={item._id} >

                     </Foodcard>)
              }
  
      
            </div>
        </div>
    );
};

export default Tabloading;