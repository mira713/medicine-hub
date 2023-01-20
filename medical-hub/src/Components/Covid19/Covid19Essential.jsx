import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Covid19ProductCard from "./Covid19ProductCard";

const CovidProduct = [
  {
    src: "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/cold-cough.png",
    alt: "Cold & Cough",
  },
  {
    src: "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/track-your-vitals.png",
    alt: "Track your vitals",
  },
  {
    src: "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand-wash.png",
    alt: "Handwash & Sanitizers",
  },
  {
    src: "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/mask&face.png",
    alt: "Mask and Face",
  },
  {
    src: "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/immunity.png",
    alt: "Immunity booster",
  },
  {
    src: "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/disinfectants.png",
    alt: "Disinfectants",
  },
];

const Covid19Essential = () => {
  return (
    <>
      <Box>
        <Box my="3rem">
          <Text
            textAlign={"left"}
            fontSize={"2.1vw"}
            fontWeight="700"
            color="#3b3b3b"
          >
            COVID Essentials: Everything you need
          </Text>
        </Box>
        <SimpleGrid columns={[1,3]} spacing="40px">
          {CovidProduct.map((el,i) => {
            return <Covid19ProductCard src={el.src} key={i} alt={el.alt} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Covid19Essential;
