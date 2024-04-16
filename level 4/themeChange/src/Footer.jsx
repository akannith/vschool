import React, { useContext } from 'react';
import {ThemeContext} from "./ThemeContex"


function Footer() {
    const {color} = useContext(ThemeContext)
    return (
        <div className={ `${color}-theme`} >
            <h2 className='Footer'> Footer </h2>
        </div>
    );
}

export default Footer;