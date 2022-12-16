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
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Search = () => {
  const [inputText, setInputText] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const handleSearch = () => {
    console.log(inputText);
    onClose();
  };
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
              {/* <InputLeftElement
                pointerEvents="none"
                children={<IoSearch fontSize={"22px"} />}
              /> */}
              <Input
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
                type="text"
                w={"70%"}
                transition="all 0.5s"
                fontSize={"13px"}
                placeholder="Search for Movies, Shows, Channels etc."
                _focus={{ width: "100%" }}
              />
              <Link to={`/searchTmdbData/${inputText}`}>
                {" "}
                <Button
                  onClick={handleSearch}
                  marginLeft="5px"
                  size={{ base: "md", md: "md" }}
                  leftIcon={<IoSearch />}
                ></Button>
              </Link>
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
