"use client";

import { Box, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { FiArrowDown } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const projects = [
  {
    title: "Lumina Fitness Tracker",
    description:
      "A high-performance dashboard for endurance athletes. Integrated real-time biometric data with custom visualization engines.",
    image: "/png/project1.png",
    tags: ["NEXT.JS", "TYPESCRIPT", "SUPABASE"],
    variant: "elevated" as const,
  },
  {
    title: "Neural Nodes Platform",
    description:
      "Visualizing complex neural network architectures for debugging and architectural insights.",
    image: "/png/project2.png",
    tags: ["REACT", "D3.JS", "PYTHON"],
    variant: "elevated" as const,
  },
];

const WorksSection = () => {
  const theme = useTheme();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -20]);

  const handleScroll = () => {
    projectRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        py: scale["4xl"],
        backgroundColor: theme.palette.customColor.surfaceContainerLow,
      }}
    >
      <Box
        sx={{
          maxWidth: "75rem",
          mx: "auto",
          px: scale.lg,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            gap: scale.lg,
            mb: scale["3xl"],
          }}
        >
          <Box maxWidth="40rem">
            <Text variant="h2" weight="bold">
              Featured Projects
            </Text>

            <Box mt={scale.sm}>
              <Text color={theme.palette.customColor.textSecondary}>
                Selected works that showcase technical depth and visual precision.
              </Text>
            </Box>
          </Box>

          <MotionBox
            onClick={handleScroll}
            style={{ opacity, y }}
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2 }}
            sx={{
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiArrowDown
              size={48}
              color={theme.palette.customColor.primary}
            />
          </MotionBox>
        </Box>

        <Box
          ref={projectRef}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: scale["2xl"],
          }}
        >
          {projects.map((project) => (
            <Box key={project.title} flex={1}>
              <ProjectCard {...project} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WorksSection;