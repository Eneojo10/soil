import React, { useState } from 'react'
import image from '../image/leaf2.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignUp () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async e => {
    e.preventDefault()
    console.log(password)
    setLoading(true)
    try {
      const response = await axios.post(
        'https://agriculture-server-beta.onrender.com/api/v1/auth/login',
        {
          email,
          password
        }
      )

      console.log('Login response:', response)

      if (response.data.data.token) {
        localStorage.setItem('token', response.data.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.data.user))

        if (response.data.data.role === 'admin') {
          localStorage.setItem('role', 'admin')
          localStorage.setItem('user_id', response.data.data.user._id)
          navigate('/admin')
        } else {
          navigate('/mainboard')
        }
      }
    } catch (err) {
      setLoading(false)
      console.error('Login error:', err)
      setError('Invalid email or password. Please try again.')
    }
  }

  return (
    <div className='land'>
      <div className='flex-colors'>
        <br />
        <br />
        <div className='signup'>
          <div className='agriculture'>
            <h2>
              <span className='agric--image'>
                <img src={image} alt='' />
              </span>
            </h2>
            <div className='welcome-back'>
              <h4>Admin Authentication</h4>
              <p>Provide your email and password to access your account</p>
            </div>
          </div>

          <div className='input-fields'>
            <div className='fieldone'>
              <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon1'>
                  Email
                </span>
                <input
                  type='email'
                  id='email'
                  className='form-control'
                  name='email'
                  placeholder='example@gmail.com'
                  aria-label='email'
                  aria-describedby='basic-addon1'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='fieldone'>
              <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon1'>
                  Password
                </span>
                <input
                  type='password'
                  id='password'
                  className='form-control'
                  name='password'
                  placeholder='* * * * * * * *'
                  aria-label='password'
                  aria-describedby='basic-addon1'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <p className='error-message'>{error}</p>}

            <button
              type='button'
              className='btn btn-success w-100 px-5'
              onClick={handleLogin}
            >
              {loading ? `Processing...` : `Login`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
