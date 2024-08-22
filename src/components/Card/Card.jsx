import React, { lazy } from 'react';
import { useQuery } from 'react-query';
import api from '../../Utils/api';
import './Card.css';

const Card = ({product}) => {
  // const Products = async () =>{
  //   const res = await api.get('/api/Products?populate=*');
  //   return res.data.data;
  // }
  
  // const { data:products, isLoading, isError} = useQuery('Products',Products);
  const baseUrl = api.defaults.baseURL;

  // console.log('List of Products',products);

  return (
<>
<div className="max-w-xs relative sm:max-w-sm bg-Pattern bg-cover shadow-red shadow-sm hover:border hover:cursor-pointer hover:scale-105  transition-all duration-400 border-yellow  mx-1 rounded-lg overflow-hidden">
  <span className="text-yellow   py-1 p-3 top-2  bg-black z-30 absolute text-[10px] lg:text-sm font-bold shadow-lg ">{product.attributes.Offer}% Off</span>
  <div className="image-container">
    <img
      src={`${baseUrl}${product.attributes.ProductImage.data[0].attributes.url}`}
      alt={product.attributes.ProductImage.data[0].attributes.name}
      loading='lazy'
      className="w-full h-44 sm:h-64 object-cover main-image"
    />
    <img
      src={`${baseUrl}${product.attributes.ProductImage.data[1].attributes.url}`}
      alt={product.attributes.ProductImage.data[1].attributes.name}
      loading='lazy'
      className="w-full h-44 sm:h-64 object-cover hover-image"
    />
  </div>
  <div className="p-2 lg:p-4">
    <h3 className="text-black  shrink-0 flex text-[13px] sm:text-lg font-bold">{product.attributes.ProductName}</h3>
    <h4 className="text-red hidden sm:flex text-sm sm:text-md font-normal">{product.attributes.SubTitle}</h4>
    <div className="flex justify-center  items-center sm:mt-2">
      <span className="text-black  line-through text-[12px] opacity-50 lg:text-lg">{product.attributes.OldPrice}</span>
      <span className="text-red text-sm  lg:text-xl ml-1 font-bold sm:ml-2">{product.attributes.NewPrice}</span>
    </div>
    <button className="CartBtn hidden hover:flex w-full">
      <span className="IconContainer"> 
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#FFEEA9" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
      </span>
      <p className="text">Add to Cart</p>
    </button>
  </div>
</div>
</>

  );
};

export default Card;
