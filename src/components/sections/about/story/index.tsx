"use client";

import { Box, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const stories = {
  short: [
    `I started with curiosity—breaking things to understand how they worked. That mindset led me into software, where I found joy in building meaningful user experiences.`,
  ],

  medium: [
    `My journey started with curiosity—understanding how systems work beneath the surface. That curiosity led me into software, where I realized code is not just logic, but experience.`,
    `Today, I focus on building scalable applications using React Native and modern frontend architectures, always aiming to simplify complexity for users.`,
  ],

  long: [
    `My journey didn't start with a keyboard, but with curiosity. I was always drawn to understanding how systems work and how different parts connect to form something meaningful.`,
    `That curiosity naturally evolved into software development, where I discovered that code isn't just about functionality—it’s about crafting experiences that feel intuitive and reliable.`,
    `Over the years, I’ve worked on building scalable mobile and web applications, focusing on performance, usability, and maintainability.`,
    `My goal has always been simple: reduce complexity and create systems that feel effortless for the end user.`,
  ],

  xl: [
    `My journey didn't start with a keyboard, but with a fascination for how things fit together. Early on, I explored systems deeply to understand the logic behind them.`,
    `That curiosity evolved into software development, where I discovered that code isn't just about solving problems—it's about shaping experiences.`,
    `Working in enterprise environments, I’ve built scalable applications using React Native, React.js, and modern architectures, constantly balancing performance with usability.`,
    `I believe that complexity is the enemy of great user experience. My focus is on simplifying systems while maintaining robustness and scalability.`,
    `"I don't just write code; I design systems that feel reliable, intuitive, and purposeful."`,
  ],
};

const options = [
  { key: "short", label: "Short" },
  { key: "medium", label: "Mid" },
  { key: "long", label: "Long" },
  { key: "xl", label: "Deep Dive" },
] as const;

type StoryKey = keyof typeof stories;

const StorySection = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState<StoryKey>("medium");

  return (
    <Box
      component="section"
      sx={{
        my: scale["2xl"],
        px: { xs: scale.md, md: scale.lg },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "4fr 8fr" },
        gap: scale["2xl"],
      }}
    >
      <Box>
        <Box
          sx={{
            position: { md: "sticky" },
            top: "6rem",
          }}
        >
          <Text variant="h4" weight="bold">
            The Narrative Journey
          </Text>

          <Box mt={scale.md} display="flex" gap={scale.xs} flexWrap="wrap">
            {options.map((opt) => (
              <Box
                key={opt.key}
                onClick={() => setSelected(opt.key)}
                sx={{
                  px: scale.sm,
                  py: "0.3rem",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontSize: "0.75rem",
                  fontWeight: 600,

                  backgroundColor:
                    selected === opt.key
                      ? theme.palette.customColor.primary
                      : theme.palette.customColor.surfaceContainer,

                  color:
                    selected === opt.key
                      ? "#fff"
                      : theme.palette.customColor.textSecondary,

                  transition: "all 0.3s ease",
                }}
              >
                {opt.label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: scale.md,
        }}
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {stories[selected].map((paragraph, index) => {
              const isQuote = paragraph.startsWith(`"`);

              return isQuote ? (
                <Box
                  key={index}
                  sx={{
                    p: scale.lg,
                    borderRadius: scale.md,
                    backgroundColor:
                      theme.palette.customColor.surfaceContainerLow,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: "120px",
                      height: "120px",
                      background: theme.palette.customColor.primary + "22",
                      borderRadius: "50%",
                      top: "-40px",
                      right: "-40px",
                      filter: "blur(40px)",
                    }}
                  />

                  <Text>{paragraph}</Text>
                </Box>
              ) : (
                <Text
                  key={index}
                  color={theme.palette.customColor.textSecondary}
                >
                  {paragraph}
                </Text>
              );
            })}
          </MotionBox>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default StorySection;
