import React from "react";
import raimon from "../images/raimon.webp";
import example4 from "../images/example4.webp";
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

// data-aos="flip-left"
//      data-aos-easing="ease-out-cubic"
//      data-aos-duration="2000"

// data-aos="flip-right"
//      data-aos-easing="ease-out-cubic"
//      data-aos-duration="2000"

function About() {
  return (
    <div>
        <main>

        <div className="header">
        <div className="spacing2">
        </div>
          <figure>
            <img className="raimon"src={raimon} alt="Cartoon of myself"></img>
          </figure>
          <article>
            <div>
            <h1>Hello I'm Raimon</h1>
            <p>
            I'm a 3D designer and software developer with a strong passion for creating practical and artistic 3D models. Using CAD software such as Blender, Meshmixer, and TinkerCad, I bring my designs to life.</p>
            <p>
            I'm also an advocate for disability rights and want to share with you that I have schizophrenia. Despite the challenges that come with this mental disorder, I've learned to manage my symptoms and have never let it hold me back in my personal or professional life.</p>
            <p>
            In addition to my experience in 3D design, I'm skilled in various other areas such as front-end web development, data science, data analytics, data visualization, and data structures and algorithms.
            I use markup languages such as HTML5 and styling languages such as CSS3 to create beautiful and functional websites. I'm proficient in programming languages such as JavaScript and Python, as well as mobile app development with Flutter.</p>
            <p>
            I believe that everyone has the ability to achieve their dreams, no matter what challenges they may face. With hard work, dedication, and the right support, you can overcome any obstacles that come your way.</p>
            <p>
            Thank you for taking the time to learn a bit more about me. I hope my story serves as an inspiration for you to pursue your passions and reach your full potential.</p>
        </div>
          </article>
          </div>
    <div className="spacing">

    </div>

          <div className="middle-container">
            <figure>
              <img className="company"src={example4} alt="a website i developed with a sport theme"></img>
           </figure>
            <article>
              <div>
            <h1>Retain and target customers on social media</h1>
            <p>A professional website immediately demonstrates your credibility as it tells your audience that you take your business seriously
            and gives them more information about your brand. Without an online presence, consumers may not even consider your brand legitimate.</p>
            <p> “A website can make money for you while you are asleep.”</p>
            <p>– Amit Kalantri</p>
          </div>
            </article>
            </div>
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
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.vectorstock.com/royalty-free-vector/cute-clouds-vector-29467051">Snow image by VectorStock / BBM-Studio</a>
              <button onClick={topFunction} className="myBtn" title="Go to top">To the top</button>
            </footer>
    </div>
  );
}

export default About;
