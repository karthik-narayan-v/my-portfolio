"use client";

import TEXT from "@/constants/text-content";
import { Box, Button, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";
import { Text } from "@/components/atoms/Text";
import styles from "./hero-section.module.css";

const HeroSection = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Box
      position="relative"
      component="section"
      sx={{
        width: "100%",
        maxHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        backgroundColor: "customColor.white",
        overflow: "hidden",
      }}
    >
      <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
        <Stack spacing={3}>
          <Text
            variant="h4"
            weight="bold"
            size="xl"
            color={theme.palette.customColor.deep}
          >
            {TEXT.title}
          </Text>

          <Text
            variant="h5"
            weight="medium"
            size="lg"
            color={theme.palette.customColor.deep}
          >
            {TEXT.subtitle}{" "}
            <span
              className={styles.typewriterSpan}
              style={{ color: theme.palette.customColor.darker }}
            >
              <Typewriter
                words={[
                  "UI Developer",
                  "Mobile App Developer",
                  "Web App Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </Text>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={2}>
            <Button
              variant="contained"
              size="large"
              href="/KarthikNarayan_Resume.pdf"
              download
              className={styles.actionButton}
              sx={{ backgroundColor: theme.palette.customColor.darker }}
            >
              {TEXT.resumeDownload}
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => router.push("/about")}
              className={styles.actionButton}
              sx={{
                color: theme.palette.customColor.deep,
                borderColor: theme.palette.customColor.deep,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              {TEXT.learnMore}
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
        }}
      >
        <Image
          src="/png/karthik.png"
          alt="Karthik"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          className={styles.heroImage}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;