import React from "react";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";

const Main = () => {
    const user = {
        name: "Alex",
        age: 25,
        work: "FrontEnd",
        link: "https://web.telegram.org/?legacy=1#/login"
    }
    return (
        <main>
            <Navbar userNav={user}/>
            <Section userSec={user}/>
        </main>
    )
}

export default Main;

