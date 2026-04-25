"use client";

import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import { Text } from "@/components/core/Text";
import { scale } from "@/themes/scale";
import { useRef, useEffect, useState } from "react";

const images = [
  { src: "/png/project1.png", alt: "Project UI 1" },
  { src: "/png/project2.png", alt: "Project UI 2" },
  { src: "/png/project3.png", alt: "Project UI 3" },
];

export const InterfaceExplorationSection = () => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔥 Detect center card
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const children = Array.from(container.children) as HTMLElement[];

          const containerCenter =
            container.scrollLeft + container.offsetWidth / 2;

          let closestIndex = 0;
          let closestDistance = Infinity;

          children.forEach((child, index) => {
            const childCenter =
              child.offsetLeft + child.offsetWidth / 2;

            const distance = Math.abs(containerCenter - childCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          });

          setActiveIndex(closestIndex);
          ticking = false;
        });

        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Click to center
  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const child = container.children[index] as HTMLElement;

    const scrollTo =
      child.offsetLeft -
      container.offsetWidth / 2 +
      child.offsetWidth / 2;

    container.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.customColor.surfaceContainerLow,
        py: scale["3xl"],
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          maxWidth: "75rem",
          mx: "auto",
          px: scale.lg,
          mb: scale.xl,
        }}
      >
        <Text variant="h3" weight="bold">
          Interface Exploration
        </Text>
      </Box>

      {/* SCROLL CONTAINER */}
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          gap: scale.lg,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          px: {
            xs: scale.lg,
            md: "calc(50vw - 37.5rem)",
          },
          pb: scale.lg,

          WebkitOverflowScrolling: "touch", // 🔥 mobile smoothness
          scrollBehavior: "smooth",

          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {images.map((img, index) => {
          const isActive = index === activeIndex;

          return (
            <Box
              key={img.src}
              onClick={() => scrollToCard(index)}
              sx={{
                scrollSnapAlign: "center",

                minWidth: { xs: "20rem", md: "37.5rem" },
                aspectRatio: "16/9",
                borderRadius: scale.md,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",

                border: `2px solid ${
                  isActive
                    ? theme.palette.customColor.primary
                    : "transparent"
                }`,

                transform: isActive ? "scale(1)" : "scale(0.92)",
                opacity: isActive ? 1 : 0.6,

                transition: "all 0.35s ease",

                "&:hover img": {
                  transform: "scale(1.06)",
                },
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};