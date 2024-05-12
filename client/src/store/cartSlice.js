import  { createSlice } from '@reduxjs/toolkit';
 
   
const initialState = {
    items: [ ]
  };


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
           state.items.push(action.payload)
        },
        removeItemFromCart(state,action){
             state.items = state.items.filter((item) => item.id !== action.payload);
             
        },
        inCreaseQuantity(state,action){
         
          //find the item
          const itemToUpdate = state.items.find((item) => item.id === action.payload);
          if(itemToUpdate){
            
            itemToUpdate.quantity++;

          }
        },
        descreaseQuantity(state,action){
          
          console.log(action.payload)
           
          //find the item
          console.log('desc run')
          const itemToudpate = state.items.find((item) => item.id === action.payload);
          if(itemToudpate && Number(itemToudpate.quantity) >0){
          
           itemToudpate.quantity--;
          }
        }
    }
})


export const {addToCart,removeItemFromCart,inCreaseQuantity,descreaseQuantity} = cartSlice.actions

export default cartSlice.reducer;
