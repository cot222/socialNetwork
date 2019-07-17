import React, { Component } from 'react';
import header from './Header.module.css';
const Header = () => {

    return (
        <header className={header.header}>
            <div className={header.item}>
                <a href="#" >social</a>
            </div>
        </header>     
    );

}

export default Header;