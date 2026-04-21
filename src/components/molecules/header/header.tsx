"use client";

import { Box, IconButton, Dialog } from "@mui/material";
import Link from "next/link";
import MenuIcon from "../../atoms/menu-icon";
import { useState } from "react";
import Image from "next/image";
import TEXT from "@/constants/text-content";
import { Text } from "@/components/atoms/Text";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home",   href: "/" },
  { label: "Work",   href: "/work" },
  { label: "Skills", href: "/skills" },
  { label: "About",  href: "/about" },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleMenuIconClick = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

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
          onClick={handleClose}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image src="/png/logo.png" alt="Logo" width={40} height={40} />
          <Text
            variant="h6"
            weight="bold"
            color="customColor.darker"
            className={styles.logoText}
          >
            {TEXT.name}
          </Text>
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
                <Link href={href} onClick={handleMenuIconClick} style={{ zIndex: 1 }}>
                  <Text
                    variant="h3"
                    weight="medium"
                    color={isActive ? "customColor.deep" : "customColor.white"}
                    className={styles.navItem}
                  >
                    {label}
                  </Text>
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