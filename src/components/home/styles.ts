import styled, { keyframes } from "styled-components";

import PatternSvg from "@/assets/pattern.png";

export const Container = styled.main`
  width: 100%;
  color: white;
  position: relative;
  padding-bottom: 25vh;
  overflow: hidden;
`;

const rotate = keyframes`
  from{
    filter: hue-rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    filter: hue-rotate(140deg);
  }
  to {
    filter: hue-rotate(0deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Blob = styled.div`
  position: absolute;
  top: 400px;
  left: 50%;

  width: 500px;
  height: 500px;
  background-image: linear-gradient(#2c4fa9, #7e48ae);
  border-radius: 100%;

  animation: ${rotate} 10s linear infinite;
  transform: translate(-50%, -50%) rotate(0deg);

  opacity: 1;
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
  height: 100%;

  background-image: url(${PatternSvg});
  background-size: 10%;
  opacity: 0.05;
  will-change: background-position;
  animation: ${pan} 60s linear infinite;

  mask-image: linear-gradient(
    to right,
    transparent,
    black 30%,
    black 70%,
    transparent
  );
`;

export const BlurPanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(180px);
`;

export const NoisePanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: url(#noise);
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  margin: 0 auto;
  padding: 0 1rem;
  overflow: visible;
`;

export const HeroContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;

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
    line-height: 1.25;
    font-size: 3rem;
    font-weight: 400;
  }
`;
