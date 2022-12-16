import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcViewDetails } from "react-icons/fc";
import React from "react";
import { Link } from "react-router-dom";

export const NewsPageDetails = ({ image, title, description, source, id }) => {
  return (
    <>
      <Box m="auto" width="70%">
        <Image
          height="inherit"
          minW="100%"
          objectFit={"contain"}
          src={image}
        ></Image>
      </Box>
      <Box m="auto" width="70%">
        <Heading
          fontSize={{ base: "17px", md: "34px" }}
          textAlign={{ base: "justify", md: "left" }}
          marginBottom={{ base: "10px", md: "15px" }}
        >
          {title}
        </Heading>

        <Text
          display="flex"
          justifyContent="space-between"
          fontStyle="italic"
          fontSize={{ base: "10px", md: "13px" }}
          marginBottom={{ base: "10px", md: "15px" }}
          textAlign="justify"
        >
          {source}

          <Link to={`/newsDetails/${id}`}>
            {" "}
            <Text
              textDecoration="underline dotted red"
              fontSize={{ base: "10px", md: "13px" }}
              bg="none"
            >
              Read More
            </Text>
          </Link>
        </Text>
        <Divider orientation="horizontal" />
        <Text fontSize={{ base: "13px", md: "17px" }} textAlign="justify">
          {description}
        </Text>
      </Box>
    </>
  );
};
