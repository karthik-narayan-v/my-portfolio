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
  variant?: "elevated" | "default";
};

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  variant = "default",
}: ProjectCardProps) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <MotionBox
      onClick={() => router.push("/project")}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      sx={{
        borderRadius: scale.md,
        overflow: "hidden",
        backgroundColor: theme.palette.customColor.surface,
        cursor: "pointer",

        ...(variant === "elevated" && {
          boxShadow: "0px 32px 64px -12px rgba(174,0,128,0.25)",
        }),

        "&:hover img": {
          transform: "scale(1.05)",
        },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          aspectRatio: "16/9",
          overflow: "hidden",
          backgroundColor: theme.palette.customColor.inverseSurface,
        }}
      >
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.7s ease",
          }}
        />
      </Box>

      {/* CONTENT */}
      <Box p={scale["2xl"]}>
        {/* TAGS */}
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

        {/* CTA */}
        <Box
          mt={scale.lg}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: scale.xs,
            color: theme.palette.customColor.primary,
            fontWeight: 700,
            transition: "all 0.3s ease",
          }}
        >
          View Case Study
          <FiArrowRight />
        </Box>
      </Box>
    </MotionBox>
  );
};