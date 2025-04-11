"use client";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import TEXT from "@/constants/text-content";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/karthik-narayan-v/",
    brandStyles: { color: "#0077B5" },
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/919677255341",
    brandStyles: { color: "#25D366" },
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:karthikgogul6@gmail.com",
    brandStyles: { color: "#151B54" },
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/karthik._.narayan/",
    brandStyles: {
      background: "linear-gradient(45deg, #feda75, #d62976, #962fbf, #4f5bd5)",
      WebkitMaskImage:
        "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22white%22><path d=%22M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5zm5.25-.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5z%22/></svg>')",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "cover",
      maskRepeat: "no-repeat",
      maskSize: "cover",
      color: "transparent",
    },
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "customColor.darker",
        color: "#fff",
        py: 4,
        mt: "auto",
        textAlign: "center",
      }}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
    >
      <Typography
        color="customColor.white"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "1rem", sm: "1.25rem" },
          ml: 1,
          fontFamily: "Inter",
        }}
        px={6}
      >
        {TEXT.contactHere}
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2}>
        {socialLinks.map(({ icon, href, brandStyles }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              sx={{
                position: "relative",
                overflow: "hidden",
                width: 48,
                height: 48,
                color: "#fff",
                borderRadius: "50%",
                transition: "color 0.3s ease",
                "&:hover svg": {
                  ...brandStyles,
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  opacity: 0,
                  transform: "scale(0)",
                  transition: "transform 0.4s ease, opacity 0.4s ease",
                },
                "&:hover::before": {
                  transform: "scale(2)",
                  opacity: index === 1 ? 0.3 : 0.8,
                },
              }}
            >
              {icon}
            </IconButton>
          </Link>
        ))}
      </Stack>
      <Typography
        color="customColor.white"
        sx={{
          fontWeight: 400,
          fontSize: { xs: "0.75rem", sm: "1rem" },
          ml: 1,
          fontFamily: "Inter",
        }}
        px={6}
      >
        {TEXT.developedBy.split("Next.js")[0]}
        <Box
          component="span"
          sx={{
            fontWeight: 600,
            color: "#ffffff",
            fontFamily: "Poppins",
            display: "inline",
          }}
        >
          Next.js
        </Box>
        {TEXT.developedBy.split("Next.js")[1]}
      </Typography>
    </Box>
  );
};

export default Footer;
