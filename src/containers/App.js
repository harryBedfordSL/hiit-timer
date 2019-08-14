import React from 'react';
import ConfigPage from './ConfigPage';
import RunningPage from './RunningPage';
import WelcomePage from './WelcomePage';
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/config' component={ConfigPage} />
      <Route path='/running' component={RunningPage} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
