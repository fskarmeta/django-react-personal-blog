import React, { useEffect } from "react";
// import {Router, Switch} from 'react-router-dom'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/categoria/:slug" component={Home} />
        <Route exact path="/blog/:slug" component={BlogPost} />
      </Router>
    </div>
  );
}

export default App;
