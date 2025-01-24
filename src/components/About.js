import React from 'react';
import './Design.css';
import HTML from './html.png';
import CSS from './css.png';
import JAVASCRIPT from './javascript.jpg';
import REACT from './React.png';
import SQL from './SQL.png';
import GITHUB from './GITHUB.jpg';
import GIT from './GIT.png';

const About = () => {
  return (
    <>
      <div className="contain-about">
        <hr />
        <h3 className="about-h">About Me</h3>
        <hr />
        <p className="about-para">
          Hello there! My name is Anand Agarwal. I am a Post Grad Student @ TJC, and I'm very passionate about Front-End
          development.
          <br />
          <br />
          I am dedicated and have acquired the skills and knowledge necessary to make a project a success.
          <br />
          <br />
          I get across to people and adjust to changes with ease. I believe that a person should work on developing
          their professional skills and learning new things all the time.
        </p>
        <hr />
        <h2>Skills</h2>
        <hr />
        <div className="button-container">
          <button className="skill-button">
            <img src={HTML} className="image-html" alt="HTML logo" />
            <div className="html-name">HTML</div>
          </button>
          <button className="skill-button">
            <img src={CSS} className="image-html" alt="CSS logo" />
            <div className="html-name">CSS</div>
          </button>
          <button className="skill-button">
            <img src={JAVASCRIPT} className="image-html" alt="JavaScript logo" />
            <div className="html-name">JavaScript</div>
          </button>
          <button className="skill-button">
            <img src={REACT} className="image-html" alt="React logo" />
            <div className="html-name">React JS</div>
          </button>
          <button className="skill-button">
            <img src={SQL} className="image-html" alt="MySQL logo" />
            <div className="html-name">MySQL</div>
          </button>
          <button className="skill-button">
            <img src={GITHUB} className="image-html" alt="GitHub logo" />
            <div className="html-name">GitHub</div>
          </button>
          <button className="skill-button">
            <img src={GIT} className="image-html" alt="Git logo" />
            <div className="html-name">Git</div>
          </button>
        </div>

        <hr />
        <h2>Education</h2>
        <hr />

        <div className="clg-container">
          <div className="year">2022 - 2024</div>
          <h2 className="college">
            T JOHN College
            <div className="degree">Master Degree | MCA</div>
          </h2>
        </div>
        <div className="clg-container">
          <div className="year">2019 - 2022</div>
          <h2 className="college">
            AMC
            <div className="degree">Bachelor Degree | BCA</div>
          </h2>
        </div>
        <div className="clg-container">
          <div className="year">2017 - 2019</div>
          <h2 className="college">
            Silicon City PU College
            <div className="degree">2nd PU | BASCs</div>
          </h2>
        </div>
      </div>
    </>
  );
};

export default About;
