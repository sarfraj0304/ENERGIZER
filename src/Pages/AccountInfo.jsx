import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdModeEditOutline } from "react-icons/md";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChangePassword } from "../components/ChangePassword";
import { BsCheckLg } from "react-icons/bs";
export const AccountInfo = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const inputUserDetails =
    JSON.parse(sessionStorage.getItem("LoginUserDetails")) || [];

  const bg = useColorModeValue("purple.400", "#060309");
  const bodyBg = useColorModeValue("white", "#0f0617");
  const colors = useColorModeValue("red.500", "white");
  const valueColor = useColorModeValue("gray", "rgba(255, 255, 255, 0.16)");
  return (
    <Container padding="0px" maxW="100%" bg={bodyBg}>
      <Navbar />
      <Box
        width={{ base: "95%", md: "90%" }}
        height="630px"
        m="auto"
        border="1px solid"
        borderColor={useColorModeValue("white", "#291d34")}
      >
        <Tabs>
          <TabList
            flexDirection="column"
            float="left"
            border="none"
            width={{ base: "30%", md: "27%" }}
            bg="#291d34"
            height="630px"
          >
            <Box>
              <Tab
                height="60px"
                color={useColorModeValue("white", "rgba(255, 255, 255, 0.24)")}
                _selected={{ color: colors }}
              >
                My Profile
              </Tab>
            </Box>
            <Box>
              <Tab
                height="60px"
                color={useColorModeValue("white", "rgba(255, 255, 255, 0.24)")}
                _selected={{ color: colors }}
              >
                My Subscription
              </Tab>
            </Box>
          </TabList>
          <TabPanels padding="10px">
            <Box width="70%" float="right">
              <TabPanel padding="10px" textAlign="left">
                <Heading fontSize="30px">My Profile</Heading>
                <Stack>
                  <Divider m="auto" w="100%" height="30px" />
                </Stack>

                <Box marginTop="20px">
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="space-between"
                  >
                    <FormControl width={{ base: "48%", md: "40%" }}>
                      <FormLabel>First name</FormLabel>
                      <Input
                        color={valueColor}
                        required
                        readOnly
                        value={inputUserDetails[0].FirstName}
                      />
                    </FormControl>
                    <FormControl width={{ base: "48%", md: "40%" }}>
                      <FormLabel>Last name</FormLabel>
                      <Input
                        color={valueColor}
                        required
                        readOnly
                        value={inputUserDetails[0].LastName}
                      />
                    </FormControl>
                  </Box>
                  <FormControl>
                    <FormLabel>Phone No</FormLabel>
                    <Input
                      required
                      color={valueColor}
                      readOnly
                      value={inputUserDetails[0].PhoneNo}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      color={valueColor}
                      required
                      readOnly
                      value={inputUserDetails[0].Email}
                    />
                  </FormControl>
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <InputGroup size="md" width={{ base: "80%", md: "92%" }}>
                      <Input
                        color={valueColor}
                        required
                        readOnly
                        name="Password"
                        pr="4.5rem"
                        value={inputUserDetails[0].Password}
                        type={show ? "text" : "password"}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {/* change Password */}
                    <ChangePassword id={inputUserDetails[0].id} />
                  </FormControl>
                </Box>
              </TabPanel>
            </Box>
            {/* My Subscription Content */}
            <Box width="70%" float="right">
              <TabPanel padding="10px" textAlign="left">
                <Heading fontSize="30px">My Subscription</Heading>
                <Stack>
                  <Divider m="auto" w="100%" height="30px" />
                </Stack>
                <Box marginTop="20px">
                  {inputUserDetails[0].SubscriptionDetails === "PREMIUM 4K" &&
                  inputUserDetails[0].Subscription ? (
                    <Box>
                      <Text fontSize="20px" fontWeight="bold">
                        You have Subscribed{" "}
                        {inputUserDetails[0].SubscriptionDetails}
                      </Text>
                      <TableContainer w={{ base: "90%", md: "100%" }} m="auto">
                        <Table
                          variant="simple"
                          //   border="1px solid"
                          //   borderRadius="10px"
                          marginTop={{ base: "20px", md: "40px" }}
                        >
                          <Thead>
                            <Tr>
                              <Th></Th>
                              <Th fontSize={{ base: "12px", md: "14px" }}>
                                Premium 4k
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td fontSize={{ base: "17px", md: "20px" }}>
                                Premium content
                                <Text fontSize={{ base: "10px", md: "12px" }}>
                                  Movies, Web Series, TV Shows, Live TV,
                                  Downloads
                                </Text>
                              </Td>
                              <Td>
                                <BsCheckLg />
                              </Td>
                            </Tr>
                            <Tr>
                              <Td fontSize={{ base: "17px", md: "20px" }}>
                                Ad-free
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
                            </Tr>
                            <Tr>
                              <Td fontSize={{ base: "17px", md: "20px" }}>
                                No. of screens
                              </Td>
                              <Td>4</Td>
                            </Tr>
                            <Tr>
                              <Td fontSize={{ base: "17px", md: "20px" }}>
                                Max audio quality
                              </Td>
                              <Td>Dolby Atmos</Td>
                            </Tr>
                            <Tr>
                              <Td fontSize={{ base: "17px", md: "20px" }}>
                                Max video quality
                              </Td>
                              <Td>UHD (2160p)</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </Box>
                  ) : !inputUserDetails[0].Subscription ? (
                    <Text fontSize="20px" fontWeight="bold">
                      No Subscription Found!
                    </Text>
                  ) : (
                    <Box>
                      <Text fontSize="20px" fontWeight="bold">
                        You have Subscribed{" "}
                        {inputUserDetails[0].SubscriptionDetails}
                      </Text>
                      <TableContainer w={{ base: "90%", md: "100%" }} m="auto">
                        <Table
                          variant="simple"
                          //   border="1px solid"
                          //   borderRadius="10px"
                          marginTop={{ base: "20px", md: "40px" }}
                        >
                          <Thead>
                            <Tr>
                              <Th></Th>
                              <Th fontSize={{ base: "12px", md: "14px" }}>
                                Premium HD
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td fontSize={{ base: "17px", md: "20px" }}>
                                Premium content
                                <Text fontSize={{ base: "10px", md: "12px" }}>
                                  Movies, Web Series, TV Shows, Live TV,
                                  Downloads
                                </Text>
                              </Td>
                              <Td>
                                <BsCheckLg />
                              </Td>
                            </Tr>
                            <Tr>
                              <Td fontSize={{ base: "17px", md: "20px" }}>
                                Ad-free
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
                            </Tr>
                            <Tr>
                              <Td fontSize={{ base: "17px", md: "20px" }}>
                                No. of screens
                              </Td>
                              <Td>2</Td>
                            </Tr>
                            <Tr>
                              <Td fontSize={{ base: "17px", md: "20px" }}>
                                Max audio quality
                              </Td>
                              <Td>Dolby 5.1</Td>
                            </Tr>
                            <Tr>
                              <Td fontSize={{ base: "17px", md: "20px" }}>
                                Max video quality
                              </Td>
                              <Td>FHD (1080p)</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </Box>
                  )}
                </Box>
              </TabPanel>
            </Box>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </Container>
  );
};
