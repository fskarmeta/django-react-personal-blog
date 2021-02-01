import React, { useEffect } from "react";
// import {Router, Switch} from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <div className="container">
      <Navbar />
      <BlogPost />
    </div>
  );
}

export default App;
