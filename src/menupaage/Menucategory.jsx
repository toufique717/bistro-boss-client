 
import { Link } from 'react-router-dom';
import Coverimage from '../shared/Coverimage';
import Popularitem from '../shared/Popularitem';
 
const Menucategory = ({image,title1,title2,item}) => {
    return (
        <div className='py-12'>

             {title1 && <Coverimage image={image} title1={title1} title2={title2}></Coverimage>}

             <div className='grid grid-cols-2'>
                    {
                        item.map(items=>
                            <Popularitem
                            key={items._id}
                            items={items}
                            
                            >

                            </Popularitem>
                        )
                    }
                </div>
 <Link to={ `/order/${title1}`}>
 
 
                 <div className="text-center mt-10">
                <button className="bg-black rounded-md text-yellow-500 border-b-2 border-yellow-500 px-4 py-2 hover:bg-white hover:text-yellow-500 transition duration-300">
               Order Your Favourite Food
                </button>
                 </div>

 </Link>
            
        </div>
    );
};

export default Menucategory;
