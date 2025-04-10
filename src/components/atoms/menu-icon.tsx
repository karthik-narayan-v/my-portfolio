"use client";

import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

type MenuIconProps = {
  isOpen: boolean;
};

const Line = motion(Box);

const MenuIcon = ({ isOpen }: MenuIconProps) => {
  const theme = useTheme();

  return (
    <Box
      width="24px"
      height="24px"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Line
        position="absolute"
        width="100%"
        height="2px"
        bgcolor={theme.palette.customColor.darker}
        borderRadius={1}
        initial={false}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -6,
        }}
        style={{ originX: "center", originY: "center" }}
        transition={{ duration: 0.3 }}
      />

      <Line
        position="absolute"
        width="100%"
        height="2px"
        bgcolor={theme.palette.customColor.darker}
        borderRadius={1}
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      <Line
        position="absolute"
        width="100%"
        height="2px"
        bgcolor={theme.palette.customColor.darker}
        borderRadius={1}
        initial={false}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 6,
        }}
        style={{ originX: "center", originY: "center" }}
        transition={{ duration: 0.3 }}
      />
    </Box>
  );
};

export default MenuIcon;
