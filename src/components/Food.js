import React from "react";
import { FullWindow } from "../styles";
import foodVideo from "../assets/videos/video.mp4";
import styled from "styled-components";
import { motion } from "framer-motion";
import { classExpression } from "@babel/types";
const Food = () => {
  return (
    <StyledFullWindow>
      <video autoPlay loop muted>
        <source src={foodVideo} type="video/mp4" />
      </video>
      <Title>
        Наше <a href="google.com">меню</a> известно разнообразием блюд кухонь со
        всего мира
      </Title>
      <Subtitle>
        Все они разработаны по авторским рецептам шеф-повара Мариетты Шевчук
      </Subtitle>
    </StyledFullWindow>
  );
};
const StyledFullWindow = styled(FullWindow)`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  font-weight: lighter;
  transform: translatez(0px);
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    object-fit: cover;
    z-index: -1;
    filter: brightness(0.5);
  }
`;
const Title = styled(motion.h2)`
  font-weight: lighter;
  width: 80%;
  text-align: center;
  font-size: 3.2rem;
`;
const Subtitle = styled(motion.p)`
  font-size: 1.75rem;
`;
export default Food;
