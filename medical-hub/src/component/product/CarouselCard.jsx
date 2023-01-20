import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import styles from "./ProductCarousel.module.css";

function CarouselCard({ p }) {
  return (
    <Box
      flexShrink={0}
      w={{ base: "50%", md: "15%" }}
      _hover={{ shadow: "xl" }}
      p={"15px"}
    >
      <Box w={"100%"} h={"150px"} mb={"10px"}>
        <Image h="100%" src={p.src} />
      </Box>
      <Text
        className={styles.text}
        color="grey"
        fontSize={"15px"}
        mb={"10px"}
        fontWeight={600}
      >
        {p.title}
      </Text>
      <Text
        className={styles.text1}
        color="grey"
        fontSize={"13px"}
        mb={"10px"}
        fontWeight={600}
      >
        {p.packsize}
      </Text>
      <Flex gap={"10px"}>
        <Text
          className={styles.text}
          color="grey"
          fontSize={"13px"}
          mb={"10px"}
          textDecor="line-through"
          fontWeight={600}
        >
          {p["strike-price"] ? `₹${p["strike-price"]}` : null}
        </Text>
        <Text
          className={styles.text}
          fontSize={"13px"}
          mb={"10px"}
          color="green"
          fontWeight={600}
        >
          {p["discount-percent"]}
        </Text>
      </Flex>
      <Heading
        className={styles.text}
        color="grey"
        fontSize={"15px"}
        mb={"10px"}
        fontWeight={600}
      >
        {p["price"] ? `₹${p["price"]}` : null}
      </Heading>
    </Box>
  );
}

export default CarouselCard;
