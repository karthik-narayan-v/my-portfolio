import { ScaleToken, scale } from "@/themes/scale";
import { Typography, TypographyProps } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { CSSProperties } from "react";

type FontWeight = "light" | "regular" | "medium" | "bold" | number;
type TextTransform = CSSProperties["textTransform"];

interface TextProps extends Omit<TypographyProps, "variant" | "color"> {
  variant?: TypographyProps["variant"];
  color?: string;
  size?: ScaleToken;
  weight?: FontWeight;
  textTransform?: TextTransform;
  truncate?: boolean;
  lines?: number;
}

const weightMap: Record<string, number> = {
  light:   300,
  regular: 400,
  medium:  500,
  bold:    700,
};

function resolveWeight(weight?: FontWeight): number | undefined {
  if (weight === undefined) return undefined;
  if (typeof weight === "number") return weight;
  return weightMap[weight];
}

export const Text = ({
  variant = "body1",
  color,
  size,
  weight,
  textTransform,
  truncate,
  lines,
  sx,
  children,
  ...rest
}: TextProps) => {
  const computedSx: SxProps<Theme> = {
    ...(color         && { color }),
    ...(size          && { fontSize: scale[size] }),
    ...(weight        && { fontWeight: resolveWeight(weight) }),
    ...(textTransform && { textTransform }),
    ...(truncate && !lines && {
      whiteSpace:   "nowrap" as const,
      overflow:     "hidden",
      textOverflow: "ellipsis",
    }),
    ...(lines && {
      display:         "-webkit-box",
      WebkitLineClamp: lines,
      WebkitBoxOrient: "vertical" as const,
      overflow:        "hidden",
    }),
    ...(Array.isArray(sx) ? Object.assign({}, ...sx) : sx),
  };

  return (
    <Typography variant={variant} sx={computedSx} {...rest}>
      {children}
    </Typography>
  );
};

export default Text;