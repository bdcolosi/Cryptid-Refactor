import React from 'react';
import Join from './components/Join';
import ChatBox from './components/pages/ChatBox';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={ChatBox} />
    </Router>
    
  );
}

export default App;
