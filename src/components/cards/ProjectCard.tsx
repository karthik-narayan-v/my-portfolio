"use client";

import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import { Text } from "@/components/core/Text";
import { TagChip } from "@/components/core/TagChip";
import { scale } from "@/themes/scale";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const MotionBox = motion(Box);

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  variant?: "elevated" | "default" | "work"; // ✅ NEW
  href?: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  variant = "default",
  href = "/project",
}: ProjectCardProps) => {
  const theme = useTheme();
  const router = useRouter();

  const isWork = variant === "work";

  return (
    <MotionBox
      onClick={() => router.push(href)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      sx={{
        borderRadius: scale.md,
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",

        ...(isWork
          ? {
              p: scale.lg,
              backgroundColor: theme.palette.customColor.surfaceContainerLow,
              border: `1px solid ${theme.palette.customColor.tertiaryContainer}`,
            }
          : {
              backgroundColor: theme.palette.customColor.surface,
            }),

        ...(variant === "elevated" && {
          boxShadow: "0px 32px 64px -12px rgba(174,0,128,0.25)",
        }),

        "&:hover .project-image": {
          transform: "scale(1.05)",
        },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          mb: isWork ? scale.lg : 0,
          borderRadius: isWork ? scale.md : 0,
          overflow: "hidden",
          backgroundColor: theme.palette.customColor.surfaceContainer,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
          }}
        >
          <Box
            className="project-image"
            sx={{
              width: "100%",
              height: "100%",
              transition: "transform 0.7s ease",
            }}
          >
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>

      <Box p={isWork ? 0 : scale["2xl"]}>
        {isWork ? (
          <>
            <Text variant="h4" weight="bold">
              {title}
            </Text>

            {/* DESCRIPTION */}
            <Box mb={scale.md}>
              <Text color={theme.palette.customColor.textSecondary}>
                {description}
              </Text>
            </Box>

            {/* TAGS */}
            <Box display="flex" flexWrap="wrap" gap={scale.xs} mb={scale.lg}>
              {tags.map((tag) => (
                <TagChip key={tag} label={tag} variant="hero" />
              ))}
            </Box>

            {/* CTA */}
            <MotionBox
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: scale.xs,
                color: theme.palette.customColor.primary,
                fontWeight: 700,
              }}
            >
              <Text weight="bold" color={theme.palette.customColor.primary}>
                View Project
              </Text>
              <FiArrowRight size={18} />
            </MotionBox>
          </>
        ) : (
          <>
            {/* DEFAULT / ELEVATED STRUCTURE */}
            <Box display="flex" gap={scale.xs} flexWrap="wrap" mb={scale.md}>
              {tags.map((tag) => (
                <TagChip key={tag} label={tag} variant="primary" />
              ))}
            </Box>

            <Text variant="h4" weight="bold">
              {title}
            </Text>

            <Box mt={scale.sm}>
              <Text color={theme.palette.customColor.textSecondary}>
                {description}
              </Text>
            </Box>

            <Box
              mt={scale.lg}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: scale.xs,
                color: theme.palette.customColor.primary,
                fontWeight: 700,
              }}
            >
              View Case Study
              <FiArrowRight />
            </Box>
          </>
        )}
      </Box>
    </MotionBox>
  );
};
