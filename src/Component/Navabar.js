import React from "react";
import logo from '../images/Logo2.png'
import Content from "./content";

export default function Navbar(){
    return(
        <div className="commn">
            <div>
            <div className="header">
            <div className="logo arrange-left width-25">
             <img src={logo} alt="logo"/>
            </div>
            <div className="navbar arrange-left navbar-50">
             <ul className="effects">
                 <li className="homeabout">Home</li>
                 <li>
                     <p className="dropdown dropup">
                     <button className="btn dropdown-toggle" data-bs-toggle="dropdown">Categories</button>
                     </p>
                 </li>
                 <li className="homeabout">About</li>
             </ul>
            </div>
            <div className="status arrange-left width-25">
                 <span className="bi bi-search"></span>
                 <button className="btnj">Join Us</button>
            </div>
            </div>
            </div>
            <Content />
        </div>
    )
}   