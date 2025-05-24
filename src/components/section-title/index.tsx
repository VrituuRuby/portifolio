import { Container, RadialGradient } from "./styles";

export const SectionTitle = ({ children }: { children: string }) => {
  return (
    <Container>
      <RadialGradient />
      <h2>{children}</h2>
    </Container>
  );
};
