import styled, { keyframes } from "styled-components";

const fade = keyframes`
    from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: inline-block;
  transition: width 200ms ease;
  overflow: hidden;
  line-height: 1.25;
`;

export const Text = styled.span`
  display: inline-block;
  animation: ${fade} 0.5s ease;
  white-space: nowrap;
  line-height: 1.25;

  color: transparent;

  font-weight: 700;
  background-image: linear-gradient(to right, #0faaf8, #00ffcc, #0faaf8);
  background-size: 200% 100%;
  background-clip: text;
`;
