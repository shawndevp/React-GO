import React from "react";
import CardList from "./CardList";
import Form from "./Form";
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
        <Menu/>
        <Route path="/" exact component={CardList} />
        <Route path="/form" component={Form} />
        </Router>

        </>
    )
}

export default AppRoute;