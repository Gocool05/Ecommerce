import React from 'react'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { Link, Navigate, useLocation } from 'react-router-dom'
import Slider from 'react-slick'
import api from '../../Utils/api'
import Card from '../Card/Card'

const RelatedProducts = (props) => {
  const baseUrl = api.defaults.baseURL;

  const data = props;
  const Id = props.id;

  const { data: productsData } = useQuery('RelatedProducts', async () => {
    const res = await api.get(`/api/Products?populate=* `);
    return res.data.data;
  },
  );



  const products = Array.isArray(productsData) ? productsData : [];
 
  const relatedProduct = products.filter(product=>{
    const {id,material,category} =data;
    console.log(id,material,category,'ID Material Category')

    if(id!==product.id){
      const materialMatch = material ? product.attributes.Material === material : true;
      const categoryMatch = category ? product.attributes.category.data.attributes.CategoryName === category : true;
      return materialMatch && categoryMatch;
    }
  })
  

  // console.log(relatedProduct,'Relatedd Product')



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
        infinite: false,
        autoplay:false,
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
      {relatedProduct?.map((product, index) => (
    <div  className='p-2' key={index}>
        <Card  product={product} />
    </div>
      ))}
  </Slider>
  </div>
  )
}

export default RelatedProducts