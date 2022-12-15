import { Skeleton, Box, useColorModeValue } from "@chakra-ui/react";

export const SkeletonLoader = () => {
  return (
    <Box bg={useColorModeValue("white", "#0f0617")}>
      <Skeleton
        h={{ base: "250px", md: "360px" }}
        maxW={{ base: "150px", md: "240" }}
        startColor="gray"
        endColor={useColorModeValue("white", "gray.800")}
      />
    </Box>
  );
};
