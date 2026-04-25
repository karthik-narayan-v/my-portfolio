"use client";

import { Box, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const GetInTouchSection = () => {
  const theme = useTheme();

  const handleEmailClick = () => {
    window.location.href = "mailto:karthikgogul3@gmail.com";
  };

  return (
    <Box
      component="section"
      sx={{
        py: scale["4xl"],
        px: { xs: scale.md, md: scale.lg },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "75rem",
          borderRadius: scale.md,
          backgroundColor: theme.palette.customColor.surfaceContainer,

          p: scale["2xl"], 

          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: `linear-gradient(90deg, ${theme.palette.customColor.primary}, ${theme.palette.customColor.primaryContainer})`,
          }}
        />

        <Box
          sx={{
            maxWidth: "40rem",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: scale.md,
          }}
        >
          <Text
            variant="h1"
            weight="extrabold"
            align="center" 
          >
            Ready to build the future?
          </Text>

          <Text
            color={theme.palette.customColor.textSecondary}
            align="center" 
          >
            I&apos;m currently looking for new opportunities to collaborate on
            ambitious projects. Let&apos;s create something remarkable together.
          </Text>

          <Box
            mt={scale.lg}
            display="flex"
            justifyContent="center"
          >
            <MotionBox
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmailClick}
              sx={{
                px: scale["2xl"],
                py: scale.lg,
                borderRadius: "999px",
                cursor: "pointer",
                fontWeight: 700,
                color: "#fff",

                background: `linear-gradient(135deg, ${theme.palette.customColor.primary}, ${theme.palette.customColor.primaryContainer})`,

                boxShadow: "0 10px 30px rgba(174,0,128,0.25)",

                transition: "all 0.3s ease",
              }}
            >
              Get In Touch
            </MotionBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouchSection;