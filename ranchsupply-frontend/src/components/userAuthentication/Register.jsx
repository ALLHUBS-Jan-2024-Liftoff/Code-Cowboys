import React, { useState } from "react";
import "./Register.css";
import { registerUser } from "../../services/UserService";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [message, setMessage] = useState('');
  
    const handleRegister = async (e) => {
      e.preventDefault();
      const formData = {
        username,
        email,
        password,
        mobileNumber,
        address,
        city,
        state,
        zipcode,
      };
  
      try {
        const response = await registerUser(formData);
        setMessage(response.message);
      } catch (error) {
        console.log(error);
        setMessage(error.response?.data?.message || 'Registration failed');
      }
    };
  
    return (
      <div className="registration-form">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
            <small>Password must be 8-20 characters long.</small>
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your city"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter your state"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipcode">Zipcode</label>
            <input
              type="text"
              id="zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              placeholder="Enter your zipcode"
              required
            />
          </div>
          <button type="submit" className="submit-button">Register</button>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="additional-links">
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </div>
    );
  }
  
  export default Register;