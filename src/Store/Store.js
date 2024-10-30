import { configureStore,  } from '@reduxjs/toolkit';
import cartReducer from  './Slices/cartSlice';

export default configureStore({
  reducer: {
    cart:cartReducer
  }
})