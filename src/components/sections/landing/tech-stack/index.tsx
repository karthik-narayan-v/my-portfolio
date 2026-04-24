"use client";

import { Box, Stack, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";

import {
  FaReact,
  FaAndroid,
  FaJava,
  FaJsSquare,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const techStack = [
  { label: "React Native", icon: <FaReact /> },
  { label: "Android", icon: <FaAndroid /> },
  { label: "Next.js", icon: <SiNextdotjs /> },
  { label: "Java", icon: <FaJava /> },
  { label: "JavaScript", icon: <FaJsSquare /> },
];

const TechStackSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: scale["3xl"],

        borderTop: `1px solid ${theme.palette.customColor.outlineVariant}`,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: scale["2xl"],
      }}
    >
      {/* 🔥 TITLE (HTML EXACT STYLE) */}
      <Text
        variant="caption"
        weight="medium"
        color={theme.palette.customColor.textSecondary}
        align="center"
      >
        <span
          style={{
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Mastered Environments
        </span>
      </Text>

      {/* 🔥 TECH STACK */}
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={scale["2xl"]}
        sx={{
          opacity: 0.7,
        }}
      >
        {techStack.map(({ label, icon }) => (
          <Box
            key={label}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: scale.sm,

              fontWeight: 700,
              fontSize: "1.25rem",

              color: theme.palette.customColor.textPrimary,

              cursor: "default",

              transition: "all 0.35s ease",

              // 🔥 glow layer
              "&::before": {
                content: '""',
                position: "absolute",
                inset: "-8px",
                borderRadius: "12px",
                background: theme.palette.customColor.primary,
                opacity: 0,
                filter: "blur(20px)",
                transition: "opacity 0.35s ease",
                zIndex: 0,
              },

              "&:hover": {
                transform: "translateY(-4px) scale(1.05)",
                opacity: 1,
              },

              "&:hover::before": {
                opacity: 0.15,
              },

              "&:hover .icon": {
                transform: "scale(1.2)",
                color: theme.palette.customColor.primary,
              },
            }}
          >
            {/* ICON */}
            <Box
              className="icon"
              sx={{
                position: "relative",
                zIndex: 1,
                fontSize: "1.6rem",
                color: theme.palette.customColor.primary,

                display: "flex",
                alignItems: "center",

                transition: "all 0.3s ease",
              }}
            >
              {icon}
            </Box>

            {/* TEXT */}
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Text variant="h5" weight="bold">
                {label}
              </Text>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default TechStackSection;