import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useColorModeValue,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  WhatsappIcon,
  InstapaperIcon,
  TwitterIcon,
} from "react-share";

import React from "react";
import { BsShare } from "react-icons/bs";

export const ShareNow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fontColor = useColorModeValue("white", "black");
  const bg = useColorModeValue("#0f0617", "white");

  return (
    <>
      <Button
        onClick={onOpen}
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={useColorModeValue("gray.200", "#291d34")}>
          <ModalHeader>Share Now</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box width="70%" display="flex" justifyContent="space-between">
              <WhatsappShareButton url="https://web.whatsapp.com/">
                <WhatsappIcon round={true} size={50}></WhatsappIcon>
              </WhatsappShareButton>
              <FacebookShareButton url="https://www.facebook.com/">
                <FacebookIcon round={true} size={50}></FacebookIcon>
              </FacebookShareButton>
              <InstapaperShareButton url="https://www.instagram.com/">
                <InstapaperIcon round={true} size={50}></InstapaperIcon>
              </InstapaperShareButton>
              <TwitterShareButton url="https://twitter.com/i/flow/login">
                <TwitterIcon round={true} size={50}></TwitterIcon>
              </TwitterShareButton>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
