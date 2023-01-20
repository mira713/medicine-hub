import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function SucessAlert({ isOpen, onClose, title, description, status, clr }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={{ base: "90%", md: "full" }}>
        <Alert
          status={status}
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          maxH={"300px"}
          p={5}
          borderRadius="5px"
        >
          <CloseButton
            alignSelf="flex-end"
            position="relative"
            right={-1}
            top={-1}
            onClick={onClose}
          />
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            {title}
          </AlertTitle>
          <AlertDescription maxWidth="sm" mb={10}>
            {description}
          </AlertDescription>{" "}
          <Button bg={clr} color="#fff" onClick={onClose} _hover={{}}>
            <Link to="/"> Go Back</Link>
          </Button>
        </Alert>
      </ModalContent>
    </Modal>
  );
}

export default SucessAlert;
