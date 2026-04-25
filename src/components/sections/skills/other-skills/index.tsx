"use client";

import { Box, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { TagChip } from "@/components/core/TagChip";
import { scale } from "@/themes/scale";

import {
  FiAward,
  FiUsers,
  FiZap,
  FiRefreshCw,
  FiCpu,
  FiCloud,
} from "react-icons/fi";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

/* 🔥 DATA */
const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    icon: FiCloud,
    highlight: "Credential ID: 2948-220",
  },
  {
    title: "Meta Front-End Developer",
    org: "Professional Certificate (Meta)",
    icon: FiAward,
    highlight: "Professional Certificate",
  },
];

const softSkills = [
  { label: "Technical Leadership", icon: FiUsers },
  { label: "Agile Methodology", icon: FiRefreshCw },
  { label: "Cross-functional Collaboration", icon: FiZap },
  { label: "Problem Solving", icon: FiCpu },
];

/* 🔥 ANIMATION CONFIG */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const OtherSkillsSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: scale["4xl"],
        py: scale["2xl"],
      }}
    >
      {/* 🔥 TOP GRID */}
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
        {/* 🔥 LEFT → SOFT SKILLS */}
        <Box
          sx={{
            p: scale["2xl"],
            borderRadius: scale.md,
            background: `linear-gradient(135deg, ${theme.palette.customColor.primary}, ${theme.palette.customColor.primaryContainer})`,
            color: theme.palette.customColor.white,
          }}
        >
          <Text variant="h3" weight="bold">
            Human Interface
          </Text>

          {/* 🔥 STAGGER ANIMATION */}
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            sx={{
              mt: scale.lg,
              display: "flex",
              flexDirection: "column",
              gap: scale.sm,
            }}
          >
            {softSkills.map(({ label, icon: Icon }) => (
              <motion.div key={label} variants={itemVariants}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: scale.sm,
                    borderBottom: "1px solid rgba(255,255,255,0.1)",

                    transition: "all 0.3s ease",

                    "&:hover": {
                      transform: "translateX(6px)",
                    },
                  }}
                >
                  <Text weight="medium">{label}</Text>

                  <Box
                    sx={{
                      opacity: 0.8,
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Icon size={16} />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </MotionBox>
        </Box>

        {/* 🔥 RIGHT → CERTIFICATIONS */}
        <Box>
          {/* HEADER */}
          <Box mb={scale.lg}>
            <Box display="flex" alignItems="center" gap={scale.sm} mb={scale.sm}>
              <Box
                sx={{
                  width: "3rem",
                  height: "0.2rem",
                  backgroundColor: theme.palette.customColor.primary,
                }}
              />
              <Text variant="caption" weight="bold">
                CREDENTIALS
              </Text>
            </Box>

            <Text variant="h3" weight="extrabold">
              Professional Certifications
            </Text>
          </Box>

          {/* LIST */}
          <Box display="flex" flexDirection="column" gap={scale.md}>
            {certifications.map(({ title, org, icon: Icon, highlight }) => (
              <Box
                key={title}
                sx={{
                  display: "flex",
                  gap: scale.md,
                  p: scale.lg,
                  borderRadius: scale.md,
                  backgroundColor: theme.palette.customColor.surfaceContainerLow,
                  border: `1px solid ${theme.palette.customColor.outlineVariant}`,
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateX(6px) scale(1.01)",
                    borderColor: theme.palette.customColor.primary,
                    boxShadow: "0 10px 30px rgba(174,0,128,0.12)",
                  },
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: scale.sm,
                    backgroundColor: theme.palette.customColor.primaryContainer,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={theme.palette.customColor.primary} />
                </Box>

                {/* CONTENT */}
                <Box>
                  <Text weight="bold">{title}</Text>

                  <Text
                    variant="body2"
                    color={theme.palette.customColor.textSecondary}
                  >
                    {org}
                  </Text>

                  <Box mt={scale.xs}>
                    <TagChip label={highlight} variant="badge" />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* 🔥 CONTINUOUS LEARNING (PARALLAX FEEL) */}
      <MotionBox
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        sx={{
          borderRadius: scale.md,
          backgroundColor: theme.palette.customColor.inverseSurface,
          color: theme.palette.customColor.white,
          p: scale["2xl"],

          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: scale.lg,

          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 🔥 GLOW */}
        <Box
          sx={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background: theme.palette.customColor.primary,
            filter: "blur(120px)",
            opacity: 0.15,
            top: "-50px",
            right: "-50px",
            pointerEvents: "none",
          }}
        />

        {/* TEXT */}
        <Box maxWidth="40rem" zIndex={1}>
          <Text variant="h3" weight="bold">
            Continuous Learning
          </Text>

          <Box mt={scale.sm}>
            <Text color="rgba(255,255,255,0.7)">
              I&apos;m currently exploring Rust for systems programming and
              Three.js for immersive 3D web experiences. Technology is a moving
              target, and I love the chase.
            </Text>
          </Box>
        </Box>

        {/* VISUAL */}
        <MotionBox
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          sx={{
            width: { xs: "100%", md: "18rem" },
            height: "12rem",
            borderRadius: scale.md,
            overflow: "hidden",
            position: "relative",
            background:
              "linear-gradient(135deg, rgba(174,0,128,0.3), rgba(255,104,198,0.2))",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.1), transparent)",
            }}
          />
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default OtherSkillsSection;