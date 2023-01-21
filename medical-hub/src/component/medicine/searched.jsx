import React from 'react'
import { useEffect,useState } from 'react';
import {
    Box,
    Flex,
    SimpleGrid,
    GridItem,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  import styles from "./ProductCarousel.module.css";
  import Filter from "./Filter";
  

let data= [
    {
        "id" : 1,
        "src" : "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/p8cjjuj9qbdrikxet8s6.png",
        "price" : 400,
        "title" : "Cadbury Bournvita Health Drink",
        "name" : "bournvita"
    },
    {
        "id" : 2,
        "src" : "https://onemg.gumlet.io/images/c_fit,w_150,q_auto,f_auto,h_150/wkmxonjuot7skrmdoxxx/protinex-health-and-nutritional-drink-tasty-chocolate.jpg",
        "price" : 500,
        "title" : "Protinex Health and nutrition drink",
        "name" : "protinex"
    },
    {
        "id" : 3,
        "src" : "https://onemg.gumlet.io/images/c_fit,w_150,q_auto,f_auto,h_150/hnn7c8flhjc0uaa0ntaz/complan-nutrition-and-health-drink-royale-chocolate.jpg",
        "price" : 450,
        "title" : "Complan, Nutrition and Health Drink",
        "name" : "complan"
    }, 
    {
        "id" : 4,
        "src" : "https://onemg.gumlet.io/f_auto,w_150,h_150,q_auto,c_fit/cropped/bpgstknem0udqzp9p4dm.jpg",
        "price" : 400,
        "title" : "Sugar Free Gold Low Calorie Sweetener",
        "name" : "sugarfree"
    },
    {
        "id" : 5,
        "src" : "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ncla4uynzqpe9h6zuphn.jpg",
        "price" : 128,
        "title" : "Detol Liquid Handwash",
        "name" : "detol handwash"
    }
]
const Payment = () => {
    let [da,setData] = useState([])
   
    const [sort, setSort] = useState("");

    const handleSort = (val) => {
      setSort(val);
      console.log(val);
    };
  useEffect(()=>{
    let k = localStorage.getItem('searched');
    data.map((e)=>{
      if(e.name===k){
        setData([...da,e])
      }
     })
  },[])
  return (
    <div>
      <Flex>
      <Filter handleSort={handleSort} />
        
        
        <SimpleGrid gap="20px 20px" p={3}columns={[1,2,3,4]}>
          {da.map((p) => (
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
           
        </Flex>
    </div>
  )
}

export default Payment