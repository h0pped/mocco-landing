import React from "react";
import { FullWindow, ScrollDown } from "../styles";
import moccoBoutiqueImg from "../assets/images/Mocco-boutique.jpeg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CaretDown } from "phosphor-react";
const Title = () => {
  return (
    <StyledFullWindow>
      <img src={moccoBoutiqueImg} alt="Mocco" />
      <StyledTitle>
        <h1>Культовое место, где ценят вневременную классику</h1>
        <Buttons>
          <Button href="https://google.com">Доставка</Button>
          <Button href="https://google.com">Меню</Button>
          <Button href="https://google.com">Резервация</Button>
        </Buttons>
      </StyledTitle>
      <ScrollDown>
        <CaretDown size={48} />
      </ScrollDown>
    </StyledFullWindow>
  );
};
const StyledFullWindow = styled(FullWindow)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;

  img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: blur(2px) brightness(0.5);
    transform: scale(1.1);
  }
  transform: translateZ(0);
`;
const StyledTitle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 8rem;
`;
const Buttons = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0rem 5rem;
`;
const Button = styled(motion.a)`
  text-decoration: none;
  color: #f4f4f4;
  padding: 0.7rem 2rem;
  border: 1px solid #c8a259;
  font-size: 1.5rem;
  font-weight: lighter;
  transition: all 0.5s ease;
  background-size: 100% 200%;
  background-image: linear-gradient(to bottom, transparent 50%, #c8a259 50%);
  &:hover {
    background-position: 0 100%;
    color: rgb(0, 0, 0);
  }
`;

export default Title;
