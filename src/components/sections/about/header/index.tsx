"use client";

import { Box, useTheme } from "@mui/material";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload, FiShare2 } from "react-icons/fi";

const MotionBox = motion(Box);

const ProfileHeader = () => {
  const theme = useTheme();

  const handleDownload = () => {
    window.open("/KarthikNarayan_Resume.pdf", "_blank");
  };

  return (
    <Box
      component="section"
      sx={{
        my: scale["4xl"],
        px: { xs: scale.md, md: scale.lg },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "4fr 8fr" },
        gap: scale["2xl"],
        alignItems: "center",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            aspectRatio: "4/5",
            borderRadius: scale.md,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          }}
        >
          <Image
            src="/png/karthik.png"
            alt="Karthik Narayan"
            width={400}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "-1.5rem",
            left: "-1.5rem",
            backgroundColor: theme.palette.customColor.surfaceContainerHighest,
            p: scale.lg,
            borderRadius: scale.md,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            display: { xs: "none", md: "block" },
          }}
        >
          <Text
          >
            03+
          </Text>

          <Text weight="bold">Years Exp.</Text>
        </Box>
      </Box>

      <Box>
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: scale.xs,
            px: scale.md,
            py: "0.35rem",
            borderRadius: "999px",
            backgroundColor: theme.palette.customColor.primary,
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            mb: scale.lg,
            boxShadow: "0 8px 20px rgba(238,97,189,0.3)",
          }}
        >
          <Box
            sx={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              animation: "pulse 1.5s infinite",
              "@keyframes pulse": {
                "0%": { opacity: 1 },
                "50%": { opacity: 0.4 },
                "100%": { opacity: 1 },
              },
            }}
          />
          OPEN TO WORK
        </MotionBox>

        <Text variant="hero" weight="extrabold">
          Building the <br />
          <Box
            component="span"
            sx={{
              color: theme.palette.customColor.primary,
              fontStyle: "italic",
            }}
          >
            Electric
          </Box>{" "}
          Future.
        </Text>

        <Box mt={scale.md} maxWidth="40rem">
          <Text color={theme.palette.customColor.textSecondary}>
            A Software Engineer specializing in high-performance digital
            environments. I treat code as a structural material and design as a
            functional anchor.
          </Text>
        </Box>

        <Box
          mt={scale["2xl"]}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          gap={scale.md}
        >
          <MotionBox
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: scale.xs,
              px: scale["2xl"],
              py: scale.md,
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: 700,
              color: "#fff",

              background: `linear-gradient(135deg, ${theme.palette.customColor.primary}, ${theme.palette.customColor.primaryContainer})`,

              boxShadow: "0 15px 35px rgba(174,0,128,0.25)",
            }}
          >
            <FiDownload />
            Download CV
          </MotionBox>

          <Box
            sx={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                theme.palette.customColor.surfaceContainerHighest,
              border: `1px solid ${theme.palette.customColor.outlineVariant}`,
              color: theme.palette.customColor.primary,
              cursor: "pointer",
              transition: "all 0.3s ease",

              "&:hover": {
                backgroundColor: theme.palette.customColor.primary,
                color: "#fff",
              },
            }}
          >
            <FiShare2 />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;