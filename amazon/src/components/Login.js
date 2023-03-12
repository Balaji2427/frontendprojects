import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Logo from '../images/logo1.png';
import { auth } from '../firebase';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  }

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
      .then(auth => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  }

  return (
    <div className="login">
        <Link to="/">
            <img className="login_logo" src={Logo} alt="" />
        </Link>

        <div className="login_container">
          <h1>Sign In</h1>
          <form>
            <h5>Email</h5>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            <h5>Password</h5>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <button 
              onClick={login} 
              type="submit" 
              className="login_signInButton"
              >
                Sign In
            </button>
          </form>

          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
          <button 
            onClick={register} 
            className="login_registerButton"
          >
              Create your Amazon Account
          </button>
        </div>
    </div>
  )
}

export default Login
