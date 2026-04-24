"use client";

import { Box, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";

const SkillHeader = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-3rem",
          left: "-3rem",
          width: "16rem",
          height: "16rem",
          backgroundColor: theme.palette.customColor.primary + "20", // ~10%
          filter: "blur(100px)",
          borderRadius: "50%",
          zIndex: 0,
          mb: scale.xl
        }}
      />

      <Text
        variant="hero"
        weight="extrabold"
        component="h1"
        color={theme.palette.customColor.textPrimary}
      >
        Crafting Digital <br />
        <Box
          component="span"
          sx={{
            background: `linear-gradient(to right, ${theme.palette.customColor.primary}, ${theme.palette.customColor.primaryContainer})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Excellence.
        </Box>
      </Text>

      <Box
        sx={{
          borderLeft: `4px solid ${theme.palette.customColor.primary}`,
          pl: scale.md,
          py: scale.xs,
          maxWidth: "40rem",
        }}
      >
        <Text
          variant="body"
          weight="medium"
          color={theme.palette.customColor.textSecondary}
        >
          A multidisciplinary skill set spanning the full stack, optimized for
          high-performance applications and pixel-perfect interfaces.
        </Text>
      </Box>
    </Box>
  );
};

export default SkillHeader;