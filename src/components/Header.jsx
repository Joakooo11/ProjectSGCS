import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate({ pathname: path });
    };
    return (
        <div className="header">
        <div className="logo">
            <img src="/logoSGCS.svg" alt="Logo" width={70} height={70} />
            <h1>SCRUM</h1>
        </div>
            <div className="search-bar">
                <input type="text" id="search" placeholder="Search..."/>
            </div>
        <nav>
            <ul>
                <li onClick={() => {handleClick("/")}}>Home</li>
                <li onClick={() => {handleClick("/about")}}>About</li>
                <li onClick={() => {handleClick("/contact")}}>Contact</li>
            </ul>
        </nav>
    </div>
    );
}

export default Header;
