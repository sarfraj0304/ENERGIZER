import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";

export const ChangePassword = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [input, setInput] = useState("");
  const handleChangePassword = () => {
    console.log(id);
  };
  const handleOnchange = (e) => {
    setInput(e.target.value);
  };
  console.log(input.length);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={useColorModeValue("gray.100", "#0f0617")}>
          <ModalHeader>Change Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Enter New Password</FormLabel>
            <FormControl>
              <Input
                onChange={handleOnchange}
                required
                type="Enter New Password"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Link to="/">
              {" "}
              <Button
                onClick={() => {
                  const dataToSend = {
                    Password: input,
                  };
                  {
                    input.length == 0
                      ? toast({
                          title: "Enter Required Field",
                          status: "error",
                          duration: 2000,
                          isClosable: true,
                        })
                      : axios
                          .patch(
                            `http://localhost:3000/User_SignUP/${id}`,
                            dataToSend
                          )
                          .then((res) => {
                            toast({
                              title: "Password Changed Sucessfully.",
                              description: "Login Again Using New Password",
                              status: "success",
                              duration: 3000,
                              isClosable: true,
                            });
                            sessionStorage.removeItem("LoginUserDetails");
                            setInterval(() => {
                              window.location.reload();
                            }, 2000);
                          })
                          .catch(console.error());
                  }
                }}
                variant="ghost"
              >
                Submit
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Tooltip label="Change Password">
        <Button
          onClick={() => {
            handleChangePassword();
            onOpen();
          }}
          size={{ base: "sm", md: "md" }}
        >
          <MdModeEditOutline />
        </Button>
      </Tooltip>
    </>
  );
};
