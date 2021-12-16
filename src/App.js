import React from 'react';
import Routes from '../src/routes'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./components/HomeP"
import About from "./components/About"
import Product from "./components/Product/Product.js"
import Footer from "./components/Footer"
import Services from "./components/Services/Services"
import Debt from "./components/Services/Debt"
import Ipo from "./components/Services/Ipo"
import Demat from "./components/Services/Demat"
import MutualFunds from "./components/Services/MutualFunds"
import InternationalInvestment from "./components/Services/InterInvest"
import UnlistedEquity from "./components/Services/UnlistedEquity"
import Trading from './components/Services/Trading';
import "./App.css";
import Login from './components/Login';
// import Demat from "./components/Services/Demat/Demat"



function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/home"  > <Home></Home> </Route>
          <Route exact path="/about"><About /> </Route>
          <Route exact path="/product" > <Product /> </Route>
          <Route exact path="/services" ><Services /></Route>
          <Route exact path="/debt"  ><Debt /></Route>
          <Route exact path="/demat"  ><Demat /></Route>
          <Route exact path="/IPO"  ><Ipo /></Route>
          <Route exact path="/international-investments"  ><InternationalInvestment /></Route>
          <Route exact path="/unlisted-equity"  ><UnlistedEquity /></Route>
          <Route exact path="/mutual-funds"  ><MutualFunds /></Route>
          <Route exact path="/trading"  ><Trading /></Route>
          <Route exact path="/login"  ><Login /></Route>
          <Route path="/" > <Home /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
