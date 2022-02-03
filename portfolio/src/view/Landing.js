import React from "react";

// css
import "../css/Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-overlay"></div>
      <div className="landing-container">
        <div className="landing-contents">
          <div className="landing-inner">
            <div>
              <span className="landing-title">kbs2415@naver.com</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="scrollDown-mouse">
        <div>
          <span></span>
        </div>
      </div> */}
    </div>
  );
}

export default Landing;
