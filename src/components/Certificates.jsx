




import React from "react";
import pre_programming from "../images/Pre-Programming.webp";
import html_css from "../images/HTML_CSS.webp";
import javascript1 from "../images/JavaScript1.webp";
import javascript2 from "../images/JavaScript2.webp";
import webdevelopment from "../images/WebDevelopment.webp";
import python from "../images/Python.webp";
import python_tableau from "../images/Python_Tableau.webp";
import flutter from "../images/Flutter.webp";
import java1 from "../images/Java1.webp";
import dsa from "../images/dsa.webp";
import assertive from "../images/assertive.webp";





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

function Store() {
  return (
    <div>
                                                      <main>

                                                      <div className="spacing"></div>
                                                        <div className="middle-container">
                                                          <figure>
                                                            <img className="store-left" src={pre_programming} alt="My certificate Pre-Programming."></img>
                                                         </figure>
                                                       <article>
                                                      <div>
                                                      <h1 class="exlusive-text">Pre-Programming</h1>
                                                      <p>In this course I learned everything you need to start programming. Like the history of tech related topics.</p>
                                                      <a href="https://www.udemy.com/course/pre-programming-everything-you-need-to-know-before-you-code/" target="_blank" rel="noreferrer" className="Social align">Pre-Programming</a>
                                                      <div className="spacing3"></div>
                                                  </div>
                                                    </article>
                                                    </div>

                                                      <div className="spacing"></div>
                                                        <div className="middle-container">
                                                          <figure>
                                                            <img className="store-right" src={html_css} alt="My certificate HTML & CSS"></img>
                                                         </figure>
                                                       <article>
                                                      <div>
                                                      <h1 className="exlusive-text">HTML5 & CSS3</h1>
                                                      <p>In this course series I learned the markup language HTML5 and the styling language CSS3. This is the basis of building a website.</p>
                                                    <a className="Social left-align align" target="_blank" rel="noreferrer" href="https://codewithmosh.com/p/the-ultimate-html-css">HTML5 & CSS3</a>
                                                      <div className="spacing3"></div>
                                                  </div>
                                                    </article>
                                                    </div>

                                                      <div className="spacing"></div>
                                                        <div className="middle-container">
                                                          <figure>
                                                            <img className="store-left" src={javascript1} alt="My certificate JavaScript 1"></img>
                                                         </figure>
                                                       <article>
                                                      <div>
                                                      <h1 className="exlusive-text">JavaScript 1</h1>
                                                      <p>In JavaScript part 1 I learned the basics of programming. In this course you will learn the basic principles that come back in every programming language.</p>
                                                      <a href="https://codewithmosh.com/p/javascript-basics-for-beginners" target="_blank" rel="noreferrer" className="Social align">JavaScript 1</a>
                                                      <div className="spacing3"></div>
                                                  </div>
                                                    </article>
                                                    </div>

                                                           <div className="spacing"></div>
                                                           <div className="middle-container">
                                                             <figure>
                                                               <img className="store-right" src={javascript2} alt="My certificate JavaScript 2"></img>
                                                            </figure>
                                                          <article>
                                                            <div>
                                                            <h1>JavaScript 2</h1>
                                                            <p>In JavaScript part 2 I learned more advanced concepts of programming. The course material includes Object Oriented Programming.</p>
                                                            <a className="Social left-align align" target="_blank" rel="noreferrer" href="https://codewithmosh.com/p/object-oriented-programming-in-javascript">JavaScript 2</a>
                                                            <div className="spacing3"></div>
                                                        </div>
                                                          </article>
                                                          </div>

                                                        <div className="spacing"></div>
                                                        <div className="middle-container">
                                                        <figure>
                                                          <img className="store-left" src={webdevelopment} alt="My certificate Web Development"></img>
                                                          </figure>
                                                            <article>
                                                              <div>
                                                              <h1 className="exlusive-text">Web Development</h1>
                                                              <p>In this complete Web development bootcamp I learned how to program a website from the basics to more in-depth topics. Topics discussed include developing dynamic websites with a Database and Authentication functionality.</p>
                                                            <a className="Social align" target="_blank" rel="noreferrer" href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">Web Development</a>
                                                              <div className="spacing3"></div>
                                                          </div>
                                                            </article>
                                                            </div>

                                                            <div className="spacing"></div>
                                                              <div className="middle-container">
                                                                <figure>
                                                                  <img className="store-right" src={python} alt="My Python certificate"></img>
                                                               </figure>
                                                                <article>
                                                                  <div>
                                                                  <h1>Python Mastery</h1>
                                                                  <p>This is a course that gives a complete picture of the applications that can be made with the Python programming language. Fundamentals of programming, Web development and Machine Learning are all covered in this course.</p>
                                                                  <a className="Social left-align align" target="_blank" rel="noreferrer" href="https://codewithmosh.com/p/python-programming-course-beginners">Python Mastery</a>
                                                                  <div className="spacing3"></div>
                                                              </div>
                                                                </article>
                                                                </div>

                                                            <div className="spacing"></div>
                                                          <div className="middle-container">
                                                            <figure>
                                                              <img className="store-left" src={python_tableau} alt="My Python & Tableau certificate"></img>
                                                           </figure>
                                                            <article>
                                                              <div>
                                                              <h1>Python & Tableau</h1>
                                                              <p>Data Analysis and the visualization of data are topics that occur in this course. Here you learn, among other things, how to clean, edit and create data. And this data is then presented in a clear document using colorful tables and graphs.</p>
                                                            <a className="Social align" target="_blank" rel="noreferrer" href="https://www.udemy.com/course/python-and-tableau-the-complete-data-analytics-bootcamp/">Python & Tableau</a>
                                                                <div className="spacing3"></div>
                                                          </div>
                                                            </article>
                                                            </div>

                                                            <div className="spacing"></div>
                                                              <div className="middle-container">
                                                                <figure>
                                                                  <img className="store-right" src={flutter} alt="My Flutter certificate"></img>
                                                               </figure>
                                                                <article>
                                                                  <div>
                                                                  <h1>Flutter</h1>
                                                                  <p>Flutter is a framework from Google for mobile app development for both iOS and Android. In this course I taught myself how to develop Mobile Apps using the Dart programming language.</p>
                                                                  <a className="Social left-align align" target="_blank" rel="noreferrer" href="https://www.udemy.com/course/flutter-bootcamp-with-dart/">Flutter</a>
                                                                  <div className="spacing3"></div>
                                                              </div>
                                                                </article>
                                                                </div>

                                                            <div className="spacing"></div>
                                                          <div className="middle-container">
                                                            <figure>
                                                              <img className="store-left" src={java1} alt="My Java 1 certificate"></img>
                                                           </figure>
                                                            <article>
                                                              <div>
                                                              <h1>Java 1</h1>
                                                              <p>In Java 1 I learned the basics of programming in Java. It is strong, suitable for developing large applications and runs in a virtual machine.</p>
                                                            <a className="Social align" target="_blank" rel="noreferrer" href="https://codewithmosh.com/p/ultimate-java-part-1">Java 1</a>
                                                                <div className="spacing3"></div>
                                                          </div>
                                                            </article>
                                                            </div>

                                                            <div className="spacing"></div>
                                                             <div className="middle-container">
                                                               <figure>
                                                                 <img className="store-right" src={dsa} alt="My Certificate from Data Structures & Algorithms"></img>
                                                              </figure>
                                                               <article>
                                                                 <div>
                                                                   <h1>DSA</h1>
                                                                   <p>Data structures are ways of organizing and storing data, while algorithms are sets of instructions used to solve problems or perform tasks. Understanding both is crucial for designing efficient software solutions.</p>
                                                                   <a className="Social left-align align" target="_blank" rel="noreferrer" href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/">DSA</a>
                                                                   <div className="spacing3"></div>
                                                             </div>
                                                               </article>
                                                               </div>

                                                               <div className="spacing"></div>
                                                             <div className="middle-container">
                                                               <figure>
                                                                 <img className="store-left" src={assertive} alt="My Assertive Communication certificate"></img>
                                                              </figure>
                                                               <article>
                                                                 <div>
                                                                 <h1>AC masterclass</h1>
                                                                 <p>The Assertive Communication Skills Masterclass equips individuals with techniques to enhance assertive communication, including conflict resolution and effective listening, and aims to improve communication styles, self-awareness, and nonverbal communication.</p>
                                                               <a className="Social align" target="_blank" rel="noreferrer" href="https://www.udemy.com/course/assertive-communication-skills-masterclass/">AC masterclass</a>
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
                    <p className="copyright"><a className="footer-link" target="_blank" rel="noreferrer" href="https://www.raimoncoding.com/">© {date} www.raimoncoding.com</a></p>
                    <button onClick={topFunction} className="myBtn" title="Go to top">To the top</button>
                </footer>
        </div>
        );
        }

export default Store;
