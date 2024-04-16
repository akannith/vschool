import React, {useState} from "react"
import Navbar from './Navbar';
import Footer from "./Footer";
import { ThemeContext } from "./ThemeContex";
import {ThemeContextProvider} from "./ThemeContex"


function App(props) {

    return (
        <>
            <ThemeContextProvider>
                <Navbar/>
                <Footer />
            </ThemeContextProvider>
        </>
    );
}

export default App;
