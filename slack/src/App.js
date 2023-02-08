import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Chat from './components/Chat';
import './App.css';
import { auth } from './firebase';
import Login from './components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from 'react-spinkit';


function App() {

  const [user, loading] = useAuthState(auth);

  if(loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://i.pinimg.com/originals/60/d4/d3/60d4d31e4f2b18abaee11da6281ff6ea.png" alt="" />
          <Spinner 
            name='line-scale'
            color='goldenrod'
            fadeIn='none'
          />
        </AppLoadingContents>
      </AppLoading>
    )
  };

  return (
    <div className="app">
      <Router>
        {user ? (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </AppBody>
        </>
        ) : (
          <Login />
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div `
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div `
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div `
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 20px;
  }
`;
