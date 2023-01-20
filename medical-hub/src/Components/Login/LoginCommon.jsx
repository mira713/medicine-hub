import React from "react";
import { useState } from "react";
import { greyColor, lightOrange } from "../../Colors/Color";
import { Navigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Button,
  HStack,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
const InitState = {
  email: "",
  password: "",
  username: "",
};
export default function LoginCommon({ isOpen, onClose, details }) {
  const [input, setInput] = useState("");
  const [values, setValues] = useState(InitState);
  const [isLogin, SetIsLogin] = useState(true);
  const [loading, SetLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  async function handleClick(e) {
    SetLoading(true);
    console.log(values);
    let res3 = await fetch("https://json-server-1mg.herokuapp.com/users");
    let res4 = await res3.json();
    console.log(res4, "res4");
    res4.map((elem) => {
      console.log(elem);
      if (elem.email === values.email && elem.password === values.password) {
        localStorage.setItem("isAuth", true);
        return true;
      }
    });
    SetLoading(false);
    return false;
  }
  const {
    Title,
    desc,
    inputLabel,
    inputWarning,
    buttonTitle,
    one,
    two,
    three,
  } = details;

  const isError = input === "";
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isLogin ? "Login" : "Sign Up"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" gap="10px">
          <Box>{isLogin ? desc : "Please enter user details"}</Box>
          {isLogin ? (
            <Box display="flex" flexDirection="column" gap="15px">
              {" "}
              <FormControl isInvalid={isError}>
                <FormLabel>Email</FormLabel>
                <Input
                  _hover={{ borderColor: { lightOrange } }}
                  _focus={{ borderColor: { lightOrange } }}
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {!isError ? (
                  <FormHelperText>{inputLabel}</FormHelperText>
                ) : (
                  <FormErrorMessage>{inputWarning}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isError}>
                <FormLabel>Password</FormLabel>
                <Input
                  _hover={{ borderColor: { lightOrange } }}
                  _focus={{ borderColor: { lightOrange } }}
                  type="password"
                  value={values.password}
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {!isError ? (
                  <FormHelperText>{inputLabel}</FormHelperText>
                ) : (
                  <FormErrorMessage>{inputWarning}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                color="white"
                bg={lightOrange}
                width="99%"
                _hover={{ bg: "teal.600" }}
                onClick={(e) => {
                  handleClick(e);
                  <Navigate to="/cart" />;
                }}
              >
                {buttonTitle}
              </Button>
              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box>
                  {Title === "Login" ? (
                    <Flex justifyContent="center">
                      <Text>"New on 1mg?"</Text>
                      <Text
                        color={lightOrange}
                        cursor="pointer"
                        onClick={() => {
                          SetIsLogin(!isLogin);
                        }}
                      >
                        Sign Up
                      </Text>
                    </Flex>
                  ) : (
                    <></>
                  )}{" "}
                </Box>
                <Box color={greyColor} fontWeight="400" fontSize="14px">
                  {two}
                </Box>
                <Box color={lightOrange}>{three}</Box>
              </Box>
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" gap="15px">
              {" "}
              <FormControl isInvalid={isError}>
                <FormLabel>Username</FormLabel>
                <Input
                  _hover={{ borderColor: { lightOrange } }}
                  _focus={{ borderColor: { lightOrange } }}
                  type="username"
                  name="username"
                  value={values.usernames}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {!isError ? (
                  <FormHelperText>{inputLabel}</FormHelperText>
                ) : (
                  <FormErrorMessage>
                    {"Usernames can contain letters (a-z) and numbers (0-9)"}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isError}>
                <FormLabel>Email</FormLabel>
                <Input
                  _hover={{ borderColor: { lightOrange } }}
                  _focus={{ borderColor: { lightOrange } }}
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {!isError ? (
                  <FormHelperText>{inputLabel}</FormHelperText>
                ) : (
                  <FormErrorMessage>{inputWarning}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isError}>
                <FormLabel>Password</FormLabel>
                <Input
                  _hover={{ borderColor: { lightOrange } }}
                  _focus={{ borderColor: { lightOrange } }}
                  type="password"
                  value={values.password}
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {!isError ? (
                  <FormHelperText>{inputLabel}</FormHelperText>
                ) : (
                  <FormErrorMessage>{inputWarning}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                color="white"
                bg={lightOrange}
                width="99%"
                _hover={{ bg: "teal.600" }}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                {isLogin ? "LOGIN" : "SIGN UP"}
              </Button>
              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box>
                  {Title === "Login" ? (
                    <Flex justifyContent="center">
                      <Text>"New on 1mg?"</Text>
                      <Text
                        color={lightOrange}
                        cursor="pointer"
                        onClick={() => {
                          SetIsLogin(!isLogin);
                        }}
                      >
                        Login
                      </Text>
                    </Flex>
                  ) : (
                    <></>
                  )}{" "}
                </Box>
                <Box color={greyColor} fontWeight="400" fontSize="14px">
                  {two}
                </Box>
                <Box color={lightOrange}>{three}</Box>
              </Box>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
