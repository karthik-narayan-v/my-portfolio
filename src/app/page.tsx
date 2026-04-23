import { AppContainer } from "@/components/layout/AppContainer";
import HeroSection from "@/components/sections/hero";
import TechStackSection from "@/components/sections/tech-stack";
import WorksSection from "@/components/sections/work-section";

export default function Home() {
  return (
    <AppContainer>
      <HeroSection />
      <WorksSection />
      <TechStackSection />
    </AppContainer>
  );
}
