import React from 'react';
import Slider from 'react-slick';
import Card from '../Card/Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SectionWithSlider.css'
import { useQuery } from 'react-query';
import api from '../../Utils/api';
import { Link } from 'react-router-dom';

const SectionWithSlider = ({ SectionData }) => {
const Section = SectionData;
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='NextArrows'
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFEEA9" // Icon color
          width="24px"
          height="24px"
        >
          <path d="M10 6l6 6-6 6V6z" />
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
     className='PrevArrow'
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFEEA9" // Icon color
          width="24px"
          height="24px"
        >
          <path d="M14 18l-6-6 6-6v12z" />
        </svg>
      </div>
    );
  };
  


  const settings = {
    infinite: true,
    autoplay:true,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: 6,  // 5 columns
    slidesToScroll: 1,
    rows: 2,  // 2 rows    
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1600, // desktop
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          rows: 2,
        }
      },
      {
        breakpoint: 1220, // Tablet
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 2,
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 2, // Reduce to 1 row for smaller screens
        }
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
        }
      }
    ]
  };

  return (
    <>
    {Section?.map((section,index)=>(
    <div className="py-2 md:pt-10 overflow-hidden" key={index}>

          <h2 class="flex flex-row flex-nowrap items-center ">
          <span class="flex-grow block border-t border-red"></span>
          <span class="flex-none block mx-4 px-4 py-2.5  lg:text-xl rounded leading-none uppercase font-bold bg-red text-yellow">
              {section.Title}
          </span>
          <span class="flex-grow block border-t border-red"></span>
      </h2>

      <div className='sm:px-16 md:pt-10 pt-3 gap-4 '>
      <Slider {...settings}>
          {section?.products?.data?.map((product, index) => (
            <div  className='p-2' key={index}>
            <Card  product={product} />
            </div >
      ))}
      </Slider>
      </div>

    </div>
    ))}
    </>
  );
};

export default SectionWithSlider;
