"use client";

import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";
import { FiCalendar, FiUser } from "react-icons/fi";

type ProjectHeaderProps = {
  title: string;
  description: string;
  duration: string;
  role: string;
  image: string;
};

export const ProjectHeader = ({
  title,
  description,
  duration,
  role,
  image,
}: ProjectHeaderProps) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        maxWidth: "75rem",
        mx: "auto",
        px: scale.lg,
        mb: scale["3xl"],
      }}
    >
      {/* 🔥 TOP CONTENT */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: scale["2xl"],
          alignItems: { xs: "flex-start", md: "flex-end" },
          mb: scale["2xl"],
        }}
      >
        {/* LEFT */}
        <Box flex={1}>
          <Text variant="h1" weight="extrabold">
            {title}
          </Text>

          <Box mt={scale.md} maxWidth="40rem">
            <Text
              variant="h5"
              weight="medium"
              color={theme.palette.customColor.textSecondary}
            >
              {description}
            </Text>
          </Box>
        </Box>

        {/* RIGHT META */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: scale.md,
            pb: { md: scale.sm },
            color: theme.palette.customColor.primary,
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          <Box display="flex" alignItems="center" gap={scale.xs}>
            <FiCalendar size={16} />
            {duration}
          </Box>

          {/* separator */}
          <Box
            sx={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: theme.palette.customColor.outlineVariant,
              opacity: 0.4,
            }}
          />

          <Box display="flex" alignItems="center" gap={scale.xs}>
            <FiUser size={16} />
            {role}
          </Box>
        </Box>
      </Box>

      {/* 🔥 HERO IMAGE */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "20rem", md: "38rem" },
          borderRadius: scale.md,
          overflow: "hidden",
          cursor: "pointer",

          "&:hover .overlay": {
            opacity: 0.1,
          },
        }}
      >
        {/* IMAGE */}
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: "cover",
          }}
        />

      </Box>
    </Box>
  );
};