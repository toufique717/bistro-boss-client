import React, { useEffect, useState } from 'react';
import Setiontitle from './Setiontitle';
import Popularitem from '../shared/Popularitem';

const Popularmenu = () => {
 
    const [menu,setmenu] = useState([])

    useEffect(()=>
        {
            fetch('menu.json')
            .then(res=>res.json())
            .then(data=>
            {
                const poularitems = data.filter(item=>item.category === 'popular');
                setmenu(poularitems)
            }
            )
        },[])
    return (
        <div>
            <section>
                <Setiontitle
                heading={"----Order Now----"}
                subheading={"FROM OUR MENU"}
                >

                </Setiontitle>
            </section>
            

            <section>
                <p>Popular menu</p>

                <div className='grid grid-cols-2'>
                    {
                        menu.map(items=>
                            <Popularitem
                            key={items._id}
                            items={items}
                            
                            >

                            </Popularitem>
                        )
                    }
                </div>

            
            </section>
        </div>
    );
};

export default Popularmenu;