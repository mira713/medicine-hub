import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { HelpLineNumber } from "./Covid19HelplineNumber";

const Covid19HelpNumber = () => {
  return (
    <Box p="2rem" bgColor={"#fdf0df"}>
      <Text
        fontSize={"2.5vw"}
        fontWeight="600"
        color="#3b3b3b"
        textAlign={"left"}
      >
        State Helpline Numbers for coronavirus in India
      </Text>
      <Box>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th
                  bgColor={"#000"}
                  color="#ff6f61"
                  fontSize={"1.2vw"}
                  fontWeight="bold"
                >
                  State/UT
                </Th>
                <Th
                  bgColor={"#000"}
                  color="#ff6f61"
                  fontSize={"1.2vw"}
                  fontWeight="bold"
                >
                  State Helpline No.{" "}
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {HelpLineNumber.map((el) => {
                return (
                  <Tr bgColor={el.bgColor}>
                    <Td>{el.State}</Td>
                    <Td>{el.Number}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Covid19HelpNumber;
