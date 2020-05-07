import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ChatBox from './components/Chat/ChatBox';

function App() {
  return (
    <Router>
      <Route path = "/chat" component={ChatBox}/>
    </Router>
  );
}

export default App;
