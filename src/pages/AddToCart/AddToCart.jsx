import React from "react";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  setCartItems,
} from "../../Slice/cartSlice";
import api from "../../Utils/api";

const AddToCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  
  const userId = localStorage.getItem('UserId');

    const {data:cart} = useQuery('getCart',async() =>{
      const res = await api.get(`/api/users/${userId}?populate=carts.product`)
      return res.data
    },{
      onSuccess:(data) =>{
        dispatch(setCartItems(data.cartItems))
      }
    })
    console.log(cart,'List of items in the cart');

  if (cart?.carts?.length === 0) {
    return (
      <div className="flex p-5 sm:p-10 flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#4e2a1b"
          className="size-52"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <h1 className="text-2xl text-red font-bold"> Your Cart is Empty</h1>
        <Link
          to={"/shop"}
          className="mt-4 text-xl cursor-pointer bg-black text-yellow px-3 animate-pulse py-2 rounded-lg"
        >
          Continue Shopping{" "}
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul>
        {cart?.carts?.map((item) => (
          <li
            key={item.id}
            className="flex sm:flex-row gap-3 flex-col justify-between items-center mb-4 p-2 sm:p-4 border-b  border-black  rounded-md shadow-md"
          >
            <div className="flex justify-center items-center gap-2">
              <div className="bg-red sm:w-24 w-1/2 p-1 rounded-md">
                <img
                  className="h-20 w-full object-cover"
                  src={item.product?.image} // Adjust for nested product data
                  alt={item.product?.name}
                />
              </div>
              <div className="">
                <h3 className="text-sm lg:text-lg text-red font-semibold">
                  {item.product?.name}
                </h3>
                <p className="text-black font-bold">
                  &#8377;{item.product?.price?.toFixed(2)} x {item.Quantity} = &#8377;
                  {(item.product?.price * item.Quantity).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="px-3 py-1 bg-red border-red border-t border-b text-white rounded-l-md hover:bg-red-600"
              >
                -
              </button>
              <span className="px-4 py-1 border-red border-t border-b">
                {item.Quantity}
              </span>
              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="px-3 py-1 bg-red border-red border-t border-b text-white rounded-r-md hover:bg-green-600"
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="ml-4 px-3 py-1 bg-black text-yellow rounded-md hover:bg-red"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex sm:flex-row flex-col gap-2 justify-between items-center">
        <div className="flex flex-col font-bold bg-red rounded-xl p-3 gap-1">
          <p className="text-lg text-yellow">
            Total Items: <span className="font-semibold">{totalQuantity}</span>
          </p>
          <p className="text-lg text-yellow">
            Total Amount:{" "}
            <span className="font-semibold">
              &#8377;{totalAmount.toFixed(2)}
            </span>
          </p>
        </div>
        <Link
          to={"/checkout"}
          className="px-6 py-2 bg-green text-white font-bold rounded-md hover:bg-opacity-80"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
