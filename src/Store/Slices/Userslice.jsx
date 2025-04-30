import { createSlice } from '@reduxjs/toolkit'

const userslice = createSlice({
    name:"user",
    initialState:[],
    reducers:{

        addproduct(state,action){
            const product = action.payload;
            // Check if product already exists in the cart
            const item = state.find(item => item.id === product.id);
            if (item) {
                item.quantity += 1;
              } else {
                state.push({ ...action.payload, quantity: 1 });
              }

        },

        incremproduct(state,action){
            const item = state.find(p=>p.id===action.payload)  
            if (item){
                item.quantity +=1
            }
        },

        decreamproduct(state,action){
            const item = state.find(p=>p.id === action.payload)
            if(item && item.quantity>1){
                item.quantity -=1
            }
            else if(item){
            // Remove item if quantity reaches 0
               return state.filter(p=>p.id !== action.payload)

            }
        },

        removeproduct(state,action){
           return state.filter(p=>p.id !== action.payload)
        },
        
        deletproduct(state,action){
            return []
        }

    }
})
export default userslice.reducer;
export const {addproduct,incremproduct,decreamproduct,removeproduct,deletproduct} = userslice.actions