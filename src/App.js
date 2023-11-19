import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDo from './components/ToDo';
import Navbar from './components/Navbar';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login'
import Home from './components/Home';
import { useState } from 'react';
import { useEffect } from 'react';
import SignOut from './components/auth/SignOut';

function App() {
  const appStyle = {
    backgroundColor: '#404040',
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('token') !== null) {
      setIsAuthenticated(true);
    }
  }, [])


  return (
    <div style={appStyle}>
      <div className="App">
        <BrowserRouter>
          <Navbar isAuthenticated={isAuthenticated}setIsAuthenticated={()=>{setIsAuthenticated()}} />
            
          <Routes>
            <Route
              path="/"
              element={<Home isAuthenticated={isAuthenticated} setIsAuthenticated={()=>{setIsAuthenticated()}} />}
            />

            <Route
              path="/signup"
              element={<SignUp  isAuthenticated={isAuthenticated} setIsAuthenticated={()=>{ setIsAuthenticated()}}/>}
            />

            <Route path="/todo" element={<ToDo props={{ isAuthenticated, setIsAuthenticated }} />} />
            <Route
              path="/login"
              element={<Login  isAuthenticated={isAuthenticated} setIsAuthenticated={()=>{ setIsAuthenticated()}}/>}
            />
            <Route
              path="/signout"
              element={<SignOut  isAuthenticated={isAuthenticated} setIsAuthenticated={()=>{ setIsAuthenticated()}}/>}
            />



          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
