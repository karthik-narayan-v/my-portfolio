"use client";

import { Box, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";
import { ProjectCard } from "@/components/cards/ProjectCard";

const projects = [
  {
    title: "Nebula Dashboard",
    description:
      "A real-time data visualization platform for high-frequency trading assets.",
    image: "/png/project1.png",
    tags: ["TypeScript", "Three.js", "Next.js"],
  },
  {
    title: "Pulse Social",
    description:
      "Redesigning the social networking experience with privacy-first interactions.",
    image: "/png/project2.png",
    tags: ["React Native", "Supabase", "Tailwind"],
  },
  {
    title: "Forge CLI",
    description:
      "A developer productivity tool automating microservice workflows.",
    image: "/png/project3.png",
    tags: ["Go", "Docker", "AWS"],
  },
  {
    title: "Arcade Commerce",
    description:
      "A headless commerce engine with 99+ Lighthouse performance.",
    image: "/png/project4.png",
    tags: ["Remix", "Shopify", "Vercel"],
  },
];

const WorkPageSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        pt: scale["4xl"],
        pb: scale["3xl"],
        px: { xs: scale.md, md: scale.lg },
        maxWidth: "75rem",
        mx: "auto",
        minHeight: "100vh",
      }}
    >
      {/* 🔥 HEADER */}
      <Box mb={scale["3xl"]}>
        <Text variant="h1" weight="extrabold" component="h1">
          Things I&apos;ve{" "}
          <Box
            component="span"
            sx={{
              position: "relative",
              display: "inline-block",
            }}
          >
            Built
            <Box
              component="span" // ✅ FIX (was div before)
              sx={{
                position: "absolute",
                bottom: "0.3rem",
                left: 0,
                width: "100%",
                height: "0.5rem",
                backgroundColor:
                  theme.palette.customColor.primaryContainer + "66",
                borderRadius: "999px",
                zIndex: -1,
              }}
            />
          </Box>
        </Text>

        <Box mt={scale.md} maxWidth="40rem">
          <Text color={theme.palette.customColor.textSecondary}>
            A selection of digital experiences where engineering meets
            high-energy design.
          </Text>
        </Box>
      </Box>

      {/* 🔥 GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: scale["2xl"],
        }}
      >
        {projects.map((project) => (
          <Box key={project.title}>
            <ProjectCard {...project} variant="work" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WorkPageSection;