import { ChangingText } from "@/components/changing-text";
import { AboutSection } from "@/components/sections/about-section";
import {
  BlurPanel,
  Container,
  HeroContainer,
  StarsContainer,
  Blob,
  NoisePanel,
  ContentWrapper,
} from "./styles";
import { ProjectsSection } from "../sections/projects-section";

export function Home() {
  return (
    <Container>
      <svg width="0" height="0">
        <filter id="noise">
          <feTurbulence type="turbulence" baseFrequency="0.6" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.125" />
          </feComponentTransfer>
        </filter>
      </svg>

      <Blob />
      <BlurPanel />
      <NoisePanel />
      <StarsContainer />

      <ContentWrapper>
        <HeroContainer>
          <h1>
            Hey, I'm <b>Vritu!</b>
          </h1>
          <h2>
            Im also... <ChangingText />
          </h2>
        </HeroContainer>

        <AboutSection />
        <ProjectsSection />
      </ContentWrapper>
    </Container>
  );
}
