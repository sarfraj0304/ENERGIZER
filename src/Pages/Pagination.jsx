import { Box, Button } from "@chakra-ui/react";
import React from "react";

export const Pagination = ({ currentPage, onchange }) => {
  return (
    <Box
      w={{ base: "50%", md: "15%" }}
      m="auto"
      display="flex"
      justifyContent="space-around"
    >
      <Button
        disabled={currentPage === 1}
        onClick={() => onchange(currentPage - 1)}
        size={{ base: "sm", md: "md" }}
      >
        PREV
      </Button>
      <Button size={{ base: "sm", md: "md" }} disabled={true}>
        {currentPage}
      </Button>
      <Button
        size={{ base: "sm", md: "md" }}
        onClick={() => onchange(currentPage + 1)}
      >
        NEXT
      </Button>
    </Box>
  );
};
