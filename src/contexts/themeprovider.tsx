"use client";

import theme from "@/themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import React, { ReactNode } from "react";

interface ThemeRegistryProps {
  children: ReactNode;
}

const ThemeRegistry = ({ children }: ThemeRegistryProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeRegistry;
