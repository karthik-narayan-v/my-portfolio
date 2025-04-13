import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto";
import "@fontsource/inter";
import "@fontsource/poppins";

const theme = createTheme({
  palette: {
    customColor: {
      white: "#ffffff",
      light: "#fdb2e7",
      mid: "#fb93d7",
      deep: "#ee61bd",
      darker: "#f24ab8",
    },
  },
  typography: {
    fontFamily: `'Inter', 'Poppins', 'Roboto'`,
  },
});

export default theme;
