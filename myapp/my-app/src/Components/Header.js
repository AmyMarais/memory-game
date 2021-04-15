import React from 'react';
//insert company logo image
import logo from 'src/Images/logo.png';

console.log(logo);

export default function Header(props) {
    return ( 
        <>
    <header classname = "App-header">
        <h1> {props.loggedIn ? `Hello, ${props.name}` : `Please log in`}</h1>
        <img src={logo} alt="Logo" /><h1>Caffenaite Me</h1>
    </header>
    </>)
}

export default Header;