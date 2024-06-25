import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeContex"
import Button from './button';

function Navbar (props) {
    
    const {color} = useContext(ThemeContext)
    
    return (
        <div className={`${color}-theme`}>
            <div className='container'>
                <h2 className='Header'>Home </h2>
                <h2 className='Header'> About </h2>
                <h2 className='Header'> Contact</h2>
            </div>
            <div className='Container2'>
                <h3>Click the button to toggle the {color === 'dark' ? 'light' : 'dark'} theme!</h3>
                <Button className={color === 'dark' ? `light-theme Button` : 'dark-theme Button'}/>
            </div>
        </div>
    );
}

export default Navbar;