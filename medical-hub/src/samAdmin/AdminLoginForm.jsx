import {
    Link,
    Text,
    Stack,
    Heading,
    Checkbox,
    FormControl,
    Input,
    Box,
    Button,
    FormLabel,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import { useContext, useState } from "react";
  import { fetchUser } from "../API"
  
  import { AuthContext } from "../context/AuthContext"
  import SucessAlert from "../Utils/SucessAlert"
  
  function AdminLoginForm() {
    const { handleIsReg, handleUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
  
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const {
      isOpen: isOpenAlert,
      onClose: onCloseAlert,
      onOpen: onOpenAlert,
    } = useDisclosure();
  
    const {
      isOpen: isOpenAlertError,
      onClose: onCloseAlertError,
      onOpen: onOpenAlertError,
    } = useDisclosure();
  
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const handleChange = (e) => [
      setLoginData({ ...loginData, [e.target.name]: e.target.value }),
    ];
  
    const handleLogin = (e) => {
      e.preventDefault();
      setLoading(true);
      fetchUser()
        .then((res) => {
          let flag = 0;
          for (let user of res.data) {
            if (
              user.email === loginData.email &&
              user.password === loginData.password
            ) {
              flag = 1;
  
              setLoginData({ email: "", password: "" });
              handleIsReg(true);
              handleUser({ ...user });
              setLoading(false);
              onOpen();
              break;
            }
          }
          if (!flag) {
            onOpenAlert();
            setLoading(false);
          }
        })
        .catch((er) => {
          onOpenAlertError();
          setLoading(false);
        });
    };
  
    return (
      <Stack
        textAlign={"left"}
        padding={{ base: "35px", md: "50px" }}
        maxW={{ base: "100%", md: "40%" }}
        minW="30%"
        shadow={{ base: "none", md: "xs" }}
      >
        <Heading fontSize="30px">Login Form</Heading>
        <Text color={"grey"} fontSize="14px" paddingBottom={{ base: 5, md: 10 }}>
          Please fill your registered email id and password.
        </Text>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                isRequired
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                isRequired
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"#ff6f61"}>Forgot password?</Link>
              </Stack>
             
             <Link href="/prolisting">
             <Button
                isLoading={loading}
                loadingText="Please Wait"
                variant="outline"
                spinnerPlacement="start"
                bg={"#ff6f61"}
                color={"white"}
                _hover={{
                  bg: "#ff4f61",
                }}
                // onClick={handleLogin}
              >
                Sign in
              </Button>

             </Link>
           
            
             
            </Stack>
          </Stack>
        </Box>
  
        <Text align={"center"} color="grey" pt={3}>
          Don't have an account ?{" "}
          <Link color={"#ff6f61"} fontWeight="700" href="/signup">
            Signup
          </Link>
        </Text>
        <Text align={"center"} color="grey" fontSize={"12px"}>
          By login, you agree to our Terms and Conditions & Privacy Policy
        </Text>
        <SucessAlert
          status="error"
          title="Sorry... Server Issue"
          description={"Please try again after sometime"}
          isOpen={isOpenAlertError}
          onClose={onCloseAlertError}
          clr="red.400"
        />
        <SucessAlert
          status="error"
          title="Incorrect Email or Password"
          description={"Please try again"}
          isOpen={isOpenAlert}
          onClose={onCloseAlert}
          clr="red.400"
        />
        <SucessAlert
          status={"success"}
          onClose={onClose}
          isOpen={isOpen}
          title=" Login Suceesfully !!!"
          description="Thanks for Login. Welcome to Capsule India's most trusted
              Pharma and HealthCare online service."
          clr="green.400"
        />
      </Stack>
    );
  }
  
  export default AdminLoginForm;
  