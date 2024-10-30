import { createSlice } from '@reduxjs/toolkit'


const initialState = {
 // cartItems: [], // at the begning use this but after localstorage use this
 cartItems: localStorage.getItem("cartItems") //This is a local storage from browser where your cart storage doesn't refres.. You can take idea from W3school
 ? JSON.parse(localStorage.getItem("cartItems")):[],
  cartTotal: 0,
  cartTotalPrice:0
}




const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCard(state,action) {
      //state.cartItems.push(action.payload)
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
      else {
        const tempProductItem = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProductItem);
      }

      //set data as local storage item and don't loss carditems 
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    },




    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
      else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nexCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )
        state.cartItems = nexCartItems;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    },




    clearCart(state,action) {
      state.cartItems = [];
     localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
      //toast.success("Cart Cleared")
    }



  }
})

export const {addToCard,decreaseCart,clearCart} = cartSlice.actions
export default cartSlice.reducer;