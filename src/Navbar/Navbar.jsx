import styles from "./Navbar.module.css";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider.jsx";
import { useContext, useRef } from "react";
import { Link } from "react-scroll";
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import logo from "../Images/NavbarImages/logo.png";
import DarkModeToggle from "react-dark-mode-toggle";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const btnRef = useRef();

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -82,
    duration: 500,
  };

  const activeLinkStyle = {
    color: isDarkMode ? "wheat" : "#E84D4D",
    textDecoration: "underline",
    position: "relative",
    bottom: "5px",
  };

  const formatSectionName = (section) => {
    if (section === "faq") return "FAQ";
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  return (
    <Flex
      className={styles.navbar}
      justifyContent="space-between"
      alignItems="center"
      bg={isDarkMode ? "gray.700" : "white"}
      color={isDarkMode ? "gray.200" : "black"}
      zIndex={999}
      position="sticky"
      top="0"
      w="100%"
      px="10%"
      py={{ base: "0.5rem", md: "1rem" }}
      boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
    >
      <Center gap="4rem">
        <Center w={{ base: "4rem", md: "8rem", lg: "10rem" }}>
          <Link to="home" {...linkProps}>
            <Image src={logo} alt="logo" />
          </Link>
        </Center>
        <Center gap="2rem" fontSize="1.2rem" display={["none", "none", "flex"]}>
          {["home", "features", "advantages", "aboutus", "faq"].map(
            (section) => (
              <Link
                key={section}
                to={section}
                {...linkProps}
                style={{ cursor: "pointer" }}
                activeStyle={activeLinkStyle}
              >
                {formatSectionName(section)}
              </Link>
            )
          )}
        </Center>
      </Center>
      <Center
        gap={{ base: "0.5rem", md: "1rem", xl: "2rem" }}
        fontSize="1.2rem"
      >
        <Button
          bgColor={isDarkMode ? "gray.200" : "black"}
          color={isDarkMode ? "black" : "white"}
          _hover={{ bgColor: "gray.600", color: "white" }}
          fontSize={{ base: "0.8rem", xl: "1.2rem" }}
          h={{ base: "2rem", xl: "3rem" }}
          w={{ base: "4.5rem", xl: "10rem" }}
        >
          Download
        </Button>
        <Center>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              ref={btnRef}
              bg={isDarkMode ? "gray.900" : "#E84D4D"}
              color="white"
              display={["flex", "flex", "none"]}
              m={4}
              _hover={{ bg: isDarkMode ? "black" : "red.400" }}
              h={{ base: "2rem", xl: "3rem" }}
            />
            <MenuList
              bg={isDarkMode ? "gray.500" : "red.400"}
              color="white"
              display={["flex", "none"]}
              flexDirection="column"
              p={4}
              gap={3}
            >
              {["home", "features", "advantages", "aboutus", "faq"].map(
                (section) => (
                  <Link key={section} to={section} {...linkProps}>
                    <MenuItem bg="transparent">
                      <Box display="flex" alignItems="center" gap={2}>
                        {formatSectionName(section)}
                      </Box>
                    </MenuItem>
                  </Link>
                )
              )}
            </MenuList>
          </Menu>
        </Center>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={50}
        />
      </Center>
    </Flex>
  );
}
