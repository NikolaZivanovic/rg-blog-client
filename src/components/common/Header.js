import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';

const Header = () => {
    return(
        <header className="main-header">
            <div className="main-header__logo">
                <NavLink exact to="/" className="main-header__logo"><img className="main-header__logo" src="../../round-globe-logo.png"/></NavLink>
            </div>
            <nav className="navigation">
                <NavLink className="navigation__link" exact to="/" >Home</NavLink>
                <NavLink className="navigation__link" exact to="/posts" >Posts</NavLink>
                <NavLink className="navigation__link" exact to="/posts/632369fc-4979-4243-9034-b11bda5b7ae9">Single Post</NavLink>
            </nav>
        </header>
    );
};

export default Header;
