import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import HomeScreen from './Screens/HomeScreen';
import BenefitsScreen from './Screens/BenefitsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ConnectionsScreen from './Screens/ConnectionsScreen';
import PlansScreen from './Screens/PlansScreen';
import SignupScreen from './Screens/SignupScreen';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/benefits" component={BenefitsScreen} />
      <Route exact path="/profle" component={ProfileScreen} />
      <Route exact path="/connections" component={ConnectionsScreen} />
      <Route exact path="/plans" component={PlansScreen} />
      <Route exact path="/signup" component={SignupScreen} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

