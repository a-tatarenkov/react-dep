import React from "react";

const Navbar = (props) => {
    return (
        <nav>
            <a href={props.userNav.link}>{props.userNav.name}</a>
            <a href="my-app/src/Components/Main/Main/Main#">{props.userNav.age}</a>
            <a href="my-app/src/Components/Main/Main/Main#">{props.userNav.work}</a>
            <a href="my-app/src/Components/Main/Main/Main#">Link</a>
            <a href="my-app/src/Components/Main/Main/Main#">Link</a>
        </nav>
    )
}

export default Navbar;