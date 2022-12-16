import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Text,
  Image,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { Pagination } from "./Pagination";
import styles from "../Styles/TrendingNearYou.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { BsFillPlayFill, BsShare } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const SearchDataFromTmdb = () => {
  const { inputText } = useParams();
  const [movie, setMovie] = useState([]);
  const [loader, setLoader] = useState(true);
  const [Page, setPage] = useState(1);
  const [totalResults, SetTotalResults] = useState(0);
  useEffect(() => {
    try {
      setInterval(() => {
        setLoader(false);
      }, 2000);
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=5eefa44e4d8e90b08488c82018c7ea3c&language=en-US&query=${inputText}&page=${Page}&include_adult=false`
        )
        .then((res) => {
          SetTotalResults(res.data.total_results);
          setMovie(res.data.results);
        });
    } catch (error) {
      console.error();
      setLoader(true);
    }
  }, [Page, inputText]);
  const bg = useColorModeValue("#0f0617", "white");
  const fontColor = useColorModeValue("white", "black");
  const borderColor = useColorModeValue("white", "black");
  return (
    <>
      <Navbar />
      <Container
        bg={useColorModeValue("white", "#0f0617")}
        minW="100%"
        padding={{ base: "20px", md: "40px" }}
      >
        <Heading
          marginBottom={{ base: "10px", md: "20px" }}
          textAlign="left"
          fontSize={{ base: "17px", md: "25px" }}
        >
          Searched Results ({movie.length} of {totalResults} )
        </Heading>
        <SimpleGrid
          columns={{ base: "2", md: "5" }}
          gap={{ base: "20px", md: "40px" }}
          marginBottom={{ base: "10px", md: "20px" }}
        >
          {movie.map((el) =>
            loader ? (
              <SkeletonLoader />
            ) : (
              <Box
                overflow="hidden"
                borderRadius="6px"
                bg={bg}
                className={styles.hover_effect}
                key={el.id}
                h={{ base: "250px", md: "360px" }}
                maxW={{ base: "150px", md: "240" }}
                transition=" all 0.3s"
                _hover={{ padding: "10px" }}
                position="relative"
              >
                <Box
                  bg={bg}
                  color={fontColor}
                  fontSize={{ base: "12px", md: "14px" }}
                  className={styles.title}
                  paddingLeft={{ base: "5px", md: "10px" }}
                >
                  <Text fontSize={{ base: "10px", md: "15px" }}>
                    {el.original_title}
                  </Text>
                  <Text
                    display="flex"
                    alignItems="center"
                    fontSize={{ base: "8px", md: "12px" }}
                  >
                    {el.media_type}
                    {<RxDotFilled />}
                    {el.release_date}
                  </Text>
                  <Box display="flex" marginTop={{ base: "5px", md: "10px" }}>
                    <Link to={`/TmdbMovieDetails/${el.id}`}>
                      {" "}
                      <Button
                        colorScheme="teal"
                        variant="outline"
                        borderColor={borderColor}
                        backgroundColor={bg}
                        width={{ base: "75px", md: "90px" }}
                        fontSize={{ base: "8px", md: "12px" }}
                        height={{ base: "25px", md: "35px" }}
                        _hover={{
                          bgColor: "#320c52",
                          color: "white",
                          border: "none",
                        }}
                        leftIcon={<BsFillPlayFill />}
                        color={fontColor}
                        marginRight="10px"
                      >
                        Watch Now
                      </Button>
                    </Link>
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      border="none"
                      backgroundColor={bg}
                      width={{ base: "73px", md: "90px" }}
                      fontSize={{ base: "8px", md: "12px" }}
                      height={{ base: "25px", md: "35px" }}
                      _hover={{
                        color: "red",
                      }}
                      leftIcon={<BsShare />}
                      color={fontColor}
                      marginRight="10px"
                    >
                      Share
                    </Button>
                  </Box>
                </Box>
                <Image
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                  height="inherit"
                  width="inherit"
                  objectFit="cover"
                  borderRadius="6px"
                />
              </Box>
            )
          )}
        </SimpleGrid>
        <Pagination
          currentPage={Page}
          onchange={(e) => {
            setPage(e);
          }}
        />
      </Container>
      <Footer />
    </>
  );
};
