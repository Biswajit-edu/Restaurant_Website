import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Choose your Favorites
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-white text-xl md:text-2xl'>Filter Category</p>
          <div className='flex justfiy-between flex-wrap'>
          <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('biryani')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Biryani
            </button>
            <button
              onClick={() => filterType('dosa')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Dosa
            </button>
            <button
              onClick={() => filterType('paneer')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Paneer
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-white text-xl md:text-2xl'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('₹100')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              ₹100
            </button>
            <button
              onClick={() => filterPrice('₹200')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              ₹200
            </button>
            <button
              onClick={() => filterPrice('₹300')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              ₹300
            </button>
            <button
              onClick={() => filterPrice('₹400')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              ₹400
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 text-white'>
        {foods.map((item, index) => (
          <div
            key={index}
            className=' border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
