
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/login/login';
import Register from './components/register/register';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' element = {<Login/>}/>
          <Route exact path='/register' element = {<Register/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
