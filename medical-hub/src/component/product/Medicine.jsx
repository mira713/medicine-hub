import React from "react";
import { Text, Box, IconButton, Image, Flex, Heading, Button } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
// import AddCart from "../AddCart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getMedicineFun } from "./../../redux/ProductAction";
import { Link } from "react-router-dom";
import AddCart from './../../Pages/AddCart';


// Settings for the slider
const settings = {
  // dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function Medicine() {

  const [slider, setSlider] = React.useState(1);

  const datas = useSelector((store) => store.data2);
  console.log(datas);
  const dispatch = useDispatch();

  // These are the images used in the slide

  useEffect(() => {
    dispatch(getMedicineFun());
  }, []);

  return (
    <Box
      position={"relative"}
      height={"400px"}
      width={"100%"}
      bg={"white"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        zIndex={10}
        w="70px"
        h={"70px"}
        position={"absolute"}
        rounded={"50%"}
        shadow={"dark-lg"}
        top={"35%"}
        left="10px"
        bg="none"
        transform={"translate(0%, -50%)"}
        onClick={() => slider?.slickPrev()}
      >
        <FaAngleLeft fontSize={"50px"} color={"#ff6f61"} />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        zIndex={10}
        w="70px"
        h={"70px"}
        position={"absolute"}
        rounded={"50%"}
        shadow={"dark-lg"}
        top={"35%"}
        right="10px"
        bg="none"
        transform={"translate(0%, -50%)"}
        onClick={() => slider?.slickNext()}
      >
        <FaAngleRight fontSize={"40px"} color={"#ff6f61"} />
      </IconButton>

      <Box display={"flex"} justifyContent="space-between">
        <Box>
          <Heading ml="10px">Medicine</Heading>
        </Box>
        <Box>
        <Link to={"/medicine"}><Button colorScheme="red">SEE ALL</Button></Link> 
        </Box>
      </Box>

      {/* Slider */}
      
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {datas.map((el) => (
            <Box
      flexShrink={0}
      w={{ base: "50%", md: "15%" }}
      _hover={{ shadow: "xl" }}
      p={"15px"}
    >
      <Box w={"100%"} h={"150px"} mb={"10px"}>
        <Image h="100%" src={el.src} />
      </Box>
      <Text
        
        color="grey"
        fontSize={"15px"}
        mb={"10px"}
        fontWeight={600}
      >
        {el.title}
      </Text>
      <Text
    
        color="grey"
        fontSize={"13px"}
        mb={"10px"}
        fontWeight={600}
      >
        {el.packsize}
      </Text>
      <Flex gap={"10px"}>
        <Text
         
          color="grey"
          fontSize={"13px"}
          mb={"10px"}
          textDecor="line-through"
          fontWeight={600}
        >
          {el["strike-price"] ? `₹${el["strike-price"]}` : null}
        </Text>
        <Text
      
          fontSize={"13px"}
          mb={"10px"}
          color="green"
          fontWeight={600}
        >
          {el["discount-percent"]}
        </Text>
      </Flex>
      <Heading
      
        color="grey"
        fontSize={"15px"}
        mb={"10px"}
        fontWeight={600}
      >
        {el["price"] ? `₹${el["price"]}` : null}
      </Heading>
      <AddCart key={el.id} prodData={el} />
    </Box>
        ))}
      </Slider>
    </Box>
  );
}
