import React from "react";
import { Link } from 'react-router-dom';
import contact from "../images/contact.webp";
import hands from "../images/hands.webp";
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

function Contact() {
  return (
    <div>
      <main>
        <div className="header">
          <figure>
            <img className="raimon"src={contact} alt="an old typewriter typing contact"></img>
          </figure>
          <br></br>
          <br></br>
          <article>
            <div>
              <h1>Contact us</h1>
              <p>If you have any questions about the services I offer,
                 please send me a message. I will contact you as soon as possible.</p>
                 <div className="spacing"></div>
              <a className="Social left-align" href="mailto:info@raimoncoding.nl">Contact</a>
        </div>
          </article>
          </div>

      <div className="spacing3"></div>

          <div className="middle-container">
            <figure>
              <img className="company"src={hands} alt="color painted human hands"></img>
            </figure>
            <article>
              <div>
               <h1>If you have any ideas.</h1>
               <p>Collecting customer feedback is a way to show I value their opinions. By asking my clients for feedback,
               I communicate that their opinion is important to me. I involve them in shaping my business so they feel more attached
               to my company. Listening to their voice helps me create stronger relations with them.</p>
               <p>"We'd love to hear from you."</p>
             </div>
            </article>
          </div>
            <div className="spacing2"></div>
        </main>

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
                <p className="copyright"><a className="footer-link" target="_blank" rel="noreferrer" href="https://www.raimoncoding.com/">© {date} www.raimoncoding.com</a></p>                <a className="footer-link footer-link2" target="_blank"rel="noreferrer"  href="https://unsplash.com/s/photos/contact-us">Photo by Markus Winkler on Unsplash</a>
                <a className="footer-link footer-link2" target="_blank" rel="noreferrer" href="https://www.pexels.com/nl-nl/zoeken/contact%20us/">Photo by cottonbro</a>
                <div className="spacing4"></div>
                <Link className="footer-link footer-link2" href="top"to="/PrivacyNotice">Privacy Notice</Link>
                <Link className="footer-link footer-link2" href="top"to="/LegalNotice">Legal Notice</Link>

                <button onClick={topFunction} className="myBtn" title="Go to top">To the top</button>
            </footer>
    </div>
  );
}

export default Contact;
