import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BigSkeleton } from "../components/BigSkeleton";
export const NewsDetails = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 3000);
    axios
      .get(` http://localhost:3000/News/${id}`)
      .then((res) => setNewsData(res.data))
      .catch(console.error());
  }, [id]);
  const bg = useColorModeValue("white", "#0f0617");
  const { image, title, description, source } = newsData;
  return (
    <Container p="0px" bg={bg} maxW="100%">
      <Navbar />
      {loading ? (
        <BigSkeleton />
      ) : (
        <Box m={"auto"} maxW="60%">
          <Heading
            fontSize={{ base: "17px", md: "34px" }}
            textAlign={{ base: "justify", md: "left" }}
            marginBottom={{ base: "10px", md: "15px" }}
          >
            {title}
          </Heading>
          <Box m="auto" width="100%">
            <Image
              marginBottom={{ base: "10px", md: "15px" }}
              height="inherit"
              minW="100%"
              objectFit={"contain"}
              src={image}
            ></Image>
          </Box>
          <Text
            fontStyle="italic"
            fontSize={{ base: "12px", md: "15px" }}
            marginBottom={{ base: "10px", md: "15px" }}
            textAlign="justify"
          >
            {source}
          </Text>
          <Divider orientation="horizontal" />
          <Text fontSize={{ base: "13px", md: "17px" }} textAlign="justify">
            {description}
            {description}
            {description}
            {description}
            {description}
            {description}
            {description}
            {description}
            {description}
            {description}
          </Text>
        </Box>
      )}
      <Footer />
    </Container>
  );
};
