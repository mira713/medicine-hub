import { Box, Center, Flex, Heading, Image} from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MainCarousel() {
  return (
    <Box  shadow={{ base: "md", md: "md" }} p={{ base: "20px", md: "0" }} style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}} mb="10px">
      <Flex justify={{ base: "center" }}>
        <Carousel
          autoPlay
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          statusFormatter={false}
          width="100%"
       
        >
            <Box>
            <Image
              h={"250px"}
              minW="100%"
              objectFit={"cover"}
              border="1px solid"
              src="https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/a1ce5c99-dab1-4289-9257-479d0605a61f.png"
              borderRadius={{ base: "10px", md: "none" }}
            />
          </Box>
          <Box>
            <Image
              h={"250px"}
              minW="100%"
              objectFit={"cover"}
              border="1px solid"
              src="https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/f53e1730-d356-4672-b593-6dc4dfed7c5b.png"
              borderRadius={{ base: "10px", md: "none" }}
            />
          </Box>
          <Box>
            <Image
              h={"250px"}
              minW="100%"
              objectFit={"cover"}
              border="1px solid"
              src="https://onemg.gumlet.io/4cb7c872-264c-4a38-aadf-9378825d99e8_1668101825.jpg?w=899&h=200&format=auto"
              borderRadius={{ base: "10px", md: "none" }}
            />
          </Box>
          <Box>
            <Image
              h={"250px"}
              objectFit={"cover"}
              minW="100%"
              src="https://onemg.gumlet.io/38dd85ea-5f18-490a-9169-42d212a84194_1664975710.png?w=899&h=200&format=auto"
              borderRadius={{ base: "10px", md: "none" }}
            />
          </Box>
          <Box>
            <Image
              h={"250px"}
              objectFit={"cover"}
              minW="100%"
              borderRadius={{ base: "10px", md: "none" }}
              src="https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/69d64085-45bc-4201-bc0c-11708893a845.png"
            />
          </Box>
          <Box>
            <Image
              h={"250px"}
              objectFit={"cover"}
              minW="100%"
              borderRadius={{ base: "10px", md: "none" }}
              src="https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/b2b2609c-21e1-40df-a349-1b48d1981393.png"
            />
          </Box>
          <Box>
            <Image
              h={"250px"}
              objectFit={"cover"}
              minW="100%"
              borderRadius={{ base: "10px", md: "none" }}
              src="https://onemg.gumlet.io/bbbee1c7-2abc-4c94-9d70-c8f225a498f3_1670500264.png?w=899&h=200&format=auto"
            />
          </Box>
          <Box>
            <Image
              h={"250px"}
              minW="100%"
              objectFit={"cover"}
              borderRadius={{ base: "10px", md: "none" }}
              src="https://onemg.gumlet.io/7813da63-d0a5-4461-a897-274de753f95e_1663825942.png?w=899&h=200&format=auto"
            />
          </Box>
        </Carousel>
        <Image
          display={{ base: "none", md: "flex" }}
          h="250px"
          w={"40%"}
          src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/85bbe9a7-230b-4836-bff3-d5f451b426a7.png"
        />
      </Flex>
      <Center>
        <Heading
          display={{ base: "none", md: "flex" }}
          fontFamily={"Clear-Sans"}
          fontSize={"25px"}
          fontWeight={400}
          color={"grey"}
          py={"20px"}
          align={"center"}
        >
          Medicine Hub : India’s Leading Online Pharmacy & Healthcare Platform
        </Heading>
      </Center>
    </Box>
  );
}

export default MainCarousel;
