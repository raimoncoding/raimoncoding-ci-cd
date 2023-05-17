import React from "react";
import Home from "./Home";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Services from "./Services";
import Certificates from "./Certificates";
// import Store from "./Store";
import Footer from "./Footer";
import NavbarHome from "./NavbarHome";
import Resume from "./Resume";
import PrivacyNotice from "./PrivacyNotice";
import LegalNotice from "./LegalNotice";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <div>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <NavbarHome />
  <Routes basename={process.env.PUBLIC_URL}>
  <Route path="/" element={<Home />} />
  <Route path="/Services" element={<Services />} />
  <Route path="/About" element={< About />} />
  <Route path="/Clients" element={<Clients />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/Certificates" element={<Certificates />} />
  <Route path="/Resume" element={<Resume />} />
  <Route path="/PrivacyNotice" element={<PrivacyNotice />} />
  <Route path="/LegalNotice" element={<LegalNotice />} />
  <Route path="/Footer" element={<Footer />} />
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
