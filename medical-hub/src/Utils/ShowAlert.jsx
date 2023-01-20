import React from "react";
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

function ShowAlert({ title, subtitle, onClose, isOpen, status }) {
  if (isOpen) {
    return (
      <Alert status={status} mb={10}>
        <AlertIcon />
        <Box>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription display={{ base: "none", md: "block" }}>
            {subtitle}
          </AlertDescription>
        </Box>

        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
    );
  }
}

export default ShowAlert;
