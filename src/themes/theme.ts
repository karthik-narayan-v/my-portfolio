import { createTheme } from "@mui/material/styles";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

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
    fontFamily: "Inter",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
    button: { fontWeight: 500, textTransform: "none" },
  },
});

export default theme;
