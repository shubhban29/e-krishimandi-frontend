import React from "react";
import "./App.scss";
import Login from "./main";
import Register from "./mainregister";
import About from "./components/pages/about";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./components/pages/Home";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signUp" component={Register}></Route>
          <Route exact path="/about-us" component={About}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
