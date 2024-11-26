import React from "react";
import {Link} from "react-router-dom"

function Navbar(props) {
    const {logout} = props
    return (
        <div id="navbar">
            <Link to = "/task"><button> Tasks</button></Link>
            <Link to = "/"><button onClick = {logout}> Logout</button></Link>
        </div>
    )
}

export default Navbar;