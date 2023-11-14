import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative '>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white border-white border-2'>
          <p className='font-bold text-2xl px-2 pt-4'>Veg Thali</p>
          <p className='px-2'>Tasty Treats</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-400'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://t4.ftcdn.net/jpg/06/00/38/07/240_F_600380764_YsDwbNuh1330NLQvWeSxB4nEZTd6ILYX.jpg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white border-white border-2'>
          <p className='font-bold text-2xl px-2 pt-4'>Chicken Thali</p>
          <p className='px-2'>Tasty Treats</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-400'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://t4.ftcdn.net/jpg/04/18/52/07/240_F_418520761_9fFrNIDdcHkZcBm1f4k2EL8dt7nCuZbt.jpg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white border-white border-2'>
          <p className='font-bold text-2xl px-2 pt-4'>Desserts Items</p>
          <p className='px-2'>Tasty Treats</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-400'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
