import React from "react";
import { Link } from "react-router-dom";
import LoginCommon from "./Components/Login/LoginCommon";
import { Box, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box display={"flex"} textAlign={"center"} gap={"50px"} margin={"auto"}>
        <div>Home</div>
        <div>
          <Link to="/covid">
            <div className="text_inside_first_header_row">COVID19</div>
          </Link>
        </div>
        <div>
          <Text
            onClick={onOpen}
            fontSize={{
              base: "16px",
              sm: "16px",
              md: "18px",
              lg: "16px",
              xl: "14px",
            }}
            _hover={{ cursor: "pointer" }}
          >
            {" "}
            Login | Sign Up{" "}
          </Text>
          <LoginCommon
            isOpen={isOpen}
            onClose={onClose}
            details={{
              Title: "Login",
              desc: "Get access to your orders, lab tests & doctor consultations",
              inputLabel: "Email",
              inputWarning: "Please enter a valid Email ID",
              buttonTitle: "LOGIN",
              one: "New on 1mg? Sign Up",
              two: `By logging in, you agree to our
                Terms and Conditions & Privacy Policy`,
              three: "Need Help? Get In Touch",
            }}
          />
        </div>
      </Box>
    </>
  );
};

export default Navbar;
