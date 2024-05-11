 
import  MenuePic  from '/nmenuePic.jpeg';
const Cart = () => {
  return (
    <div className="cart-wrapper">
        <div className="cart-items">
        <div className="menue-list-wrapper flex flex-wrap w-full items-center gap-2 justify-center bg-green-300 p-2">
     <div className="menue-item  w-[100%] sm:w-[350px] md:w-[450px] sm:flex-col flex gap-3 bg-red-200 p-2 relative">
       <div className="image w-[50%] sm:w-[100%] ">
       <img src={MenuePic} alt=""/>
       </div>
       <div className="descriptions w-[50%] sm:w-[100%] felx flex-col">
         <h2 className="text-xl font-semibold">Chicken Parmesan</h2>
         <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, atque!</p>
         <div className="order-links flex justify-start gap-4 p-2">
          <p className="text-xl font-bold">0</p>
           <button className="text-xl font-bold bg-blue-400 w-[50px] rounded-full">+</button>
         </div>
          
       </div>
     </div>
     
     
   
    
    </div>
        </div>
    </div>
  )
}

export default Cart