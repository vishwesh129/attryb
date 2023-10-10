// src/Routes.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import CarDetails from './Components/CarDetails';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/car-details" component={CarDetails} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default Routes;
