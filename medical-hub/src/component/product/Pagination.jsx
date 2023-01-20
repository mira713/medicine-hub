import { Button, ButtonGroup, HStack } from "@chakra-ui/react";
import React from "react";

function Pagination({ page, handlePage, total }) {
  const Buttons = [];

  for (let i = 0; i < total; i++) {
    Buttons.push(i + 1);
  }

  return (
    <HStack justify={"center"} mb={5}>
      <ButtonGroup>
        <Button disabled={page === 1} onClick={() => handlePage(page - 1)}>
          Prev
        </Button>
        {Buttons.map((btn) => (
          <Button
            key={btn}
            color={btn === page ? "#ff6f61" : "#000"}
            onClick={() => handlePage(btn)}
          >
            {btn}
          </Button>
        ))}
      </ButtonGroup>
      <Button disabled={page === total} onClick={() => handlePage(page + 1)}>
        Next
      </Button>
    </HStack>
  );
}

export default Pagination;
