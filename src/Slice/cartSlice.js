import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import api from '../Utils/api';
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  loading: false,
  error: null,
};

export const RemoveCartItem = createAsyncThunk(
  'RemoveCartItem',
  async (cartId, { rejectWithValue }) => {
    try {
      const res = await api.post('/api/remove/carts', {"cartId":cartId.cartId}
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const AddCartItem = createAsyncThunk(
  'AddCartItem',
  async (CartData, { rejectWithValue }) => {
    console.log(CartData,'Add  Cart')
    try {
      const res = await api.post('/api/carts', {data:{
        product:CartData.product,
        user: CartData.user,
        Quantity:CartData.Quantity,
      }}
      );
      return res.data;
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const DeleteCartItem = createAsyncThunk(
  'DeleteCartItem',
  async (cartId, { rejectWithValue }) => {
    try {
      const res = await api.post('/api/delete/carts', {"cartId":cartId.cartId}
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const ClearCart = createAsyncThunk(
  'ClearCart',
  async (UserId, { rejectWithValue }) => {
    try {
      const res = await api.post('/api/clear/carts', {"userId":UserId}
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      } else {
        state.cartItems.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      }
      state.totalQuantity += newItem.quantity;
      state.totalAmount += newItem.price * newItem.quantity;
    },
    
    setCartItems: (state, action) => {
      // Set cart items from the action payload
      state.cartItems = action.payload || [];
      console.log(state.cartItems, 'State cartItems');
      
      const GST_RATE = 0.18; // Example GST rate (18%)
    
      // Calculate total amount with GST and offer price
      state.totalAmount = state.cartItems.reduce((total, item) => {
        const product = item.product;
        const basePrice = product.Price || 0; // Old price as base price
        const offerPrice = (basePrice-(product.Offer/100*basePrice)) || basePrice; // Use offer price if available
        const itemPrice = offerPrice * item.Quantity || 0; // Calculate price based on quantity
        return total + itemPrice;
      }, 0);
    
      // Calculate total quantity
      state.totalQuantity = state.cartItems.reduce((total, item) => {
        return total + (item.Quantity || 0);
      }, 0);
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity++;
        state.totalAmount += existingItem.price;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addItem,
  setCartItems,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;


export default cartSlice.reducer;