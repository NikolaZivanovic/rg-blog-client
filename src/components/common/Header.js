import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';

const Header = () => {
    return(
        <header className="main-header">
            <nav>
                <NavLink exact to="/" >Home</NavLink>
                <NavLink exact to="/posts" >Posts</NavLink>
                <NavLink exact to="/posts/632369fc-4979-4243-9034-b11bda5b7ae9">Single Post</NavLink>
            </nav>
        </header>
    );
};

export default Header;
