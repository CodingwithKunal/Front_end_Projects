import { loadFromLocalStorage, saveToLocalStorage } from "../local_storage/localStorageUtils";
import userslice from "./Slices/Userslice";
import { configureStore } from '@reduxjs/toolkit'




// Load cart from localStorage
const persistedCart = loadFromLocalStorage();

const store = configureStore({
    reducer:{
        user:userslice
    },

    preloadedState: {
        user: persistedCart || [],  // Use saved data or default empty
      },
});

// Save cart to localStorage on every change
store.subscribe(() => {
    saveToLocalStorage(store.getState().user);
  });
export default store