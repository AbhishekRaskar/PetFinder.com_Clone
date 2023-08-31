import React from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  Heading,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import from react-router-dom

const PetCard = (props) => {
  const { _id } = props;
  let petId = _id;
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate(`/DetailsPage/${petId}`);
  };

  return (
    <Box
      maxW={"270px"}
      w={"full"}
      bg={"white"}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      _hover={{ border: "1px solid blue" }}
      onClick={handleBtn}
    >
      <Image src={props.image[0]} alt="" width="100%" height={"200px"} />

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            Name : {props.name}
          </Heading>
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>Age: {props.age}</Text>
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Text fontSize={"sm"} color={"gray.500"}>
              Breed : {props.breed}
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Text fontSize={"md"}>Gender : {props.gender}</Text>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Text fontSize={"md"} color={"gray.500"}>
          Location : {props.location}
        </Text>
        <Box>{props.distance}</Box>

        <Button
          w={"full"}
          mt={8}
          bg={"#6A00FF"}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Details
        </Button>
      </Box>
    </Box>
  );
};

export default PetCard;
