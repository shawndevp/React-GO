import React from "react";
import Menu from "./menu.js";
import Card from "./card.js";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

function Header() {

    return (
        <>
        <BrowserRouter>

        <Route path="/home" exact component={Card} />


        </BrowserRouter>
        <Menu />
        <Card price ="headerpris = 500" Price ="headerpris = 250 stort P" name="test headernamn"/>
        </>
    )
}

export default Header; 