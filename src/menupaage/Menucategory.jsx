 
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
            
        </div>
    );
};

export default Menucategory;
