import React from 'react'
import { useQuery } from 'react-query'
import Card from '../../components/Card/Card'
import CategorySlider from '../../components/CategorySlider/CategorySlider'
import FactoryClips from '../../components/FactoryClips/FactoryClips'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import Navbar from '../../components/NavBar/Navbar'
import SectionWithSlider from '../../components/SectionWithSlider/SectionWithSlider'
import HomeSlider from '../../components/Slider/Slider'
import api from '../../Utils/api'
import TechError from '../Error/TechError'

const Home = () => {



  // Fetch Home Page Data
  const { data: Home, isError, isLoading } = useQuery('HomePage', async () => {
    const res = await api.get(`api/pages/1`);
    return res.data.data;
  });
 
  // Fetch Home Slider Data
  const { data: SliderData } = useQuery('Home-Slider', async () => {
    const res = await api.get(`api/pages/1?populate[0]=Slider&populate[1]=Slider.Image`);
    return res.data.data;
  });


  // Fetch Category Data
  const { data: CategoryData } = useQuery('Home-Category', async () => {
    const res = await api.get(`api/pages/1?populate[0]=Category&populate[1]=Category.category&populate[2]=Category.category.Image`);
    return res.data.data;
  });

  // Fetch Section Data
  const { data: SectionData } = useQuery('Home-Section', async () => {
    const res = await api.get(`api/pages/1?populate[0]=Section&populate[1]=Section.products&populate[2]=Section.products.ProductImage`);
    return res.data.data;
  });
  console.log(SectionData,'SectionData')

  if (isLoading) return <Loading/>;
  if (isError) return <TechError/>;


  return (
    <>
    <div className=''>
      <HomeSlider sliderData={SliderData}/>
      <CategorySlider CategoryData={CategoryData} />
      <SectionWithSlider
      SectionData={SectionData?.attributes?.Section}
      />
      <FactoryClips/>
    </div>
    </>
    
  )
}

export default Home