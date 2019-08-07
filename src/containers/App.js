import React from 'react';
import './App.css';
import ConfigPage from './ConfigPage';
import RunningPage from './RunningPage';
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ConfigPage} />
      <Route path="/running" component={RunningPage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
