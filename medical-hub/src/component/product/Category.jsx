import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoryData } from "../API";
import Filter from "./Filter";
import Pagination from "./Pagination";
import styles from "./ProductCarousel.module.css";

function Category() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(12);
  const [sort, setSort] = useState("");

  let limit = 12;

  const { category } = useParams();

  useEffect(() => {
    fetchCategoryData({ page, limit, category, sort }).then((res) => {
      setTotal(res.headers["x-total-count"]);
      setData(res.data);
    });
  }, [page, limit, sort]);

  const handlePage = (val) => {
    setPage(val);
  };

  const handleSort = (val) => {
    setSort(val);
    console.log(val);
  };

  return (
    <Flex gap={4} mt="40px">
      <Filter handleSort={handleSort} />
      <Box width={"72%"} m={"auto"}>
        <Grid templateColumns={"repeat(4, 1fr)"} gap="20px 20px" p={3}>
          {data.map((p) => (
            <GridItem
              key={p.title}
              w="100%"
              cursor={"pointer"}
              className={styles.shadow}
              padding={4}
              textAlign="left"
            >
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
              <Flex gap={"10px"}>
                <Text
                  className={styles.text}
                  color="grey"
                  fontSize={"13px"}
                  mb={"10px"}
                  textDecor="line-through"
                  fontWeight={600}
                >
                  {p["strike-price"]}{" "}
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
                {p.price}
              </Heading>
            </GridItem>
          ))}
        </Grid>
        <Pagination
          page={page}
          total={Math.ceil(total / limit)}
          handlePage={handlePage}
        />
      </Box>
    </Flex>
  );
}

export default Category;
