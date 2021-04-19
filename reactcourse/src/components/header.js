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
        <Router>

        <Link to="/home">Home</Link>
        <Route path="/home" exact component={Card} />
        {/* Allt efter -> / är vad man vill ha till extern länk och visas. ex. /home */}

        </Router>
        <Menu />
        <Card price ="headerpris = 500" Price ="headerpris = 250 stort P" name="test headernamn"/>
        </>
    )
}

export default Header; 