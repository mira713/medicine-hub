import {
  Box,
  Flex,
  SimpleGrid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoryData } from "./API";
import Filter from "./Filter";
import Pagination from "./Pagination";
import styles from "./ProductCarousel.module.css";
import ProductCarousel from "./ProductCarousel";


const datass=[
  {
      id:1,
      img:"https://onemg.gumlet.io/369ae12d-32cd-49e6-9874-4a5e29e294e3_1673187169.jpg?blur=80&format=auto"

  },
{
  id:2,
  img:"https://onemg.gumlet.io/087484d8-5d4a-4bfa-adba-e4c3eadf159a_1670221190.jpg?blur=80&format=auto"
},
  {
      id:3,
      img:"https://onemg.gumlet.io/3e2ea140-5335-41be-9634-ca9abb61867e_1667453850.jpg?blur=80&format=auto"
  },

  {
      id:4,
      img:"https://onemg.gumlet.io/81ac0f01-674e-4569-b47f-326d0103bfc6_1669038800.jpg?w=1027&h=120&format=auto"
  },
  {
    id:5,
    img:"https://onemg.gumlet.io/f_auto,q_auto,w_1027,a_ignore,h_120,c_fit/jap1cjkrdvs8jd6rlsxn.png"
}
]

function Category() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(12);
  const [sort, setSort] = useState("");

  let limit = 12;

  const { category } = useParams();

  useEffect(() => {
    
    fetchCategoryData({ page, limit, category:"products", sort }).then((res) => {
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


  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <Flex gap={4} mt="40px">
      <Filter handleSort={handleSort} />
      <Box width={"72%"} m={"auto"}>
      <Slider {...settings}>
        {
            datass.map((item)=>(
              <div key={item.id}>
        <img 
        src={item.img} alt="head"/>
              </div>
            ))
        }
    </Slider>
      <Heading size="16px">shop by category</Heading>
      <ProductCarousel category={"medicine"} />
        <Heading size="16px">All Products</Heading>
        <SimpleGrid gap="20px 20px" p={3}columns={[1,2,3,4]}>
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
              <Flex justifyContent="space-between">
              <Heading
                className={styles.text}
                color="grey"
                fontSize={"15px"}
                mb={"10px"}
                fontWeight={600}
              >
                {p.price}
              </Heading>
              <Heading
                className={styles.text}
                color="#ff6f61"
                fontSize={"15px"}
                mb={"10px"}
                fontWeight={600}
              >
                ADD
              </Heading>
              </Flex>
            </GridItem>
          ))}
        </SimpleGrid>
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
