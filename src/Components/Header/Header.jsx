import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import "./Header.css";

const Header = () => {

  const [navFixed, setNavFixed] = useState(false);

  function handleNavScroll(){
    if(window.scrollY >= 100){
      setNavFixed(true);
    }else{
      setNavFixed(false);
    }
  }

  window.addEventListener('scroll', handleNavScroll)

  return (
    <nav className={navFixed ? 'Header NavBg' : 'Header'}>
      <div className={navFixed ? 'Hexagon logo' : 'Hexagon'}>
        <h1>M</h1>
      </div>
      <ul>
        <li className="item">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1000}
          >
            About
          </Link>
        </li>
        <li className="item">
          <Link
            activeClass="active"
            to="Education"
            spy={true}
            smooth={true}
            offset={-130}
            duration={1000}
          >
            Education
          </Link>
        </li>
        <li className="item">
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            offset={-130}
            duration={1000}
          >
            Skills
          </Link>
        </li>
        <li className="item">
          <Link
            activeClass="active"
            to="Work"
            spy={true}
            smooth={true}
            offset={-130}
            duration={1000}
          >
            Work
          </Link>
        </li>
        <li className="item">
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-130}
            duration={1000}
          >
            Contact
          </Link>
        </li>
        <li>
          <button className="btn">Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
