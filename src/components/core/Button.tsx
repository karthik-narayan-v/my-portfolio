"use client";

import { Button as MuiButton, ButtonProps as MuiButtonProps, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { scale } from "@/themes/scale";

type Variant = "gradient" | "outline" | "solid" | "ghost";

type ButtonProps = MuiButtonProps & {
  children: ReactNode;
  variantType?: Variant;
  icon?: ReactNode;
  fullWidth?: boolean;
};

export const Button = ({
  children,
  variantType = "gradient",
  icon,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  const baseStyles = {
    px: scale.lg,
    py: scale.sm,
    borderRadius: "999px",
    fontWeight: 700,
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: scale.xs,

    transition: "all 0.3s ease",

    "&:hover": {
      transform: "scale(1.05)",
    },

    "&:active": {
      transform: "scale(0.98)",
    },
  };

  const variants = {
    gradient: {
      background: `linear-gradient(135deg, ${theme.palette.customColor.primary}, ${theme.palette.customColor.primaryContainer})`,
      color: theme.palette.customColor.white,
      boxShadow: "0 10px 32px rgba(174,0,128,0.2)",
    },

    outline: {
      border: `2px solid ${theme.palette.customColor.outline}`,
      color: theme.palette.customColor.primary,

      "&:hover": {
        backgroundColor:
          theme.palette.customColor.surfaceContainerLow,
      },
    },

    solid: {
      backgroundColor: theme.palette.customColor.primary,
      color: theme.palette.customColor.white,
      boxShadow: "0 8px 20px rgba(242,74,184,0.3)",
    },

    ghost: {
      border: `2px solid ${theme.palette.customColor.outline}30`,
      color: theme.palette.customColor.primary,

      "&:hover": {
        backgroundColor: theme.palette.customColor.surfaceContainer,
      },
    },
  };

  return (
    <MuiButton
      fullWidth={fullWidth}
      sx={{
        ...baseStyles,
        ...variants[variantType],
      }}
      {...props}
    >
      {children}
      {icon && <span>{icon}</span>}
    </MuiButton>
  );
};