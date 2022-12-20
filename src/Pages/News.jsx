import {
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { SkeletonLoader } from "../components/SkeletonLoader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NewsPageDetails } from "./NewsPageDetails";
import axios from "axios";
export const News = () => {
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 4000);
    axios
      .get(`https://energizer.onrender.com/News`)
      .then((res) => setNews(res.data))
      .catch(console.error());
  }, []);

  return (
    <Container bg={useColorModeValue("white", "#0f0617")} maxW="100%">
      <Navbar />
      <Heading
        marginBottom={{ base: "10px", md: "20px" }}
        textAlign="left"
        fontSize={{ base: "17px", md: "30px" }}
      >
        Trending News
      </Heading>
      <SimpleGrid
        columns={{ base: "1", md: "2" }}
        bg={useColorModeValue("white", "#0f0617")}
        m="auto"
        w="90%"
        gap="20px"
        marginBottom="30px"
      >
        {news.map((el) =>
          loader ? <SkeletonLoader /> : <NewsPageDetails key={el.id} {...el} />
        )}
      </SimpleGrid>

      <Footer />
    </Container>
  );
};
