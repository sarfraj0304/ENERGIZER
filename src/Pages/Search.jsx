import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import React from "react";

export const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <IoSearch fontSize={"22px"} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        size={"full"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader ml={"20px"}>Search Here...</DrawerHeader>

          <DrawerBody>
            <InputGroup ml={"10px"}>
              <InputLeftElement
                pointerEvents="none"
                children={<IoSearch fontSize={"22px"} />}
              />
              <Input
                type="text"
                w={"190px"}
                transition="all 0.5s"
                fontSize={"13px"}
                placeholder="Search for Movies, Shows, Channels etc."
                _focus={{ width: "260px" }}
              />
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
