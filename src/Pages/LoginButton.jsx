import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Container,
  Box,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Form, Link, Navigate } from "react-router-dom";
import axios from "axios";
let userDetails = {
  FirstName: "",
  LastName: "",
  Email: "",
  PhoneNo: "",
  Password: "",
  Subscription: false,
};
let loginDetails = {
  Email: "",
  Password: "",
};
export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [userInputData, setUserInputData] = useState(userDetails);
  const [userLoginInput, setUserLoginInput] = useState(loginDetails);
  const handleChange = (e) => {
    setUserInputData({ ...userInputData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setUserLoginInput({ ...userLoginInput, [e.target.name]: e.target.value });
  };
  const handleRegister = () => {
    axios
      .get(`http://localhost:3000/User_SignUP`)
      .then((res) => {
        let checkEmail = res.data.filter((el) => {
          return el.Email === userInputData.Email;
        });
        let checkPhone = res.data.filter((el) => {
          return el.PhoneNo === userInputData.PhoneNo;
        });
        // console.log(checkEmail);
        if (
          userInputData.FirstName != "" &&
          userInputData.Email != "" &&
          userInputData.PhoneNo != "" &&
          userInputData.Password != ""
        ) {
          if (checkEmail.length == 0) {
            if (checkPhone.length == 0) {
              axios
                .post(`http://localhost:3000/User_SignUP`, userInputData)
                .then((res) => console.log(res))
                .catch(console.error());

              toast({
                title: "Registration Sucessfull",
                description: "Account is Created Successfully",
                status: "success",
                isClosable: true,
                duration: 2000,
              });
              setInterval(() => {
                window.location.reload();
              }, 2000);
            } else {
              toast({
                title: "Phone Number Already Exists",
                description: "Enter Another Number",
                status: "error",
                isClosable: true,
                duration: 2000,
              });
            }
          } else {
            toast({
              title: "Email Already Exist",
              status: "error",
              isClosable: true,
              duration: 2000,
            });
          }
        } else {
          toast({
            title: "Registration Unsucessfull",
            description: "Fill Required Details",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      })
      .catch(console.error());
  };

  const handleLogin = () => {
    axios
      .get(`http://localhost:3000/User_SignUP`)
      .then((res) => {
        let validateLogin = res.data.filter((el) => {
          return el.Email === userLoginInput.Email;
        });

        if (userLoginInput.Email != "" && userLoginInput.Password != "") {
          if (validateLogin.length == 0) {
            toast({
              title: "User Not Found",
              status: "error",
              isClosable: true,
              duration: 2000,
            });
          } else {
            validateLogin.map((el) => {
              if (el.Password === userLoginInput.Password) {
                sessionStorage.setItem(
                  "LoginUserDetails",
                  JSON.stringify(validateLogin)
                );
                toast({
                  title: "Login Sucessfull",
                  status: "success",
                  isClosable: true,
                  duration: 2000,
                });
                setInterval(() => {
                  window.location.reload();
                }, 1000);
              } else {
                toast({
                  title: "Invalid Password",
                  status: "error",
                  isClosable: true,
                  duration: 2000,
                });
              }
            });
          }
        } else {
          toast({
            title: "Login Unsucessfull",
            description: "Fill Required Details",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      })
      .catch(console.error());
  };
  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const bg = useColorModeValue("white", "#0f0617");
  const color = useColorModeValue("red.500", "purple.400");
  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {state ? (
          <ModalContent bg={bg}>
            <Box
              w={{ base: "95%", md: "27%" }}
              border="1px solid gray"
              m="auto"
              mt="70px"
              textAlign="center"
              padding="10px"
            >
              <ModalHeader>Create a new account</ModalHeader>
              <ModalCloseButton />

              <ModalBody>
                Create an account to continue enjoying uninterrupted video and
                personalised experience
                <FormControl isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input
                    required
                    onChange={handleChange}
                    name="FirstName"
                    placeholder="First name"
                  />
                </FormControl>
                <FormLabel>Last name</FormLabel>
                <Input
                  onChange={handleChange}
                  name="LastName"
                  placeholder="Last name"
                />
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    required
                    onChange={handleChange}
                    name="Email"
                    placeholder="Email"
                  />
                  <FormLabel>Phone No</FormLabel>
                  <Input
                    required
                    onChange={handleChange}
                    name="PhoneNo"
                    placeholder="Phone No"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      required
                      onChange={handleChange}
                      name="Password"
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button onClick={handleRegister} w="100%" mt="20px">
                  Submit
                </Button>
                <Text display="flex" justifyContent="center" marginTop="10px">
                  Already Registered ?{" "}
                  <Text
                    cursor="pointer"
                    color={color}
                    onClick={() => {
                      setState(false);
                    }}
                  >
                    Login
                  </Text>
                </Text>
              </ModalBody>
            </Box>
          </ModalContent>
        ) : (
          <ModalContent bg={bg}>
            <Box
              w={{ base: "95%", md: "27%" }}
              border="1px solid gray"
              m="auto"
              mt="70px"
              textAlign="center"
              padding="10px"
            >
              <ModalHeader>Login to ZEE5</ModalHeader>
              <ModalCloseButton />

              <ModalBody>
                Login to continue enjoying uninterrupted video and personalised
                experience.
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    onChange={handleLoginChange}
                    required
                    name="Email"
                    placeholder="Email"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      onChange={handleLoginChange}
                      required
                      name="Password"
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button onClick={handleLogin} w="100%" mt="20px">
                  Submit
                </Button>
                <Text display="flex" justifyContent="center" marginTop="10px">
                  New to ZEE5 ?{" "}
                  <Text
                    cursor="pointer"
                    color={color}
                    onClick={() => {
                      setState(true);
                    }}
                  >
                    Register
                  </Text>
                </Text>
              </ModalBody>
            </Box>
          </ModalContent>
        )}
      </Modal>
    </>
  );
};
