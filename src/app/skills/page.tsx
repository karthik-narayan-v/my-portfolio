import { AppContainer } from "@/components/layout/AppContainer";
import SkillHeader from "@/components/sections/skills/skill-header";
import TechnicalSkillsSection from "@/components/sections/skills/technical-skills";

export default function Skills() {
  return (
    <AppContainer>
      <SkillHeader />
      <TechnicalSkillsSection />
    </AppContainer>
  );
}
