import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; 
import api from '../../Utils/api';
import './CategorySlider.css';

const CategorySlider = ({ CategoryData }) => {
  const category = CategoryData?.attributes?.Category;
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState('All Categories');
  const baseUrl = api.defaults.baseURL;
  const [isDragging, setIsDragging] = React.useState(false);

  const handleMouseDown = () => setIsDragging(false);

  const handleMouseMove = () => setIsDragging(true);

  const handleMouseUp = (category) => {
    if (!isDragging && category !== 'All Categories') {
      handleMenuItemClick(category);
    }
  };

  const handleMenuItemClick = (category) => {
    setSelectedCategory(category);
    if (category !== 'All Categories') {
      navigate(`/shop?category=${encodeURIComponent(category)}`);
    }
  };

  const settings = {
    infinite: true,
    autoplay: true,
    // speed: 1000,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    easing: 'easeOut',
    rows: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="py-2">
      <h2 className="flex flex-row flex-nowrap items-center">
        <span className="flex-grow block border-t border-red"></span>
        <span className="flex-none block mx-4 px-4 py-2.5 lg:text-xl rounded leading-none uppercase font-bold bg-red text-yellow">
          Categories
        </span>
        <span className="flex-grow block border-t border-red"></span>
      </h2>

      <Slider className="cateSlider mt-5 md:mt-10" {...settings}>
        {category?.map((cate, index) => (
          <div
            key={index}
            className="h-48 w-48 relative sm:h-60 sm:w-60 flex justify-center text-center cursor-pointer border-red border-4 bg-transparent rounded"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => handleMouseUp(cate?.category?.data?.attributes?.CategoryName)}
          >
            <img
              className="object-cover h-full w-full"
              src={`${baseUrl}${cate?.category?.data?.attributes?.Image?.data?.attributes.url}`}
              alt={cate?.category?.data?.attributes?.CategoryName}
            />
            <h1 className="absolute font-bold bottom-1 left-1/2 transform -translate-x-1/2 w-40 bg-red py-1 text-yellow border-2 rounded-lg border-yellow text-[12px] sm:text-sm">
              {cate?.category?.data?.attributes?.CategoryName}
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
