"use client";

import { Box, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { TagChip } from "@/components/core/TagChip";
import { scale } from "@/themes/scale";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const JourneySection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        my: scale.xl,
        px: { xs: scale.md, md: scale.lg },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: scale.sm,
          mb: scale["3xl"],
        }}
      >
        <Text variant="h2" weight="bold">
          The Journey
        </Text>

        <Box
          sx={{
            height: "2px",
            flexGrow: 1,
            backgroundColor: theme.palette.customColor.surfaceContainer,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: scale.lg,
          maxWidth: "50rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: theme.palette.customColor.primary,
              boxShadow: `0 0 0 6px ${theme.palette.customColor.primaryContainer}`,
            }}
          />

          <Box
            sx={{
              width: "2px",
              flexGrow: 1,
              backgroundColor:
                theme.palette.customColor.primaryContainer + "55",
              mt: scale.xs,
            }}
          />
        </Box>

        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{
            flex: 1,
            p: scale.lg,
            borderRadius: scale.md,
            backgroundColor: theme.palette.customColor.surfaceContainerLow,
            borderLeft: `4px solid ${theme.palette.customColor.primary}`,
            boxShadow: "0 10px 40px rgba(174,0,128,0.08)",
          }}
        >
          <Text
            variant="caption"
            weight="bold"
          >
            2022 - PRESENT
          </Text>

          <Box mt={scale.xs}>
            <Text variant="h4" weight="bold">
              Software Engineer
            </Text>
          </Box>

          <Box mt={scale.xs}>
            <Text color={theme.palette.customColor.textSecondary}>
              Cognizant Technology Solutions
            </Text>
          </Box>

          <Box mt={scale.md}>
            <Text color={theme.palette.customColor.textSecondary}>
              Building scalable mobile and web applications using React Native
              and modern frontend architectures. Focused on performance,
              maintainability, and delivering seamless user experiences in
              enterprise-grade systems.
            </Text>
          </Box>

          <Box mt={scale.md} display="flex" gap={scale.xs} flexWrap="wrap">
            {[
              "React Native",
              "React.js",
              "TypeScript",
              "Next.js",
              "Node.js",
            ].map((tech) => (
              <TagChip key={tech} label={tech} variant="primary" />
            ))}
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default JourneySection;