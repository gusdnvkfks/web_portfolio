import React from "react";

// css
import "../css/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-main">
        <div className="contact-title">Contact Me!</div>
        <div className="contact-email">kbs2415@naver.com</div>
      </div>
      <div className="contact-sub">
        <a
          className="contact-github"
          href="https://github.com/gusdnvkfks"
          target="_blank"
        >
          <div className="github-img"></div>
          Github
        </a>
        <a
          className="contact-blog"
          href="https://www.notion.so/SEB_Full_34_-994c3a392fb44989b70153bf945a3d83"
          target="_blank"
        >
          <div className="blog-img"></div>
          Blog
        </a>
        <a
          className="contact-resume"
          href="https://www.notion.so/ed585fbaf9664b1597dce35eea25feda"
          target="_blank"
        >
          <div className="resume-img"></div>
          Resume
        </a>
      </div>
      <div className="contact-msg">
        위의 이미지를 클릭하여 더 자세한 내용을 보실 수 있습니다.
      </div>
    </div>
  );
}

export default Contact;
