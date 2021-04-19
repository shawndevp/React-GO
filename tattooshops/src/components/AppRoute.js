import React from "react";
import Header from "./Header";
import Menu from "./Menu";

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

        <Router>
        <Route path="/" exact component={Menu}/>
        <Route path="/" exact component={Header}/>
        </Router>

    

        </>
      )
  }

export default AppRoute;