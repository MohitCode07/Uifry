import React, { useContext } from "react";
import { Element } from "react-scroll";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import styles from "./Home.module.css";
import img1 from "../../Images/HomeImages/img1.png";
import topRed from "../../Images/topRed.png";
import star from "../../Images/Star.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { GoPlay } from "react-icons/go";
import topYellow from "../../Images/topYellow.png";
import img2 from "../../Images/HomeImages/img2.png";
import img4 from "../../Images/HomeImages/img4.png";
import img5 from "../../Images/HomeImages/img5.png";
import { ThemeContext } from "../../ThemeContext/ThemeContextProvider.jsx";

export default function Home() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Element name="home">
      <Box
        className={styles.container}
        px={{ base: "1%", md: "3%", lg: "5%", xl: "8%" }}
        position={"relative"}
        bgColor={isDarkMode ? "gray.400" : "white"}
      >
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          top={"10%"}
          left={"7%"}
          w={"30px"}
        />
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          top={"5%"}
          right={"8%"}
          w={"40px"}
        />
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          bottom={{ base: "15%", md: "25%", lg: "35%", xl: "40%" }}
          left={"20%"}
          width={"40px"}
        />
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          bottom={{ base: "12%", md: "15%", lg: "20%", xl: "25%" }}
          right={"35%"}
          width={"50px"}
        />

        <Box
          className={styles.left}
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          gap={"2rem"}
          p={"2rem"}
        >
          <Image
            src={topRed}
            alt="tr"
            position={"absolute"}
            top={"-2%"}
            left={"25%"}
            zIndex={1}
            w={"50%"}
          />
          <Heading size="2xl" mt={"2rem"} zIndex={2}>
            Empower Your Financial Future
          </Heading>
          <Text color={isDarkMode ? "gray.700" : "gray.500"} zIndex={2}>
            Discover tools and strategies to take control of your finances. Join
            us and start making informed financial decisions today.
          </Text>
          <Box>
            <Button
              bgColor={"black"}
              color={"white"}
              borderRadius={"none"}
              zIndex={2}
              mr={"1rem"}
            >
              Get Started{" "}
              <HiOutlineArrowLongRight
                size={20}
                style={{ marginLeft: "5px" }}
              />
            </Button>
            <Button variant={"outline"} borderRadius={"none"} zIndex={2}>
              <GoPlay size={20} style={{ marginRight: "5px" }} />
              Watch Video
            </Button>
          </Box>
          <Image src={img1} alt="logo" w={"70%"} />
        </Box>
        <Box
          className={styles.right}
          position={"relative"}
          h={{ base: "360px", md: "650px", lg: "700px", xl: "720px" }}
          w={{ base: "360px", md: "650px", lg: "700px", xl: "720px" }}
          m={"auto"}
          mt={{ base: "-1rem", md: "-1rem", lg: "-2rem", xl: "-3rem" }}
        >
          <Image
            src={topYellow}
            alt="color"
            position={"absolute"}
            zIndex={1}
            w={{ base: "300px", md: "550px", lg: "600px", xl: "600px" }}
            bottom={"-10%"}
            left={"-10%"}
          />
          <Image
            src={img2}
            alt="circles"
            position={"absolute"}
            zIndex={1}
            w={{ base: "320px", md: "600px", lg: "650px", xl: "650px" }}
            right={"5%"}
          />
          <Image
            src={img5}
            alt="mobile1"
            position={"absolute"}
            zIndex={2}
            w={{ base: "285px", md: "530px", lg: "580px", xl: "580px" }}
            right={"-5%"}
            top={"20%"}
          />
          <Image
            src={img4}
            alt="mobile2"
            position={"absolute"}
            zIndex={3}
            w={{ base: "285px", md: "530px", lg: "580px", xl: "580px" }}
            right={"10%"}
            top={"5%"}
          />
          <Image
            src={img5}
            alt="mobile3"
            position={"absolute"}
            zIndex={4}
            w={{ base: "285px", md: "530px", lg: "580px", xl: "580px" }}
            left={"-5%"}
            top={"-5%"}
          />
        </Box>
      </Box>
    </Element>
  );
}
