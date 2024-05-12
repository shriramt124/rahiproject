import MenuePic from "/nmenuePic.jpeg";
 import "./Menue.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
 
function Menue() {
  return (
    <div className="menue-wrapper">
      <div className="menue-heading">
        <h1>Menue</h1>
      </div> 
      <div className="menue-links">
        <ul className="links">
          <li>Lunch</li>
          <li>Dinner</li>
          <li>wine list</li>
        </ul>
      </div>
      <div className="menue-card-wrapper">
        <div className="menue-card">
          <div className="menue-image">
            <img src={MenuePic} alt="" />
          </div>
          <div className="menue-content">
            <h2 className="menue-content-heading">Chicken Parmesan</h2>
            <p className="menue-content-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, atque!
            </p>
            <div className="menue-content-footer">
              <p className="menue-content-price"> <span>Rs.</span> 0</p>
              <button className="menue-add-button">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="menue-card">
          <div className="menue-image">
            <img src={MenuePic} alt="" />
          </div>
          <div className="menue-content">
            <h2 className="menue-content-heading">Chicken Parmesan</h2>
            <p className="menue-content-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, atque!
            </p>
            <div className="menue-content-footer">
              <p className="menue-content-price"> <span>Rs.</span>200</p>
              <button className="menue-add-button">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="menue-card">
          <div className="menue-image">
            <img src={MenuePic} alt="" />
          </div>
          <div className="menue-content">
            <h2 className="menue-content-heading">Chicken Parmesan</h2>
            <p className="menue-content-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, atque!
            </p>
            <div className="menue-content-footer">
              <p className="menue-content-price"> <span>Rs.</span> 0</p>
              <button className="menue-add-button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default Menue;
