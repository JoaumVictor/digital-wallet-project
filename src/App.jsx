import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Wallet from './pages/Wallet';
import Login from './pages/Login';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </Switch>
  );
}
