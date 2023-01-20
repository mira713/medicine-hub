import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import { BsStarFill } from "react-icons/bs";

import { useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../Contexts/CartContext";
import { fetchSingleProduct } from "../Components/API";

function SingleProduct() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { handleCartCount, handleCartProduct } = useContext(CartContext);

  const handleAdd = (e, i, p) => {
    handleCartCount(1);
    const btn = document.getElementById("btn" + i);
    btn.disabled = true;
    e.target.childNodes[0].data = "Added";
    handleCartProduct({ p });
  };

  useEffect(() => {
    fetchSingleProduct({ id }).then((res) => {
      setData({ ...data, ...res.data });
    });
  }, []);

  return (
    <Stack direction={"row"} maxW="80%" m={" 40px auto"}>
      <Flex maxW={"70%"} gap={3} m="auto">
        <Box minW={"40%"} align="right">
          <Image src={data.src} height={"300px"} />
        </Box>
        <Box textAlign={"left"} p={"0 15px"}>
          <Text color="#212121" fontSize={"25px"} mb={"10px"} fontWeight={600}>
            {data.title}
          </Text>
          <Flex gap={"20px"}>
            <Button
              bg="#1aab2a"
              size={"xs"}
              color={"#fff"}
              fontSize={"13px"}
              mb={"10px"}
              fontWeight={600}
            >
              {data.rating} <BsStarFill />
            </Button>
            <Text
              fontSize={"13px"}
              mb={"10px"}
              color="#ff6f61"
              fontWeight={600}
            >
              {data.CardRatingDetail}
            </Text>
          </Flex>
          <Text color="grey" fontSize={"18px"} mb={"10px"} fontWeight={600}>
            {data.packsize}
          </Text>
          <Text textAlign={"justify"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem at nam tempora voluptatem error hic vitae, excepturi
            iure nulla ducimus in. Atque minima accusantium quibusdam
            praesentium nisi eligendi, nesciunt quas. Minus ex, qui eum ipsa,
            libero commodi consequuntur autem quos minima corrupti unde at,
            dolorum doloremque nobis eius cumque culpa enim voluptas aliquam
            illum alias aperiam soluta optio. At, aspernatur! Quam repudiandae
            sapiente mollitia, commodi dicta, eaque natus officiis delectus
            autem esse distinctio tempore cupiditate fuga quidem optio veniam
            accusantium aperiam perspiciatis quae quia tempora. Error
            consequatur modi id repudiandae. Vero provident recusandae porro,
            neque vel autem pariatur unde voluptates? Perspiciatis commodi aut,
            molestias obcaecati delectus sunt voluptatem ab autem vero, nam
            doloribus laborum ipsum tenetur ratione, eaque fugiat natus! Placeat
            quidem nesciunt dolore saepe eum impedit natus quisquam iure
            necessitatibus facere ipsum eaque incidunt consequuntur ipsam
            voluptatem cum aliquam quasi architecto molestias a similique, ipsa
            illo. Id, minima ipsam?
          </Text>
        </Box>
      </Flex>
      <Box minW={"25%"} p={"0 15px"} textAlign="justify">
        <Heading color="#212121" fontSize={"25px"} mb={"10px"} fontWeight={600}>
          Price
        </Heading>
        <Flex gap={"10px"} align="center">
          <Text color="#212121" fontSize={"18px"} mb={"10px"} fontWeight={600}>
            {data.price ? `₹${data.price}` : null}
          </Text>
          <Text
            color="grey"
            fontSize={"13px"}
            mb={"10px"}
            textDecor="line-through"
            fontWeight={600}
          >
            {data["strike-price"] ? `₹${data["strike-price"]}` : null}
          </Text>
          <Text fontSize={"13px"} mb={"10px"} color="green" fontWeight={600}>
            {data["discount-percent"] ? `₹${data["discount-percent"]}` : null}
          </Text>
        </Flex>
        <Button
          w={"100%"}
          id={"btn" + id}
          size={"md"}
          onClick={(e) => handleAdd(e, id, data)}
          borderRadius="5px"
          bg={"#ff6f61"}
          _hover={{
            bg: "#ff4f61",
          }}
          color="#fff"
        >
          Add To Cart
        </Button>
      </Box>
    </Stack>
  );
}

export default SingleProduct;
