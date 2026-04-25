import { AppContainer } from "@/components/layout/AppContainer";
import AwardsSection from "@/components/sections/about/awards";
import GetInTouchSection from "@/components/sections/about/get-in-touch";
import ProfileHeader from "@/components/sections/about/header";
import JourneySection from "@/components/sections/about/journey";
import StorySection from "@/components/sections/about/story";

export default function About() {
  return (
    <AppContainer>
      <ProfileHeader />
      <StorySection />
      <JourneySection />
      <AwardsSection />
      <GetInTouchSection />
    </AppContainer>
  );
}
