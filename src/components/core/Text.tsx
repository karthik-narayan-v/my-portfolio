"use client";

import { Typography, useTheme } from "@mui/material";

type Variant =
  | "hero"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "body2"
  | "caption";

type Weight = "regular" | "medium" | "semibold" | "bold" | "extrabold";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  weight?: Weight;
  color?: string;
  align?: "left" | "center" | "right";
  component?: React.ElementType;
};

const weightMap = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

const variantMap = {
  hero: "clamp(3rem, 8vw, 5.5rem)",
};

/* ✅ SAFE HTML TAG MAPPING */
const variantComponentMap: Record<Variant, React.ElementType> = {
  hero: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  body2: "p",
  caption: "span",
};

export const Text = ({
  children,
  variant = "body",
  weight = "regular",
  color,
  align = "left",
  component,
}: Props) => {
  const theme = useTheme();

  const fontSize =
    variant === "hero"
      ? variantMap.hero
      : theme.typography[
          variant === "body" ? "body1" : variant
        ]?.fontSize;

  return (
    <Typography
      component={component || variantComponentMap[variant]} // ✅ FIXED
      sx={{
        fontSize,
        fontWeight: weightMap[weight],
        color: color || theme.palette.customColor.textPrimary,
        textAlign: align,

        lineHeight:
          variant === "hero" || variant === "h1" || variant === "h2"
            ? 1.1
            : 1.5,

        letterSpacing:
          variant === "hero"
            ? "-0.05em"
            : variant.startsWith("h")
            ? "-0.025em"
            : "normal",
      }}
    >
      {children}
    </Typography>
  );
};