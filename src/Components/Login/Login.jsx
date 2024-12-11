<<<<<<< Updated upstream
import React, { useState } from "react";
import image from "../image/leaf2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(password);
    
    try {
      const response = await axios.post(
        "https://agriculture-server-beta.onrender.com/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      console.log("Login response:", response); 

      if (response.data.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        
        if (response.data.data.role === 'admin') {
          localStorage.setItem('role', 'admin');
          localStorage.setItem('user_id', response.data.data.user._id);
          navigate('/admin');
        } else {
          navigate("/mainboard");
        }
      }
    } catch (err) {
      console.error("Login error:", err); 
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="land">
      <div className="flex-colors">
        <br />
        <br />
        <div className="signup">
          <div className="agriculture">
=======
import React from 'react'
import image from '../image/leaf2.png'
import { Link } from 'react-router-dom'

function SignUp () {
  return (
    <div className='land'>
      <div className='flex-colors'>
        {/* <div className="agriculture2">
        <h2>
              agri
              <span className="agric--image">
                <img src={image} alt="" />
              </span>
              cultur
            </h2>
            <div className="welcome-back">
              <h4>Welcome Back</h4>
              <p>Sign in to your account</p>
            </div>
        </div> */}
        <br />
        <br />
        <div className='signup'>
          <div className='agriculture'>
>>>>>>> Stashed changes
            <h2>
              agri
              <span className='agric--image'>
                <img src={image} alt='' />
              </span>
              cultur
            </h2>
            <div className='welcome-back'>
              <h4>Welcome Back</h4>
              <p>Sign in to your account</p>
            </div>
          </div>

<<<<<<< Updated upstream
          <div className="input-fields">
            <div className="fieldone">
              <label htmlFor="">Email</label>
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
=======

          <div className='input-fields'>
            <div className='fieldone'>
              <label htmlFor=''>Email</label>
              <div>
                <input type='email' />
>>>>>>> Stashed changes
              </div>
            </div>
            <div className='fieldone'>
              <label htmlFor=''>Password</label>
              <div>
<<<<<<< Updated upstream
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="btn">
              <button
                type="button"
                className="sign-up-btn"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>

            <div className="forgot-password">
              <h5>Don't have an account? Sign Up</h5>
            </div>
=======
                <input type='password' />
              </div>
            </div>

            <div className='btn'>
              <Link to={'/mainboard'}>
                <button className='sign-up-btn'>Login</button>
              </Link>
            </div>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
