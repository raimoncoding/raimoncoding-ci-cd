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

function PrivacyNotice() {
  return (
      <div>
      <div className="body2">
      <div className="spacing3"></div>
      <div className="spacing3"></div>


      <p className="c1"><span className="c0" id="top">Company, located at Timpaan 1-B 1628 MT Hoorn, is responsible for the processing of personal data as shown in this privacy statement.</span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span claclassNamess="c0">Contact details:</span></p>
      <p className="c1"><span className="c0">info@raimoncoding.nl</span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">Personal data that we process</span></p>
      <p className="c1"><span className="c0">Company does not process personal data because no personal data can be left on our site. We also do not use social media plugins. </span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">Special and/or sensitive personal data that we process</span></p>
      <p className="c1">
          <span className="c0">
              Our website and/or service does not intend to collect data about website visitors who are younger than 16 years old. Unless they have parental or guardian permission. However, we cannot check whether a visitor is older than
              16. We therefore advise parents to be involved in the online activities of their children, in order to prevent data about children being collected without parental consent. If you are convinced that we have collected
              personal information about a minor without this permission, please contact us at info@raimoncoding.com and we will delete this information.
          </span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">For what purpose and on what basis we process personal data</span></p>
      <p className="c1"><span className="c0">- Company processes your personal data for the following purposes:</span></p>
      <p className="c1"><span className="c0">- Company analyzes your behavior on the website in order to improve the website and to tailor the range of products and services to your preferences. </span></p>
      <p className="c1"><span className="c0">- Company tracks your surfing behavior on various websites with which we tailor our products and services to your needs.</span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">Automated decision-making</span></p>
      <p className="c1">
          <span className="c0">
              Company takes business decisions based on automated processing on matters that can have (significant) consequences for people. These are decisions taken by computer programs or systems, without involving a person (for
              example an employee of Company). Company uses the following computer programs or systems:
          </span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1">
          <span className="c3"><a className="c5" href="https://www.google.com/url?q=https://heapanalytics.com/&amp;sa=D&amp;source=editors&amp;ust=1655378187252033&amp;usg=AOvVaw0w2YxI60R0wOWSQIODSwv1">https://heapanalytics.com/</a></span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1">
          <span className="c3">
              <a className="c5" href="https://www.google.com/url?q=https://www.consentmanager.net/&amp;sa=D&amp;source=editors&amp;ust=1655378187252521&amp;usg=AOvVaw20zI4XSeU8oRb7WKOGIrR-">https://www.consentmanager.net/</a>
          </span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">Sharing personal data with third parties</span></p>
      <p className="c1"><span className="c0">Company only provides to third parties and only if this is necessary for the execution of our agreement with you or to comply with a legal obligation.</span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">Cookies, or similar techniques, that we use</span></p>
      <p className="c1">
          <span className="c0">
              Company uses functional, analytical and tracking cookies. A cookie is a small text file that is stored in the browser of your computer, tablet or smartphone when you first visit this website. Company uses cookies
              with a purely technical functionality. These ensure that the website works properly and that, for example, your preferred settings are remembered. These cookies are also used to make the website work properly and to optimize
              it. In addition, we place cookies that track your surfing behavior so that we can offer customized content and advertisements.
          </span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">On your first visit to our website, we already informed you about these cookies and asked for permission to place them. </span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1">
          <span className="c0">
              You can opt out of cookies by setting your internet browser so that it no longer stores cookies. In addition, you can also delete all information that has previously been stored via the settings of your browser.
          </span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c3"><a className="c5" href="https://veiliginternetten.nl/search/?q=cookies">https://veiliginternetten.nl/cookies/</a></span></p>
      <p className="c1"><span className="c0">&nbsp;</span></p>
      <p className="c1"><span className="c0">Cookies are also placed on this website by third parties. These are, for example, advertisers and/or social media companies. Below is an overview:</span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0"></span></p>
      <p className="c1"><span className="c0">Cookie: Heap Analytics.</span></p>
      <p className="c1"><span className="c0">Name: Heap Analytics.</span></p>
      <p className="c1"><span className="c0">Function: Analytical cookie that measures website visits.</span></p>
      <p className="c1"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">Cookie: Consentmanager.</span></p>
      <p className="c1"><span className="c0">Name: Consentmanager.</span></p>
      <p className="c1"><span className="c0">Function: Provider of cookies pup-up window.</span></p>
      <p className="c1"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">View, adjust or delete data</span></p>
      <p className="c1">
          <span className="c0">
              You have the right to view, correct or delete your personal data. You can do this yourself via the personal settings of your account. In addition, you have the right to withdraw your consent to the data processing or to
              object to the processing of your personal data by our company and you have the right to data portability. This means that you can submit a request to us to send the personal data we have about you in a computer file to you
              or another organization mentioned by you.
          </span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1">
          <span className="c0">
              If you would like to exercise your right to object and/or right to data portability or if you have other questions/comments about data processing, please send a specified request to info@raimoncoding.com.
          </span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1">
          <span className="c0">
              To ensure that the request for access has been made by you, we ask you to enclose a copy of your proof of identity with the request. Make your passport photo, MRZ (machine readable zone, the strip with numbers at the bottom
              of the passport), passport number and Citizen Service Number (BSN) black in this copy. This is to protect your privacy. Company will respond to your request as soon as possible, but in any case within four weeks.
          </span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">Company would also like to point out that you have the option to file a complaint with the national supervisory authority, the Dutch Data Protection Authority. You can do this via the following link: </span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c3"><a className="c5" href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons">https://autoriteitpersoonsgegevens.nl/</a></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1 c2"><span className="c0"></span></p>
      <p className="c1"><span className="c0">How we protect personal data</span></p>
      <p className="c1">
          <span className="c0">
              Company takes the protection of your data seriously and takes appropriate measures to prevent misuse, loss , unauthorized access, unwanted disclosure and unauthorized modification. If you have the impression that your
              data is not properly secured or there are indications of misuse, please contact our customer service or via info@raimoncoding.nl
          </span>
      </p>
      <p className="c1 c2"><span className="c0"></span></p>
      <button onClick={topFunction} className="myBtn" title="Go to top">To the top</button>
      <div className="spacing3"></div>
      <div className="spacing3"></div>
      </div>
      </div>


);
}

export default PrivacyNotice;
