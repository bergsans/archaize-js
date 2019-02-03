import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const About = () => (
  <div className="about__container">
    <h2 className="about__container__header">About</h2>

    <p className="about__paragraph" style={{ marginBottom: "15px" }}>
      <strong>This is Archaize JS:</strong>
    </p>
    <dl className="about__list">
      <dt className="about__list__item">
        ...a ES6 to ES5 transpiler (main part)
      </dt>
      <dd className="about__list__item__detail">
        Feature list include the core of ES6
      </dd>
      <dd className="about__list__item__detail">
        Theory. How a transpiler works and why they are important
      </dd>
      <dt className="about__list__item">...a NPM package</dt>
      <dt className="about__list__item">
        ...a CLI to transpile JavaScript files
      </dt>
      <dt className="about__list__item">...a Minimalistic Web Site.</dt>
      <dd className="about__list__item__detail">Front-end (React)</dd>
      <dd className="about__list__item__detail">
        Back-end (Node.js, Express & Socket.io)
      </dd>
    </dl>
    <p className="about__paragraph">
      <em>
        Archaize JS is a transpiler and is my web developer exam project (2019).
      </em>
      Read my essay on what a transpiler is and how it works @{" "}
      <Link to="/text" className="about__paragraph__link">
        /Explain
      </Link>
      . You are also welcome to check out my project and all the code at my
      GitHub repo @{" "}
      <a
        href="https://github.com/claes-magnus/archaize-js"
        className="about__paragraph__link"
      >
        /claes-magnus/archaize-js
      </a>
      . The aesthetics of the this site stems form that the project orginally
      was supposed to only be a CLI. I thought it would be kind of cool nice to
      apply the same aesthetics to the Web; in this case the 'branding' is quite
      narrow anyway.
    </p>

    <p className="about__paragraph">
      In the year 2019, transpilers are more important than ever. The Web Wide
      Web development is global and should be inclusive. In the context of
      front-end development this is spelled backward compatibility.
    </p>

    <p className="about__paragraph">
      Archaize JS is neither the best transpiler, nor support full functionality
      for transpiling ES6 to ES5. But it includes all necessary parts of a fully
      functional transpiler.
    </p>

    <h3
      className="about__container__sub-header"
      style={{ marginTop: "35px", color: "#37d800" }}
    >
      ARCHAIZE JS FEATURES
    </h3>
    <ol className="about__ordered-list">
      <li className="about__ordered-list__item">template literals</li>
      <li className="about__ordered-list__item">variable declarations</li>
      <li className="about__ordered-list__item">arrow functions</li>
      <li className="about__ordered-list__item">string method: repeat</li>
      <li className="about__ordered-list__item">string method: includes</li>
      <li className="about__ordered-list__item">string method: startsWith</li>
      <li className="about__ordered-list__item">string method: endsWith</li>
      <li className="about__ordered-list__item">array method: find index</li>
      <li className="about__ordered-list__item">array method: find</li>
      <li className="about__ordered-list__item">array method: includes</li>
      <li className="about__ordered-list__item">operator: rest</li>
      <li className="about__ordered-list__item">operator: spread (array)</li>
      <li className="about__ordered-list__item">strict/type equality (===)</li>
      <li className="about__ordered-list__item">default parameter</li>
      <li className="about__ordered-list__item">property shorthand</li>
      <li className="about__ordered-list__item">class definition</li>
    </ol>
    <footer className="footer">
      <hr className="footer__hr" />
      Claes-Magnus Bernson{" "}
      <a href="mailto:cmbernson@gmail.com" className="about__paragraph__link">
        &lt;cmbernson@gmail.com&gt;
      </a>
      , 2019
    </footer>
  </div>
);
export default About;
