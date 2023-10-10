// src/Routes.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import CarDetails from './Components/CarDetails';

function Routes() {
  return (
    <Router>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/car-details" component={CarDetails} />
    </Router>
  );
}

export default Routes;
