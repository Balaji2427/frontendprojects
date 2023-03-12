import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {

  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }

  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path="/checkout" 
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            } 
          />
          <Route 
            exact path="/login" 
            element={<Login />} 
          />
          <Route 
            path="/" 
            element={
              <div>
                <Header />
                <Home />
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
