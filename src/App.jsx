import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import Practice from './components/Practice'

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HeadlineCards/>
        <Food/>
        <Category/>
        <Practice/>
    </div>
  );
}

export default App;
