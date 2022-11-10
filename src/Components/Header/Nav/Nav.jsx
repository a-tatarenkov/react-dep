import React from "react";
import style from "./Nav.module.css";

const Nav = (props) => {
    console.log(props)
    return  (
        <nav className={style.navbar}>
            <a href="#">{props.forNav.header.link1}</a>
            <a href="#">{props.forNav.header.link2}</a>
            <a href="#">{props.forNav.header.link3}</a>
            <a href="#">{props.forNav.header.link4}</a>
        </nav>
    )
}
 export default Nav;