import React from "react";
import { FullWindow } from "../styles";
import moccoBoutiqueImg from "../assets/images/Mocco-boutique.jpeg";
import styled from "styled-components";
import { motion } from "framer-motion";
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
    </StyledFullWindow>
  );
};
const StyledFullWindow = styled(FullWindow)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTitle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    transform: scale(1.08);
    background-position: 0 100%;
    color: rgb(0, 0, 0);
  }
`;
export default Title;
