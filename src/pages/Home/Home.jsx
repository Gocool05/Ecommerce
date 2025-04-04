import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Card from '../../components/Card/Card'
import CategorySlider from '../../components/CategorySlider/CategorySlider'
import FactoryClips from '../../components/FactoryClips/FactoryClips'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import Navbar from '../../components/NavBar/Navbar'
import SectionWithSlider from '../../components/SectionWithSlider/SectionWithSlider'
import HomeSlider from '../../components/Slider/Slider'
import Testimonials from '../../components/Testimonials/Testimonials'
import api from '../../Utils/api'
import CartSideBar from '../AddToCart/CartSideBar'
import TechError from '../Error/TechError'

const Home = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch Home Page Data
  const { data: Home, isError, isLoading } = useQuery('HomePage', async () => {
    const res = await api.get(`api/pages/1`);
    return res.data.data;
  });
 
  // Fetch Home Slider Data
  const { data: SliderData,isLoading:sliderLoading } = useQuery('Home-Slider', async () => {
    const res = await api.get(`api/pages/1?populate[0]=Slider&populate[1]=Slider.Image&populate[2]=Slider.MobileImage`);
    return res.data.data;
  });


  // Fetch Category Data
  const { data: CategoryData,isLoading:categoryLoading } = useQuery('Home-Category', async () => {
    const res = await api.get(`api/pages/1?populate[0]=Category&populate[1]=Category.category&populate[2]=Category.category.Image`);
    return res.data.data;
  });

  // Fetch Section Data
  const { data: SectionData,isLoading:sectionLoading } = useQuery('Home-Section', async () => {
    const res = await api.get(`api/pages/1?populate[0]=Section&populate[1]=Section.products&populate[2]=Section.products.ProductImage`);
    return res.data.data;
  });

    // Fetch FactoryClips Data
  const {data:Media,isLoading:mediaLoading } = useQuery('factoryClips', async()=>{
    const res = await api.get('/api/pages/1?populate[0]=FactoryClips&populate[1]=FactoryClips.Media')
    return res.data.data;
  })

  const {data:Test,isLoading:testLoading } = useQuery('Test', async()=>{
    const res = await api.get('/api/testimonials?populate=*')
    return res.data.data;
  })
// console.log(Test,'Testimonials')

  if (isLoading && sectionLoading && sliderLoading && categoryLoading && mediaLoading && testLoading) return <Loading/>;
  if (isError) return <TechError/>;


  return (
    <>
    <div className=''>
      <HomeSlider sliderData={SliderData} />
      <CategorySlider CategoryData={CategoryData}  />
      <SectionWithSlider SectionData={SectionData?.attributes?.Section} />

      <FactoryClips Media={Media?.attributes?.FactoryClips}/>

      {Test?.length > 0 && <Testimonials Test={Test}  />}

      <CartSideBar isCartOpen={isCartOpen} onCartClose={()=>setIsCartOpen(false)} />
    </div>
    </>
  )
}

export default Home
