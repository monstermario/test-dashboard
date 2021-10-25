import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/dashboard';
import { Pools } from './pages/pools';
import { Trade } from './pages/trade';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/trade" component={Trade} exact />
        <Route path="/pools" component={Pools} exact />
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
