import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Artists from "./Artists";
import ArtistsList from "./ArtistsList";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";

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
        <Route path="/Artists" exact component={ArtistsList}/>
        <Route path="/Login" exact component={Login}/>
        <Route path="/Register" exact component={Register}/>
        <Route path="/Boka" exact component={Cart}/>
        </Router>

    

        </>
      )
  }

export default AppRoute;