"use client";

import { Box, Stack, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";

const techStack = [
  { label: "React Native", icon: "code" },
  { label: "TypeScript", icon: "data_object" },
  { label: "AWS / Vercel", icon: "cloud" },
  { label: "Flutter", icon: "flutter" },
  { label: "PostgreSQL", icon: "database" },
];

const TechStackSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: scale["2xl"],
        borderTop: `1px solid ${theme.palette.customColor.surfaceContainerHighest}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: scale.lg,
      }}
    >
      <Box textAlign="center">
        <Text
          variant="caption"
          weight="medium"
          color={theme.palette.customColor.textSecondary}
        >
          MASTERED ENVIRONMENTS
        </Text>
      </Box>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={scale.xl}
        sx={{
          opacity: 0.6,
        }}
      >
        {techStack.map(({ label, icon }) => (
          <Box
            key={label}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: scale.xs,
              fontWeight: 700,
              fontSize: "1.25rem",
              color: theme.palette.customColor.textPrimary,

              transition: "opacity 0.3s ease",

              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <Box
              component="span"
              className="material-symbols-outlined"
              sx={{
                fontSize: "1.5rem",
                color: theme.palette.customColor.primary,
              }}
            >
              {icon}
            </Box>

            <Text variant="h5" weight="bold">
              {label}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default TechStackSection;