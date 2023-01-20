import { Link, Text, Stack, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { MobileAuthForm, UserAuthForm } from "./Form";
import { AuthContext } from "../../../context/AuthContext"

function SignupForm() {
  const [mobileNumber, setMobileNumber] = useState("");
  const { mobileNumberAuth } = useContext(AuthContext);

  const handleNumber = (number) => {
    setMobileNumber(number);
  };

  return (
    <Stack
      textAlign={"left"}
      padding={{ base: "35px", md: "50px" }}
      maxW={{ base: "100%", md: "40%" }}
      minW="30%"
      shadow={{ base: "none", md: "xs" }}
    >
      <Heading fontSize="30px">Sign Up</Heading>
      <Text color={"grey"} fontSize="14px" paddingBottom={{ base: 5, md: 10 }}>
        Please enter your mobile number to receive one time password (OTP)
      </Text>

      {mobileNumberAuth ? (
        <UserAuthForm mobileNumber={mobileNumber} />
      ) : (
        <MobileAuthForm
          handleNumber={handleNumber}
          mobileNumber={mobileNumber}
        />
      )}

      <Text align={"center"} color="grey" pt={3}>
        Have an account ?{" "}
        <Link color={"#ff6f61"} fontWeight="700" href="/login">
          Login
        </Link>
      </Text>
      <Text align={"center"} color="grey" fontSize={"12px"}>
        By signing up, you agree to our Terms and Conditions & Privacy Policy
      </Text>
    </Stack>
  );
}

export default SignupForm;
