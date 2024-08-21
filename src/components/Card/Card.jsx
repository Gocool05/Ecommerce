import React, { lazy } from 'react';
import './Card.css';

const Card = () => {
  const product = {
    image1: 'https://taajoo.com/wp-content/uploads/2022/11/Taajoo.png',
    image2: 'https://bahaiteachings.s3.us-west-1.amazonaws.com/2020/12/how-understand-hindu-idols.jpg',
    name1: 'Random Product Name',
    name2: 'Random Product 8 inches',
    oldPrice: '₹2999.00',
    newPrice: '₹2499.00',
    offer: '20',
  };

  return (
    <div className="max-w-xs relative sm:max-w-sm bg-yellow hover:border hover:cursor-pointer hover:scale-105  transition-all duration-500 border-yellow  mx-1 rounded-lg overflow-hidden">
      <span className="text-yellow rotate-45  py-1 pl-7 pr-5 top-2 -right-6 rotat bg-black z-30 absolute text-[10px] lg:text-sm font-bold shadow-lg ml-1">{product.offer}% Off</span>
      <div className="image-container">
        <img
          src={product.image1}
          alt={product.name1}
          loading='lazy'
          className="w-full h-44 sm:h-64 object-cover main-image"
        />
        <img
          src={product.image2}
          alt={product.name2}
          loading='lazy'
          className="w-full h-44 sm:h-64 object-cover hover-image"
        />
      </div>
      <div className="p-2 lg:p-4">
        <h3 className="text-black  shrink-0  text-sm sm:text-md font-bold">{product.name1}</h3>
        <h4 className="text-red text-sm sm:text-md font-normal">{product.name2}</h4>
        <div className="flex shrink-0  items-center mt-2">
          <span className="text-black line-through text-sm opacity-50 lg:text-lg">{product.oldPrice}</span>
          <span className="text-red text-md lg:text-xl ml-1 font-bold sm:ml-2">{product.newPrice}</span>
        </div>
        <button className="CartBtn hidden hover:flex w-full">
          <span className="IconContainer"> 
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#FFEEA9" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
          </span>
          <p className="text">Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
