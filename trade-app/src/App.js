import React from "react";
//import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HomePg from "./components/home/home";
import TradePg from "./components/trade/trade";
import HeaderPg from "./components/shared/header";
import AboutPg from "./components/about/about";
import ContactPg from "./components/contact/contact";
import ErrorPg from "./components/shared/error";

import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderPg />
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomePg} />
            <Route path="/stocks" exact component={TradePg} />
            <Route path="/about" exact component={AboutPg} />
            <Route path="/contact" exact component={ContactPg} />
            {/* //<Route component={ErrorPg} /> */}
            <Route component={ErrorPg} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
