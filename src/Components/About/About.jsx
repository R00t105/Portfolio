import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About Container">
      <div className="AboutContent">
        <h6>Hi, my name is</h6>
        <h1>
          Mo'men Issa.
          <br />
          <span>I build things for the web.</span>
        </h1>
        <p>
          I'm a front-end developer specializing in building interactive web
          applications using the React framework. I deliver products that exceed client
          expectations.
        </p>
        <a href="https://wa.me/201028950440?text=How Can I Help you ?" target="_blank" rel="noreferrer"><button className="btn">Get In Touch</button></a>
      </div>
    </div>
  );
};

export default About;
