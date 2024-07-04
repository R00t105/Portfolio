import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="Education Container">
      <h1>Education</h1>
      <div className="Cards">
        <div className="Card">
          <h2>Bachelor of Computer Science, Obour Institute</h2>
          <h4>Year of Graduation: 2024</h4>
          <p>
            I completed a four-year program at Obour Institute, where I gained a
            solid foundation in computer science principles and programming.
          </p>
        </div>
        <div className="Card">
          <h2>Software Engineering (Front End), ALX</h2>
          <h4>Year of Graduation: 2024</h4>
          <p>
            I graduated from the ALX program with a focus on front-end
            development, where I enhanced my skills in creating robust and
            scalable web applications.
          </p>
        </div>
        <div className="Card">
          <h2>Complete Front End Development Course, Udemy</h2>
          <h4>Year of Completion: 2023</h4>
          <p>
            I completed an extensive front-end development course on Udemy,
            covering essential technologies and best practices for modern web
            development.
          </p>
        </div>
        <div className="Card">
          <h2>Front End Development Courses on YouTube</h2>
          <h4>Year of Completion: 2022</h4>
          <p>
            I completed comprehensive front-end development offered by
            Elzero and Abdulrahman Gamal on YouTube, which provided
            hands-on experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
