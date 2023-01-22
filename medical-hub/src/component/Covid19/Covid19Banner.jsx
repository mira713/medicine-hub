import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Covid19Banner = () => {
  return (
    <>
      <Box backgroundColor={" #fff0e3"} borderRadius="8px" w="100%">
        <HStack textAlign={"left"}>
          <Box px="2rem">
            <Text
              my="3"
              fontSize={"2.2vw"}
              color="#3b3b3b"
              //   padding={" 0 0 0 2.2vw"}
              fontWeight="700"
              lineHeight={"1.4"}
            >
              COVID-19 RT-PCR test
            </Text>

            <Text my="3" fontSize={"1.8vw"}>
              Gold standard test to detect active coronavirus infection
            </Text>
            <Button
              my="3"
              bgColor={"#ff6f61!important"}
              color="white"
              _hover={{
                color: "black",
                boxShadow:
                  "0 2px 2px 0 rgb(0 0 0 / 24%), 0 7px 17px 0 rgb(0 0 0 / 19%)",
              }}
              w="40%"
            >
              Book Now
            </Button>
          </Box>
          <Box>
            <Image
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/rtpcr.png"
              w="65%"
              maxW="100%"
              float="right"
            />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Covid19Banner;
