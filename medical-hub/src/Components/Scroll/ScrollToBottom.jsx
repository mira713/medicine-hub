
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from "react-icons/fa";


const ScrollToBottom = () => {

    const [showBottomBtn, setShowBottmBtn] = useState(true);
    const ref=useRef(null)

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShowBottmBtn(false);
            } else {
                setShowBottmBtn(true);
            }
        });

    }, []);

    const goToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
    };

    return (
        <div ref={ref} className="btm-to-top">
            
            { showBottomBtn && (
                <FaAngleDown
                    className="icon-position1 icon-style1"
                    onClick={goToBottom}
                />
            )}
          
        </div>
    );
};

export default ScrollToBottom;
