import React, { useState } from "react";
// css
import "../css/Contents.css";

// component
import AboutMe from "../components/AboutMe.js";
import Stack from "../components/Stack.js";
import Project from "../components/Project.js";
import Contact from "../components/Contact.js";

function Contents() {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);

  const aboutModalHandler = () => {
    setAboutIsOpen(!aboutIsOpen);
  };

  const [stackIsOpen, setStackIsOpen] = useState(false);

  const stackModalHandler = () => {
    setStackIsOpen(!stackIsOpen);
  };

  const [projectIsOpen, setProjectIsOpen] = useState(false);

  const projectModalHandler = () => {
    setProjectIsOpen(!projectIsOpen);
  };

  const [contactIsOpen, setContactIsOpen] = useState(false);

  const contactModalHandler = () => {
    setContactIsOpen(!contactIsOpen);
  };

  return (
    <>
      <div className="contents-container">
        <section>
          <div className="contents-box aboutme" onClick={aboutModalHandler}>
            {aboutIsOpen === false ? null : (
              <div className="about-backdrop" onClick={aboutModalHandler}>
                <div className="about-modalview" role="dialog">
                  <AboutMe />
                </div>
              </div>
            )}
          </div>
        </section>
        <section>
          <div className="contents-box stack" onClick={stackModalHandler}>
            {stackIsOpen === false ? null : (
              <div className="stack-backdrop" onClick={stackModalHandler}>
                <div className="stack-modalview" role="dialog">
                  <Stack />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <div className="contents-container">
        <section>
          <div className="contents-box project" onClick={projectModalHandler}>
            {projectIsOpen === false ? null : (
              <div className="project-backdrop" onClick={projectModalHandler}>
                <div className="project-modalview" role="dialog">
                  <Project />
                </div>
              </div>
            )}
          </div>
        </section>
        <section>
          <div className="contents-box contact" onClick={contactModalHandler}>
            {contactIsOpen === false ? null : (
              <div className="contact-backdrop" onClick={contactModalHandler}>
                <div className="contact-modalview" role="dialog">
                  <Contact />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Contents;
