import "@mui/material/styles";
declare module "@fontsource/inter";

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
  interface TypographyVariants {
    display: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    display?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display: true;
  }
}
