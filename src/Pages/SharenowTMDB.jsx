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
  Text,
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

export const ShareNowTMDB = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fontColor = useColorModeValue("white", "black");
  const bg = useColorModeValue("#0f0617", "white");

  return (
    <>
      <Box
        onClick={onOpen}
        cursor="pointer"
        width="50%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg="#181020"
        padding="20px"
        justifyContent="space-between"
      >
        <BsShare />

        <Text fontSize={{ base: "13px", md: "15px" }}>Share</Text>
      </Box>
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
