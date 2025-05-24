import {
  Card,
  CardColumn,
  Container,
  PhotoContainer,
  SkillsContainer,
  TechContainer,
  Technology,
} from "./styles";

import DockerSvg from "@/assets/icons/docker.svg?react";
import JavascriptSvg from "@/assets/icons/js.svg?react";
import NextSvg from "@/assets/icons/next.svg?react";
import NodeSvg from "@/assets/icons/node.svg?react";
import PostgresqlSvg from "@/assets/icons/postgres.svg?react";
import PrismaSvg from "@/assets/icons/prisma.svg?react";
import ReactSvg from "@/assets/icons/react.svg?react";
import TailwindSvg from "@/assets/icons/tailwind.svg?react";
import TypescriptSvg from "@/assets/icons/ts.svg?react";
import { SectionTitle } from "@/components/section-title";

const SKILLS = [
  { Icon: JavascriptSvg, name: "JavaScript", color: "#f7df1e" },
  { Icon: TypescriptSvg, name: "TypeScript", color: "#2b7489" },
  { Icon: ReactSvg, name: "React", color: "#61dafb" },
  { Icon: ReactSvg, name: "React Native", color: "#61dafb" },
  { Icon: NodeSvg, name: "Node", color: "#43853d" },
  { Icon: NextSvg, name: "Next.js", color: "#ffffff" },
  { Icon: PostgresqlSvg, name: "PostgreSQL", color: "#4169e1" },
  { Icon: PrismaSvg, name: "Prisma", color: "hsl(222, 80%, 30%)" },
  { Icon: DockerSvg, name: "Docker", color: "#0db7ed" },
  { Icon: TailwindSvg, name: "TailwindCSS", color: "#38bdf8" },
];

export function AboutSection() {
  return (
    <Container id="about">
      <SectionTitle>Sobre mim</SectionTitle>
      <CardColumn>
        <Card>
          <PhotoContainer>
            <img
              src="https://avatars.githubusercontent.com/u/61244052?v=4"
              alt=""
            />
            <div>
              <h2>Victor "Vritu" Velozo</h2>
              <h3>Fullstack Webdeveloper</h3>
              <p>
                Desenvolvedor fullstack focado em criar aplicações web modernas
                e escaláveis - do design ao banco de dados.
              </p>
            </div>
          </PhotoContainer>
        </Card>
        <Card>
          <SkillsContainer>
            <h2>Habilidades</h2>
            <p>
              Experiência em Node e React tanto para aplicações web quanto
              mobile. Estas são algumas das tecnologias que conheço e utilizo no
              meu dia a dia:
            </p>
            <TechContainer>
              {SKILLS.map(({ Icon, name, color }) => (
                <Technology key={name} mainColor={color}>
                  {/* @ts-expect-error pq sim */}
                  <Icon color="white" />
                  <p>{name}</p>
                </Technology>
              ))}
            </TechContainer>
          </SkillsContainer>
        </Card>
      </CardColumn>
    </Container>
  );
}
