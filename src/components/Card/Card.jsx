import React, { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Bounce, toast, } from 'react-toastify';
import { addItem } from '../../Slice/cartSlice';
import api from '../../Utils/api';
import 'react-toastify/dist/ReactToastify.css';
import './Card.css';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../../pages/Auth/Login';
import { useState } from 'react';
import Modal from 'react-modal';
// const JWT = localStorage.getItem('JwtToken');
let JWT;

if(localStorage.getItem('RegJWT')){
  JWT = localStorage.getItem('RegJWT');
}else if(localStorage.getItem('LoginJWT')){
  JWT = localStorage.getItem('LoginJWT');
}else {
  JWT = null;
}

let UserId;
if(localStorage.getItem("RegUserId")){
UserId = localStorage.getItem("RegUserId");
}else if(localStorage.getItem("LoginUserId")){
  UserId = localStorage.getItem("LoginUserId");
}

const Card = ({product}) => {

  // console.log(product,'product Details')
  
  const baseUrl = api.defaults.baseURL;
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const sendCartToStrapi = async () => {
    if(JWT){
      try {
        const response = await api.post('/api/carts', {
          data: {
            product:product.id,
            user:UserId,
            Quantity:1
          },
        }
        );
        toast.success('Product added to cart successfully');
        navigate('/cart')
        window.location.reload();
        window.scrollTo(0, 0);
      } catch (error) {
        // Handle error
        // toast.error('Product ');
        // console.error('Error:', error);
      }
    }else{
      setIsOpen(true);
      toast.error('Please login to add your product to cart');
    }
  };


  const addToCartHandler = () =>{
    if(JWT){
      sendCartToStrapi();
      dispatch(
        addItem({
          id: product.id,
          name: product.attributes.ProductName,
          price: product.attributes.Price,
          image: `${baseUrl}${product?.attributes.ProductImage.data[0]?.attributes.url}`,
          quantity: 1,
        })
        );
        toast.success('Product added to cart!');
        navigate('/cart')
        window.location.reload();
        window.scrollTo(0, 0);
    }
    else{
      setIsOpen(true);
      toast.error('Please login to add your product to cart');
    }
  }

  const handleProductClick = () =>{
    const productId = product.id;
    const newPath = `/shop/product/${productId}`;
    navigate(newPath, { replace: true }); // Use `replace: false` to push instead
  }
  const closeModal = () => {
    setIsOpen(false);
  };

  const discountedPrice = (product.attributes.Offer / 100) * product.attributes.Price;
  const OfferPrice = product.attributes.Price - discountedPrice;

  return (
<>
<div className="max-w-xs relative sm:max-w-sm  bg-[#fceecf]  shadow-red shadow-sm hover:border hover:cursor-pointer hover:scale-95  transition-all duration-400 border-yellow  mx-1 rounded-lg overflow-hidden">
  {product?.attributes.Offer && <span className="text-yellow   py-1 px-3 top-3  bg-black z-30 absolute text-[10px] lg:text-sm font-bold shadow-lg ">{product?.attributes.Offer}% Off</span>}
  {/* <Link to={`product/`+product.id}> */}
  <div className="image-container" onClick={handleProductClick}>
    <img
      src={`${baseUrl}${product?.attributes?.ProductImage?.data[0]?.attributes.url}`}
      alt={product?.attributes.ProductImage?.data[0]?.attributes.name}
      loading='lazy'
      className="w-full h-52 sm:h-64 lg:h-96 object-cover main-image"
    />
    <img
      src={`${baseUrl}${product?.attributes.ProductImage?.data[1]?.attributes.url}`}
      alt={product?.attributes.ProductImage?.data[1]?.attributes.name}
      loading='lazy'
      className="w-full h-52 sm:h-64 lg:h-96 object-cover hover-image"
    />
  </div>
  {/* </Link> */}
  <div className="p-2 lg:p-4 h-auto flex flex-col justify-between" >
    <Link to={`product/`+product.id} className=''>
    <h3 className="text-black  flex text-[12px]  h-16 truncate sm:text-sm font-bold text-wrap">{product?.attributes.ProductName}</h3>
    {/* <h4 className="text-red hidden sm:flex text-sm sm:text-md font-normal">{product?.attributes.SubTitle}</h4> */}
    {product?.attributes.Offer ? (
    <div className="flex  items-center sm:mt-2">
      <span className="text-black bottom-0 line-through text-[12px] opacity-50 lg:text-lg">&#8377;{product?.attributes.Price}</span>
      <span className="text-red text-sm  lg:text-xl ml-1 font-bold sm:ml-2">&#8377;{OfferPrice}</span>
    </div>
    ):(
      <div className="flex  items-center sm:mt-2">
      <span className="text-black bottom-0 font-bold text-[12px]  lg:text-lg">&#8377;{product?.attributes.Price}</span>
      </div>
    )}
    </Link>
    {product?.attributes?.AvailableQuantity ? (
    <button className="CartBtn  hidden hover:flex w-full">
      <span className="IconContainer"> 
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#FFEEA9" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
      </span>
      <p className="text" onClick={addToCartHandler}>Add to Cart</p> 
    </button>
    ) : (
      <button className="CartBtn opacity-95 hidden hover:flex w-full" disabled>
      <p className="text-yellow font-bold">Out of Stock</p>
      </button>
    ) }
  </div>
</div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
        <Login setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      </Modal>
</>

  );
};
export default Card;
