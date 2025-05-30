import {
  Container,
  DecorContainer,
  LineDecor,
  LineGradient,
  RadialGradient,
  RadialGradientContainer,
} from "./styles";

export const SectionTitle = ({ children }: { children: string }) => {
  return (
    <Container>
      <DecorContainer>
        <LineDecor>
          <LineGradient />
        </LineDecor>
        <RadialGradientContainer>
          <RadialGradient />
        </RadialGradientContainer>
      </DecorContainer>
      <h2>{children}</h2>
    </Container>
  );
};
