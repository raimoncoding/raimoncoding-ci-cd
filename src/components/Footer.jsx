import React from "react";
import { Link } from 'react-router-dom';

// import About from "./About";
// import Clients from "./Clients";
// import Contact from "./Contact";
// import Home from "./Home";
// import Services from "./Services";

function Footer() {
  return (
    <div>
<footer className="container-fluid">
  <Link className="footer-link" to='/'>Home</Link>
  <Link className="footer-link" to='/Services'>Services</Link>
  <Link className="footer-link"to='/About'>About</Link>
  <Link className="footer-link" to='/Clients'>Clients</Link>
  <Link  className="footer-link" to="/Store">Store</Link>
  <Link className="footer-link" to='/Contact'>Contact</Link>
</footer>
</div>
);
}
export default Footer;
