import MenuePic from "/nmenuePic.jpeg";
import "./Menue.css"
//function witch create the menu
//javascript --> html and css

function Menue(){
return (
    <div className='wrapper'>
    <div className="heading">
     <h1>Menue</h1>

    </div>
    <div className="links">
     <ul>
       <li>Lunch</li>
       <li>Dinner</li>
       <li>wine list</li>
     </ul>
    </div>
    <div className="menue-list-wrapper flex">
     <div className="menue-item flex flex-col sm:flex-row flex-wrap justify-center items-center p-2">
       <div className="image">
       <img src={MenuePic} alt="" />
       </div>
       <div className="descriptions">
         <h2>Chicken Parmesan</h2>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, atque!</p>
       </div>
     </div>
     <div className="menue-item flex flex-col sm:flex-row flex-wrap justify-center items-center p-2 ">
       <div className="image">
       <img src={MenuePic} alt="" />
       </div>
       <div className="descriptions">
         <h2>Chicken Parmesan</h2>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, atque!</p>
       </div>
     </div>
     <div className="menue-item flex flex-col sm:flex-row flex-wrap justify-center items-center p-2">
       <div className="image">
         <img src={MenuePic} alt="" className="w-[200px] " />
       </div>
       <div className="descriptions">
         <h2>Chicken Parmesan</h2>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, atque!</p>
       </div>
     </div>
    </div>
   </div>
)
}

export default Menue;