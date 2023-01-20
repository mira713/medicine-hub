import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sld.css";
import { useToast } from "@chakra-ui/react";

const SlidePhoto = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="box1">
      <Slider {...settings}>
        <div className="item">
          <div className="minibox">
            <img
              src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
              alt="1"
            />
          </div>
          <h2 className="head_car">Make Healthcare Simpler </h2>
          <div>
            Get medicine information, order medicines, book lab tests and
            consult doctors online from the comfort of your home.
          </div>
        </div>
        <div className="item">
          <div className="minibox">
            <img
              src="https://www.1mg.com/images/login-signup/Know-Your-Medicines.png"
              alt="2"
            />
          </div>
          <h2 className="head_car">Know Your Medicines </h2>
          <div>
            View medicine information like usage, side effects and cheaper
            substitutes before you take them.
          </div>
        </div>
        <div className="item">
          <div className="minibox">
            <img
              src="https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png"
              alt="3"
            />
          </div>
          <h2 className="head_car">Medicines, Home Delivered</h2>
          <div>
            Order any medicine or health product and we’ll deliver it for free.
            Enjoy discounts on everything.
          </div>
        </div>
        <div className="item">
          <div className="minibox">
            <img
              src="https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png"
              alt="4"
            />
          </div>
          <h2 className="head_car">Lab Tests at Home</h2>
          <div>
            Book any test from any lab. We'll collect the sample and send the
            reports. Save up to 80% every time.
          </div>
        </div>
        <div className="item">
          <div className="minibox">
            <img
              src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
              alt="5"
            />
          </div>
          <h2 className="head_car">Health Related Queries?</h2>
          <div>
            Consult our certified doctors from anywhere, anytime, and for free.
            We guarantee your privacy.
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlidePhoto;
