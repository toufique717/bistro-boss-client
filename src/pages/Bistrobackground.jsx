import React from 'react';
import bistroback from '../assets/home/bistroback.jpg'

const Bistrobackground = () => {
    return (
        <div
      className="bg-cover bg-center w-auto"
      style={{ backgroundImage: `url(${bistroback})` }}
    >
       <div className='p-32'>
        <div className="bg-white  bg-opacity-80 text-black text-center p-6">
        <p className="text-2xl font-bold">Bistro Boss</p>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel maiores a et cupiditate. Hic mollitia delectus optio deleniti ipsam illum corporis reprehenderit aperiam. Numquam suscipit illo at quas explicabo laboriosam aperiam ipsam minus quasi modi commodi velit magnam, facere possimus cumque aspernatur sed odio? Consequuntur recusandae perferendis libero et, corporis vel voluptatibus magnam fugit quas laboriosam laudantium, laborum veniam doloribus ipsa labore numquam sint nesciunt provident quisquam amet explicabo? Enim tenetur dicta, vitae impedit perspiciatis natus assumenda quis? Dolore consequatur commodi ut fuga voluptatem at dicta. Excepturi temporibus maxime nostrum repellendus autem, impedit ipsum nemo sequi quas tempora, voluptates dolorem?
        </p>
      </div>
       </div>
    </div>
    );
};

export default Bistrobackground;