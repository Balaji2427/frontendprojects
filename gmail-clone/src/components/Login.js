import React from 'react';
import './Login.css';
import Gmail from '../images/gmail.webp';
import { auth, provider } from '../firebase';
import { Button } from '@mui/material';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch()

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(({user}) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                )
            })
            .catch((error) => alert(error.message))
    }

  return (
    <div className='login'>
      <div className="login_container">
        <img src={Gmail} alt="" />
        <Button onClick={signIn}>Login</Button>
      </div>
    </div>
  )
}

export default Login
