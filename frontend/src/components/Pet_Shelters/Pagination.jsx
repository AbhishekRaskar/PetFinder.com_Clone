import { Button, Stack, Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({ page, setpage }) => {
  const totalPages = useSelector(
    (store) => store.shelterReducer.shelterData.totalPages
  );
  console.log(totalPages);
  const button = new Array(totalPages).fill("");
  return (
    <Box>
      {button.map((_, i) => {
        return (
          <Button
            margin={1}
            disabled={page === i + 1}
            onClick={() => setpage(i + 1)}
          >
            {i + 1}
          </Button>
        );
      })}
    </Box>
  );
};

export default Pagination;
