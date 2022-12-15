import { extendTheme } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
const styles = {
  global: {
    body: {
      fontFamily: "`Source Sans Pro`,sans-serif",
    },
  },
};

export const theme = extendTheme({ styles });
