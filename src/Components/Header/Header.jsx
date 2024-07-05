import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import "./Header.css";
import Resume from '../../Assets/Resume.pdf'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navFixed, setNavFixed] = useState(false);

  function handleNavScroll() {
    if (window.scrollY >= 100) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  }

  window.addEventListener("scroll", handleNavScroll);

  function ToggleHandle() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }

  return (
    <nav className={navFixed ? "Header NavBg" : "Header"}>
      <div className={navFixed ? "Hexagon logo" : "Hexagon"}>
        <h1>M</h1>
      </div>
      <ul className={isMenuOpen ? "ActiveToggle" : ""}>
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
            offset={-80}
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
            offset={-80}
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
            offset={-80}
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
            offset={-80}
            duration={1000}
          >
            Contact
          </Link>
        </li>
        <li>
          <a href={Resume}><button className="btn">Resume</button></a>
        </li>
      </ul>
      <div onClick={ToggleHandle} className="Toggle">
        <div className="ToggleLine"></div>
        <div className="ToggleLine"></div>
        <div className="ToggleLine"></div>
      </div>
    </nav>
  );
};

export default Header;
