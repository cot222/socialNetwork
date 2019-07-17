import React, { Component } from 'react';
import menu from './Menu.module.css';
import {NavLink} from "react-router-dom";
const Menu = () => {

    return (
        <nav className={menu.nav}>
            <div className={menu.item} ><NavLink to="/Profile" activeClassName={menu.activeLink}>Profile</NavLink></div>
            <div className={menu.item} ><NavLink to="/Dialogs" activeClassName={menu.activeLink}>Messages</NavLink></div>
            <div className={menu.item} ><NavLink to="/Friends" activeClassName={menu.activeLink}>Friends</NavLink></div>
            <div className={menu.item} ><NavLink to="/News" activeClassName={menu.activeLink}>News</NavLink></div>
            <div className={menu.item} ><NavLink to="/Settings" activeClassName={menu.activeLink}>Settings</NavLink></div>
            <div className={menu.item} ><NavLink to="/Users" activeClassName={menu.activeLink}>Users</NavLink></div>
        </nav>
    );

}

export default Menu;