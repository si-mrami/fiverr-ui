import React from "react";
import "./Slider.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {



  return (
    <div className="slider">
      <div className="container">
        <h1>Most Wanted Services</h1>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
