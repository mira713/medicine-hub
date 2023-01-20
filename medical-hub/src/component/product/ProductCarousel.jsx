import { Flex, Spacer, Stack, Text, Button, Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CarouselData } from "../API";
import CarouselCard from "./CarouselCard";

function ProductCarousel({ category }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    CarouselData({ category }).then((res) => {
      setData(res.data);
    });
  }, []);

  const slider = document.getElementById("slider");
  const handlePrev = () => {
    let w = slider.clientWidth;
    slider.scrollLeft = slider.scrollLeft - w;
  };

  const handleNext = (e) => {
    let w = slider.clientWidth;
    slider.scrollRight = slider.scrollRight - w;
    console.log(e);
  };

  return (
    <Stack>
      <Flex p={"25px 0 10px 0"} bg={"#f6f6f6"}>
        <Text ml={"20px"} fontSize="23px" fontWeight={600}>
          {category}
        </Text>
        <Spacer />
        <Button size={"sm"} bg="#ff6f61" _hover={{ bg: "#ff4f61" }} mr={"20px"}>
          <Link to={`category/${category}`}>See All</Link>
        </Button>
      </Flex>
      <Box position="relative" overflow={"hidden"} shadow={"lg"}>
        <Button
          display={"none"}
          zIndex={10}
          w="70px"
          h={"70px"}
          position={"absolute"}
          rounded={"50%"}
          shadow={"dark-lg"}
          top={"35%"}
          left="10px"
          onClick={handlePrev}
          bg="none"
        >
          <FaAngleLeft fontSize={"50px"} color={"#ff6f61"} />
        </Button>
        <Button
          zIndex={10}
          w="70px"
          h={"70px"}
          position={"absolute"}
          rounded={"50%"}
          shadow={"dark-lg"}
          top={"35%"}
          right="10px"
          bg="none"
          onClick={handleNext}
        >
          <FaAngleRight fontSize={"40px"} color={"#ff6f61"} />
        </Button>
        <Flex
          p={4}
          id="slider"
          textAlign="left"
          overflowX={"hidden"}
          gap="20px"
          scrollBehavior={"smooth"}
        >
          {data.map((p) => (
            <CarouselCard key={p.title} p={{ ...p }} />
          ))}
        </Flex>
      </Box>
    </Stack>
  );
}

export default ProductCarousel;
