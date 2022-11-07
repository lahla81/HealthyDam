import React from 'react';
import './App.css';
import './components/assets/fonts/Fonts.css';
import HomePage from './pages/homePage/homePage.component';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='/' component={HomePage} />
    </Routes>
    </div>
  );
}

export default App;
