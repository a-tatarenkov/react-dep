import React from "react";
import style from './Header.module.css';
import logo from '../../assets/a327f80de5a7721897cf33391519128d.jpg';
import Nav from "./Nav/Nav";

function Header(props) {
    // console.log(props)
    return (
        <header>
            <img src={logo} alt=""/>
            TEXT FOR GITHUB
            <Nav forNav={props.forHeader}/>
        </header>
    )
}

export default Header;