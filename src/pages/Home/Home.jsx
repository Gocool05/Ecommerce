import React from 'react'
import Card from '../../components/Card/Card'
import CategorySlider from '../../components/CategorySlider/CategorySlider'
import FactoryClips from '../../components/FactoryClips/FactoryClips'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/NavBar/Navbar'
import SectionWithSlider from '../../components/SectionWithSlider/SectionWithSlider'
import HomeSlider from '../../components/Slider/Slider'


const Home = () => {
  return (
    <div className=''>
      <HomeSlider/>
      <CategorySlider/>
      <SectionWithSlider
      Title="Festival Offer"
      />
      <SectionWithSlider
      Title="New Arrivals"
      />
      <SectionWithSlider
      Title="Best Selling"
      />
      <FactoryClips/>
    </div>
    
  )
}

export default Home