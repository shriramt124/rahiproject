import Menue from "./components/Menue";

import "./App.css";
import AddMenueForm from "./components/AddMenueForm";

import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import AllItemsAdmin from "./components/AllItemsAdmin";

import { useState } from "react";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="app relative">
      <Routes>
        <Route
          path="/"
          element={
            <Menue totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
          }
        />
        <Route path="/form-add" element={<AddMenueForm />} />
        <Route path="/admin-items" element={<AllItemsAdmin />}  />
      </Routes>
    </div>
  );
}

export default App;
