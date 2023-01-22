
import { Box, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
// import { Box } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const AShopbyhealthconcerns = [
  {
    title: "Diabetes Care",
    img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
  },
  {
    title: "Cardiac Care",
    img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
  },
  {
    title: "Stomach Care",
    img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/18e90e64-9e8c-47c5-ae33-508903429450.png",
  },
  {
    title: "Liver Care",
    img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/14f0bebe-6220-4ac7-b4bb-c5b425975af3.png",
  },
  {
    title: "Boen,joint & Muscle care",
    img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png",
  },
  {
    title: "Kidney Care",
    img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/555f6a24-3e20-41ee-a03b-e3dbda183392.png",
  },
  {
    title: "Pain relief",
    img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5fa692ad-6647-4db5-9cb4-eb0bd9111331.png",
  },
  {
    title: "Respiratory Care",
    img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4a788b46-97f3-460e-afb6-428368f779ee.png",
  },
  {
    title: "Eye Care",
    img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/631e3dca-3d5b-49f8-832b-8341ec4784e7.png",
  },
];
const ABrandsCard = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
      <Box p="2" h="fitContent" bg="white">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="300ms"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {AShopbyhealthconcerns?.map((e, i) => (
            <Box
              key={i}
              h="95%"
              p="1rem"
              textAlign="center"
              borderRadius="5px"
              _hover={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
              cursor="pointer"
            >
              <Link
                href="http://localhost:3000/products"
                target="_blank"
                textDecoration="none"
                textColor="gray"
              >
                <Image w={"70%"} m="auto" src={e.img} />
                <Text fontSize={"17px"}>{e.title}</Text>
              </Link>
            </Box>
          ))}
        </Carousel>
      </Box>
    );
};

export default ABrandsCard;