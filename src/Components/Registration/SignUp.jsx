import React from "react";
import image from "../image/leaf2.png";

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
              <label htmlFor="">Full name</label>
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
              <label htmlFor="">Phone number</label>
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
              <button className="sign-up-btn">Create Account</button>
            </div>
            <div className="options">
              <p>
                Already have an account?
                <span className="login-options"><a href="/login" className="line">Log in</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
