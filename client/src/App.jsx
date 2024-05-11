 import Menue from './components/Menue'

import './App.css'
import { FaShoppingCart } from 'react-icons/fa'
import {BrowserRouter} from"react-router-dom"
import { Route,Routes ,Link} from 'react-router-dom'
import Cart from './components/Cart'
 

function App() {
 

  return (
     <div className="app">
      <BrowserRouter> 
      <Routes>
     <Route path="/" element={<Menue />}/>
     <Route path="/cart" element ={<Cart />}/> 
      </Routes>
      <Link to="/cart"> <FaShoppingCart size={50} className="absolute right-2 bottom-2 bg-red-300 rounded-full p-2 "/>
 </Link>
</BrowserRouter>
 
     </div>
  )
}

export default App
