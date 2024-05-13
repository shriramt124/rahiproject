import "./Menue.css";
import { useEffect, useState } from "react";
import { addToCart } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { nanoid } from "nanoid";
function Menue({ totalPrice, setTotalPrice }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const [data, setData] = useState();

  const fetchMenue = async () => {
    const res = await fetch("http://localhost:3000/api/menue/all-menue");//data aa raha hai 
    const data = await res.json();
    console.log("response", data.data);
    setData(data.data);
  };
  const handleAdd = (item) => {
    dispatch(addToCart(item));
    setTotalPrice((prev) => prev + Number(item.price));
  };

 const handleAdminClick = ()=>{
       navigate("/form-add");
       
 }

  useEffect(() => {
    fetchMenue();
  }, []);

  return (
    <div className="menue-wrapper">
      <div className="menue-heading">
        <h1>Menue</h1>
        <button className="admin-button" onClick={handleAdminClick}>Admit</button>
      </div>
      <div className="menue-links">
        <ul className="links">
          <li>Coffee</li>
          <li>Sweets</li>
          <li>fast foods</li>
          <li>General</li>
        </ul>
      </div>
      <div className="menue-card-wrapper">
        {data &&
          data.map((item) => (
            <div className="menue-card" key={nanoid()}>
              <div className="menue-image">
                <img src={item.image} alt="" />
              </div>
              <div className="menue-content">
                <h2 className="menue-content-heading">{item.title}</h2>
                <p className="menue-content-desc">{item.description}</p>
                <div className="menue-content-footer">
                  <p className="menue-content-price">
                    {" "}
                    <span>Rs.</span>
                    {item.price}
                  </p>
                  <button
                    className="menue-add-button"
                    onClick={() => handleAdd(item)}
                  >
                    add
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Link to="/cart" className="cart-icon">
        {" "}
        <FaShoppingCart size={40} />
      </Link>
    </div>
  );
}

export default Menue;
