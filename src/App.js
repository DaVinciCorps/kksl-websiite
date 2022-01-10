import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Product from "./components/Product.js"
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
import IpoHome from './components/IpoHome';
import IpoApply from './components/IpoApply';
import Blog from './components/Blog';
import BlogContent from './components/BlogContent';
import BlogHome from './components/BlogHome';
import ScrollToTop from './components/ScrollToTop';
import Tools from './components/Tools';
import AdminReview from './components/AdminReview';
import AdminBlog from './components/AdminBlog';
import AdminVideo from './components/AdminVideo';
import Admin from './components/Admin';
import AdminBlogList from './components/AdminBlogList';
import AdminReviewList from './components/AdminReviewList';
import AdminVideoList from './components/AdminVideoList';


function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path="/home"  > <Home></Home> </Route>
          <Route exact path="/about"><About /> </Route>
          <Route exact path="/product" > <Product /> </Route>
          <Route exact path="/services" ><Services /></Route>
          <Route exact path="/debt"  ><Debt /></Route>
          <Route exact path="/demat"  ><Demat /></Route>
          <Route exact path="/IPO"  ><Ipo /></Route>
          <Route exact path="/IPO/home"  ><IpoHome /></Route>
          <Route exact path="/IPO/apply"  ><IpoApply /></Route>
          <Route exact path="/international-investments"  ><InternationalInvestment /></Route>
          <Route exact path="/unlisted-equity"  ><UnlistedEquity /></Route>
          <Route exact path="/mutual-funds"  ><MutualFunds /></Route>
          <Route exact path="/trading"  ><Trading /></Route>
          <Route exact path="/login"  ><Login /></Route>
          <Route exact path="/blog/"  ><BlogHome /></Route>
          <Route exact path="/blog/all"  ><Blog /></Route>
          <Route exact path="/blog/:id"  ><BlogContent /></Route>
          <Route exact path="/tools" ><Tools /></Route>
          <Route exact path="/admin/" ><Admin /></Route>
          <Route exact path="/admin/bloglist" ><AdminBlogList /></Route>
          <Route exact path="/admin/reviewlist" ><AdminReviewList /></Route>
          <Route exact path="/admin/videolist" ><AdminVideoList /></Route>
          <Route exact path="/admin/review" ><AdminReview /></Route>
          <Route exact path="/admin/review/:id" ><AdminReview /></Route>
          <Route exact path="/admin/blog" ><AdminBlog /></Route>
          <Route exact path="/admin/blog/:id" ><AdminBlog /></Route>
          <Route exact path="/admin/video" ><AdminVideo /></Route>
          <Route exact path="/admin/video/:id" ><AdminVideo /></Route>
          <Route path="/" > <Home /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
