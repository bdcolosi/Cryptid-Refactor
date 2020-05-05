import React from 'react';
import ChatBox from './components/pages/ChatBox';
import Signup from './components/Signup';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const AppRouter = () => {

  return (
      <Router>
        <Switch>
          <Route path="/chat">
            <ChatBox />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
  )
}

export default AppRouter;