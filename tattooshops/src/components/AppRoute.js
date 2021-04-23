import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Artister from "./Artister";
import Login from "./Login";

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
        <Header/>
        <Route path="/" exact component={Menu}/>
        <Route path="/Artister" exact component={Artister}/>
        <Route path="/Login" exact component={Login}/>
        </Router>

    

        </>
      )
  }

export default AppRoute;