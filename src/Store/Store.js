import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slice/cartSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';


  const persistConfig = {
    key: 'cart',
    storage,
  };
  
  const persistedCartReducer = persistReducer(persistConfig, cartSlice);


const Store = configureStore({
    reducer: {
        cart: persistedCartReducer,
      },

      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),

});

export const persistor = persistStore(Store);
export default Store;