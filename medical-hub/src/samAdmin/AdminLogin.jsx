import { Box, Flex } from "@chakra-ui/react";

import ServiceCarousel from "../Utils/ServiceCarousel"

import AdminLoginForm from "./AdminLoginForm";

function AdminLogin() {
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
        <AdminLoginForm/>
      </Flex>
    </Box>
  );
}

export default AdminLogin;
