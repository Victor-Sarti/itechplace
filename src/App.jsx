import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/Recurse'
import Location from './components/Location'
import Footer from './components/Footer'
import Testimonials from './components/Depoiments'
const App = () => {
  return (
      <>
      <NavBar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    <FeatureSection/>
    <Testimonials/>
    <Location/>
   <Footer/>
    </div>
      </>
      )
}

export default App
