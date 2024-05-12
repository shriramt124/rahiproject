import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { descreaseQuantity, inCreaseQuantity } from "../store/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()
  console.log(cartItems);
  
 const handleIncQuantity = (id)=>{
      dispatch(inCreaseQuantity(id))
 }
 const handleDecrQuantity = (id)=>{
 dispatch(descreaseQuantity(id));

 }
 useEffect(()=>{

 },[cartItems])

 if (cartItems.length === 0) {
  return <h1>You cart is empty</h1>;
}
 
  return (
    <div className="cart-wrapper">
      <h1 className="cart-heading">Your Items</h1>
      {cartItems &&
        cartItems.map((item) => (
          <div className="cart-items " key={item.id * Math.random() * 10}>
            <h4>{item.title}</h4>

            <div className="price-item">
              <h5>{item.price}</h5>
              <div className="quantity-controller">
                <button onClick={() => handleDecrQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncQuantity(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
