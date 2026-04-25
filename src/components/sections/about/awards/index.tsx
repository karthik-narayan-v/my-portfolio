"use client";

import { Box, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";
import { motion } from "framer-motion";

import { FiAward, FiFileText, FiHeart } from "react-icons/fi";

const MotionBox = motion(Box);

const awards = [
  {
    title: "Developer of the Year",
    subtitle: "Global Tech Summit 2023",
    description:
      "Recognized for outstanding contribution to open-source UI libraries and component architecture.",
    icon: FiAward,
    variant: "light",
  },
  {
    title: "The Editorial UI",
    subtitle: "Featured in Codepen Spark",
    description:
      "My series on grid-based editorial layouts was featured as a must-read for creative developers in 2022.",
    icon: FiFileText,
    variant: "dark",
  },
  {
    title: "Accessibility First",
    subtitle: "A11Y Honors 2021",
    description:
      "Honored for creating inclusive digital experiences that exceed standard WCAG compliance.",
    icon: FiHeart,
    variant: "light",
  },
];

const AwardsSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        mt: scale.lg,
        px: { xs: scale.md, md: scale.lg },
      }}
    >
      <Box mb={scale["3xl"]}>
        <Text variant="h2" weight="bold">
          Recognition & Impact
        </Text>

        <Box mt={scale.sm}>
          <Text color={theme.palette.customColor.textSecondary}>
            Moments when the logic and flair were celebrated.
          </Text>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: scale.lg,
        }}
      >
        {awards.map((award) => {
          const Icon = award.icon;

          return (
            <MotionBox
              key={award.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              sx={{
                p: scale.lg,
                borderRadius: scale.md,
                position: "relative",
                overflow: "hidden",

                backgroundColor:
                  award.variant === "dark"
                    ? theme.palette.customColor.inverseSurface
                    : theme.palette.customColor.surfaceContainerHighest,

                color:
                  award.variant === "dark"
                    ? theme.palette.customColor.white
                    : theme.palette.customColor.textPrimary,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  opacity: 0.08,
                  transform: "scale(2)",
                  pointerEvents: "none",
                }}
              >
                <Icon size={80} />
              </Box>

              <Box position="relative" zIndex={1}>
                <Box
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: scale.md,

                    background:
                      award.variant === "dark"
                        ? "rgba(255,255,255,0.1)"
                        : `linear-gradient(135deg, ${theme.palette.customColor.primary}, ${theme.palette.customColor.primaryContainer})`,

                    color:
                      award.variant === "dark"
                        ? theme.palette.customColor.primaryContainer
                        : "#fff",
                  }}
                >
                  <Icon size={20} />
                </Box>

                <Text variant="h5" weight="bold">
                  {award.title}
                </Text>

                <Box mt={scale.xs} mb={scale.sm}>
                  <Text
                    variant="caption"
                    weight="bold"
                  >
                    {award.subtitle}
                  </Text>
                </Box>

                <Text
                  variant="body2"
                  color={
                    award.variant === "dark"
                      ? "rgba(255,255,255,0.7)"
                      : theme.palette.customColor.textSecondary
                  }
                >
                  {award.description}
                </Text>
              </Box>
            </MotionBox>
          );
        })}
      </Box>
    </Box>
  );
};

export default AwardsSection;