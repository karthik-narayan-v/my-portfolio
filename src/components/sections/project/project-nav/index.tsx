"use client";

import { Box, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";

type ProjectNavProps = {
  previousProject?: {
    title: string;
    href: string;
  };
  nextProject?: {
    title: string;
    href: string;
  };
};

export const ProjectNav = ({
  previousProject,
  nextProject,
}: ProjectNavProps) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      component="section"
      sx={{
        px: scale.lg,
        py: scale["3xl"],
        borderTop: `1px solid ${theme.palette.customColor.outlineVariant}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent:
            previousProject && nextProject
              ? "space-between"
              : previousProject
                ? "flex-start"
                : "flex-end",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: scale.lg,
        }}
      >
        {previousProject && (
          <Box
            onClick={() => router.push(previousProject.href)}
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",

              "&:hover .title": {
                color: theme.palette.customColor.primary,
                transform: "translateX(-6px)",
              },
            }}
          >
            <Text
              variant="caption"
              weight="medium"
              color={theme.palette.customColor.textSecondary}
            >
              Previous Project
            </Text>

            <Box
              className="title"
              sx={{
                transition: "all 0.4s ease",
                wordBreak: "break-word",
              }}
            >
              <Text variant="h2" weight="extrabold">
                ← {previousProject.title}
              </Text>
            </Box>
          </Box>
        )}

        {nextProject && (
          <Box
            onClick={() => router.push(nextProject.href)}
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "flex-start", sm: "flex-end" },
              textAlign: { xs: "left", sm: "right" },
              maxWidth: "100%",

              "&:hover .title": {
                color: theme.palette.customColor.primary,
                transform: "translateX(6px)",
              },
            }}
          >
            <Text
              variant="caption"
              weight="medium"
              color={theme.palette.customColor.textSecondary}
            >
              Next Project
            </Text>

            <Box
              className="title"
              sx={{
                transition: "all 0.4s ease",
                wordBreak: "break-word",
              }}
            >
              <Text variant="h2" weight="extrabold">
                {nextProject.title} →
              </Text>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
