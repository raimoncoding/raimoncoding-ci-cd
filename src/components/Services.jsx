import React from "react";
import printer from "../images/printer.webp";
import code from "../images/code.webp";
import blog from "../images/blog.webp";
import youtube from "../images/youtube.webp";
// import AOS from 'aos';
// // import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

const current = new Date();
const date = `${current.getFullYear()}`;

//Get the button:
let mybutton = document.getElementsByClassName("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function()  {scrollFunction()};

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


function Services() {
  return (
<div>
  <main>
    <div className="header">
      <figure>
        <img className="printer"src={printer} alt="my 3d printer, it's an Ultimaker"></img>
     </figure>
     <br></br>
     <br></br>
      <article>
        <div>
        <div className="spacing"></div>
          <h1 className="top-text">3d Printing & 3d Modeling</h1>
          <p>My 3d models range from practical designs such as coasters and pen trays. The coasters have all kinds of super nice prints.
          The pen trays are designed with chic voronoi patterns. I also design fashionable earrings. If you would like to print earrings, I have good news.
          I have uploaded more than 100 of them and they are free to download. I have also designed several key rings in fun shapes and with beautiful prints. And much more!</p>
          <div className="spacing"></div>
          <span><p>Have a look at my portfolio at:</p><strong><a class="Social left-align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/users/raimoncoding/creations">3dCults</a></strong></span>
          </div>
      </article>
      </div>
<div className="spacing"></div>

    <div className="spacing"></div>
      <div className="middle-container">
        <figure>
          <img className="code"src={code} alt="Phone with eat, sleep, code, repeat"></img>
       </figure>
        <article>
          <div>
            <h1>Programming</h1>
            <p>I'm also a software developer. I can design a website for you, with traditional techniques. I have created a profile on both UpWork and Fiverr.
               There you can use my freelance services. I also make Computer Quizzes in Python.</p>
               <span><p>Have a look at my portfolio at:</p><strong><a class="Social" target="_blank" rel="noreferrer" href="https://nl.fiverr.com/raimoncoding/">Fiverr</a></strong></span>
               <span><p>Have a look at my portfolio at:</p><strong><a class="Social" target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01db073e93aefd8fac?viewMode=1">UpWork</a></strong></span>
      </div>
        </article>
        </div>

        <div className="middle-container2">
          <figure>
            <img className="company2"src={blog} alt="Blog letters in brown wood"></img>
         </figure>
          <article>
            <div>
              <h1>Blogs about my Study</h1>
              <p>I also write blogs on the blog platform Medium. There you can read about my experiences with online coding bootcamps and 3D printing.
              With regard to the online coding bootcamps that I follow, I write about how I started, what my planning is for the future and what I have learned.
              In addition, in some of these blogs I also give examples of projects with accompanying scripts.
              In my blogs about 3D printing I discuss what I design, print, publish and why I started this work.
              I also wrote a blog about my start as a creator on YouTube. These examples are just the tip of the iceberg, there is much more to read on this blog platform!</p>
              <p>Have a look at my blogposts at:</p>
              <strong><a className="Social left-align" target="_blank" rel="noreferrer" href="https://medium.com/@raimoncoding">Medium</a></strong>
              <div className="spacing"></div>
        </div>
          </article>
          </div>

          <div className="middle-container">
            <figure>
              <img className="code"src={youtube} alt="Phone with YouTube logo."></img>
           </figure>
            <article>
              <div>
                <h1>YouTube Creator</h1>
                <p>I also make videos on YouTube. There you can find educational content about creating 3d models.
                I show, among other things, how to design earrings, pencil holders and statues with voronoi patterns.
                My videos are short and sweet and have nice background music.
                I let you listen to different music styles that range from Feel Good Music, Lo Fi Beats to Classical Music.</p>
                   <div className="spacing"></div>
                <span><p>Watch my YouTube channel at:</p><strong><a class="Social" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos">YouTube</a></strong></span>
                <div className="spacing3"></div>
          </div>
            </article>
            </div>
        </main>


        <footer className="container-fluid">
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01db073e93aefd8fac?viewMode=1">UpWork</a>
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://cults3d.com/en/users/raimoncoding/creations">3dCults</a>
            <a className="footer-link" target="_blank" rel="noreferrer"  href="https://nl.fiverr.com/raimoncoding/">Fiverr</a>
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
            <p className="copyright"><a className="footer-link" target="_blank" rel="noreferrer" href="https://www.raimoncoding.com/">© {date} www.raimoncoding.com</a></p>            <a className="footer-link footer-link2" target="_blank" rel="noreferrer"  href="https://unsplash.com/s/photos/code">Photo by Roman Synkevych on Unsplash</a>
            <a className="footer-link footer-link2" target="_blank" rel="noreferrer" href="https://www.pexels.com/nl-nl/zoeken/services/">Photo by Pixabay</a>
            <button onClick={topFunction} className="myBtn" title="Go to top">To the top</button>
        </footer>
</div>
);
}

export default Services;
