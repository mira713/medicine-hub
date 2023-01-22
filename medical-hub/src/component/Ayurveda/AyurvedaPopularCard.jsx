
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 export const ApopularCategories = [
   {
     title: "Herbal Juice",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/ivjorvjmbme1ys5eotzp.png",
   },
   {
     title: "Immunity Booster",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/yiwmc9rhs9hpdlryf1ct.png",
   },
   {
     title: "Ayurveda Personal Care",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/hefwogkqslwfaguafoyl.jpg",
   },
   {
     title: "Ayurvedic Medicines",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/axbklye5kaxb4wrdojxc.jpg",
   },
   {
     title: "Herbal Supplements",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/vglos7isv99jg3zudrek.png",
   },
   {
     title: "Unani Mediicines",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/qfs4m0hyxczmvv5z3bp3.png",
   },
 ];
const Popularcategories = () => {
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
        {ApopularCategories?.map((e, i) => (
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
            <Image w={"70%"} m="auto" src={e.img} />
            <Text>{e.title}</Text>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Popularcategories;