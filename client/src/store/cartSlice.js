import  { createSlice } from '@reduxjs/toolkit';
 
   
const initialState = {
    items: [{
      "id": 3,
      "title": "How to parse or read",
      "desc": "In this article, I will teach you how to parse or read CSV files in ReactJS  ",
      "image": "https://images.pexels.com/photos/4543099/pexels-photo-4543099.jpeg?auto=compress&cs=tinysrgb&w=600",
      "price": "1200"
    }]
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
             
        }
    }
})


export const {addToCart,removeItemFromCart} = cartSlice.actions

export default cartSlice.reducer;
