import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Covid19ProductCard = ({ src, alt }) => {
  return (
    <Box
    borderRadius={"1rem"}
      _hover={{
        boxShadow:
          "0 2px 2px 0 rgb(0 0 0 / 24%), 0 7px 17px 0 rgb(0 0 0 / 19%)",
      }}
    >
      <Image src={src} alt={alt} borderRadius="0.8rem" />
    </Box>
  );
};

export default Covid19ProductCard;
