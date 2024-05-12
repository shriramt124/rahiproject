import  { createSlice } from '@reduxjs/toolkit';
 
   
const initialState = {
    items: [{
      "id": 3,
      "title": "How to parse or read",
      "desc": "In this article, I will teach you how to parse or read CSV files in ReactJS  ",
      "image": "https://images.pexels.com/photos/4543099/pexels-photo-4543099.jpeg?auto=compress&cs=tinysrgb&w=600",
      "price": "1200",
      "quantity":"1"
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
             
        },
        inCreaseQuantity(state,action){
         
          //find the item
          const itemToUpdate = state.items.find((item) => item.id === action.payload);
          if(itemToUpdate){
            itemToUpdate.quantity+=1;
          }
        },
        descreaseQuantity(state,action){
          
          console.log(action.payload)
           
          //find the item
          console.log('desc run')
          const itemToudpate = state.items.find((item) => item.id === action.payload);
          if(itemToudpate && itemToudpate.quantity >0){
            itemToudpate.quantity-=1;
          }
        }
    }
})


export const {addToCart,removeItemFromCart,inCreaseQuantity,descreaseQuantity} = cartSlice.actions

export default cartSlice.reducer;
