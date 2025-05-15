import { ChangingText } from "../changing-text";
import {
  BlurPanel,
  Container,
  HeroContainer,
  StarsContainer,
  Blob,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Blob />
      <BlurPanel />
      <StarsContainer />

      <HeroContainer>
        <h1>
          Hey, I'm <b>Vritu!</b>
        </h1>
        <h2>
          Im also <ChangingText />
        </h2>
      </HeroContainer>
    </Container>
  );
}
