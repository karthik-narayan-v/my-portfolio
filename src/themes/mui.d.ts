import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customColor: {
      primary: string;
      primaryContainer: string;

      surface: string;
      surfaceContainer: string;
      surfaceContainerLow: string;
      surfaceContainerHigh: string;
      surfaceContainerHighest: string;

      textPrimary: string;
      textSecondary: string;

      border: string;
      outline: string;

      white: string;
      black: string;
    };
  }

  interface PaletteOptions {
    customColor?: {
      primary?: string;
      primaryContainer?: string;

      surface?: string;
      surfaceContainer?: string;
      surfaceContainerLow?: string;
      surfaceContainerHigh?: string;
      surfaceContainerHighest?: string;

      textPrimary?: string;
      textSecondary?: string;

      border?: string;
      outline?: string;

      white?: string;
      black?: string;
    };
  }
}