"use client";

import { Box, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { TagChip } from "@/components/core/TagChip";
import { scale } from "@/themes/scale";

const skills = {
  web: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  tools: ["Git", "Docker", "Figma", "Firebase", "Postman"],
};

const TechnicalSkillsSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(12, 1fr)",
        },
        gap: scale.xl,
        mb: scale["4xl"],
      }}
    >
      {/* 🔥 WEB (MAIN CARD) */}
      <Box
        sx={{
          gridColumn: { md: "span 8" },
          p: scale["2xl"],
          borderRadius: scale.md,
          backgroundColor: theme.palette.customColor.surfaceContainerLow,
          position: "relative",
          overflow: "hidden",

          transition: "all 0.4s ease",

          "&:hover": {
            boxShadow: "0 0 40px rgba(174,0,128,0.15)",
          },
        }}
      >
        {/* background icon */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            p: scale.lg,
            opacity: 0.1,
            fontSize: "6rem",
          }}
        >
          🌐
        </Box>

        <Text variant="h4" weight="bold">
          Web Development
        </Text>

        <Box mt={scale.md} display="flex" flexWrap="wrap" gap={scale.sm}>
          {skills.web.map((skill) => (
            <TagChip key={skill} label={skill} variant="soft" />
          ))}
        </Box>
      </Box>

      {/* 🔥 BACKEND */}
      <Box
        sx={{
          gridColumn: { md: "span 4" },
          p: scale["2xl"],
          borderRadius: scale.md,
          backgroundColor: theme.palette.customColor.surfaceContainer,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Text variant="h4" weight="bold">
            Backend
          </Text>

          <Box mt={scale.md} display="flex" flexWrap="wrap" gap={scale.xs}>
            {skills.backend.map((skill) => (
              <TagChip key={skill} label={skill} variant="primary" />
            ))}
          </Box>
        </Box>

        <Box mt={scale.lg} pt={scale.md} borderTop={`1px solid ${theme.palette.customColor.outlineVariant}`}>
          <Text variant="caption" weight="bold">
            CURRENT FOCUS
          </Text>
          <Text variant="body" weight="semibold">
            Scalable Architecture
          </Text>
        </Box>
      </Box>

      {/* 🔥 MOBILE */}
      <Box
        sx={{
          gridColumn: { md: "span 4" },
          p: scale["2xl"],
          borderRadius: scale.md,
          backgroundColor: theme.palette.customColor.tertiaryContainer + "33",
        }}
      >
        <Text variant="h4" weight="bold">
          Mobile
        </Text>

        <Box mt={scale.md} display="flex" flexDirection="column" gap={scale.sm}>
          {skills.mobile.map((skill, i) => (
            <Box key={skill} display="flex" alignItems="center" gap={scale.sm}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor:
                    i === 0
                      ? theme.palette.customColor.primary
                      : theme.palette.customColor.primary + "66",
                }}
              />
              <Text variant="body" weight="semibold">
                {skill}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>

      {/* 🔥 TOOLS / ECOSYSTEM */}
      <Box
        sx={{
          gridColumn: { md: "span 8" },
          p: scale["2xl"],
          borderRadius: scale.md,
          backgroundColor: theme.palette.customColor.surfaceContainerHigh,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: scale.lg,
        }}
      >
        <Box>
          <Text variant="h4" weight="bold">
            Ecosystem & Tools
          </Text>

          <Box mt={scale.md} display="flex" flexWrap="wrap" gap={scale.sm}>
            {skills.tools.map((tool) => (
              <TagChip key={tool} label={tool} variant="soft" />
            ))}
          </Box>
        </Box>

        {/* visual element */}
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            width: "10rem",
            height: "10rem",
            borderRadius: "50%",
            backgroundColor: theme.palette.customColor.primary + "22",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "4rem",
            opacity: 0.5,
          }}
        >
          ⚙️
        </Box>
      </Box>
    </Box>
  );
};

export default TechnicalSkillsSection;