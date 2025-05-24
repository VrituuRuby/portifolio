import styled from "styled-components";

export const Container = styled.section`
  position: relative;
`;

export const ProjectsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  background-color: rgba(17, 17, 17, 0.8);
  box-shadow: inset 0 -15px 40px 5px rgba(51, 51, 51, 0.4);
  border: 1px solid rgb(73, 73, 73);
  border-radius: 10px;
  padding: 1.5rem;

  &:hover {
    transform: scale(1.01);
    border-color: #357fdf;

    box-shadow: inset 0 0 40px 5px rgba(44, 79, 169, 0.5);
  }

  transition: all 200ms ease-in-out;
`;

export const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    line-height: 150%;
    margin-top: 0.5rem;
  }

  p {
    line-height: 125%;
  }

  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: 100% 0%;
    border-radius: 8px;
  }

  ul {
    padding: 1rem 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    li {
      text-align: center;
      padding: 0.25rem 1rem;
      line-height: 100%;
      border: 1px solid #333;
      border-radius: 8px;

      &:hover {
        border-color: #357fdf;
      }
      transition: all 200ms ease-in-out;
    }
  }
`;

export const LinksContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5rem;

  a {
    background-color: #222;
    padding: 0.5rem 1rem;
    border: 1px solid #333;
    border-radius: 8px;

    text-decoration: none;
    color: white;

    transition: all 200ms ease-in-out;

    &:hover {
      background-color: rgba(44, 79, 169, 0.5);
      border-color: #357fdf;
    }
  }
`;
