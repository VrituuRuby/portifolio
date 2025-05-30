import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 3rem;
`;

export const Card = styled.div`
  flex: 1;
  background-color: rgba(17, 17, 17, 0.8);
  box-shadow: inset 0 -15px 40px 5px rgba(51, 51, 51, 0.4);
  border: 1px solid rgb(73, 73, 73);
  border-radius: 10px;
  padding: 2rem;
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    border-radius: 100%;
    aspect-ratio: 1;
    max-width: 200px;
    width: 100%;
  }

  div {
    display: flex;
    width: 100%;
    flex-direction: column;

    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      max-width: 80ch;
    }
  }
`;

export const CardColumn = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 800px;
  z-index: 10;
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h2 {
    padding: 0;
    margin: 0;
  }

  p {
    max-width: 80ch;
    text-align: center;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const Technology = styled.div<{ mainColor: string }>`
  padding: 0.25rem 1rem;
  border-radius: 8px;
  background-color: #222;
  border: 1px solid #333;

  display: flex;
  align-items: center;
  gap: 8px;
  cursor: default;

  &:hover {
    box-shadow: 0 0 5px 2px ${(props) => props.mainColor};
    svg {
      transform: scale(1.2);
      color: ${(props) => props.mainColor};
    }
  }

  transition: box-shadow 200ms ease-in-out;

  svg {
    transition: color, transform 200ms ease-in-out;
    width: 24px;
    height: 24px;
  }
`;
