"use client";

import { Box, IconButton, Stack, useTheme } from "@mui/material";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import TEXT from "@/constants/text-content";
import { Text } from "@/components/core/Text";
import { scale, container } from "@/themes/scale";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/karthik-narayan-v/",
    color: "#0077B5",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/919677255341",
    color: "#25D366",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:karthikgogul6@gmail.com",
    color: "#151B54",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/karthik._.narayan/",
    color: "#E1306C",
  },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.customColor.primary,
        color: theme.palette.customColor.white,

        py: {
          xs: scale.lg,
          md: scale.xl,
        },

        px: container.paddingX,
      }}
    >
      <Box
        maxWidth={container.maxWidth}
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={scale.lg}
      >
        <Text
          variant="h5"
          weight="semibold"
          align="center"
          color={theme.palette.customColor.white}
        >
          {TEXT.contactHere}
        </Text>

        <Stack direction="row" spacing={scale.md}>
          {socialLinks.map(({ icon, href, color }, index) => (
            <Link key={index} href={href} target="_blank">
              <IconButton
                sx={{
                  width: scale["2xl"],
                  height: scale["2xl"],
                  borderRadius: "50%",

                  backgroundColor: "rgba(255,255,255,0.1)",

                  color: theme.palette.customColor.white,

                  transition: "all 0.3s ease",

                  "&:hover": {
                    backgroundColor: theme.palette.customColor.white,
                    color: color, 
                    transform: "scale(1.1)",
                  },
                }}
              >
                {icon}
              </IconButton>
            </Link>
          ))}
        </Stack>

        <Text
          variant="body2"
          align="center"
          color="rgba(255,255,255,0.8)"
        >
          {TEXT.developedBy.split("Next.js")[0]}
          <Box
            component="span"
            sx={{ fontWeight: 600, color: "#fff" }}
          >
            Next.js
          </Box>
          {TEXT.developedBy.split("Next.js")[1]}
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;