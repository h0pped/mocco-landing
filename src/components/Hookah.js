import React from "react";
import { FullWindow } from "../styles";
import hookahImage from "../assets/images/hookah.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "../useScroll";
const Hookah = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFullWindow
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <img src={hookahImage} alt="Mocco" />
      <Title>
        Один из главных атрибутов хорошего вечера
        <a href="https://mocco.kiev.ua/menu/hookah.pdf"> дымные коктейли</a>
      </Title>
      <StyledSubtitle>
        В <span>MOCCO</span> вы найдете чаши на 12 фруктах, колбы на алкоголе,
        молоке и соке, а также 14 оригинальных авторских коктейлей.
      </StyledSubtitle>
    </StyledFullWindow>
  );
};
const StyledFullWindow = styled(FullWindow)`
  display: flex;
  justify-content: space-evenly;

  align-items: center;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
  img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: blur(2px) brightness(0.3);
    transform: scale(1.1);
  }
  transform: translateZ(0);
`;
const Title = styled(motion.h2)`
  font-weight: 300;
  width: 80%;
  text-align: center;
  font-size: 3.2rem;
  margin-bottom: 10rem;
`;
const StyledSubtitle = styled(motion.p)`
  font-size: 1.75rem;
  font-weight: lighter;
  width: 85%;
`;
export default Hookah;
