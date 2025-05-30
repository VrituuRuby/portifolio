import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2rem;

  h2 {
    width: 100%;
    text-align: center;
    font-size: 3rem;
    z-index: 10;
  }
`;

export const DecorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  position: relative;
  z-index: 10;
`;

export const LineDecor = styled.div`
  width: 100%;
  height: 1px;
  display: relative;
  overflow: hidden;
`;

export const LineGradient = styled.div`
  width: 100%;
  height: 10px;
  background-image: linear-gradient(
    to right,
    transparent 10%,
    rgb(24, 123, 216),
    transparent 90%
  );
`;

export const RadialGradientContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
`;

export const RadialGradient = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  opacity: 0.3;
  background-image: radial-gradient(circle at top, #2c4fa9 0%, transparent 60%);
`;
