import React from 'react'
import CategoriesSection from './components/CategoriesSection/CategoriesSection'
import HeroSection from './components/HeroSection/HeroSection'
import MenSection from './components/MensSection/MenSection'

const Home = () => {
  return (
    <main>
       <HeroSection/>
       <CategoriesSection/>
       <MenSection/>
    </main>
  )
}

export default Home
