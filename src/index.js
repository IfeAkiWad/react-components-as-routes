import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to importer */
import Home from './components/Home'
import About from './components/About'
import Messages from './components/Messages'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>,
  document.getElementById("root")
);