"use client";

import { Box, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { TagChip } from "@/components/core/TagChip";
import { Button } from "@/components/core/Button";
import { scale } from "@/themes/scale";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const flowSteps = [
  {
    title: "Authentication & Security",
    desc: "Multi-factor hardware-key integration with biometric passkeys. Sessions are anchored in a zero-trust environment with encrypted JWT rotating at high frequency.",
  },
  {
    title: "Real-time Data Ingestion",
    desc: "Proprietary WebSocket multiplexer that aggregates feeds from multiple exchanges into a single binary stream.",
  },
  {
    title: "Visualization Engine (WebGL)",
    desc: "Custom Three.js shader implementation rendering 60fps market depth charts with real-time interaction.",
  },
  {
    title: "Order Execution Workflow",
    desc: "One-click trade execution with visual confirmation pulses and node-based algorithmic configuration.",
  },
];

const techStack = [
  "React",
  "Three.js",
  "Rust/Wasm",
  "WebSockets",
  "TailwindCSS",
];

export const ProjectDetailsSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: "75rem",
        mx: "auto",
        px: scale.lg,
        py: scale["3xl"],
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
        gap: scale["3xl"],
      }}
    >
      {/* ================= LEFT SIDE ================= */}
      <Box>
        {/* 🔥 OVERVIEW */}
        <Box id="overview" mb={scale["3xl"]}>
          <Text variant="h3" weight="bold">
            Overview
          </Text>

          <Box mt={scale.lg} display="flex" flexDirection="column" gap={scale.md}>
            <Text color={theme.palette.customColor.textSecondary}>
              Nebula Dashboard was engineered for high-frequency trading where
              milliseconds define success. The goal was to bridge computational
              intensity with ultra-smooth UI responsiveness.
            </Text>

            <Text color={theme.palette.customColor.textSecondary}>
              By leveraging{" "}
              <Box
                component="span"
                sx={{
                  color: theme.palette.customColor.primary,
                  fontWeight: 600,
                }}
              >
                Rust compiled to WebAssembly
              </Box>
              , complex calculations were offloaded from the main thread,
              ensuring fluid UI even under heavy load.
            </Text>
          </Box>
        </Box>

        {/* 🔥 FLOW */}
        <Box id="flow">
          <Text variant="h3" weight="bold">
            Application Flow
          </Text>

          <Box mt={scale["2xl"]} display="flex" flexDirection="column" gap={scale["2xl"]}>
            {flowSteps.map((step, index) => (
              <MotionBox
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                sx={{
                  display: "flex",
                  gap: scale.lg,
                  alignItems: "flex-start",

                  "&:hover .stepCircle": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                {/* STEP NUMBER */}
                <Box
                  className="stepCircle"
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${theme.palette.customColor.primary}, ${theme.palette.customColor.primaryContainer})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 800,
                    boxShadow: "0 0 20px rgba(174,0,128,0.3)",
                    transition: "transform 0.3s ease",
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </Box>

                {/* TEXT */}
                <Box>
                  <Text variant="h5" weight="bold">
                    {step.title}
                  </Text>

                  <Box mt={scale.xs}>
                    <Text color={theme.palette.customColor.textSecondary}>
                      {step.desc}
                    </Text>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ================= RIGHT SIDE ================= */}
      <Box
        component="aside"
        sx={{
          position: { lg: "sticky" },
          top: { lg: "6rem" },
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          gap: scale.xl,
        }}
      >
        {/* 🔥 TECH STACK */}
        <Box
          sx={{
            p: scale.lg,
            borderRadius: scale.md,
            backgroundColor: theme.palette.customColor.surfaceContainerHighest,
            border: `1px solid ${theme.palette.customColor.outlineVariant}`,
          }}
        >
          <TagChip label="Case Study: Published" variant="badge" mb={scale.md} />

          <Text variant="h5" weight="bold">
            Tech Stack
          </Text>

          <Box mt={scale.md} display="flex" flexWrap="wrap" gap={scale.xs}>
            {techStack.map((tech) => (
              <TagChip key={tech} label={tech} variant="pill" />
            ))}
          </Box>

          {/* CTA */}
          <Box mt={scale.lg} display="flex" flexDirection="column" gap={scale.sm}>
            <Button variantType="gradient">Live Demo</Button>
            <Button variantType="outline">GitHub Repository</Button>
          </Box>
        </Box>

        {/* 🔥 TESTIMONIAL */}
        <Box
          sx={{
            p: scale.lg,
            borderLeft: `4px solid ${theme.palette.customColor.primary}`,
            backgroundColor: theme.palette.customColor.surfaceContainerLow,
            borderRadius: scale.sm,
          }}
        >
          <Text color={theme.palette.customColor.textSecondary}>
            "The performance gains with Nebula allowed our desk to identify
            liquidity gaps 200ms faster than the competition."
          </Text>

          <Box mt={scale.xs}>
            <Text variant="caption" weight="bold">
              — Head of Trading, Equinox Capital
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};