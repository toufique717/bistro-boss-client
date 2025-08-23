 import { Parallax, Background } from 'react-parallax';

const Coverimage = ({image,title1,title2}) => {
    return (
<div> 
         <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}

    >


         <div>


            <div className="hero  h-[500px] ">
  <div className="hero-overlay bg-opacity-60"></div>
  
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-4xl bg-black  bg-opacity-50  px-20 py-10">
      <h1 className="mb-5 text-5xl uppercase font-bold">{title1}</h1>
      <p className="mb-5">{title2}</p>
      
    </div>
  </div>
</div>
            
        </div>

         
    </Parallax>



         
        {/* style={{ backgroundImage: `url(${image})` }} */}

        </div>
    );
};

export default Coverimage;