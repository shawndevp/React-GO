import React from 'react'
import {Link} from "react-router-dom";

function menu() {
    return (
        <>

        <nav>

        <Link to="/">CardList</Link>
        <br>
        </br>
        <Link to="/form">Form</Link>

        </nav>

        </>
    )
}

export default menu
