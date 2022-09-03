import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Nav';
import { useEffect } from 'react';
import { useState } from 'react';
import Potes from './Component/post';

function App() {
  return (
    <div classNameName="App">
      {/* navigation bar */}
      <Navigation></Navigation>
      <br />
      {/* Post rendering */}
      <Potes></Potes>
    </div>
  );
}

export default App;
