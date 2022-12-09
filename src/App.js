import React from 'react';
import { Route, Routes } from "react-router-dom";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "./utils/firebase/firebase.utils";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import './App.scss';
import './components/assets/fonts/Fonts.css';

import HomePage from './pages/homePage/homePage.component';
import Navigation from './routs/navigation/navigation.component';
import Authentication from './routs/authentication/authentication';
import Shop from './routs/shop/shop.component';
import Checkout from './routs/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.action';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user))
        })
        return unsubscribe;
    })
  return (
    <div className="App container">
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index element={<HomePage/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
