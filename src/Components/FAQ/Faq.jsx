import React, { useContext } from "react";
import { Element } from "react-scroll";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../ThemeContext/ThemeContextProvider";
import styles from "./Faq.module.css";
import img1 from "../../Images/FaqImages/img1.png";
import star from "../../Images/Star.png";

const Faq = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const faqData = [
    {
      id: 1,
      question: "What is Uifry?",
      answer:
        "Uifry is the best financial accounting app ever! It helps you manage your finances efficiently.",
    },
    {
      id: 2,
      question: "How does Uifry work?",
      answer:
        "Uifry offers a user-friendly interface and advanced features to track and manage your finances seamlessly.",
    },
    {
      id: 3,
      question: "Is Uifry secure?",
      answer:
        "Yes, Uifry uses top-notch security measures to ensure your data is safe and protected.",
    },
    {
      id: 4,
      question: "Can I customize Uifry?",
      answer:
        "Absolutely! Uifry is fully customizable to suit your specific financial management needs.",
    },
    {
      id: 5,
      question: "Does Uifry support multiple currencies?",
      answer:
        "Yes, Uifry supports multiple currencies, making it ideal for global users.",
    },
    {
      id: 6,
      question: "How can I get support?",
      answer:
        "You can reach out to our support team via the app or visit our website for more information.",
    },
  ];

  return (
    <Element name="faq">
      <Box
        px={{ base: "1%", md: "3%", lg: "5%", xl: "8%" }}
        position="relative"
        bgColor={isDarkMode ? "gray.400" : "white"}
        overflowX="hidden"
      >
        <Image
          src={star}
          alt="star"
          position="absolute"
          top="5%"
          right="5%"
          w="40px"
        />
        <Image
          src={star}
          alt="star"
          position="absolute"
          bottom="45%"
          left="5%"
          w="40px"
          display={{ base: "none", md: "block" }}
        />
        <Image
          src={star}
          alt="star"
          position="absolute"
          bottom="5%"
          right="5%"
          w="50px"
        />

        <Box my="2rem" textAlign="center">
          <Heading color={isDarkMode ? "wheat" : "#E84D4D"} size="md">
            FAQ
          </Heading>
          <Heading size="2xl">Frequently Asked Questions</Heading>
        </Box>

        <Box className={styles.container} my="2rem">
          {faqData.map((item) => (
            <Box
              key={item.id}
              borderRadius="10px"
              p="1rem"
              mb="1rem"
              className={isDarkMode ? styles.dark : styles.light}
            >
              <Heading size="md" mb="0.5rem">
                {item.question}
              </Heading>
              <Text>{item.answer}</Text>
            </Box>
          ))}
        </Box>

        <Image src={img1} alt="faq illustration" w="100%" />
      </Box>
    </Element>
  );
};

export default Faq;
