import {
  GridItem,
  Box,
  Image,
  Text,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCarousel.module.css";
import { BsStarFill } from "react-icons/bs";

function ProductCard({ handleAdd, id, p }) {
  return (
    <GridItem
      w="100%"
      className={styles.shadow}
      padding={4}
      textAlign="left"
      bg="#fff"
    >
      <Link to={`/products/${p.id}`}>
        <Box maxW={"100%"} h={"150px"} mb={"10px"} align={"center"}>
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
        <Flex gap={"20px"}>
          <Button
            bg="#1aab2a"
            size={"xs"}
            color={"#fff"}
            fontSize={"13px"}
            mb={"10px"}
            fontWeight={600}
            _hover={{}}
          >
            {p.rating} <BsStarFill />
          </Button>
          <Text fontSize={"13px"} mb={"10px"} color="#ff6f61" fontWeight={600}>
            {p.CardRatingDetail}
          </Text>
        </Flex>
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
            {p["discount-percent"] ? `₹${p["discount-percent"]}` : null}
          </Text>
        </Flex>{" "}
      </Link>
      <Flex align={"center"} justify="space-between">
        <Heading
          className={styles.text}
          color="grey"
          fontSize={"15px"}
          mb={"10px"}
          fontWeight={600}
        >
          {p["price"] ? `₹${p["price"]}` : null}
        </Heading>
        <Button
          zIndex={100}
          bg={"#fff"}
          id={"btn" + id}
          size={"sm"}
          color="#ff6f61"
          _hover={{ bg: "#ff6f61", color: "#fff" }}
          onClick={(e) => handleAdd(e, id, p)}
        >
          Add
        </Button>
      </Flex>
    </GridItem>
  );
}

export default ProductCard;
