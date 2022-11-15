import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import './components/assets/fonts/Fonts.css';

import HomePage from './pages/homePage/homePage.component';
import Navigation from './routs/navigation/navigation.component';
import Authentication from './routs/authentication/authentication';
import Shop from './routs/shop/shop.component';

function App() {
  return (
    <div className="App container">
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index element={<HomePage/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
