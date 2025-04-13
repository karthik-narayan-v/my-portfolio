"use client";

import { Box, Typography, IconButton, Dialog } from "@mui/material";
import Link from "next/link";
import MenuIcon from "../../atoms/menu-icon";
import { useState } from "react";
import Image from "next/image";
import TEXT from "@/constants/text-content";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const pathname = usePathname();
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
        <Link
          href="/"
          onClick={handleMenuIconClick}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image src="/png/logo.png" alt="Logo" width={40} height={40} />
          <Typography
            variant="h6"
            fontWeight="bold"
            color={"customColor.darker"}
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
      <Dialog
        fullScreen
        open={open}
        onClose={handleMenuIconClick}
        hideBackdrop
        PaperProps={{
          sx: {
            backgroundImage: `url("/gif/nav_bg.gif")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            pt: "64px",
            zIndex: 1200,
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={4}
          textAlign="center"
        >
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <Box
                key={label}
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {isActive && (
                  <Box
                    component="img"
                    src="/png/pink_cloud.png"
                    alt="pink cloud"
                    sx={{
                      position: "absolute",
                      width: { xs: 220, sm: 280 },
                      height: "auto",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 0,
                      pointerEvents: "none",
                    }}
                  />
                )}
                <Link
                  href={href}
                  onClick={handleMenuIconClick}
                  style={{ zIndex: 1 }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 600,
                      color: isActive
                        ? "customColor.deep"
                        : "customColor.white",
                      fontFamily: "Poppins",
                      transition: "0.3s ease",
                      "&:hover": { opacity: 0.6 },
                    }}
                  >
                    {label}
                  </Typography>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Dialog>
    </Box>
  );
};

export default Header;
