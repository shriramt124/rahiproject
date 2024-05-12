import Menue from "./components/Menue";

import "./App.css";

import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
 

function App() {
  const [totalPrice,setTotalPrice] = useState(0);

  return (
    <div className="app relative">
      <Routes>
        <Route path="/" element={<Menue totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>} />
        <Route path="/cart" element={<Cart  totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>} />
      </Routes>
       
    </div>
  );
}

export default App;
