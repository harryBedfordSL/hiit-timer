import React from 'react';
import RunningPage from './RunningPage';
import WelcomePage from './WelcomePage';
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import DonePage from '../components/DonePage';
import ExerciseSettingsPage from './settings/ExerciseSettingsPage';
import NumberSettingsPage from './settings/NumberSettingsPage';

import "./App.css";

const App = () => {
  return (
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames='fade' timeout={600}>
          <Switch location={location}>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/exercises' component={ExerciseSettingsPage} />
            <Route path='/numbers' component={NumberSettingsPage} />
            <Route path='/running' component={RunningPage} />
            <Route path='/done' component={DonePage} />
            <Redirect to='/' />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
}

export default App;
