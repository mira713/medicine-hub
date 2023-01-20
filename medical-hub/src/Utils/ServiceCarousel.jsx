import React from "react";

import { Box, Image, Text, Heading } from "@chakra-ui/react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ServiceCarousel() {
  return (
    <Box maxW={{ base: "100%", md: "50%" }} p={{ base: "20px", md: "40px" }}>
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        statusFormatter={false}
        infiniteLoop
      >
        <Box>
          <Image
            src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
            maxW={"100px"}
            h="100px"
          />
          <Heading fontSize={"20px"} color="grey" m="20px 0">
            Make HealthCare Simpler
          </Heading>
          <Text color={"grey"}>
            Get medicine information, order medicines, book lab tests and
            consult doctors online from the comfort of your home.
          </Text>
        </Box>
        <Box>
          <Image
            src="https://www.1mg.com/images/login-signup/Know-Your-Medicines.png"
            maxW={"100px"}
            h="100px"
          />
          <Heading fontSize={"20px"} color="grey" m="20px 0">
            Know Your Medicines
          </Heading>
          <Text color={"grey"}>
            View medicine information like usage, side effects and cheaper
            substitutes before you take them.
          </Text>
        </Box>
        <Box>
          <Image
            src="https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png"
            maxW={"100px"}
            h="100px"
          />
          <Heading fontSize={"20px"} color="grey" m="20px 0">
            Medicines Home Delivered
          </Heading>
          <Text color={"grey"}>
            Order any medicine or health product and we’ll deliver it for free.
            Enjoy discounts on everything.
          </Text>
        </Box>
        <Box>
          <Image
            src="https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png"
            maxW={"100px"}
            h="100px"
          />
          <Heading fontSize={"20px"} color="grey" m="20px 0">
            Lab Test at Home
          </Heading>
          <Text color={"grey"}>
            Book any test from any lab. We'll collect the sample and send the
            reports. Save up to 80% every time.
          </Text>
        </Box>
      </Carousel>
    </Box>
  );
}

export default ServiceCarousel;
