import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AboutUs from './screen/AboutUs';
import HomePage from './screen/HomePage';

function MainRoute() {
    
    return (
        <Router>
            <Switch>
                <Route path="/"  ><HomePage /></Route>
                <Route path="/about"><AboutUs /></Route>
                
            </Switch>
        </Router>
    )


}

export default withRouter(MainRoute);