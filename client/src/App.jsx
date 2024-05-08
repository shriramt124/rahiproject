 import Menue from './components/Menue'

import './App.css'
import { FaShoppingCart } from 'react-icons/fa'

function App() {
 
 
  return (
     <div className="app">
<Menue />
<FaShoppingCart size={50} className="absolute right-2 bottom-2 bg-red-300 rounded-full p-2 "/>
     </div>
  )
}

export default App
