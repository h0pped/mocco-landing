import React from "react";
import { FullWindow } from "../styles";
import foodVideo from "../assets/videos/video.mp4";
import styled from "styled-components";
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "../useScroll";
const Food = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFullWindow
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <video autoPlay loop muted>
        <source src={foodVideo} type="video/mp4" />
      </video>
      <Title>
        Наше <a href="https://mocco.kiev.ua/menu/menu.pdf">меню</a> известно
        разнообразием блюд кухонь со всего мира
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
  background: #1e1e1e;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

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
const Subtitle = styled(motion.p)``;
export default Food;
