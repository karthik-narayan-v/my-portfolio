"use client";

import { Box } from "@mui/material";
import { Text } from "@/components/core/Text";
import { useTheme } from "@mui/material/styles";
import { scale } from "@/themes/scale";

type TagVariant =
  | "primary"
  | "skill"
  | "pill"
  | "highlight"
  | "soft"
  | "badge";

type VariantConfig = {
  px: number | string;
  py: number | string;
  bg: string;
  color: string;
  fontWeight: number;
  textTransform?: "uppercase";
  letterSpacing?: string;
  hover?: boolean;
};

type TagChipProps = {
  label: string;
  variant?: TagVariant;
};

export const TagChip = ({
  label,
  variant = "primary",
}: TagChipProps) => {
  const theme = useTheme();

  const variants: Record<TagVariant, VariantConfig> = {
    primary: {
      px: scale.sm,
      py: scale.xs,
      bg: theme.palette.customColor.primaryContainer,
      color: theme.palette.customColor.textPrimary,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
    },
    skill: {
      px: scale.sm,
      py: scale.xs,
      bg: theme.palette.customColor.surfaceContainerHighest + "33",
      color: "#fff",
      fontWeight: 500,
    },
    pill: {
      px: scale.lg,
      py: scale.sm,
      bg: theme.palette.customColor.primaryContainer + "33",
      color: theme.palette.customColor.textPrimary,
      fontWeight: 600,
      hover: true,
    },
    highlight: {
      px: scale.lg,
      py: scale.sm,
      bg: theme.palette.customColor.primaryContainer, 
      color: theme.palette.customColor.textPrimary,
      fontWeight: 600,
      hover: true,
    },
    soft: {
      px: scale.lg,
      py: scale.xs,
      bg: theme.palette.customColor.surfaceContainer,
      color: theme.palette.customColor.textPrimary,
      fontWeight: 500,
    },
    badge: {
      px: scale.sm,
      py: scale.xs,
      bg: theme.palette.customColor.primary,
      color: theme.palette.customColor.white,
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  };

  const config = variants[variant];

  return (
    <Box
      sx={{
        display: "inline-block",
        px: config.px,
        py: config.py,
        borderRadius: "999px",
        backgroundColor: config.bg,

        cursor: config.hover ? "default" : "inherit",
        transition: config.hover ? "transform 0.2s" : "none",

        ...(config.hover && {
          "&:hover": {
            transform: "scale(1.05)",
          },
        }),
      }}
    >
      <Text
        variant="caption"
        weight={config.fontWeight as any}
        color={config.color}
      >
        {config.textTransform === "uppercase"
          ? label.toUpperCase()
          : label}
      </Text>
    </Box>
  );
};