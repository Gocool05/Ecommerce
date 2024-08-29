import React, { lazy } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { Bounce, toast, } from 'react-toastify';
import { addItem } from '../../Slice/cartSlice';
import api from '../../Utils/api';
import 'react-toastify/dist/ReactToastify.css';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({product}) => {

  const baseUrl = api.defaults.baseURL;
  const dispatch = useDispatch();
  const addToCartHandler = () =>{
    dispatch(
      addItem({
        id: product.id,
        name: product.attributes.ProductName,
        price: product.attributes.NewPrice,
        image: `${baseUrl}${product?.attributes.ProductImage.data[0]?.attributes.url}`,
        quantity: 1,
      })
    );

    toast.success('Product added to cart!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  return (
<>
<div className="max-w-xs relative sm:max-w-sm bg-Pattern bg-cover shadow-red shadow-sm hover:border hover:cursor-pointer hover:scale-105  transition-all duration-400 border-yellow  mx-1 rounded-lg overflow-hidden">
  <span className="text-yellow   py-1 p-3 top-3  bg-black z-30 absolute text-[10px] lg:text-sm font-bold shadow-lg ">{product?.attributes.Offer}% Off</span>
  <Link to={`product/`+product.id}>
  <div className="image-container">
    <img
      src={`${baseUrl}${product?.attributes.ProductImage.data[0]?.attributes.url}`}
      alt={product?.attributes.ProductImage.data[0]?.attributes.name}
      loading='lazy'
      className="w-full h-52 sm:h-64 lg:h-96 object-cover main-image"
    />
    <img
      src={`${baseUrl}${product?.attributes.ProductImage.data[1]?.attributes.url}`}
      alt={product?.attributes.ProductImage.data[1]?.attributes.name}
      loading='lazy'
      className="w-full h-52 sm:h-64 lg:h-96 object-cover hover-image"
    />
  </div>
  </Link>
  <div className="p-2 lg:p-4 h-40 sm:h-48 flex flex-col justify-between">
    <Link to={`product/`+product.id}>
    <h3 className="text-black  shrink-0 flex text-[13px] sm:text-sm font-bold">{product?.attributes.ProductName}</h3>
    <h4 className="text-red hidden sm:flex text-sm sm:text-md font-normal">{product?.attributes.SubTitle}</h4>
    <div className="flex  items-center sm:mt-2">
      <span className="text-black bottom-0 line-through text-[12px] opacity-50 lg:text-lg">&#8377;{product?.attributes.OldPrice}</span>
      <span className="text-red text-sm  lg:text-xl ml-1 font-bold sm:ml-2">&#8377;{product?.attributes.NewPrice}</span>
    </div>
    </Link>
    <button className="CartBtn  hidden hover:flex w-full">
      <span className="IconContainer"> 
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#FFEEA9" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
      </span>
      <p className="text" onClick={addToCartHandler}>Add to Cart</p>
    </button>
  </div>
</div>
</>

  );
};

export default Card;
