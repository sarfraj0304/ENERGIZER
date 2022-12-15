import {
  Box,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Heading,
  useColorModeValue,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { BsCheckLg } from "react-icons/bs";
import BuyplanStyles from "../Styles/BuyPlan.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const BuyplanPage = () => {
  return (
    <Box bg={useColorModeValue("white", "#0f0617")}>
      <Navbar />
      <Heading fontSize={{ base: "20px", md: "30px" }}>
        Choose your premium plan
      </Heading>
      <TableContainer w={{ base: "90%", md: "50%" }} m="auto">
        <Table
          variant="simple"
          //   border="1px solid"
          //   borderRadius="10px"
          marginTop={{ base: "20px", md: "40px" }}
        >
          <Thead>
            <Tr>
              <Th></Th>
              <Th fontSize={{ base: "12px", md: "14px" }}>Premium HD</Th>
              <Th fontSize={{ base: "12px", md: "14px" }}>Premium 4k</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontSize={{ base: "17px", md: "20px" }}>
                Premium content
                <Text fontSize={{ base: "10px", md: "12px" }}>
                  Movies, Web Series, TV Shows, Live TV, Downloads
                </Text>
              </Td>
              <Td>
                <BsCheckLg />
              </Td>
              <Td>
                <BsCheckLg />
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={{ base: "17px", md: "20px" }}>Ad-free</Td>
              <Td>
                <BsCheckLg />
              </Td>
              <Td>
                <BsCheckLg />
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={{ base: "17px", md: "20px" }}>
                Device
                <Text fontSize={{ base: "10px", md: "12px" }}>
                  Mobile, TV and Laptop
                </Text>
              </Td>
              <Td>
                <BsCheckLg />
              </Td>
              <Td>
                <BsCheckLg />
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={{ base: "17px", md: "20px" }}>No. of screens</Td>
              <Td>2</Td>
              <Td>4</Td>
            </Tr>
            <Tr>
              <Td fontSize={{ base: "17px", md: "20px" }}>Max audio quality</Td>
              <Td>Dolby 5.1</Td>
              <Td>Dolby Atmos</Td>
            </Tr>
            <Tr>
              <Td fontSize={{ base: "17px", md: "20px" }}>Max video quality</Td>
              <Td>FHD (1080p)</Td>
              <Td>UHD (2160p)</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td>
                <Checkbox size={{ base: "md", md: "lg" }}>Buy Plan</Checkbox>
              </Td>
              <Td>
                <Checkbox size={{ base: "md", md: "lg" }}>Buy Plan</Checkbox>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Footer />
    </Box>
  );
};
