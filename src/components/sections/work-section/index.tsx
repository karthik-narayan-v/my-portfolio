"use client";

import { Box, Grid, useTheme } from "@mui/material";
import Image from "next/image";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";

const WorksSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: scale["3xl"],
        display: "flex",
        flexDirection: "column",
        gap: scale.xl,
      }}
    >
      <Box>
        <Text variant="h2" weight="extrabold">
          Selected Works
        </Text>

        <Box
          sx={{
            mt: scale.xs,
            width: scale.lg,
            height: scale.xs,
            borderRadius: scale.xs,
            backgroundColor: theme.palette.customColor.primary,
          }}
        />
      </Box>

      <Grid container spacing={scale.lg}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              height: "100%",
              p: scale.lg,
              borderRadius: scale.md,
              backgroundColor: theme.palette.customColor.surfaceContainerLow,
              border: `1px solid ${theme.palette.customColor.surfaceContainerHighest}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              },
            }}
          >
            <Box>
              <Box
                sx={{
                  px: scale.sm,
                  py: scale.xs,
                  borderRadius: scale.lg,
                  backgroundColor: theme.palette.customColor.primaryContainer,
                  display: "inline-block",
                  mb: scale.sm,
                }}
              >
                <Text variant="caption" weight="bold">
                  MOBILE APP
                </Text>
              </Box>

              <Text variant="h3" weight="bold">
                Lumina Fitness Tracker
              </Text>

              <Box mt={scale.sm}>
                <Text variant="body">
                  A React Native health application with real-time biometric
                  tracking and AI-driven coaching modules.
                </Text>
              </Box>
            </Box>

            <Box
              sx={{
                mt: scale.lg,
                borderRadius: scale.lg,
                overflow: "hidden",
              }}
            >
              <Image
                src="/png/project1.png"
                alt="project"
                width={600}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              p: scale.lg,
              borderRadius: scale.md,
              backgroundColor: theme.palette.customColor.primary,
              color: "#fff",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Text variant="h4">⚙️</Text>

              <Text variant="h5" weight="bold">
                Dev Ecosystem
              </Text>

              <Box mt={scale.xs}>
                <Text variant="body">Automating workflows using CLI tools</Text>
              </Box>
            </Box>

            <Box mt={scale.md} display="flex" gap={scale.xs} flexWrap="wrap">
              {["NodeJS", "Rust"].map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    px: scale.sm,
                    py: scale.xs,
                    borderRadius: scale.lg,
                    backgroundColor: "#ffffff20",
                  }}
                >
                  <Text variant="caption">{tech}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              p: scale.lg,
              borderRadius: scale.md,
              backgroundColor:
                theme.palette.customColor.surfaceContainerHighest,
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <Text variant="h5" weight="bold">
              SwiftUI Components
            </Text>

            <Box mt={scale.sm} mb={scale.md}>
              <Text variant="body">A library of accessible UI components</Text>
            </Box>

            <Box
              sx={{
                height: scale["2xl"],
                borderRadius: scale.sm,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: `1px solid ${theme.palette.customColor.surfaceContainer}`,
              }}
            >
              <Text variant="h4">🧩</Text>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              p: scale.lg,
              borderRadius: scale.md,
              backgroundColor: theme.palette.customColor.surfaceContainer,
              border: `1px solid ${theme.palette.customColor.surfaceContainerHighest}`,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: scale.lg,
              alignItems: "center",
            }}
          >
            <Box flex={1}>
              <Text variant="h5" weight="bold">
                Full-Stack e-Commerce
              </Text>

              <Box mt={scale.xs}>
                <Text variant="body">High-performance Next.js application</Text>
              </Box>

              <Box mt={scale.sm}>
                <Text variant="caption" weight="bold">
                  View Case Study →
                </Text>
              </Box>
            </Box>

            <Box flex={1} borderRadius={scale.lg} overflow="hidden">
              <Image
                src="/png/project2.png"
                alt="project"
                width={400}
                height={200}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorksSection;
