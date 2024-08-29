import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import api from '../../Utils/api'
import Card from '../Card/Card'

const RelatedProducts = () => {

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

    const RelatedProducts = async () => {
        const res = await api.get('/api/Products?populate=*');
        return res.data.data;
      }
      const { data: RelProducts } = useQuery('RelatedProducts', RelatedProducts);
      console.log(RelProducts,'The Related product')


      const settings = {
        infinite: true,
        autoplay:true,
        speed: 500,
        autoplaySpeed: 2500,
        slidesToShow: 5,  // 5 columns
        slidesToScroll: 1,
        rows: 1,  // 2 rows    
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024, // Tablet
            settings: {
              slidesToShow: 3,
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
    <div className='px-4 sm:px-16 pb-16'>
    <h2 className="text-4xl pb-5 text-center text-red font-bold uppercase">
      {" "}
      Related Products
    </h2>
    <Slider {...settings}>
      {RelProducts?.map((product, index) => (
    <div  className='p-2' key={index}>
        <Card  product={product} />
    </div>
      ))}
  </Slider>
  </div>
  )
}

export default RelatedProducts