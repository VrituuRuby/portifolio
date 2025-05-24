import { useEffect, useRef, useState } from "react";
import { Container, Text, Wrapper } from "./styles";

const Texts = [
  "a javascript dev.",
  "a web developer.",
  "an artist.",
  "a musician.",
  "a guitar player.",
  "a game dev.",
];

export function ChangingText() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % Texts.length);
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (spanRef.current) {
      setWidth(spanRef.current.offsetWidth);
    }
  }, [index]);

  return (
    <Container>
      <Wrapper style={{ width }}>
        <Text key={index} ref={spanRef}>
          {Texts[index]}
        </Text>
      </Wrapper>
    </Container>
  );
}
