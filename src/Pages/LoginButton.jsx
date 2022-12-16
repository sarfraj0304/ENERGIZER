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
} from "@chakra-ui/react";
import { Form, Link } from "react-router-dom";
export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {state ? (
          <ModalContent>
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
                  <Input placeholder="First name" />
                </FormControl>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="Email" />
                  <FormLabel>Phone No</FormLabel>
                  <Input placeholder="Phone No" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
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
                <Button w="100%" mt="20px">
                  Submit
                </Button>
                <Text display="flex" justifyContent="center" marginTop="10px">
                  Already Registered ?{" "}
                  <Text
                    cursor="pointer"
                    color="purple.400"
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
          <ModalContent>
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
                  <Input placeholder="Email" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
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
                <Button w="100%" mt="20px">
                  Submit
                </Button>
                <Text display="flex" justifyContent="center" marginTop="10px">
                  New to ZEE5 ?{" "}
                  <Text
                    cursor="pointer"
                    color="purple.400"
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
