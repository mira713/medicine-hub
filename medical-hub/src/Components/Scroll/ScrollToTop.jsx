import React from "react";
import { useState, useEffect, useRef } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(false);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <div></div>;
};

export default ScrollToTop;
