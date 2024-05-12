import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { descreaseQuantity, inCreaseQuantity } from "../store/cartSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ totalPrice }) => {
  return (
    <div
      className="checkOut"
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className="total-price"
        style={{ textAlign: "center", margin: "auto" }}
      >
        {totalPrice}
      </div>
      <div
        className="check-out-button"
        style={{
          backgroundColor: "brown",
          padding: "10px",
          width: "200px",
          textAlign: "center",
          borderRadius: "10px",
          color: "white",
        }}
      >
        Proceed
      </div>
    </div>
  );
};

const Cart = ({ totalPrice, setTotalPrice }) => {
  console.log("initil total Price", totalPrice);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  const handleIncQuantity = (item) => {
    dispatch(inCreaseQuantity(item._id));

    setTotalPrice((prev) => prev + Number(item.price));
  };
  const handleDecrQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(descreaseQuantity(item._id));
      setTotalPrice((prev) => prev - Number(item.price));
    }
  };
  console.log(totalPrice);
  const handleCrossClick = () => {
    navigate("/");
  };

  useEffect(() => {}, [cartItems]);

  return (
    <div
      className="cart-wrapper"
      style={{
        position: "relative",
        transition: "all 2s ease-in",
        minHeight: "100vh",
        backgroundColor: "gray-200",
      }}
    >
      <button
        style={{ position: "absolute", right: "10px", top: "10px" }}
        onClick={handleCrossClick}
      >
        cross
      </button>
      <h1 className="cart-heading">Your Items</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="cart-items " key={item._id}>
            <h4>{item.title}</h4>

            <div className="price-item">
              <h5>{Number(item.price)}</h5>
              <div className="quantity-controller">
                <button onClick={() => handleDecrQuantity(item)}>-</button>
                <span>{Number(item.quantity)}</span>
                <button onClick={() => handleIncQuantity(item)}>+</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3 style={{ textAlign: "center", marginTop: "10px" }}>
          You cart is empty
        </h3>
      )}

      <CheckOut totalPrice={totalPrice} />
    </div>
  );
};

export default Cart;
