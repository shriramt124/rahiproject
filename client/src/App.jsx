import Menue from "./components/Menue";

import "./App.css";

import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { FaShoppingCart } from "react-icons/fa";
 

function App() {
 

  return (
    <div className="app relative">
      <Routes>
        <Route path="/" element={<Menue />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Link to="/cart" className="cart-icon" >
        {" "}
        <FaShoppingCart size={40} />
      </Link>
    </div>
  );
}

export default App;
