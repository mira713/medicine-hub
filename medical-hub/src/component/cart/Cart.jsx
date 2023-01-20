import React, { useState } from "react";
import { CartContext } from "./CartContext"
import { useContext } from "react";
import { Box, Text, Flex, Stack, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import Counter from "./Counter"

function Cart() {
  const { cartProduct, setCartProduct } = useContext(CartContext);

  let tprice = 0;
  for (let p of cartProduct) {
    tprice += p.price;
  }

  const [tPrice, setTprice] = useState(tprice);

  const handleRemove = (id) => {
    const cProducts = cartProduct.filter((el) => el.id !== id);
    setCartProduct(cProducts);
  };

  const handlePrice = (val) => {
    setTprice(val);
  };

  return (
    <Flex w={"80%"} p={"20px"} m="20px auto" gap={4}>
      <Box>
        {cartProduct.map((p) => (
          <Box borderBottom="1px solid grey">
            <Flex
              w={"100%"}
              key={p.id}
              justify={"space-between"}
              p="10px"
              gap={"20px"}
            >
              <Stack maxW={"80%"} key={p.id} textAlign="justify">
                <Text color="#000" fontSize={"13px"} fontWeight={600}>
                  {p.title}
                </Text>
                <Text
                  color="grey"
                  fontSize={"13px"}
                  mb={"20px"}
                  fontWeight={600}
                >
                  {p.packsize}
                </Text>
                <Button
                  width={"min-content"}
                  size={"sm"}
                  leftIcon={<DeleteIcon />}
                  color={"grey"}
                  _hover={{
                    bg: "#ff6f61",
                    color: "#fff",
                  }}
                  onClick={() => handleRemove(p.id)}
                >
                  Remove
                </Button>
              </Stack>
              <Counter
                handlePrice={handlePrice}
                price={p.price}
                sPrice={p["strike-price"]}
              />
            </Flex>
          </Box>
        ))}
      </Box>
      <Box w={"40%"}>{tPrice}</Box>
    </Flex>
  );
}

export default Cart;
