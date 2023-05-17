import React from "react";

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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

function LegalNotice() {
  return (
      <div>
      <div className="body2">
      <div className="spacing3"></div>
      <div className="spacing3"></div>


      <p className="c1"><span className="c0" id="top">raimoncoding</span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">Last updated: January, 2023</span></p>
      <p className="c1"><span className="c0">Welcome to raimoncoding. By using our website, you agree to the terms and conditions outlined in this legal notice.</span></p>

      <p className="c1"><span className="c0">Please read the legal notice carefully before using our website. If you have any questions, please contact us.</span></p>
      <p className="c1"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">Legal Notice</span></p>
      <p className="c1">
          <span className="c0">
The information provided on this website is for general informational purposes only. While we make every effort to ensure that the information on this website is accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1">
          <span className="c0">Raimoncoding shall not be held liable for any loss or damage, including without limitation, direct or indirect, consequential, or incidental damages, arising out of or in connection with the use of this website.</span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1">
          <span className="c0">This website may contain links to third-party websites that are not under the control of Raimoncoding.
                              We have no control over the nature, content, and availability of those sites and the inclusion of any links does not imply endorsement or recommendation of the views expressed within them.
          </span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">We make every effort to keep this website up and running smoothly. However, Raimoncoding takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0">Contact us: </span></p>
      <p className="c1 c2"><span className="c0">Email: info@raimoncoding.nl</span></p>
      <p className="c1"><span className="c0">Website: https://www.raimoncoding.com</span></p>
      <p className="c1">
          <span className="c0">
          By using our website, you accept our terms of use and privacy policy.
          The information provided on this website is for general informational purposes only and is not intended as legal advice.
          We do not guarantee the accuracy, completeness, or reliability of any information on this website and will not be held liable for any errors or omissions.
          </span>
      </p>
      <p className="c1"><span className="c0"></span>Copyright © 2023 raimoncoding. All rights reserved.</p>
      <p className="c1 c2"><span className="c0"></span></p>
      <button onClick={topFunction} className="myBtn" title="Go to top">To the top</button>
      <div className="spacing3"></div>
      <div className="spacing3"></div>
      </div>
      </div>


);
}

export default LegalNotice;
