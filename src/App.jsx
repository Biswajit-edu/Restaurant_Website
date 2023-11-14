import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import Practice from './components/Practice'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-black'>
        <Navbar/>
        <Hero/>
        <HeadlineCards/>
        <Food/>
        <Category/>
        <div className='text-yellow-400'>
          <hr className='text-yellow-400'/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
