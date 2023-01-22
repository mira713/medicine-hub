import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Covid19ReUsableBanner = ({
  ImgSrc,
  headerText,
  fontSize,
  Paragraph,
  btnText,
  paraFontSize,
}) => {
  return (
    <>
      <Box backgroundColor={" #fff0e3"} borderRadius="8px" w="100%" my="3rem">
        <HStack textAlign={"left"}>
          <Box p="2rem" w="65%">
            <Text
              my="3"
              fontSize={fontSize}
              color="#3b3b3b"
              //   padding={" 0 0 0 2.2vw"}
              fontWeight="700"
              lineHeight={"1.4"}
            >
              {headerText}
            </Text>

            <Text my="3" fontSize={paraFontSize}>
              {Paragraph}
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
              maxW="100%"
            >
              {btnText}
            </Button>
          </Box>
          <Box>
            <Image src={ImgSrc} w="55%" maxW="100%" float="right" />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Covid19ReUsableBanner;
