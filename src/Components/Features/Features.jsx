import React, { useContext } from "react";
import { Element } from "react-scroll";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import styles from "./Features.module.css";
import img1 from "../../Images/FeaturesImages/img1.png";
import img2 from "../../Images/FeaturesImages/img2.png";
import img3 from "../../Images/FeaturesImages/img3.png";
import img4 from "../../Images/FeaturesImages/img4.png";
import { ThemeContext } from "../../ThemeContext/ThemeContextProvider";
import topYellow from "../../Images/topYellow.png";
import topRed from "../../Images/topRed.png";
import star from "../../Images/Star.png";
export default function Features() {
  const { isDarkMode } = useContext(ThemeContext);
  const Data = [
    {
      id: 1,
      img: img2,
      heading: "Budgeting Intervals",
      text: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      id: 2,
      img: img3,
      heading: "Budgeting Intervals",
      text: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      id: 3,
      img: img4,
      heading: "Budgeting Intervals",
      text: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
  ];
  return (
    <Element name="features">
      <Box
        // border={"1px solid black"}
        className={styles.container}
        px={{ base: "1%", md: "3%", lg: "5%", xl: "8%" }}
        position={"relative"}
        bgColor={isDarkMode ? "gray.400" : "white"}
        overflowX={"hidden"}
        overflowY={"hidden"}
      >
        <Image
          src={star}
          alt="star"
          position={"absolute"}
          top={"7%"}
          left={"7%"}
          w={"50px"}
        />
        <Box
          className={styles.left}
          position={"relative"}
          h={{ base: "360px", md: "550px", lg: "600px", xl: "600px" }}
          w={{ base: "360px", md: "550px", lg: "600px", xl: "600px" }}
          // border={"1px solid black"}
          m={"auto"}
        >
          <Image
            src={topYellow}
            alt="topYellow"
            position={"absolute"}
            zIndex={1}
            left={"-2%"}
          />
          <Image src={img1} alt="img1" position={"absolute"} zIndex={2} />
        </Box>
        <Box
          className={styles.right}
          m={"auto"}
          // border={"1px solid black"}
          p={"2rem"}
        >
          <Image src={topRed} alt="topRed" position={"absolute"} zIndex={1} width={"300px"} right={"-5%"} />
          <Heading size={"md"} zIndex={2} color={isDarkMode ? "wheat" : "#E84D4D"}>FEATURES</Heading>
          <Heading size={"xl"} zIndex={2} >Uifry Premium</Heading>

          {Data.map((item) => (
            <Box key={item.id} zIndex={2} position={"relative"}>
              <Box display={"flex"} gap={"1rem"} mt={"1rem"} >
                <Image src={item.img} alt="img2" />
                <Text fontWeight={"bold"}> {item.heading}</Text>
              </Box>
              <Text zIndex={5} color={isDarkMode ? "gray.700" : "gray.500"}> {item.text}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Element>
  );
}
