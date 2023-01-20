import { useContext, useState } from "react";
import { postUserData } from "../../../API"
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  FormControl,
  useDisclosure,
  Box,
  FormLabel,
  HStack,
  InputRightElement,
  Stack,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import VerifyOtp from "./VerifyOtp";
import ShowAlert from "../../../Utils/ShowAlert"
import SucessAlert from "../../../Utils/SucessAlert"
import { Link } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext"

function MobileAuthForm({ handleNumber, mobileNumber }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();

  return (
    <FormControl>
      <InputGroup marginBottom={{ base: 10, md: 20 }}>
        <InputLeftAddon
          children={"+91"}
          borderRadius={0}
          bg="#fff"
          border={0}
        />
        <Input
          type={"number"}
          borderRadius={0}
          placeholder="Enter Your Number"
          variant="flushed"
          focusBorderColor="#ff6f61"
          isRequired
          value={mobileNumber}
          onChange={(e) => handleNumber(e.target.value)}
        />
      </InputGroup>

      <ShowAlert
        isOpen={isOpenAlert}
        onClose={onCloseAlert}
        status="error"
        title="Invalid Mobile Number"
        subtitle={"Please check and try again"}
      />

      <Button
        bg={"#ff6f61"}
        onClick={() => {
          return mobileNumber.length !== 10 ? onOpenAlert() : onOpen();
        }}
        _hover={{
          bg: "#ff4f61",
        }}
        w="100%"
      >
        Continue
      </Button>
      <VerifyOtp isOpen={isOpen} onClose={onClose} />
    </FormControl>
  );
}

const intialData = {
  fName: "",
  lName: "",
  email: "",
  gender: "Male",
  password: "",
  mobileNumber: "",
};

function UserAuthForm({ mobileNumber }) {
  const { handleIsReg, handleUser } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenAlert,
    onClose: onCloseAlert,
    onOpen: onOpenAlert,
  } = useDisclosure();
  const [userData, setUserData] = useState(intialData);
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      mobileNumber: mobileNumber,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    postUserData(userData)
      .then((res) => {
        onOpen();
        handleIsReg(true);
        handleUser({ ...userData });
        setLoader(false);
      })
      .catch((er) => {
        setLoader(false);
        onOpenAlert();
      });
    setUserData(intialData);
  };

  const { fName, lName, email, gender, password } = userData;

  return (
    <FormControl>
      <Stack spacing={8} mx={"auto"} maxW={"lg"}>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="fName"
                    value={fName}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lName"
                    value={lName}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Gender</FormLabel>
              <Select name="gender" value={gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer No to say">Prefer NO to say</option>
              </Select>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Link to="/">
              <Button
                isLoading={loader}
                loadingText=" Registering"
                variant="outline"
                spinnerPlacement="start"
                bg={"#ff6f61"}
                w="100%"
                onClick={handleSubmit}
                _hover={{
                  bg: "#ff4f61",
                }}
              >
                Register
              </Button>
            </Link>
          </Stack>
        </Box>
      </Stack>
      <SucessAlert
        status="error"
        title="oops... Something Went Wrong"
        description={"Please try again"}
        isOpen={isOpenAlert}
        onClose={onCloseAlert}
        clr="red.400"
      />
      <SucessAlert
        status={"success"}
        onClose={onClose}
        isOpen={isOpen}
        title=" Registered Suceesfully !!!"
        description="Thanks for registering. Welcome to Capsule India's most trusted
            Pharma and HealthCare online service."
        clr="green.400"
      />
    </FormControl>
  );
}

export { MobileAuthForm, UserAuthForm };
