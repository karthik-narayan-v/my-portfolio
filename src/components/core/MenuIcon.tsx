"use client";

import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

type MenuIconProps = {
  isOpen: boolean;
};

const Line = motion(Box);

const MenuIcon = ({ isOpen }: MenuIconProps) => {
  const theme = useTheme();

  const size = 24;        
  const lineHeight = 2;   
  const gap = 6;          

  return (
    <Box
      sx={{
        width: size,
        height: size,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Line
        sx={{
          position: "absolute",
          width: "100%",
          height: `${lineHeight}px`,
          backgroundColor: theme.palette.primary.light,
          borderRadius: "2px",
        }}
        initial={false}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -gap,
        }}
        transition={{ duration: 0.3 }}
      />

      <Line
        sx={{
          position: "absolute",
          width: "100%",
          height: `${lineHeight}px`,
          backgroundColor: theme.palette.primary.light,
          borderRadius: "2px",
        }}
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      <Line
        sx={{
          position: "absolute",
          width: "100%",
          height: `${lineHeight}px`,
          backgroundColor: theme.palette.primary.light,
          borderRadius: "2px",
        }}
        initial={false}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : gap,
        }}
        transition={{ duration: 0.3 }}
      />
    </Box>
  );
};

export default MenuIcon;