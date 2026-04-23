import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    primary: {
      main: "#ae0080",
      light: "#ff68c6",
      dark: "#990070",
    },

    background: {
      default: "#fff3f9",
    },

    text: {
      primary: "#432342",
      secondary: "#744f71",
    },

    customColor: {
      primary: "#ae0080",
      primaryContainer: "#ff68c6",
      primaryDim: "#990070",

      surface: "#fff3f9",
      surfaceContainer: "#ffdff8",
      surfaceContainerLow: "#ffebf8",
      surfaceContainerHigh: "#ffd6f7",
      surfaceContainerHighest: "#ffcef7",

      textPrimary: "#432342",
      textSecondary: "#744f71",

      border: "#cc9fc5",
      outline: "#926a8d",
      outlineVariant: "rgba(204,159,197,0.3)",

      tertiaryContainer: "#fdb2e7",
      onTertiaryContainer: "#662d5a",

      inverseSurface: "#1e031f",

      glow: "#ee61bd", 

      white: "#ffffff",
      black: "#000000",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
      fontWeight: 800,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: 800,
    },
    h3: {
      fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
      fontWeight: 700,
    },
    h4: {
      fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
      fontWeight: 600,
    },
    h5: {
      fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
      fontWeight: 600,
    },

    body1: {
      fontSize: "clamp(0.95rem, 1vw, 1rem)",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
    },

    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 16,
  },
});

export default theme;