import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Reducer/cartReducer";

const Store = configureStore({
    reducer: cartReducer,
})

export default Store;