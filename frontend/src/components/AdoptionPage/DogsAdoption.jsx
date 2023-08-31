import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Filters from "./Filters";
import { getAdoptionData } from "../../Redux/adoptionReducer/action";
import PetCard from "./PetCard";

const DogsAdoption = () => {
  let store = useSelector((store) => store.adoptionPetsReducer.adoptionData);
  let data = store.data;

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      params: {
        page: page,
      },
    };
    dispatch(getAdoptionData(data));
    console.log(data);
  }, [page]);
  const { totalPages } = store;
  console.log(store);

  return (
    <Box>
      <Box backgroundColor={"#efeef1 "} display={"flex"} flexDirection={["column", "column", "row"]}>
        <Box border="1px solid #ffffff" width={["100%", "100%", "25%"]} padding={4}>
          <Filters />
        </Box>
        <SimpleGrid
          columns={[1, 2, 3, 4]} // Responsive column count
          spacing={6} // Adjust spacing between cards
          textAlign="center"
          width={["100%", "100%", "75%"]} // Adjust the width as needed
          marginTop={["20px", "20px", "0"]} // Adjust margin top for spacing
        >
          {data?.map((el) => (
            <PetCard {...el} key={el._id} />
          ))}
        </SimpleGrid>
      </Box>
      <Box width={"100%"} display="flex" justifyContent="center" marginY="20px">
        <Button
          backgroundColor={"teal"}
          width={["45%", "45%", "70px"]} // Responsive width
          height="30px"
          color="white"
          margin={["0px 2.5%", "0px 2.5%", "0px 20px"]} // Responsive margin
          _hover={{ backgroundColor: "teal", color: "white" }}
          isDisabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <Button
          backgroundColor={"teal"}
          width={["45%", "45%", "70px"]} // Responsive width
          height="30px"
          color="white"
          _hover={{ backgroundColor: "teal", color: "white" }}
          isDisabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default DogsAdoption;
