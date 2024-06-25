import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeContex"

function Button(props) {
    
    const {color, toggleTheme} = useContext(ThemeContext)
    
    return (
        <button onClick={toggleTheme} className={color === 'dark' ? 'light-theme' : 'dark-theme'}>Toggle Theme</button>
    );
}

export default Button;