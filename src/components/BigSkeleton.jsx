import {
  Skeleton,
  Box,
  useColorModeValue,
  Stack,
  VStack,
  SkeletonText,
} from "@chakra-ui/react";

export const BigSkeleton = () => {
  return (
    <Box
      bg={useColorModeValue("white", "#0f0617")}
      marginTop="50px"
      marginBottom="50px"
    >
      <Skeleton
        h={{ base: "250px", md: "360px" }}
        maxW={{ base: "450px", md: "840px" }}
        startColor="gray"
        m="auto"
        endColor={useColorModeValue("white", "gray.800")}
      />
      <SkeletonText
        marginTop="20px"
        noOfLines={4}
        spacing="4"
        startColor="gray"
        skeletonHeight={{ base: "10px", md: "10px" }}
        maxW={{ base: "450px", md: "840px" }}
        m="auto"
        endColor={useColorModeValue("white", "gray.800")}
      />
    </Box>
  );
};
