import React from "react";
import image from "../image/leaf2.png";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="flex-colors">
        <div className="side-color">
          <div className="side-image">
            <img src={image} alt="" />
          </div>

        </div>
        <div className="signup">
          <div className="agriculture">
            <h3>
              agri
              <span className="agric--image">
                <img src={image} alt="" />
              </span>
              culture
            </h3>
          </div>
          <br />
          <br />
          <div className="input-fields">
            
            <div className="fieldone">
              <label htmlFor="">Email</label>
              <div>
                <input type="text" />
              </div>
            </div>
            <div className="fieldone">
              <label htmlFor="">Password</label>
              <div>
                <input type="text" />
              </div>
            </div>
            <div>
              <button className="sign-up-btn"><Link to="/mainboard">Log in</Link></button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
