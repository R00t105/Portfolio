import React from "react";
// import { useState } from "react";
import "./Work.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import NextArrow from "../../Assets/next-icon.png";
// import BackArrow from "../../Assets/back-icon.png";
import Project1 from "../../Assets/Project1.png";

const Work = () => {

    const images = [
        Project1,
        Project1,
        Project1,
      ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
      };

  return(
    <div className="Work Container">
    <h1 className="SectionTitle">Work</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="Card">
            <a href="https://r00t105.github.io/edusity/" target="_blabk"><img style={{border:"none", outline:"none"}} src={image} alt={`Slide ${index}`} /></a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Work;
