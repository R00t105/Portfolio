import React from "react";
import "./Skills.css";
import Html from "../../Assets/html.png";
import Css from "../../Assets/css-3.png";
import Js from "../../Assets/js.png";
import ReactLogo from "../../Assets/react.png";
import Git from "../../Assets/social.png";
import Python from "../../Assets/python.png";
import BootStrap from "../../Assets/bootstrap.png";
import ProblemSolving from "../../Assets/problem-solving.png";
import CPlus from "../../Assets/c-.png";
import CSharp from "../../Assets/c-sharp.png";
import OOP from "../../Assets/OOP.png";

const Skills = () => {
  return (
    <div className="Skills Container">
      <h1>Skills</h1>
      <div className="Cards">
        <div className="Card">
          <div className="HtmlCss">
            <img src={Html} alt="Html" />
            <img src={Css} alt="Css" />
          </div>
          <p>Html & CSS</p>
        </div>
        <div className="Card">
          <img src={Js} alt="Js" />
          <p>JavaScript</p>
        </div>
        <div className="Card">
          <img src={ReactLogo} alt="ReactLogo" />
          <p>React</p>
        </div>
        <div className="Card">
          <img src={Git} alt="Git" />
          <p>Git Source Control</p>
        </div>
        <div className="Card">
          <img src={Python} alt="Python" />
          <p>Python</p>
        </div>
        <div className="Card">
          <img src={BootStrap} alt="BootStrap" />
          <p>BootStrap</p>
        </div>
        <div className="Card">
          <img src={ProblemSolving} alt="ProblemSolving" />
          <p>Problem Solving</p>
        </div>
        <div className="Card">
          <img src={CPlus} alt="CPlus" />
          <p>C++</p>
        </div>
        <div className="Card">
          <img src={CSharp} alt="CSharp" />
          <p>C#</p>
        </div>
        <div className="Card">
          <img src={OOP} alt="CSharp" />
          <p>OOP</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
