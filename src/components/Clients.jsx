import React from "react";
import example2 from "../images/example2.webp";
import example3 from "../images/example3.webp";
import gosolo from "../images/gosolo7.webp";

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

function Clients() {
  return (
    <div>
        <main>
        <div className="header header2">
          <figure>
            <img className="company2"src={example3} alt="an example webpage that contains contact details."></img>
           </figure>
          <article>
            <div>
          <h1>Adaptivity</h1>
          <p>Good communication with the customer is our top priority. We maintain contact with the client in order to deliver a complete product to the satisfaction of the client.</p>
          <p>"We don't want to push our ideas on to customers, we simply want to make what they want."</p>
        </div>
          </article>
          </div>
    <div className="spacing">

    </div>

          <div className="middle-container">
            <figure>
              <img className="company"src={example2} alt="an example business webpage in white and blue"></img>
           </figure>
            <article>
              <div>
            <h1>Online presence</h1>
            <p>Helping clients gives me a great sense of pride. It's such a privilege to be a part of the process of helping entrepreneurs
            take their success seriously. Entrepreneurs work hard to build strong relationships, and it's humbling to be a trusted guide to your success.</p>
            <p>"When you help others feel important, you help yourself feel important too."</p>
            <p>– David J. Schwartz</p>
          </div>
            </article>
            </div>

            <div className="middle-container">
              <figure>
              <a target="_blank" rel="noreferrer" href="https://gosolo.subkit.com/raimoncoding/"><img className="company2"src={gosolo} alt="my business in the online magazine GoSolo"></img></a>
             </figure>
              <article>
                <div>
              <h1>Interviewed by GoSolo</h1>
              <p>I have been interviewed for the Online Magazine GoSolo. I was very surprised when I was asked to write a story about my company.
               Read up on my story by clicking the image.</p>
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
                <p className="copyright"><a className="footer-link" target="_blank" rel="noreferrer" href="https://www.raimoncoding.com/">© {date} www.raimoncoding.com</a></p>
                <button onClick={topFunction} className="myBtn" title="Go to top">To the top</button>
                </footer>
    </div>
  );
}

export default Clients;
