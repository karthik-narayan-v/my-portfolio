"use client";

import { Box, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";
import { Button } from "@/components/core/Button";

const HeroSection = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",

        gap: {
          xs: scale.xl,
          md: scale["2xl"],
        },

        minHeight: "calc(100vh - 80px)",

        py: {
          xs: scale["2xl"],
          md: scale["3xl"],
        },

        px: {
          md: scale["4xl"],
        },
      }}
    >
      <Box
        sx={{
          flex: { md: "0 0 60%" },
          display: "flex",
          flexDirection: "column",
          gap: scale.lg,
          px: {
            xl: scale["4xl"],
          },
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        <Text
          variant="hero"
          weight="extrabold"
          color={theme.palette.customColor.primary}
        >
          Hi, I&apos;m Karthik 👋
        </Text>

        <Stack
          direction="row"
          alignItems="center"
          gap={scale.sm}
          flexWrap="wrap"
          justifyContent="flex-start"
        >
          <Text
            variant="h5"
            weight="medium"
            color={theme.palette.customColor.textSecondary}
          >
            A dedicated
          </Text>

          <Box
            sx={{
              px: scale.md,
              py: scale.xs,
              borderRadius: scale.lg,
              backgroundColor: theme.palette.customColor.primaryContainer,
            }}
          >
            <Text variant="h5" weight="bold">
              Mobile Developer
            </Text>
          </Box>
        </Stack>

        <Text variant="body" color={theme.palette.customColor.textSecondary}>
          Crafting fluid user experiences and robust architectures for mobile
          and web. Specializing in React Native, TypeScript, and
          high-performance digital ecosystems.
        </Text>

        <Stack
          direction="row"
          gap={scale.md}
          flexWrap="wrap"
          pt={scale.sm}
          justifyContent={{
            xs: "center",
            md: "flex-start",
          }}
        >
          <Button variantType="gradient" icon={<span>📄</span>} href="/KarthikNarayan_Resume.pdf">
            Check Out My CV
          </Button>

          <Button variantType="outline" onClick={() => router.push("/about")}>👉 The Story So Far</Button>
        </Stack>
      </Box>

      <Box
        sx={{
          flex: { md: "0 0 40%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          mt: {
            xs: scale.xl,
            md: 0,
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              inset: "-3rem",
              borderRadius: "50%",
              background: theme.palette.customColor.primaryContainer,
              filter: "blur(60px)",
              opacity: 0.3,
              transition: "opacity 0.3s",

              "&:hover": {
                opacity: 0.5,
              },
            }}
          />

          <Box
            sx={{
              position: "relative",
              width: {
                xs: "15rem",
                md: "20rem",
              },
              height: {
                xs: "15rem",
                md: "20rem",
              },
              borderRadius: "50%",
              overflow: "hidden",
              border: `0.5rem solid ${theme.palette.customColor.surfaceContainerHighest}`,
              boxShadow: "0 20px 60px rgba(174,0,128,0.2)",
            }}
          >
            <Image
              src="/png/karthik.png"
              alt="Karthik Narayan"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
