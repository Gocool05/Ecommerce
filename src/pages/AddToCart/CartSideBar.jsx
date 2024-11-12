// CartSidebar.js
import React from "react";
import Modal from "react-modal";
import { useQuery, useQueryClient } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  RemoveCartItem,
  AddCartItem,
  DeleteCartItem,
  setCartItems,
} from "../../Slice/cartSlice";
import api from "../../Utils/api";

const baseUrl = api.defaults.baseURL;
let UserId;
if (localStorage.getItem("RegUserId")) {
  UserId = localStorage.getItem("RegUserId");
} else if (localStorage.getItem("LoginUserId")) {
  UserId = localStorage.getItem("LoginUserId");
}

// Set up React Modal's root element (recommended for accessibility)
Modal.setAppElement("#root");

const CartSidebar = ({ isCartOpen, onCartClose }) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const queryClient = useQueryClient();

  const { data: cart, isError, isLoading } = useQuery(
    "getCart",
    async () => {
      const res = await api.get(`/api/users/${UserId}?populate=carts.product.ProductImage`);
      return res.data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("getCart");
        dispatch(setCartItems(data.carts));
      },
    }
  );

  const RemoveItem = async (cartId) => {
    try {
      await dispatch(RemoveCartItem({ cartId })).unwrap();
      queryClient.invalidateQueries("getCart");
      toast.success("Item Removed Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const AddItem = async (cartId) => {
    try {
      await dispatch(AddCartItem({ product: cartId, user: UserId, Quantity: 1 }));
      queryClient.invalidateQueries("getCart");
      toast.success("Item Added Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add item to cart");
    }
  };

  const RemoveCart = async (cartId) => {
    try {
      await dispatch(DeleteCartItem({ cartId })).unwrap();
      queryClient.invalidateQueries("getCart");
      toast.success("Item Removed from the Cart");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <Modal
      isOpen={isCartOpen}
      onRequestClose={onCartClose}
      className="absolute right-0 top-0 h-full w-80 bg-white  p-4 overflow-y-auto shadow-lg"
      overlayClassName="fixed inset-0 z-[9999] bg-gray-900 bg-opacity-50"
    >
        <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <button
              className="text-red-500 font-bold text-lg mb-4"
              onClick={onCartClose}
            >
              X
            </button>
        </div>
      {/* {cart?.carts?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul >
          {cart?.carts?.map((item) => (
            <li key={item.id} className="flex gap-2 mb-4 rounded-md shadow-red shadow-sm p-2" >
              <img
                className="w-16 h-16 object-cover rounded-md"
                src={`${baseUrl}${item?.product?.ProductImage[0]?.url}`}
                alt={item?.product?.ProductName}
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold truncate">
                  {item?.product?.ProductName}
                </h3>
                <p>
                  &#8377;
                  {item?.product?.Price} x {item.Quantity} = &#8377;
                  {(item?.product?.Price * item.Quantity).toFixed(2)}
                </p>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <button
                    onClick={() => RemoveItem(item.id)}
                    className="px-2 py-1 bg-red text-white rounded"
                  >
                    -
                  </button>
                  <span>{item?.Quantity}</span>
                  <button
                    onClick={() => AddItem(item?.product?.id)}
                    className="px-2 py-1 bg-red text-white rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => RemoveCart(item?.id)}
                    className="ml-auto text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart?.carts?.length > 0 && (
        <div className="mt-6">
          <div className="font-bold">
            Total Amount: &#8377; {totalAmount.toFixed(2)}
          </div>
          <Link to="/cart" className="block mt-4 text-center bg-red text-white py-2 rounded">
            View cart
          </Link>
        </div>
      )} */}
    </Modal>
  );
};

export default CartSidebar;
