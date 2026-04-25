import { AppContainer } from "@/components/layout/AppContainer";
import { InterfaceExplorationSection } from "@/components/sections/project/interface-showcase";
import { ProjectDetailsSection } from "@/components/sections/project/project-details";
import { ProjectHeader } from "@/components/sections/project/project-header";
import { ProjectNav } from "@/components/sections/project/project-nav";

export default function Home() {
  return (
    <AppContainer>
      <ProjectHeader
        title="Nebula Dashboard"
        description="Real-time data visualization for high-frequency trading."
        duration="4 Months"
        role="Lead Developer"
        image="/png/project2.png"
      />
      <ProjectDetailsSection />
      <InterfaceExplorationSection />
      <ProjectNav
        previousProject={{
          title: "Nebula Dashboard",
          href: "/work/nebula",
        }}
        nextProject={{
          title: "Arcade Commerce",
          href: "/work/arcade",
        }}
      />
    </AppContainer>
  );
}
