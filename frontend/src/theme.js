// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    vintage: {
      darkBlue: "#244855",
      coralRed: "#E64833",
      brown: "#874F41",
      teal: "#90AEAD",
      cream: "#FBE9D0"
    },
    blue: {
      50: "#e6f2f5",
      100: "#c0dee4",
      200: "#9ac9d3",
      300: "#74b5c3",
      400: "#4ea0b2",
      500: "#244855", // Primary dark blue
      600: "#1b3640",
      700: "#12242b",
      800: "#091216",
      900: "#020506"
    },
    red: {
      50: "#fde8e4",
      100: "#fac5bb",
      200: "#f6a191",
      300: "#f27d67",
      400: "#ed593d",
      500: "#E64833", // Primary coral red
      600: "#d13d29",
      700: "#b5351f",
      800: "#992c15",
      900: "#7d240b"
    },
    brown: {
      50: "#f5efeb",
      100: "#e5d5ce",
      200: "#d4bab0",
      300: "#c39f91",
      400: "#b28473",
      500: "#874F41", // Primary brown
      600: "#764537",
      700: "#653b2e",
      800: "#543125",
      900: "#43271c"
    },
    teal: {
      50: "#f5f8f8",
      100: "#e0e7e6",
      200: "#cbd5d4",
      300: "#b6c4c2",
      400: "#a1b2b0",
      500: "#90AEAD", // Primary teal
      600: "#7d9b9a",
      700: "#6a8988",
      800: "#577776",
      900: "#446564"
    },
  },
  fonts: {
    body: "'Comic Neue', cursive",
    heading: "'Comic Neue', cursive",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "vintage.darkBlue" : "vintage.cream",
        color: props.colorMode === "dark" ? "vintage.cream" : "vintage.darkBlue",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "vintage.coralRed" : "vintage.teal",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "red.600" : "teal.600",
          },
        }),
      },
    },
  },
});

export default theme;