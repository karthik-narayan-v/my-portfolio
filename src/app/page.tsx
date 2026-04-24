import { AppContainer } from "@/components/layout/AppContainer";
import HeroSection from "@/components/sections/landing/hero";
import TechStackSection from "@/components/sections/landing/tech-stack";
import WorksSection from "@/components/sections/landing/work-section";

export default function Home() {
  return (
    <AppContainer>
      <HeroSection />
      <WorksSection />
      <TechStackSection />
    </AppContainer>
  );
}
