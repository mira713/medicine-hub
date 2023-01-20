import { Flex, Spacer, Stack, Text, Button, Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CarouselData } from "./API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function ProductCarousel({ category }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    CarouselData({ category }).then((res) => {
      setData(res.data);
    });
  }, []);
 console.log(data)

  // const slider = document.getElementById("slider");
  // const handlePrev = () => {
  //   let w = slider.clientWidth;
  //   slider.scrollLeft = slider.scrollLeft - w;
  // };

  // const handleNext = (e) => {
  //   console.log('fist',e)
  //   let w = slider.clientWidth;
  //   slider.scrollRight = slider.scrollRight - w;
  //   console.log(e);
  // };
//console.log(data.length)
  let settings ={
      dots:true,
      speed:500,
      slidesToShow:5,
      slidesToScroll:1,
      infinite:true
  };
  return (
   
    <Stack>
      <Flex p={"25px 0 10px 0"} bg={"#f6f6f6"}>
        <Text ml={"20px"} fontSize="23px" fontWeight={600}>
          {category}
        </Text>
        <Spacer />
      </Flex>
      <Box position="relative" overflow={"hidden"} shadow={"lg"}> 
       <Slider {...settings} style={{marginBottom:"50px",display:"block"}}>
       
        {
          
            data.map((item,id)=>(
              <Box key={id} _hover={{ shadow: "xl" }}>
        <img 
        src={item.src} alt="head"/>
              </Box>
            ))
            
        }
    </Slider>
    </Box>
    
     
    </Stack>
  );
}

export default ProductCarousel;
