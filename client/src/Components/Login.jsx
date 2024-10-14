import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

const Login = (req,res) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} =useAuth();

  const navigate = useNavigate()

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {

        withCredentials: true,
        email,
        password,
      
    }).then(response => {
        if(response.data.success) {
            login(response.data.user)
            localStorage.setItem("token",response.data.token)

            if (response.data.user.userType==="Admin") {
              alert("Admin Successfully logged in")
                navigate('/admin')
            }
              else{
                alert("Successfully logged in")
                navigate("/")
              }
          }
    
          console.log(response)
    }).catch(err => {
       
        console.log(err)
    })
  };
  return (
    <div className="sign-up-container">
      
        
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

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

        <button type="submit">Login</button>
        <Link to="/forgotPassword">Forgot Password?</Link>

        <p>Don't Have Account? <Link to="/signup">Sign Up</Link></p> 
      </form>
    </div>
  );
};

export default Login;