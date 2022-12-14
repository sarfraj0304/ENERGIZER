import { Button, Image, Box, Text, useColorModeValue } from "@chakra-ui/react";
import { FaCrown } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import styles from "../Styles/CarouselMain.module.css";

export const MainCarouselImage = ({ image, title, id }) => {
  return (
    <>
      <Image w="100%" src={image} objectFit="contain" />
      <Text
        color={useColorModeValue("white", "white")}
        position="absolute"
        zIndex="1"
        fontWeight="extrabold"
        bottom={{ base: "50px", md: "90px" }}
        left={{ base: "10px", md: "50px" }}
        fontSize={{ base: "12px", md: "25px" }}
      >
        {title}
      </Text>
      <Box
        position="absolute"
        bottom={{ base: "10px", md: "50px" }}
        left={{ base: "10px", md: "50px" }}
        zIndex="1"
      >
        <Button
          colorScheme="teal"
          variant="outline"
          backgroundColor="rgba(0, 0, 0, 0.305)"
          width={{ base: "73px", md: "105px" }}
          fontSize={{ base: "10px", md: "14px" }}
          height="35px"
          _hover={{ bgColor: "white", color: "black", border: "none" }}
          leftIcon={<BsFillPlayFill />}
          color="white"
          marginRight="10px"
        >
          Play Now
        </Button>
        <Button
          width={{ base: "73px", md: "105px" }}
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
      </Box>
    </>
  );
};
