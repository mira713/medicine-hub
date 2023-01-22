import { Box, Button, Image, Link,  Text } from "@chakra-ui/react";
import React from "react";
import ABrandsCard from "../component/Ayurveda/AyuevedaBrandCard";
//import AyurvedaAllPro from "../component/Ayurveda/AyurvedaAllPro";
import Popularcategories from "../component/Ayurveda/AyurvedaPopularCard";
import   {ApopularCategories, ApopularCats, AShopbyhealthconcerns, AyurAllProducts } from "../component/Ayurveda/AyurvedData";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


  const AFeaturedBrands = [
   {
     title: "Zandu",
     img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/65ec4ca9-d51d-4d47-8f41-d41d8360cb9f.png",
   },
   {
     title: "Baidyanath",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/xss6r4f7rmppefsbajqt.png",
   },
   {
     title: "Himalaya Wellness",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/f0tgbpli2sedmvovwiws.jpg",
   },
   {
     title: "Vicks",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/46335d6b-a9c7-4f1a-a93c-9ccd56810c2e.jpg",
   },
   {
     title: "Dabur",
     img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f3461d00-3633-48d3-914e-6b60983c23e6.png",
   },
   {
     title: "Lama Ayurveda",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/frsanurzxbrb4xgreqmh.jpg",
   },
   {
     title: "Aimil",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/4930d708-c5ad-4459-8b50-26785b75404c.png",
   },
   {
     title: "Kerala Ayurveda",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/sfwdklgppzwkrvrmtdlv.jpg",
   },
   {
     title: "Tata 1mg",
     img: "https://onemg.gumlet.io/f_auto,w_150,c_fit,a_ignore,h_150,q_auto/k53dcvamrahfazkkwqkp.jpg",
   },
 ];

const AyurvedaPage = () => {
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
    <Box>
      {/* <Carosel /> */}

      <Box bg="#f6f6f6">
        {/* Top image */}
        <Text
          textAlign="center"
          fontSize={{ base: "16px", md: "24px", lg: "26px" }}
          fontWeight="650"
          letterSpacing={{ base: "2px" }}
          mt={{ base: "15px", md: "30px", lg: "7%" }}
        >
          THE AYURVEDA STORE
        </Text>
        <Box p="1rem">
          <Image
            w="95%"
            m="auto"
            src="https://onemg.gumlet.io/a59f5ed0-39e9-4c22-ba5f-3eeaab9b873f_1671100364.jpg?w=1062&h=124&format=auto"
          />
        </Box>
        <Box mt="2rem">
          <Box
            display="flex"
            w="85%"
            margin="auto"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Shop by concerns
            </Text>
            <Link
              href="http://localhost:3000/products"
              target="_blank"
              textDecoration="none"
            >
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                borderColor="transparent"
                borderRadius="5px"
                cursor="pointer"
                padding="10px"
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <ABrandsCard />
        </Box>

        <Box p="1rem">
          <Image
            w="95%"
            m="auto"
            src="https://onemg.gumlet.io/a7477b93-f12c-4c40-a706-0bd3b1b74d31_1666337306.png?w=1062&h=124&format=auto"
          />
        </Box>

        <Box mt="2rem">
          <Box
            w="85%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Top Brands
            </Text>
            <Link
              href="http://localhost:3000/allProducts"
              target="_blank"
              textDecoration="none"
            >
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                borderColor="transparent"
                borderRadius="5px"
                cursor="pointer"
                padding="10px"
              >
                SEE ALL
              </Button>
            </Link>
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
                {AFeaturedBrands?.map((e, i) => (
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
          </Box>

        </Box>

        <Box p="1rem">
          <Image
            w="95%"
            m="auto"
            src="https://onemg.gumlet.io/f_auto,w_1062,a_ignore,h_118,q_auto/81890c09-ccbe-473d-9b64-5bf305dced96.jpg"
          />
        </Box>

        <Box mt="2rem">
          <Box
            w="85%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Popular categories
            </Text>
            <Link
              href="http://localhost:3000/allProducts"
              target="_blank"
              textDecoration="none"
            >
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                borderColor="transparent"
                borderRadius="5px"
                cursor="pointer"
                padding="10px"
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <Popularcategories />
        </Box>

        <Box mt="2rem">
          <Box
            w="85%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            {/* <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              All Products
            </Text>
            <Link
              href="http://localhost:3000/allProducts"
              target="_blank"
              textDecoration="none"
            >
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                borderColor="transparent"
                borderRadius="5px"
                cursor="pointer"
                padding="10px"
              >
                SEE ALL
              </Button>
            </Link> */}
          </Box>
          {/* <AyurvedaAllPro /> */}
        </Box>
      </Box>
    </Box>
  );
}

export default AyurvedaPage
