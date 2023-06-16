import React from "react";
import "./sidebar.css";
import logo from "../assest/logo.svg";
import logo1 from "../assest/logo1.svg";
import home from "../assest/home.svg";
import message from "../assest/message.svg";
import tasks from "../assest/tasks.svg";
import members from "../assest/members.svg";
import settings from "../assest/settings.svg";



function Sidebar() {
    return (
        <div className="root">
            <div className="sidebar_header">
                <div className="project_m">
                    <img src={logo} className="logo"></img>
                    <p className="header_title">Project M.</p>
                </div>
                <div className="project_m_logo">
                    <img src={logo1} className="logo1"></img>
                </div>


            </div>

            <div className="sidebar_section1">
                <div className="section1_items">
                    <img src={home} className="home"></img>
                    <p>Home</p>
                </div>
                <div className="section1_items">
                    <img src={message} className="message"></img>
                    <p>Messages</p>
                </div>
                <div className="section1_items">
                    <img src={tasks} className="tasks"></img>
                    <p>Tasks</p>
                </div>
                <div className="section1_items">
                    <img src={members} className="members"></img>
                    <p>Members</p>
                </div>
                <div className="section1_items">
                    <img src={settings} className="settings"></img>
                    <p>Settings</p>
                </div>
            </div>
        </div>


    )
}


export default Sidebar;


