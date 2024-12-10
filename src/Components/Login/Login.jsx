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
          <h4>Welcome Back</h4>
          <p>Sign in to your account</p>
        </div>
        <div className="signup">
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

            <div className="btn">
              <Link to={'/mainboard'}>
                <button className="sign-up-btn">Login</button>
              </Link>
            </div>

            <div className="forgot-password">
              <h5>Don't have an account? Sign Up</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
