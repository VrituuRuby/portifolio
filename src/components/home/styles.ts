import styled, { keyframes } from "styled-components";

import PatternSvg from "@/assets/pattern.png";

export const Container = styled.main`
  background: #13131a;
  height: 200vh;
  width: 100%;
  color: white;
  position: relative;
`;

const rotate = keyframes`
  from {
    filter: hue-rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg) scaleX(1);
  }
  50%{
    filter: hue-rotate(90deg);
    transform: translate(-50%, -50%) rotate(180deg) scaleX(1.5);
  }
  to {
    filter: hue-rotate(0deg);
    transform: translate(-50%, -50%) rotate(360deg) scaleX(1);
  }
`;

export const Blob = styled.div`
  position: absolute;
  top: 500px;
  left: 50%;

  width: 500px;
  height: 500px;
  background-image: linear-gradient(#2c4fa9, #7e48ae);
  border-radius: 100%;

  animation: ${rotate} 30s linear infinite;
  transform: translate(-50%, -50%) rotate(0deg);

  opacity: 0.5;
`;

const pan = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -100% 0;
  }
`;

export const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 110vh;

  background-image: url(${PatternSvg});
  background-size: 7%;
  background-repeat: repeat;
  background-blend-mode: screen;
  animation: ${pan} 180s linear infinite;

  will-change: background-position;

  opacity: 0.1;

  mask-image: linear-gradient(to bottom, black, transparent);
`;

export const BlurPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(200px);
  z-index: 0;
`;

export const HeroContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  font-family: "Space Grotesk", sans-serif;
  h1 {
    line-height: 100%;
    font-size: 4rem;
    font-weight: 400;
  }
  h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    line-height: 100%;
    font-size: 3rem;
    font-weight: 400;
  }
`;
