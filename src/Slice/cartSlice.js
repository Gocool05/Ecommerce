import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  loading: false,
  error: null,
};

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
        console.log(state.cartItems,'State cartItems')
      // Calculate total amount and quantity safely
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + (item.product.NewPrice || 0), 0
      );
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + (item.Quantity || 0), 0
      );
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