import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  font-family: "Space Grotesk", sans-serif;
  overflow: hidden;
  padding-bottom: 300px;
  margin-bottom: -300px;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent,
      #357fdf,
      transparent
    );
  }

  h2 {
    position: relative;
    margin-top: 3rem;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

export const RadialGradient = styled.div`
  position: absolute;
  top: -400px;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background-image: radial-gradient(
    circle at center,
    #2c4fa9 0%,
    transparent 70%
  );
`;
