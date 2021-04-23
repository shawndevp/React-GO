import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Test from "./Test";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";


  function AppRoute() {
      return (
        <>
        <Test/>
        <Router>
        <Route path="/" exact component={Menu}/>
        <Route path="/" exact component={Header}/>
        </Router>

    

        </>
      )
  }

export default AppRoute;