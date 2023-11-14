import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='text-white  px-6'>
         <div className="bg-black flex justify-center mt-5 gap-5">
      <div className="flex flex-col gap-2 w-2/5">
        <h2 className='lg:text-2xl font-bold' >Flavor Heaven</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, sapiente pariatur.</p>

        <div className="flex gap-3">
           <a href=""><FaFacebookF/></a>
           <a href=""><FaInstagram/></a>
           <a href=""><FaTwitter/></a>
          {/* <!-- to remove this '.' marks set list-style is none -->    */}
        </div>
      </div> 
      <div className="">
        <h1 className='flex flex-col lg:text-2xl font-bold'>Available On</h1>
         <li className='list-none'><a href="#">Bhubaneswar</a></li>
           <li className='list-none'><a href="#">Nayagarh</a></li>
           <li className='list-none'><a href="#">Kolkata</a></li>
          <li className='list-none'><a href="#">Delhi</a></li>
      </div>
      
      <div>
         <h1 className='lg:text-2xl font-bold'>Contact Us</h1>
         <li className='list-none'><a href="#">About Us</a></li>
           <li className='list-none'><a href="#">Our Team</a></li>
          <li className='list-none'><a href="#">Customers</a></li>
      </div>
  <div><p>Copyright &copy; Restaurants.com</p></div>
      
    </div>
    </div>
  )
}

export default Footer