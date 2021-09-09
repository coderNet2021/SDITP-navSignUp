import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./Home";
import { About } from "./About";
import { NoMatch } from "./NoMatch";
import { AppOne } from "./AppOne";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
          <Route component={NoMatch} />
          <Route component={AppOne} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
