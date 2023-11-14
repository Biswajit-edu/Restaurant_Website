import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer text-white'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl px-2'>
        Flavor <span className='font-bold'>Heaven</span>
        </h1>
      </div>
      <div className='text-white'>
      <ul className='flex flex-col sm:flex-row gap-3 sm:text-2xl '>
          <li><a className='cursor-pointer hover:text-orange-400'  herf="#">Foods</a></li>
          <li><a className='cursor-pointer hover:text-orange-400'  herf="#">Contact</a></li>
          <li><a className='cursor-pointer hover:text-orange-400'  herf="#">About</a></li>
        </ul>
      </div>
      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[120px] min-[450px]:w-[200px]  sm:w-[250px] lg:w-[300px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
      </div>
      {/* Cart button */}
      <button className='bg-white text-black hidden min-[950px]:flex items-center py-2 rounded-full hover:bg-orange-400'>
        Login
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
        Flavor <span className='font-bold'>Heaven</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex hover:text-orange-500 cursor-pointer'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex hover:text-orange-500 cursor-pointer'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex hover:text-orange-500 cursor-pointer'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex hover:text-orange-500 cursor-pointer'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex hover:text-orange-500 cursor-pointer'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex hover:text-orange-500 cursor-pointer'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex hover:text-orange-500 cursor-pointer'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
