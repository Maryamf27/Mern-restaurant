import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Menu from '../Components/Menu'
import Qualities from '../Components/Qualities'
import Services from '../Components/Services'
import Team from '../Components/Team'
import Reservation from '../Components/Reservation'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <Services/>
      <Team/>
      <Reservation/>
      <Footer/>
    </div>
  )
}

export default Home
