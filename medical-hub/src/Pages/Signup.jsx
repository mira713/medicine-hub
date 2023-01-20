import { Box, Flex } from "@chakra-ui/react";
import ServiceCarousel from "../Utils/ServiceCarousel"
import SignupForm from "../component/Login_finally/Auth/SignupForm"

function Signup() {
  return (
    <Box>
      <Flex
        flexDir={{ base: "column-reverse", md: "row" }}
        maxW={{ base: "99%", md: "80%" }}
        m={{ base: "20px auto", md: "40px auto" }}
        justifyContent="space-between"
        alignItems="center"
        gap={{ base: "20px", md: "auto" }}
      >
        <ServiceCarousel />
        <SignupForm />
      </Flex>
    </Box>
  );
}

export default Signup;
