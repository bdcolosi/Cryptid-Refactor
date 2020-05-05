import React from 'react';
import ChatBox from './components/pages/ChatBox';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/pages/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const AppRouter = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={ChatBox} />
      </Switch>
    </Router>
  )
}

export default AppRouter;