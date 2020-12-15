import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Post} path="/post" />
        <Route component={SinglePost} path="/singlepost/:slug" />
        <Route component={Project} path="/project" />
      </Switch>
    </Router>
  );
}
export default App;
