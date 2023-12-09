import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    papayawhip: {
      100: "#ffefd5", // Adjust the color values as needed
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Arial, sans-serif",
  },
  // Add more theme configurations as needed
});

export default theme;
