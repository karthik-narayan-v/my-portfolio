import { AppContainer } from "@/components/layout/AppContainer";
import OtherSkillsSection from "@/components/sections/skills/other-skills";
import SkillHeader from "@/components/sections/skills/skill-header";
import TechnicalSkillsSection from "@/components/sections/skills/technical-skills";

export default function Skills() {
  return (
    <AppContainer>
      <SkillHeader />
      <TechnicalSkillsSection />
      <OtherSkillsSection />
    </AppContainer>
  );
}
