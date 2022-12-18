import { useState } from "react";
import styles from "../Styles/MovieDetails.module.css";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCrown } from "react-icons/fa";
import { ContextProvider } from "../Context/ContextProviderMovie";
import { RxDotFilled } from "react-icons/rx";
import { BsFillPlayFill, BsShare } from "react-icons/bs";
import { RiPlayListAddLine } from "react-icons/ri";
import axios from "axios";
import stylesRecommended from "../Styles/TrendingNearYou.module.css";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { ShareNowTMDB } from "./SharenowTMDB";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { ShareNow } from "../components/ShareNow";
const TmdbMovieDetails = () => {
  const LoginUserDetails =
    JSON.parse(sessionStorage.getItem("LoginUserDetails")) || [];
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [recommendedData, setRecommendedData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 3000);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5eefa44e4d8e90b08488c82018c7ea3c`
      )
      .then((res) => setData(res.data))
      .catch(console.error());
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=5eefa44e4d8e90b08488c82018c7ea3c&language=hi-IN&page=1`
      )
      .then((res) => setRecommendedData(res.data.results))
      .catch(console.error());
  }, [id]);

  const {
    poster_path,
    vote_average,
    release_date,
    overview,
    original_title,
    genres,
  } = data;

  // Rating features
  const RatingArray = new Array(10).fill(<FaStar fontSize="23px" />);
  for (let i = 0; i < vote_average; i++) {
    RatingArray[i] = <FaStar fontSize="23px" color="yellow" />;
  }

  const bg = useColorModeValue("#0f0617", "white");
  const fontColor = useColorModeValue("white", "black");
  const borderColor = useColorModeValue("white", "black");
  return (
    <div>
      <Navbar />
      <Container
        bg={useColorModeValue("white", "#0f0617")}
        className={styles.parent_div}
        display={{ base: "block", md: "flex" }}
        justifyContent="space-around"
      >
        {/* ----------------Left Div ------------------------*/}
        <Box width={{ base: "100%", md: "55%" }}>
          <Image
            minW="100%"
            // objectFit="cover"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
            height={{ base: "220px", md: "520px" }}
          />
          {/* Advertisement buy */}
          <Box
            bg={"#401a4c"}
            display="flex"
            justifyContent="space-between"
            width="100%"
            textAlign="left"
            padding={{ base: "5px", md: "20px" }}
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: "0.7rem", md: "1.1rem" }}
              display="flex"
              alignItems="center"
              color="white"
            >
              Ad-Free with Premium now at 30%OFF : ₹699/year
            </Text>
            {LoginUserDetails.length === 0 ||
            !LoginUserDetails[0].Subscription ? (
              <Link to="/buyPlan">
                {" "}
                <Button
                  width={{ base: "73px", md: "105px" }}
                  mr={4}
                  height="35px"
                  _hover={{ bgColor: "#320c52" }}
                  leftIcon={<FaCrown />}
                  backgroundColor="#8230c6"
                  color="white"
                  variant="solid"
                  fontSize={{ base: "10px", md: "14px" }}
                >
                  BUY PLAN
                </Button>
              </Link>
            ) : null}
          </Box>
          <Heading
            marginTop={"8px"}
            textAlign={"left"}
            fontSize={{ base: "20px", md: "35px" }}
            display="flex"
            alignItems="center"
          >
            {original_title}
          </Heading>
          <Text
            fontSize={{ base: "1rem", md: "1.4rem" }}
            display="flex"
            alignItems="center"
            marginTop="20px"
          >
            Rating:{" "}
            <Text alignItems="center" marginLeft="10px" display="flex">
              {RatingArray}
            </Text>
          </Text>

          <Text
            fontSize={{ base: "1rem", md: "1.4rem" }}
            marginTop="15px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color={useColorModeValue("black", "#a785ff")}
            maxW={{ base: "37%", md: "25%" }}
          >
            Movie
            {<RxDotFilled />}
            {release_date}
          </Text>
          <Text
            fontSize={{ base: "1rem", md: "1.4rem" }}
            marginTop="17px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color={useColorModeValue("black", "#a785ff")}
            maxW={{ base: "70%", md: "50%" }}
          >
            1h 52m
            {<RxDotFilled />}
            Fiction
            {<RxDotFilled />}
            Adventrue
          </Text>
          <Flex
            marginTop={{ base: "10px", md: "30px" }}
            fontSize={{ base: "12px", md: "23px" }}
            color="white"
            width={{ base: "50%", md: "30%" }}
          >
            <ShareNowTMDB />
            {/* <Box
              cursor="pointer"
              width="50%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              bg="#181020"
              padding="20px"
              justifyContent="space-between"
            >
              <BsShare />
              <Text fontSize={{ base: "13px", md: "15px" }}>Share</Text>
            </Box> */}
            <Box
              cursor="pointer"
              width="50%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              bg="#181020"
              alignItems="center"
              padding="20px"
            >
              <RiPlayListAddLine />
              <Text fontSize={{ base: "12px", md: "15px" }}>WatchList</Text>
            </Box>
          </Flex>
          <Flex
            marginTop={{ base: "10px", md: "20px" }}
            alignItems="center"
            fontSize={{ base: "14px", md: "18px" }}
            textAlign="left"
          >
            Audio Languages:{" "}
            <Text
              color={useColorModeValue("black", "#a785ff")}
              marginLeft="5px"
              fontSize={{ base: "12px", md: "14px" }}
            >
              Hindi/English/Tamil/Telugu
            </Text>
          </Flex>
          <Flex
            marginTop={{ base: "10px", md: "20px" }}
            alignItems="center"
            fontSize={{ base: "14px", md: "18px" }}
            textAlign="left"
          >
            Subtitles:{" "}
            <Text
              color={useColorModeValue("black", "gray.500")}
              marginLeft="5px"
              fontSize={{ base: "12px", md: "14px" }}
            >
              English
            </Text>
          </Flex>
          <Text
            textAlign="left"
            fontSize={{ base: "15px", md: "20px" }}
            marginTop={{ base: "15px", md: "20px" }}
          >
            {overview}
          </Text>
        </Box>
        {/*-------------------- Right Div --------------*/}
        <Box
          // display={"grid"}
          width={{ base: "100%", md: "34%" }}
        >
          <Heading
            marginBottom={{ base: "8px", md: "20px" }}
            marginTop={{ base: "15px", md: "0px" }}
            textAlign={"left"}
            fontSize={{ base: "17px", md: "20px" }}
          >
            Recommended Movies For You
          </Heading>
          <SimpleGrid
            columns={{ base: "2", md: "2" }}
            gap={{ base: "10px", md: "20px" }}
          >
            {recommendedData.map((el) =>
              loader ? (
                <SkeletonLoader />
              ) : (
                <Box
                  overflow="hidden"
                  borderRadius="6px"
                  bg={bg}
                  className={stylesRecommended.hover_effect}
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
                    className={stylesRecommended.title}
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
                      Movie
                      {<RxDotFilled />}
                      {el.release_date}
                    </Text>
                    <Box display="flex" marginTop={{ base: "5px", md: "10px" }}>
                      <Link to={`/TmdbMovieDetails/${el.id}`}>
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
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default TmdbMovieDetails;
