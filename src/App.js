import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import './components/assets/fonts/Fonts.css';

import HomePage from './pages/homePage/homePage.component';
import Navigation from './components/routs/navigation/navigation.component';
import SignIn from './components/sign-in/sign-in.component';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index element={<HomePage/>}/>
        <Route path='signIn' element={<SignIn/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
