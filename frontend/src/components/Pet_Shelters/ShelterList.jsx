import React, { useEffect, useState } from "react";
import { Progress, SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import ShelterCard from "./ShelterCard";
import { useDispatch, useSelector } from "react-redux";
import { getShelterData } from "../../Redux/shelterReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";

const ShelterList = ({page}) => {
  const [searchParams] = useSearchParams();
  const data = useSelector(
    (store) => store.shelterReducer.shelterData.shelters
  );
  console.log(data);
  const isLoading = useSelector((store) => store.shelterReducer.isLoading);

  const location = useLocation();

  const dispatch = useDispatch();

  const paramObj = {
    params: {
      page : page,
      location: searchParams.getAll("location"),
      order: searchParams.get("order"),
    },
  };
  console.log(paramObj);
  console.log(data);

  useEffect(() => {
    dispatch(getShelterData(paramObj));
  }, [searchParams]);

  return isLoading ? (
    <Box>
      <Progress size="xs" isIndeterminate />
      <br />
      <br />
      <br />
      <Progress size="xs" isIndeterminate />
      <br />
      <br />
      <br />

      <Progress size="xs" isIndeterminate />
    </Box>
  ) : (
    <Box>
      <SimpleGrid
        style={{ margin: "auto" }}
        columns={{ sm: 2, md: 3, lg: 4, base: 1 }}
        spacing="15px"
      >
        {data?.map((item) => {
          return <ShelterCard key={item.id} {...item} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ShelterList;
