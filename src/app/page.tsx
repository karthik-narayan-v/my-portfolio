import HeroSection from "@/components/pages/HeroSection/hero-section";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      height={"100%"}
      width={"100%"}
      display={"flex"}
      alignContent={"center"}
      justifyContent={"center"}
      paddingTop={"80px"}
    >
      <HeroSection />
    </Box>
  );
}
