import React from "react";
import Navbar from "./Navbar"
import image from "./home-bg.jpg"


export default function Header(){
    return(
        <>
        <div className="backgroundImage">
            <h1 className=" header">Blog Post</h1>
            <Navbar className="nav"/>

        </div>
        </>
    )
}