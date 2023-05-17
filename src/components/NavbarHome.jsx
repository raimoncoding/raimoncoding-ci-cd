import React from "react";
import cover from "../images/cover.webp";
import { Link } from 'react-router-dom';


function NavbarHome() {
  return (
    <nav className="navbar">
    <img className="logo" src={cover} alt="my own logo, raimoncoding"></img>
    <ul className="hList">
    <li className="dropdown_menu">
      <div className="menu">
        <h2 className="menu-title">Menu</h2>
        <ul className="dropdown_menu menu-dropdown">
          <li><Link  className="dropdown_item nav-link" to="/">Home</Link></li>
          <li><Link  className="dropdown_item nav-link" to="/Services">Services</Link></li>
          <li><Link  className="dropdown_item nav-link" to="/About">About</Link></li>
          <li><Link  className="dropdown_item nav-link" to="/Clients">Clients</Link></li>
          <li><Link  className="dropdown_item nav-link" to="/Certificates">Certificates</Link></li>
          <li><Link  className="dropdown_item nav-link" target="_blank" rel="noreferrer" to="/Resume">My Resume</Link></li>
          <li><Link  className="dropdown_item nav-link" to="/Contact">Contact</Link></li>
        </ul>
      </div>
    </li>
    </ul>
    </nav>
);
}

export default NavbarHome;



//
// <nav className="navbar hList">
//     <img className="logo"src={cover} alt="my own logo, raimoncoding"></img>
//     <div className="dropdown_menu">
//       <div className="menu">
//         <h2 className="menu-title">Menu</h2>
//         <ul class="menu-dropdown">
//         <li><Link className="dropdown_item" to="/">Home</Link></li>
//         <li><Link className="dropdown_item" to="/Services">Services</Link></li>
//         <li><Link className="dropdown_item" to="/About">About</Link></li>
//         <li><Link className="dropdown_item" to="/Clients">Clients</Link></li>
//         <li><Link className="dropdown_item" to="/Contact">Contact</Link></li>
//         </ul>
//         </div>
//         </div>
//       </nav>
