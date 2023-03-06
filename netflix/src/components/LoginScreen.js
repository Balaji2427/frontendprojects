import React, { useState } from 'react';
import './LoginScreen.css';
import LoginLogo from '../images/logo1.png'
import SignInScreen from './SignInScreen';

const LoginScreen = () => {


    const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
        <div className="loginScreen_background">
            <img 
                className="loginScreen_logo" 
                src={LoginLogo} 
                alt="" 
            />
            <button 
                onClick={() => setSignIn(true)}
                className="loginScreen_button"
            >
                Sign In
            </button>
            <div className="loginScreen_gradient" />
        </div>
        <div className="loginScreen_body">
            {signIn ? (
                <SignInScreen />
            ) : (
                <>
                    <h1>Unlimited Movies, TV programmes and More.</h1>
                    <h2>Watch anywhere, Cancel at anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen_input">
                        <form>
                            <input type="email" placeholder="Email Addresss" />
                            <button 
                                onClick={() => setSignIn(true)}
                                className="loginScreen_getStarted"
                            >
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </>
            )}
        </div>
        
    </div>
  )
}

export default LoginScreen
