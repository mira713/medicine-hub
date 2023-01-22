import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Covid19ManagementCard = ({
  headText,
  color,
  bgColor,
  testPara,
  testDetail,
  testHead,
}) => {
    console.log(bgColor);
  return (
    <Box bgColor={bgColor} p="1rem" borderRadius={"8px"}>
      <Text
        fontSize={"1.8vw"}
        fontWeight="700"
        lineHeight={"1.4"}
        textColor={color}
      >
        {headText}
      </Text>
      <hr
        style={{
          border: `2px solid ${color}`,
          margin: "0.5vw 1rem 1vw 1rem",
          padding: "1px",
          backgroundColor: color,
        }}
      />
      <Box>
        <Text fontSize={"1.1vw"} lineHeight="1.4" color={color}>
          {testPara}
        </Text>
      </Box>
      <hr
        style={{
          border: `2px solid ${color}`,
          margin: "0.6vw 1rem 1.5vw 1rem",
          padding: "0.1px",
          backgroundColor: "#993859",
        }}
      />
      <Box>
        <Text
          fontSize={"1.3vw"}
          fontWeight="600"
          lineHeight={1.4}
          mt="0.5vw"
          color={color}
        >
          {testHead}
        </Text>
        {testDetail.map((el,i) => {
          return (
            <ul key={i} style={{ color: color, padding: " 0.1rem 0.2rem 0 1rem" }}>
              <li key={i} style={{ fontSize: "1vw ", paddingTop: "0.3vw" }}>
                {el.text}
              </li>
            </ul>
          );
        })}
      </Box>
      <Box p="2rem"></Box>
      <Box>
        <Button
          w="100%"
          bgColor={color}
          color="white"
          _hover={{ bgColor: color, color: "#ff6f61" }}
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default Covid19ManagementCard;
