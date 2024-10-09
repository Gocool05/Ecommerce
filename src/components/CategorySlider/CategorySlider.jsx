import React from 'react'
import Marquee from 'react-fast-marquee'
import { useQuery } from 'react-query'
import api from '../../Utils/api'
import './CategorySlider.css'
import Slider from 'react-slick'; 
import { Link, useNavigate } from 'react-router-dom'


const CategorySlider = ({CategoryData}) => {
  
  const category = CategoryData?.attributes?.Category;
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState('All Categories');

  const baseUrl = api.defaults.baseURL;


  const handleMenuItemClick = (category) => {
    setSelectedCategory(category);
    if(category!=='All Categories'){
      navigate(`/shop?category=${encodeURIComponent(category)}`);
    }
  };


  const settings = {
    infinite: true,
    autoplay:true,
    speed: 500,
    autoplaySpeed: 1000,
    slidesToShow: 5,  // 5 columns
    slidesToScroll: 1,
    swipeToSlide:true,
    arrows:false,
    easing: 'easeOut',
    rows: 1,   
    centerMode:true,
    responsive: [
      {
        breakpoint: 1220, // Tablet
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode:false,
          rows: 1, // Reduce to 1 row for smaller screens
        }
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
          centerMode:false,
        }
      }
    ]
  };

 

  return (
    <div className='py-2 '>

        <h2 class="flex flex-row flex-nowrap items-center ">
          <span class="flex-grow block border-t border-red"></span>
          <span class="flex-none block mx-4 px-4 py-2.5 lg:text-xl rounded leading-none uppercase font-bold bg-red text-yellow">
              Categories
          </span>
          <span class="flex-grow block border-t border-red"></span>
      </h2>


      <Slider className='cateSlider mt-5 md:mt-10 ' {...settings}>
          {category?.map((cate,index) => (
           <div key={index} className='h-48 w-48 relative sm:h-60 sm:w-60 flex justify-center  text-center cursor-pointer  border-red border-4 bg-transparent rounded '  onClick={() => handleMenuItemClick(`${cate?.category?.data?.attributes?.CategoryName}`)}>
           <img className=' object-cover h-full w-full' src={`${baseUrl}${cate?.category?.data?.attributes?.Image?.data?.attributes.url}`} alt={cate?.category?.data?.attributes?.CategoryName}/>
            <h1 className='absolute font-bold bottom-1 left-1/2 transform -translate-x-1/2 w-40  bg-red py-1  text-yellow border-2 rounded-lg border-yellow text-[12px] sm:text-sm'>{cate?.category?.data?.attributes?.CategoryName}</h1>
         </div>
      ))}
      </Slider>
        
        {/* <Marquee play={true} direction={'right'} pauseOnHover={true} loop={0}>
        {category?.map((cate,index)=>(
          <div key={index} className='h-48 w-48 sm:h-60 sm:w-60 border-red border-4 cursor-pointer bg-yellow  mt-10 mx-4 flex justify-center  rounded ' onClick={() => handleMenuItemClick(`${cate?.category?.data?.attributes?.CategoryName}`)}>
            <img className='relative  object-cover' src={`${baseUrl}${cate?.category?.data?.attributes?.Image?.data?.attributes.url}`} alt={cate?.category?.data?.attributes?.CategoryName}/>
             <h1 className='absolute font-bold bottom-0 w-40 text-center m-2 bg-red py-1 px-2  text-yellow border-2 rounded-lg border-yellow text-sm'>{cate?.category?.data?.attributes?.CategoryName}</h1>
          </div>
         ))}
        </Marquee> */}
    </div>
  )
}

export default CategorySlider;