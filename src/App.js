import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Games from './components/Games';
import Streams from './components/Streams';
import GameStreams from './components/GameStreams';
import Header from './components/Header';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path='/' component={Games} />
        <Route exact path='/top-streams' component={Streams} />
        <Route exact path='/games/:id' component={GameStreams} />
      </Router>
    </div>
  );
}

export default App;