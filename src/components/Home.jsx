import React from "react";
import breathe from "../images/breathe.webp";
import welcome from "../images/welcome.webp";
import developer from "../images/developer.webp";
import responsive from "../images/responsive.webp";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
//
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

function Home() {
  return (
    <div>
        <main>

        <div className="header">
          <figure>
                <img className="store-right"src={welcome} alt="Old sign with wooden 'welcome' text"></img>
                  </figure>
                  <article>
                    <div>
                      <h1>Welcome to our world of creativity and innovation!</h1>
                        <p>We specialize in 3D printing and modeling and offer a wide range of practical designs and stylish accessories. From chic pen holders with Voronoi patterns to fashionable earrings, we have it all! An added bonus is that... we have over 100 free earring designs that you can download and print!</p>
                    <p>But that's not all. We are also passionate about programming and software development. If you need a website, you can count on us. And if you want to test your programming skills, we also have Python computer quizzes!</p>
                    </div>
              </article>
              </div>


        <div className="middle-container">
        <figure>
          <img className="store-left"src={breathe} alt="Neon letters with 'breathe' text hidden in ivy."></img>
          </figure>
          <article>
            <div>
                <p>If you're interested in learning more about our work, we invite you to check out our portfolio on 3dCults, Fiverr, and UpWork. And for those who love to read, we have a blog on Medium where we share our experiences with online coding bootcamps and 3D printing, along with project examples and accompanying scripts.</p>
                <p>And if you're a visual learner, don't forget to check out our YouTube channel, where we share educational content on 3D modeling and design, accompanied by background music that ranges from feel-good tunes to classical melodies.</p>
                <p>Join us on our journey of creativity and innovation!</p>
            </div>
          </article>
          </div>

      <div className="middle-container2">
      <figure>
          <img className="store-right"src={developer} alt="phone, Imac pc and tablet to represent responsive design"></img>
          </figure>
        <article>
        <div>
        <h1>Responsive design, HTML, CSS, JavaScript</h1>
            <p>Freelance web designer and developer based in West-Friesland, The Netherlands.
               Most capable and skilled at creating custom websites.</p>
            <p>How does a responsive website work?</p>
            <p>Simply put, responsive websites adapt to the screen with which a visitor views the website.
            Whether this is a desktop monitor, a tablet, or a smartphone. There is only one website,
            the layout of which adapts to the resolution of the screen.</p>
            </div>
        </article>
        </div>


        <div className="middle-container">
          <figure>
            <img className="store-left"src={responsive} alt="another phone, Imac pc and tablet to represent responsive design"></img>
         </figure>
          <article>
            <div>
          <h1>Online presence</h1>
          <p>During the development process of a website, we work closely together to achieve an optimal result.
          Good cooperation between the customer and the developer is an important factor in this.
          In particular, the wishes of the customer are paramount here.</p>
          <p>“The secret of a high-ranking website is not the colors, but the content.”</p>
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
              <a className="footer-link footer-link2" target="_blank" rel="noreferrer" href="https://unsplash.com/s/photos/developer">Photo by Nubelson Fernandes on Unsplash</a>
              <a className="footer-link footer-link2" target="_blank" rel="noreferrer" href="https://unsplash.com/s/photos/responsive-web-design">Photo by Domenico Loia on Unsplash</a>
              <button onClick={topFunction} className="myBtn" title="Go to top">To the top</button>
          </footer>
    </div>
  );
}

export default Home;
