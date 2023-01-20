import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Add = () => {
  return (
    <Box height={{base:"none",md:"200px"}} style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} >
      <Image src="https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png" alt="add" style={{padding:"20px"}} ></Image>
    </Box>
  );
};

export default Add;
