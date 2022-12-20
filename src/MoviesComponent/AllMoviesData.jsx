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
import { ShareNow } from "../components/ShareNow";
import styles from "../Styles/TrendingNearYou.module.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { BsFillPlayFill, BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
export const AllMoviesData = ({ cat, type }) => {
  const [movie, setMovie] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 4000);
    axios
      .get(`https://energizer.onrender.com/${cat}`)
      .then((res) => setMovie(res.data))
      .catch(console.error());
  }, []);
  const bg = useColorModeValue("#0f0617", "white");
  const fontColor = useColorModeValue("white", "black");
  const borderColor = useColorModeValue("white", "black");
  return (
    <Container
      bg={useColorModeValue("white", "#0f0617")}
      minW="100%"
      padding={{ base: "20px", md: "40px" }}
    >
      <Heading
        marginBottom={{ base: "10px", md: "20px" }}
        textAlign="left"
        fontSize={{ base: "17px", md: "30px" }}
      >
        Popular {type}
      </Heading>
      <SimpleGrid
        columns={{ base: "2", md: "5" }}
        gap={{ base: "20px", md: "40px" }}
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
                <Text fontSize={{ base: "10px", md: "15px" }}>{el.title}</Text>
                <Text
                  display="flex"
                  alignItems="center"
                  fontSize={{ base: "8px", md: "12px" }}
                >
                  {el.genre}
                  {<RxDotFilled />}
                  {el.released}
                </Text>
                <Box display="flex" marginTop={{ base: "5px", md: "10px" }}>
                  <Link to={`/MovieDetails/${cat}/${el.title}/${el.id}`}>
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
                  <ShareNow />
                  {/* <Button
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
                  </Button> */}
                </Box>
              </Box>
              <Image
                src={el.image}
                height="inherit"
                width="inherit"
                objectFit="cover"
                borderRadius="6px"
              />
            </Box>
          )
        )}
      </SimpleGrid>
    </Container>
  );
};
