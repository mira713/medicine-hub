import { Center, Heading, useDisclosure, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {
  Button,
  FormControl,
  Flex,
  Stack,
  useColorModeValue,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import ShowAlert from "../../../Utils/ShowAlert"
import { AuthContext } from "../../../context/AuthContext"

export default function VerifyOtp({ mobileNumber, isOpen, onClose }) {
  const [otp, setOtp] = useState("");
  const { setMobileNumberAuth } = useContext(AuthContext);

  const {
    isOpen: isOpenAlert,
    onClose: onCloseAlert,
    onOpen: onOpenAlert,
  } = useDisclosure();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={{ base: "90%", md: "full" }}>
        <Flex
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
          borderRadius="10px"
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={"sm"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            p={6}
          >
            <VStack justify={"center"}>
              <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                Verify your Mobile Number
              </Heading>
              <ShowAlert
                status="error"
                title="Incrrect OTP"
                subtitle={""}
                isOpen={isOpenAlert}
                onClose={onCloseAlert}
              />
            </VStack>
            <Center
              fontSize={{ base: "sm", sm: "md" }}
              color={useColorModeValue("gray.800", "gray.400")}
            >
              We have sent a 4 Digit code on your Mobile Number
            </Center>
            <Center
              fontSize={{ base: "sm", sm: "md" }}
              fontWeight="bold"
              color={useColorModeValue("gray.800", "gray.400")}
            >
              {mobileNumber}
            </Center>
            <FormControl>
              <Center>
                <HStack>
                  <PinInput otp onComplete={(value) => setOtp(value)}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </Center>
            </FormControl>
            <Stack spacing={6}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  if (otp === "1234") {
                    onClose();
                    setMobileNumberAuth(true);
                  } else onOpenAlert();
                }}
              >
                Verify
              </Button>
            </Stack>
          </Stack>
        </Flex>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
