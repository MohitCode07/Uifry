import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
import logo from "../Images/NavbarImages/logo.png";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function Footer() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Box
      px={{ base: "1%", md: "3%", lg: "5%", xl: "8%" }}
      position={"relative"}
      bgColor={isDarkMode ? "gray.400" : "white"}
      overflowX={"hidden"}
      pt={{ base: "1rem", md: "2rem", lg: "3rem", xl: "3rem" }}
    >
      <Box
        display={{ base: "flex", md: "grid", lg: "grid", xl: "flex" }}
        flexDirection={{
          base: "column",
          md: "none",
          lg: "none",
          xl: "row",
        }}
        gridTemplateColumns={{
          base: "none",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "none",
        }}
        justifyContent={"space-between"}
        gap={"1rem"}
        p={{ base: "2rem", md: "1rem", lg: "0rem", xl: "0rem" }}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <Image src={logo} alt="logo" w={"100px"} />
          <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
            <MdEmail color={isDarkMode ? "wheat" : "#E84D4D"} /> help@frybix.com
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
            <IoCall color={isDarkMode ? "wheat" : "#E84D4D"} /> +1 234 456 678
            89
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <Heading size={"md"}> Links</Heading>
          <Text>Home</Text>
          <Text>About Us</Text>
          <Text>Bookings</Text>
          <Text>Blog</Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <Heading size={"md"}>Legal</Heading>
          <Text>Terms Of Use</Text>
          <Text>Privacy Policy</Text>
          <Text>Cookie Policy</Text>
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <Heading size={"md"}>Product</Heading>
          <Text>Take Tour</Text>
          <Text>Live Chat</Text>
          <Text>Reveiws</Text>
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <Heading size={"md"}>Newsletter</Heading>
          <Text>Stay Up To Date</Text>
          <Box display={"flex"}>
            <Input placeholder="Your email" />
            <Button
              colorScheme={"gray"}
              bgColor={isDarkMode ? "" : "black"}
              color={isDarkMode ? "black" : "white"}
              _hover={{
                bgColor: "gray",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
      <Center p={"1rem"} borderTop={"1px solid gray"}>
        <Text>Copyright 2022 uifry.com all rights reserved</Text>
      </Center>
    </Box>
  );
}
