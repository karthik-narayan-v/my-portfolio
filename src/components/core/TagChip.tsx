"use client";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { scale } from "@/themes/scale";

type TagVariant =
  | "hero"
  | "primary"
  | "skill"
  | "pill"
  | "highlight"
  | "soft"
  | "badge";

type VariantConfig = {
  px: string;
  py: string;
  bg?: string;
  color?: string;
  fontSize: string;
  fontWeight: number;
  letterSpacing?: string;
  textTransform?: "uppercase";
  hover?: boolean;
};

type TagChipProps = {
  label: string;
  variant?: TagVariant;
  mb?: string | number;
};

export const TagChip = ({
  label,
  variant = "primary",
  mb,
}: TagChipProps) => {
  const theme = useTheme();

  const variants: Record<TagVariant, VariantConfig> = {
    hero: {
      px: scale.md,
      py: "0.375rem",
      bg: theme.palette.customColor.tertiaryContainer,
      color: theme.palette.customColor.onTertiaryContainer,
      fontSize: "0.75rem",
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
    },

    primary: {
      px: scale.sm,
      py: scale.xs,
      bg: theme.palette.customColor.primaryContainer,
      color: theme.palette.customColor.textPrimary,
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },

    /* 🔥 THIS IS YOUR HTML STYLE */
    skill: {
      px: scale.lg,
      py: scale.sm,
      bg: theme.palette.customColor.tertiaryContainer,
      color: theme.palette.customColor.onTertiaryContainer,
      fontSize: "0.875rem",
      fontWeight: 500,
      hover: true,
    },

    pill: {
      px: scale.lg,
      py: scale.sm,
      bg: theme.palette.customColor.primaryContainer + "33",
      color: theme.palette.customColor.textPrimary,
      fontSize: "0.875rem",
      fontWeight: 600,
      hover: true,
    },

    highlight: {
      px: scale.lg,
      py: scale.sm,
      bg: theme.palette.customColor.primaryContainer,
      color: theme.palette.customColor.textPrimary,
      fontSize: "0.875rem",
      fontWeight: 600,
      hover: true,
    },

    /* 🔥 MAKE THIS INTERACTIVE */
    soft: {
      px: scale.lg,
      py: scale.xs,
      bg: theme.palette.customColor.surfaceContainer,
      color: theme.palette.customColor.textPrimary,
      fontSize: "0.875rem",
      fontWeight: 500,
      hover: true,
    },

    badge: {
      px: scale.sm,
      py: scale.xs,
      bg: theme.palette.customColor.primary,
      color: theme.palette.customColor.white,
      fontSize: "0.65rem",
      fontWeight: 800,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
  };

  const config = variants[variant];

  return (
    <Box
      sx={{
        display: "inline-block",
        px: config.px,
        py: config.py,
        mb,

        borderRadius: "999px",
        backgroundColor: config.bg,
        color: config.color,

        fontSize: config.fontSize,
        fontWeight: config.fontWeight,
        letterSpacing: config.letterSpacing,
        textTransform: config.textTransform,

        transition: config.hover
          ? "transform 0.25s ease, box-shadow 0.25s ease"
          : "none",

        cursor: config.hover ? "default" : "inherit",

        /* 🔥 PREMIUM HOVER */
        ...(config.hover && {
          "&:hover": {
            transform: "translateY(-2px) scale(1.06)",
            boxShadow: "0 10px 25px rgba(174,0,128,0.18)",
          },
        }),
      }}
    >
      {config.textTransform === "uppercase"
        ? label.toUpperCase()
        : label}
    </Box>
  );
};