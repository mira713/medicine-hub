import {
  Avatar,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Button,
  Stack,
  Box,
} from "@chakra-ui/react";
import React, { useContext } from "react";

import { AuthContext } from "../../../context/AuthContext"

function UserCard() {
  const { handleIsReg, userData, handleUser } = useContext(AuthContext);
  return (
    <Box display={{ base: "none", md: "none", lg: "flex" }}>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Flex align={"center"} gap="5px">
            <Avatar
              size={"sm"}
              src={"https://avatars.dicebear.com/api/male/username.svg"}
            />{" "}
            <Text
              textDecor={"none"}
              fontWeight={600}
              fontSize="18px"
              color={"#000"}
            >
              {userData.fName}
            </Text>
          </Flex>
        </MenuButton>

        <MenuList alignItems={"center"} p={"30px"}>
          <Center>
            <Avatar
              size={"2xl"}
              src={"https://avatars.dicebear.com/api/male/username.svg"}
            />
          </Center>
          <Stack p={"10px"}>
            <Text
              color={"#ff6f61"}
              fontFamily={"Clear-Sans"}
              fontWeight="700"
              fontSize={"20px"}
            >
              {userData.fName + " " + userData.lName}
            </Text>
            <Text
              color={"#000"}
              fontFamily={"Clear-Sans"}
              fontWeight="600"
              fontSize={"16px"}
            >
              {userData.email}
            </Text>
          </Stack>

          <MenuDivider />
          <MenuItem>Account Settings</MenuItem>
          <MenuItem
            onClick={() => {
              handleIsReg(false);
              handleUser({});
            }}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default UserCard;
