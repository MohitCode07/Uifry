import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import ThemeContextProvider from "./ThemeContext/ThemeContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ThemeContextProvider>
);
