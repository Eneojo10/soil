import React from "react";
import image from "../image/leaf2.png";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="flex-colors">
        <div className="agriculture2">
          <h2>
            agri
            <span className="agric--image">
              <img src={image} alt="" />
            </span>
            cultur
          </h2>
        </div>
        
        <div className="welcome-back">
          <h4>Welcome </h4>
          <p>Create an account</p>
        </div>
        <div className="signup2">
          <div className="agriculture">
            <h2>
              agri
              <span className="agric--image">
                <img src={image} alt="" />
              </span>
              cultur
            </h2>
          </div>
          <br />
          <br />
          <div className="input-fields">
            <div className="fieldone">
              <label htmlFor="">Full Name</label>
              <div>
                <input type="text" />
              </div>
            </div>
            <div className="fieldone">
              <label htmlFor="">Email</label>
              <div>
                <input type="text" />
              </div>
            </div>
            <div className="fieldone">
              <label htmlFor="">Phone Number</label>
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

            <div className="btn">
              <button className="sign-up-btn">
                Create account
              </button>
            </div>

            <div className="forgot-password">
              <h5>Already have account? Login</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
