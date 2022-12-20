import React, { useState } from "react";
import { Tooltip, useToast } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  Box,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
const creditCardDetails = {
  name: "",
  number: "",
  date: "",
  cvv: "",
};
const bankAccountDetails = {
  name: "",
  number: "",
  ifsc: "",
};
let userOTPValidate;
export const PaymentPage = ({ type, amount }) => {
  const [inputotp, setinputOtp] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [inputData, setInputData] = useState(creditCardDetails);
  const [accountData, setAccountData] = useState(bankAccountDetails);
  const inputUserDetails =
    JSON.parse(sessionStorage.getItem("LoginUserDetails")) || [];
  const handleChangeInput = (e) => {
    console.log(inputData);
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleOtp = (e) => {
    userOTPValidate = e.target.value;
  };
  // handle bank account details
  const handleAccountDetailsChange = (e) => {
    console.log(accountData);
    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };
  const handleCreditPay = () => {
    console.log(inputData);
    if (inputData.number.length === 14) {
      if (inputData.cvv.length === 3) {
        setinputOtp("block");
        if (inputotp === "block") {
          if (userOTPValidate === "1234") {
            const DatatoSend = {
              SubscriptionDetails: type,
              Subscription: true,
            };
            axios
              .patch(
                `https://energizer.onrender.com/User_SignUP/${inputUserDetails[0].id}`,
                DatatoSend
              )
              .then((res) => console.log(res));
            toast({
              title: "Congratulation Now You are Premium User",
              description: `You Have Successfully Purchased ${type} Plan Login Again to enjoy Premium Service`,
              status: "success",
              isClosable: true,
              duration: 2000,
            });
            sessionStorage.removeItem("LoginUserDetails");
            setInterval(() => {
              window.location.reload();
            }, 2000);
          } else {
            toast({
              title: "Invalid OTP",
              status: "error",
              isClosable: true,
              duration: 2000,
            });
          }
        }
      } else {
        toast({
          title: "Enter Valid CVV",
          status: "error",
          isClosable: true,
          duration: 2000,
        });
      }
    } else {
      toast({
        title: "Enter Valid Details",
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    }
  };
  // handle Bank Account Details
  const handleBankAccountPay = () => {
    console.log(accountData);
    if (accountData.number.length === 14) {
      setinputOtp("block");
      console.log(inputotp);
      if (inputotp === "block") {
        if (userOTPValidate === "1234") {
          const DatatoSend = {
            SubscriptionDetails: type,
            Subscription: true,
          };
          axios
            .patch(
              `https://energizer.onrender.com/User_SignUP/${inputUserDetails[0].id}`,
              DatatoSend
            )
            .then((res) => console.log(res));
          toast({
            title: "Congratulation Now You are Premium User",
            description: `You Have Successfully Purchased ${type} Plan Login Again to enjoy Premium Service`,
            status: "success",
            isClosable: true,
            duration: 2000,
          });
          sessionStorage.removeItem("LoginUserDetails");
          setInterval(() => {
            window.location.reload();
          }, 2000);
        } else {
          toast({
            title: "Enter Valid CVV",
            status: "error",
            isClosable: true,
            duration: 2000,
          });
        }
      }
    } else {
      toast({
        title: "Enter Valid Details",
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    }
  };

  const colors = useColorModeValue("blue.500", "white");
  return (
    <>
      {inputUserDetails.length === 0 ? (
        <Tooltip label="You Are Not Logged In">
          <Button
            disabled={inputUserDetails.length === 0}
            onClick={onOpen}
            size={{ base: "md", md: "lg" }}
          >
            Buy Plan
          </Button>
        </Tooltip>
      ) : (
        <Button
          disabled={inputUserDetails.length === 0}
          onClick={onOpen}
          size={{ base: "md", md: "lg" }}
        >
          Buy Plan
        </Button>
      )}
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={useColorModeValue("gray.200", "#291d34")}>
          <ModalHeader>Select Payment Method</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList bg="#291d34" width="100%">
                <Tab
                  color={useColorModeValue(
                    "white",
                    "rgba(255, 255, 255, 0.24)"
                  )}
                  _selected={{ color: colors }}
                  w="50%"
                >
                  Credit/Debit Card
                </Tab>
                <Tab
                  color={useColorModeValue(
                    "white",
                    "rgba(255, 255, 255, 0.24)"
                  )}
                  _selected={{ color: colors }}
                  w="50%"
                >
                  Internet Banking
                </Tab>
              </TabList>

              <TabPanels>
                <Box>
                  <TabPanel>
                    <FormControl marginBottom="10px">
                      <FormLabel>Card Holder Name</FormLabel>
                      <Input
                        onChange={handleChangeInput}
                        name="name"
                        value={inputData.name}
                        required
                        placeholder="Enter Card Holder Name"
                      />
                    </FormControl>
                    <FormControl marginBottom="10px">
                      <FormLabel>Card Number</FormLabel>
                      <Input
                        onChange={handleChangeInput}
                        name="number"
                        value={inputData.number}
                        required
                        type="number"
                        placeholder="Enter Card Number"
                      />
                    </FormControl>
                    <Box
                      display="flex"
                      width="100%"
                      justifyContent="space-between"
                      marginBottom="10px"
                    >
                      <FormControl
                        width={{ base: "48%", md: "45%" }}
                        marginBottom="10px"
                      >
                        <FormLabel>Valid Through</FormLabel>
                        <Input
                          value={inputData.date}
                          onChange={handleChangeInput}
                          name="date"
                          type="date"
                          required
                        />
                      </FormControl>
                      <FormControl
                        width={{ base: "48%", md: "45%" }}
                        marginBottom="10px"
                      >
                        <FormLabel>CVV</FormLabel>
                        <Input
                          name="cvv"
                          value={inputData.cvv}
                          onChange={handleChangeInput}
                          type="number"
                          placeholder="Enter CVV"
                          required
                        />
                      </FormControl>
                    </Box>
                    <FormControl display={inputotp} marginBottom="10px">
                      <FormLabel>Enter Otp</FormLabel>
                      <Input
                        name="otp"
                        // value={inputData.cvv}
                        onChange={handleOtp}
                        type="number"
                        placeholder="Enter OTP"
                        required
                      />
                    </FormControl>
                    <Button
                      onClick={handleCreditPay}
                      bg="blue.400"
                      width="100%"
                      marginBottom="10px"
                    >
                      Pay {amount}
                    </Button>
                    <Button onClick={onClose} variant="ghost" width="100%">
                      Cancel
                    </Button>
                  </TabPanel>
                </Box>
                {/* Internet Banking */}
                <Box>
                  <TabPanel>
                    <FormControl marginBottom="10px">
                      <FormLabel>Account Holder Name</FormLabel>
                      <Input
                        onChange={handleAccountDetailsChange}
                        required
                        name="name"
                        value={accountData.name}
                        placeholder="Enter Account Holder Name"
                      />
                    </FormControl>
                    <FormControl marginBottom="10px">
                      <FormLabel>Account Number</FormLabel>
                      <Input
                        onChange={handleAccountDetailsChange}
                        required
                        value={accountData.number}
                        name="number"
                        type="number"
                        placeholder="Enter Account Number"
                      />
                    </FormControl>
                    <FormControl marginBottom="20px">
                      <FormLabel>IFSC</FormLabel>
                      <Input
                        name="ifsc"
                        value={accountData.ifsc}
                        onChange={handleAccountDetailsChange}
                        required
                        placeholder="Enter IFSC Number"
                      />
                    </FormControl>
                    <FormControl display={inputotp} marginBottom="10px">
                      <FormLabel>Enter Otp</FormLabel>
                      <Input
                        name="otp"
                        // value={inputData.cvv}
                        onChange={handleOtp}
                        type="number"
                        placeholder="Enter OTP"
                        required
                      />
                    </FormControl>
                    <Button
                      onClick={handleBankAccountPay}
                      marginBottom="10px"
                      bg="blue.400"
                      width="100%"
                    >
                      Pay {amount}
                    </Button>
                    <Button onClick={onClose} variant="ghost" width="100%">
                      Cancel
                    </Button>
                  </TabPanel>
                </Box>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
