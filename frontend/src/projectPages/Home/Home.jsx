import React from 'react'
import Navbar from '../../projectComponents/Navbar/Navbar.jsx'
import Hero from '../../projectComponents/Hero/Hero.jsx'
import Footer from '../../projectComponents/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home