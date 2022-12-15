import { SkeletonLoader } from "../components/SkeletonLoader";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RxDotFilled } from "react-icons/rx";
import { ImNewspaper } from "react-icons/im";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import styles from "../Styles/TrendingNearYou.module.css";
import axios from "axios";
import "../index.css";
import { BsFillPlayFill, BsShare } from "react-icons/bs";

const FreeLiveNews = () => {
  const cat = "News";
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 4000);
    axios
      .get(`http://localhost:3000/${cat}`)
      .then((res) => setData(res.data))
      .catch(console.error());
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 630 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 630, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };
  const bg = useColorModeValue("black", "white");
  const fontColor = useColorModeValue("white", "black");
  const borderColor = useColorModeValue("white", "black");
  return (
    <Container
      maxW={"100%"}
      paddingTop="30px"
      bg={useColorModeValue("white", "#0f0617")}
      overflow={"visible"}
      paddingBottom={{ base: "0px", md: "30px" }}
    >
      <Heading
        marginBottom={{ base: "6px", md: "20px" }}
        textAlign="left"
        fontSize={{ base: "14px", md: "20px" }}
      >
        Free Live News
      </Heading>
      <Carousel
        responsive={responsive}
        customTransition="all 3s"
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {data.map((el) =>
          loader ? (
            <SkeletonLoader />
          ) : (
            <Box
              borderRadius="6px"
              bg={bg}
              className={styles.hover_effect}
              key={el.id}
              h={{ base: "160px", md: "330px" }}
              maxW={{ base: "165px", md: "450" }}
              transition=" all 0.3s"
              _hover={{ padding: "5px" }}
              position="relative"
            >
              <Box
                bg={bg}
                color={fontColor}
                fontSize={{ base: "12px", md: "14px" }}
                className={styles.title}
                paddingLeft={{ base: "5px", md: "10px" }}
              >
                <Text fontSize={{ base: "10px", md: "15px" }}>{el.source}</Text>
                <Text
                  display="flex"
                  alignItems="center"
                  fontSize={{ base: "8px", md: "12px" }}
                >
                  {/* {date} */}

                  {/* {el.released} */}
                </Text>
                <Box display="flex" marginTop={{ base: "5px", md: "10px" }}>
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
                    leftIcon={<ImNewspaper />}
                    color={fontColor}
                    marginRight="10px"
                  >
                    Read Now
                  </Button>

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
                src={el.image}
                height="inherit"
                width="100%"
                objectFit="fill"
                borderRadius="6px"
              />
            </Box>
          )
        )}
      </Carousel>
    </Container>
  );
};

export default FreeLiveNews;
