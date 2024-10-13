import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import {Link, useNavigate } from 'react-router-dom'



const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretkey, setSecretKey] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (userType=="Admin" && secretkey!= "Omii") {
      e.preventDefault();
      alert("Invalid Admin")
    }else{

      e.preventDefault(); 
      Axios.post("http://localhost:3000/auth/signup", {
        username,
        email,
        password,
        userType,
        secretkey
      }).then(response => {
        if (response.data.status) {
              navigate('/login')
              alert("Successfully Registered")
        }
      }).catch(err => {
        console.log(err)
      })

    }
   

    
  };
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
        <div className="Usertype-box">
          Register AS:
          <input 
          type="radio" 
          name="UserType"
          value="User"
          onChange={(e) => setUserType(e.target.value)}
          />
          User
          <input 
          type="radio" 
          name="UserType"
          value="Admin"
          onChange={(e) => setUserType(e.target.value)}
          />
          Admin

        </div>
        {userType=="Admin"? (
        <><label htmlFor="secretkey">Secret Key:</label><input
            type="text"
            placeholder="Secret Key"
            onChange={(e) => setSecretKey(e.target.value)} /></>
          ):null}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
        <p>Have an account? <Link to="/login">Login</Link></p> 
         
      </form>
    </div>
  );
};

export default Signup;