import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Counter({ price, sPrice }) {
  const [counter, setCounter] = useState(1);
  const [tPrice, setTPrice] = useState(price);

  useEffect(() => {
    setTPrice(counter * price);
  }, [counter]);

  const handleCounter = (val) => {
    setCounter(counter + val);
  };
  return (
    <Stack textAlign={"right"}>
      <Heading color="grey" fontSize={"15px"} fontWeight={600}>
        ₹{tPrice}
      </Heading>
      <Flex>
        <Text color="grey" fontSize={"13px"} mb={"10px"} fontWeight={300}>
          MRP{"   "}
        </Text>
        <Text
          color="grey"
          textDecor="line-through"
          fontSize={"12px"}
          fontWeight={800}
        >
          {" "}
          ₹ {sPrice}
        </Text>
      </Flex>
      <Flex>
        <Button
          size={"xs"}
          borderRadius="50%"
          border={"1px solid #ff6f61"}
          color="#ff6f61"
          bg={"#fff"}
          fontWeight={700}
          p={1}
          _hover={{}}
          disabled={counter === 1}
          onClick={() => handleCounter(-1)}
        >
          -
        </Button>
        <Text>{counter}</Text>
        <Button
          size={"xs"}
          borderRadius="50%"
          border={"1px solid #ff6f61"}
          bg="#ff6f61"
          color={"#fff"}
          p={1}
          fontWeight={700}
          _hover={{}}
          onClick={() => handleCounter(1)}
        >
          +
        </Button>
      </Flex>
    </Stack>
  );
}

export default Counter;
