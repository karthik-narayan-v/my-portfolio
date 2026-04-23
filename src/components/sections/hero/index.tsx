"use client";

import { Box, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";
import { Button } from "@/components/core/Button";
import { TagChip } from "@/components/core/TagChip";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = () => {
  const theme = useTheme();
  const router = useRouter();

  const [text] = useTypewriter({
    words: ["Full Stack Engineer", "Mobile Developer", "Web Developer"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",

        gap: scale.xl,

        minHeight: "calc(100vh - 80px)",

        py: {
          xs: scale["2xl"],
          md: scale["3xl"],
        },
        px: {
          xs: 0,
          sm: scale.lg,
        },
      }}
    >
      <Box
        sx={{
          flex: { md: "0 0 60%" },
          display: "flex",
          flexDirection: "column",
          alignItems:"flex-start" ,
          textAlign: { xs: "center", md: "left" },
          gap: scale.lg,
        }}
      >
        <TagChip label="Available for Work" variant="hero" />

        <Text
          variant="hero"
          weight="extrabold"
          color={theme.palette.customColor.textPrimary}
        >
          Building Digital <br />
          <span style={{ color: theme.palette.customColor.primary }}>
            {text}
            <Cursor cursorStyle="|" />
          </span>
        </Text>

        <Box maxWidth="40rem">
          <Text variant="body" color={theme.palette.customColor.textSecondary}>
            I craft high-performance web environments where rigorous engineering
            logic meets disruptive editorial design. Based in the future.
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={scale.lg}
          justifyContent={{ xs: "center", md: "flex-start" }}
          px={{ xs: scale.lg, md: 0 }}
          width={{ xs: "100%", md: "auto" }}
        >
          <Button variantType="gradient">Check Out My CV</Button>

          <Button
            variantType="outline"
            onClick={() => router.push("/work")}
          >
            View Projects
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: { xs: scale.xl, md: 0 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "&:hover .glow": {
              opacity: 0.5,
            },
          }}
        >
          <Box
            className="glow"
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              backgroundColor: theme.palette.customColor.glow,
              filter: "blur(60px)",
              opacity: 0.3,
              transition: "opacity 0.3s ease",
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: "relative",
              width: { xs: "16rem", md: "20rem" },
              height: { xs: "16rem", md: "20rem" },
              borderRadius: "50%",
              overflow: "hidden",
              border: `8px solid ${theme.palette.customColor.surfaceContainerHighest}`,
              boxShadow: "0 20px 60px rgba(174,0,128,0.2)",
              zIndex: 1,
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