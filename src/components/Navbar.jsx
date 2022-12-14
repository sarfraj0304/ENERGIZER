import {
  InputGroup,
  InputLeftElement,
  Tooltip,
  HStack,
  useDisclosure,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaCrown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import styles from "../Styles/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Input,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";
import ZeeDrawer from "./Drawer";
import { Search } from "../Pages/Search";
import ZeeLogo from "../AllRoutes/ZeeLogo.png";
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "#0f0617")}
        px={4}
        zIndex={1001}
        position={"sticky"}
        top={"0px"}
      >
        <Flex h={"73px"} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              h="50px"
              w="50px"
              ml={"20px"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
            >
              <Image
                width={{ base: "70%", md: "100%" }}
                src={ZeeLogo}
                alt="Zee5-Logo"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              <Tooltip
                label="Watch TV Shows, Originals, Movies & Live News Online"
                fontSize={"10px"}
              >
                <NavLink
                  style={({ isActive }) => {
                    return isActive
                      ? { textDecoration: "underline" }
                      : { textDecoration: "none" };
                  }}
                  to="/"
                >
                  Home
                </NavLink>
              </Tooltip>
              <NavLink
                style={({ isActive }) => {
                  return isActive
                    ? { textDecoration: "underline" }
                    : { textDecoration: "none" };
                }}
                to="/TVShows"
              >
                TV Shows
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return isActive
                    ? { textDecoration: "underline" }
                    : { textDecoration: "none" };
                }}
                to="/Movies"
              >
                Movies
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return isActive
                    ? { textDecoration: "underline" }
                    : { textDecoration: "none" };
                }}
                to="/WebSeries"
              >
                Web Series
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return isActive
                    ? { textDecoration: "underline" }
                    : { textDecoration: "none" };
                }}
                to="/News"
              >
                News
              </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {/* Input Search */}
            <Center>
              <InputGroup mr={"10px"} display={{ base: "none", md: "block" }}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IoSearch fontSize={"22px"} />}
                />
                <Input
                  type="text"
                  w={"290px"}
                  transition="all 0.5s"
                  fontSize={"13px"}
                  placeholder="Search for Movies, Shows, Channels etc."
                  _focus={{ width: "350px" }}
                />
              </InputGroup>
            </Center>
            {/* small screen search */}
            <Center display={{ base: "block", md: "none" }} mr={"20px"}>
              <Search />
            </Center>

            {/* dark mode */}
            <Tooltip label="Apply Dark Mode" fontSize="10px">
              <Button
                borderRadius={"80px"}
                mr={4}
                display={{ base: "none", md: "flex" }}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? (
                  <MoonIcon fontSize={"20px"} />
                ) : (
                  <SunIcon fontSize={"20px"} />
                )}
              </Button>
            </Tooltip>

            <Center>
              <Tooltip label="Become Premium Member" fontSize={"10px"}>
                <Button
                  width={{ base: "73px", md: "105px" }}
                  mr={4}
                  height="35px"
                  _hover={{ bgColor: "#320c52" }}
                  leftIcon={<FaCrown />}
                  backgroundColor="#8230c6"
                  color="white"
                  variant="solid"
                  fontSize={{ base: "10px", md: "14px" }}
                >
                  BUY PLAN
                </Button>
              </Tooltip>
            </Center>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <CgProfile size={"30px"} />
              </MenuButton>
              <MenuList bg={useColorModeValue("gray.100", "#0f0617")}>
                <MenuItem
                  bg={useColorModeValue("gray.100", "#0f0617")}
                  _hover={{ bg: useColorModeValue("gray.300", "#200337") }}
                >
                  Account Info
                </MenuItem>
                <MenuItem
                  bg={useColorModeValue("gray.100", "#0f0617")}
                  _hover={{ bg: useColorModeValue("gray.300", "#200337") }}
                >
                  Login / SignUp
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  bg={useColorModeValue("gray.100", "#0f0617")}
                  _hover={{ bg: useColorModeValue("gray.300", "#200337") }}
                >
                  About Us
                </MenuItem>
                <MenuItem
                  bg={useColorModeValue("gray.100", "#0f0617")}
                  _hover={{ bg: useColorModeValue("gray.300", "#200337") }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} borderBlockEndWidth={1}>
            <Stack as={"nav"} spacing={4}>
              <Link to="/">Home</Link>
              <Link to="/TVShows">TV Shows</Link>
              <Link to="/Movies">Movies</Link>
              <Link to="/WebSeries">Web Series</Link>
              <Link to="/News">News</Link>
              <Tooltip label="Apply Dark Mode" fontSize="10px">
                <Button
                  borderRadius={"80px"}
                  mr={4}
                  onClick={toggleColorMode}
                  leftIcon={
                    colorMode === "light" ? (
                      <MoonIcon fontSize={"20px"} />
                    ) : (
                      <SunIcon fontSize={"20px"} />
                    )
                  }
                >
                  Dark Mode
                </Button>
              </Tooltip>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
