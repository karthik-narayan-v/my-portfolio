"use client";

import { Box, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import MenuIcon from "../../atoms/menu-icon";
import { useState } from "react";
import Image from "next/image";
import TEXT from "@/constants/text-content";
import styles from "./header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenuIconClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box className={styles.headerContainer}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="xxl"
        mx="auto"
        width="100%"
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/png/logo.png" alt="Logo" width={40} height={40} />
          <Typography
            variant="h6"
            fontWeight="bold"
            color="customColor.darker"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              ml: 1,
              whiteSpace: "nowrap",
              fontFamily: "Poppins",
            }}
          >
            {TEXT.name}
          </Typography>
        </Link>

        <IconButton
          onClick={handleMenuIconClick}
          disableRipple
          sx={{ ml: 2, mr: 0, display: { xs: "flex" } }}
        >
          <MenuIcon isOpen={open} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
