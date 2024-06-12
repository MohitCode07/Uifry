import React, { useContext } from "react";
import { Element } from "react-scroll";
import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import styles from "./AboutUs.module.css";
import img1 from "../../Images/AboutUsImages/img1.png";
import img2 from "../../Images/AboutUsImages/img2.png";
import topRed from "../../Images/topRed.png";
import star from "../../Images/Star.png";
import { ThemeContext } from "../../ThemeContext/ThemeContextProvider";

const AboutUs = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Element name="aboutus">
      <Center pt="2rem" flexDir="column" bg={isDarkMode ? "gray.400" : "white"}>
        <Heading size="md">TESTIMONIAL</Heading>
        <Heading size="xl">What Our Users</Heading>
        <Heading size="xl">Say About Us?</Heading>
      </Center>
      <Box
        className={styles.container}
        px={{ base: "1%", md: "3%", lg: "5%", xl: "8%" }}
        pos="relative"
        bg={isDarkMode ? "gray.400" : "white"}
        overflowX="hidden"
      >
        <Image
          src={star}
          alt="Star"
          pos="absolute"
          top="7%"
          left="47%"
          w="40px"
        />
        <Image
          src={star}
          alt="Star"
          pos="absolute"
          bottom="7%"
          right="27%"
          w="30px"
        />
        <Image
          src={star}
          alt="Star"
          pos="absolute"
          bottom="12%"
          left="17%"
          w="30px"
        />
        <Box
          className={styles.left}
          pos="relative"
          h={{ base: "360px", md: "550px", lg: "600px", xl: "600px" }}
          w={{ base: "360px", md: "550px", lg: "600px", xl: "600px" }}
          m="auto"
        >
          <Image
            src={topRed}
            alt="Red Decoration"
            pos="absolute"
            zIndex={1}
            left="-10%"
            bottom="5%"
          />
          <Image src={img1} alt="User Testimonial" pos="absolute" zIndex={2} />
        </Box>
        <Box className={styles.right} m="auto" p="2rem">
          <Box
            zIndex={2}
            pos="relative"
            display="flex"
            flexDir="column"
            gap="1rem"
          >
            <Heading size="lg">The Best Financial Accounting App Ever!</Heading>
            <Text color={isDarkMode ? "gray.700" : "gray.500"}>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </Text>
            <Image
              src={img2}
              alt="User"
              w={{ base: "100px", md: "150px", lg: "200px", xl: "200px" }}
            />
            <Text fontWeight="bold">Nick Jonas</Text>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};

export default AboutUs;
