import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customColor: {
      white: string;
      light: string;
      mid: string;
      deep: string;
      darker: string;
    };
  }
  interface PaletteOptions {
    customColor?: {
      white: string;
      light: string;
      mid: string;
      deep: string;
      darker: string;
    };
  }
}
