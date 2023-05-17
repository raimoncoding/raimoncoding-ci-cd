import React from "react";
// import { Link } from 'react-router-dom';
import resume from "../images/resume.pdf";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

const current = new Date();
const date = `${current.getFullYear()}`;

//Get the button:
let mybutton = document.getElementsByClassName("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
mybutton.style={display: document.body.scrollTop > 20 || document.documentElement.scrollTop > 20  ? 'block' : 'none' }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function Resume() {
  return (
    <div>
            <a href={resume}>
             <div id="pdf-container">
              <embed id="pdf" src={resume} type="application/pdf" />
            </div>
            </a>

            <footer className="container-fluid">
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01db073e93aefd8fac?viewMode=1">UpWork</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://cults3d.com/en/users/raimoncoding/creations">3dCults</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://nl.fiverr.com/raimoncoding/">Fiverr</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos">YouTube</a>
                <div className="spacing4"></div>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://twitter.com/raimoncoding">Twitter</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/raimoncoding/">LinkedIn</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.tiktok.com/@raimoncoding">Tik Tok</a>
                <div className="spacing4"></div>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://medium.com/@raimoncoding">Medium</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/raimoncoding/">Instagram</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://github.com/raimoncoding">GitHub</a>
                <div className="spacing4"></div>
                <p className="copyright"><a className="footer-link" target="_blank" rel="noreferrer" href="https://www.raimoncoding.com/">© {date} www.raimoncoding.com</a></p>
                <button onClick={topFunction} className="myBtn" title="Go to top">To the top</button>
            </footer>
    </div>
  );
}

export default Resume;
