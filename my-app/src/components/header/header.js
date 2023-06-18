import React from "react";
import './header.css';
import searchbar from '../assest/searchbar.svg';
import header_icon1 from '../assest/header_icon1.svg';
import header_icon2 from '../assest/header_icon2.svg';
import header_icon3 from '../assest/header_icon3.svg';
import dropdown from '../assest/dropdown.svg';
import header_avatar from '../assest/header_avatar.svg';
import Task from '../task/task.js';





function Header() {
    return (
        <div className="container">
            <div className="main">
                <div className="search">
                    <img src={searchbar} className="searchbar_image"></img>
                    <input text="Search" placeholder="Search for anything..." className="search_input" />
                </div>
                <div className="icons">
                    <img src={header_icon1} className="header_icons"></img>
                    <img src={header_icon2} className="header_icons"></img>
                    <img src={header_icon3} className="header_icons"></img>
                    <div className="avatar">
                        <div className="name">Anima<br /> Agarwal</div>
                        <img src={header_avatar}></img>
                        <img src={dropdown}></img>
                    </div>
                </div>
            </div>
            <Task />
        </div>

    )
}

export default Header;
