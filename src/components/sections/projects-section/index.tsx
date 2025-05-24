import { SectionTitle } from "@/components/section-title";
import {
  Card,
  Container,
  LinksContainer,
  ProjectContent,
  ProjectsContainer,
} from "./styles";

import ArenaImage from "@/assets/projects/arena.png";
import CoffeeImage from "@/assets/projects/coffeedelivery.png";
import ReactDexImage from "@/assets/projects/reactdex.png";

const PROJECTS = [
  {
    name: "Arena Transautos",
    image: ArenaImage,
    description:
      "Site feito sob medida para a empresa Arena Transautos, especializada em transporte de veículos. Inclui formulário para solicitação de serviços.",
    techs: [
      "React",
      "React Router DOM",
      "React Hook Form",
      "Axios",
      "TailwindCSS",
    ],
    live_demo: "https://arenatransautos.com.br/",
    type: "real",
  },
  {
    name: "ReactDex",
    image: ReactDexImage,
    description:
      "Pokédex desenvolvida com React utilizando a PokéAPI via GraphQL.",
    techs: ["React", "GraphQL", "Apollo Client", "Styled Components"],
    live_demo: "https://reactdex.onrender.com/",
    github: "https://github.com/VrituuRuby/react-pokedex",
    type: "study",
  },
  {
    name: "Coffee Delivery Shop",
    image: CoffeeImage,
    description:
      "Interface de loja fictícia de delivery de café com sistema de carrinho utilizando custom hooks. Projeto de estudo como parte de um desafio Rocketseat.",
    techs: [
      "React",
      "Styled Components",
      "Correios API",
      "React Router DOM",
      "Custom Hooks",
    ],
    live_demo: "https://coffeedelivery.onrender.com/",
    github: "https://github.com/VrituuRuby/coffee-delivery-app",
    type: "study",
  },
];

export function ProjectsSection() {
  return (
    <Container>
      <SectionTitle>Projetos</SectionTitle>
      <ProjectsContainer>
        {PROJECTS.map((project, index) => (
          <Card key={index}>
            <ProjectContent>
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul>
                {project.techs.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>
              <LinksContainer>
                <a href={project.live_demo} target="_blank">
                  Live Demo
                </a>
                {project.github && (
                  <a href={project.live_demo} target="_blank">
                    Github
                  </a>
                )}
              </LinksContainer>
            </ProjectContent>
          </Card>
        ))}
      </ProjectsContainer>
    </Container>
  );
}
