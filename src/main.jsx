import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

import { extendTheme } from "@chakra-ui/react";
import App from "./App";

import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  defaultProps: {
    size: "lg",
    variant: "outline",
    colorScheme: "brand",
  },
});

// This saves you time, instead of manually setting the size,
// variant and color scheme every time you use a button:

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    ow: "#fafafa",
    light: "#c4d3d2",
    medium: "#416f8a",
    dark: "#1c2528",
  },
};

// const router = createBrowserRouter(routes);

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <RouterProvider router={router} /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
