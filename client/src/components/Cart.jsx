import { useSelector } from "react-redux"
import "./Cart.css"

 

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems)
  if(cartItems.length === 0){
    return <h1>You cart is empty</h1>
  }
  return (
    <div className="cart-wrapper">
      <h1 className="cart-heading">Your Items</h1>
      {
        cartItems &&  cartItems.map((item)=>(
          <div className="cart-items " key={item.id*Math.random()*10}>
            <h4>{item.title}</h4>
             
            <div className="price-item">
            <h5>{item.price}</h5>
            <div className="quantity-controller">  
              <button>-</button>
              <span>0</span>
              <button>+</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cart