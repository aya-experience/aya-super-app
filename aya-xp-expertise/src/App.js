import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Desktop } from "./components/Desktop";
import { Mobile } from "./components/Mobile";

import "./App.css";

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Desktop} />
      <Route path="/mobile" component={Mobile} />
    </Switch>
  </BrowserRouter>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
