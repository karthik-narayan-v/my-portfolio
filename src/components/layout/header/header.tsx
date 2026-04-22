"use client";

import { Box, IconButton, Dialog, useTheme } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@/components/core/MenuIcon";
import { useState, useEffect } from "react";
import Image from "next/image";
import TEXT from "@/constants/text-content";
import { Text } from "@/components/core/Text";
import { usePathname } from "next/navigation";
import { scale } from "@/themes/scale";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const theme = useTheme();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 2000,

        transition: "all 0.3s ease",

        backgroundColor: scrolled
          ? "rgba(255, 243, 249, 0.9)"
          : "transparent",

        backdropFilter: scrolled ? "blur(16px)" : "none",

        borderBottom: scrolled
          ? `1px solid ${theme.palette.customColor.border}`
          : "none",

        boxShadow: scrolled
          ? "0 4px 30px rgba(174, 0, 128, 0.15)"
          : "none",

        px: {
          xs: scale.md,
          md: scale.lg,
          lg: scale.xl,
        },

        py: scale.sm,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <Box display="flex" alignItems="center">
            <Image src="/png/logo.png" alt="Logo" width={40} height={40} />

            <Box ml={scale.sm}>
              <Text
                variant="h5"
                weight="bold"
                color={theme.palette.primary.light}
              >
                {TEXT.name}
              </Text>
            </Box>
          </Box>
        </Link>

        <IconButton
          onClick={() => setOpen((prev) => !prev)}
          sx={{
            zIndex: 2100,
          }}
        >
          <MenuIcon isOpen={open} />
        </IconButton>
      </Box>

      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundImage: `url("/gif/nav_bg.gif")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            pt: scale["4xl"],
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={scale.lg}
        >
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <Box
                key={label}
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {isActive && (
                  <Box
                    component="img"
                    src="/png/pink_cloud.png"
                    alt="cloud"
                    sx={{
                      position: "absolute",
                      width: { xs: "14rem", sm: "18rem" },

                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",

                      zIndex: 0,
                      pointerEvents: "none",
                    }}
                  />
                )}

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Link href={href} onClick={() => setOpen(false)}>
                    <Text
                      variant="h3"
                      weight="semibold"
                      color={
                        isActive
                          ? theme.palette.customColor.primary
                          : theme.palette.customColor.white
                      }
                    >
                      {label}
                    </Text>
                  </Link>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Dialog>
    </Box>
  );
};

export default Header;