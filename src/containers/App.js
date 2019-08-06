import React from 'react';
import './App.css';
import StartPage from './StartPage';
import RunningPage from './RunningPage';
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route path="/running" component={RunningPage} />
    </Switch>
  );
}

export default App;
