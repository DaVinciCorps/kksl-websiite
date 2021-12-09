import React from 'react';
import Routes from '../src/routes'
import { BrowserRouter } from "react-router-dom";
import AboutUs from './screen/AboutUs';


function App() {
  return (
    <div style={{height:"100%"}}>
      <AboutUs />
    </div>
  );
}

export default App;
