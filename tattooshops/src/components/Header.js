import React from 'react'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <div>
         <Link to="/Artister">Artister</Link>
         <br/>
         <Link to="/Plats">Plats</Link>
         <br/>
         <Link to="/Bokningar">Bokningar</Link>
        </div>

        <p>aaaa</p>
        </div>
    )
}

export default Header;
