export const scale = {
  xs: "0.25rem",   // 4px
  sm: "0.5rem",    // 8px
  md: "1rem",      // 16px
  lg: "1.5rem",    // 24px
  xl: "2rem",      // 32px
  "2xl": "3rem",   // 48px
  "3xl": "4rem",   // 64px
  "4xl": "6rem",   // 96px
};

export const container = {
  maxWidth: "75rem", // 1200px

  paddingX: {
    xs: scale.md,
    sm: scale.lg,
    md: scale.xl,
  },

  sectionY: {
    xs: scale["2xl"],
    md: scale["3xl"],
  },
};