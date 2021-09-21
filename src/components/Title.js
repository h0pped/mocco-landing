import React from "react";
import { FullWindow, ScrollDown, Hide } from "../styles";
import moccoBoutiqueImg from "../assets/images/Mocco-boutique.jpeg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CaretDown } from "phosphor-react";
import { pageAnimation, titleAnimation, photoAnimation } from "../animation";

const Title = () => {
  const scrollToDescription = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <StyledFullWindow variants={pageAnimation} initial="hidden" animate="show">
      <motion.img
        src={moccoBoutiqueImg}
        alt="Mocco"
        variants={photoAnimation}
      />
      <StyledTitle>
        <Hide>
          <motion.h1 variants={titleAnimation}>
            Культовое место, где ценят вневременную классику
          </motion.h1>
        </Hide>
        <Hide style={{ width: "100%" }}>
          <Buttons variants={titleAnimation}>
            <Button href="https://delivery.mocco.kiev.ua/">Доставка</Button>
            <Button href="https://mocco.kiev.ua/menu/menu.pdf">Меню</Button>
            <Button href="http://mocco.kiev.ua/reserve/?utm_source=www&utm_medium=cpc&utm_campaign=reserve_www">
              Резервация
            </Button>
          </Buttons>
        </Hide>
      </StyledTitle>
      <Hide>
        <ScrollDown variants={titleAnimation} onClick={scrollToDescription}>
          <CaretDown size={48} />
        </ScrollDown>
      </Hide>
    </StyledFullWindow>
  );
};
const StyledFullWindow = styled(FullWindow)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  background: black;

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
  @media screen and (max-width: 500px) {
    min-height: 100vh;
  }
`;
const StyledTitle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 8rem;
  overflow: hidden;
  width: 80%;
  text-align: center;
`;

const Buttons = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0rem 5rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
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
  @media screen and (max-width: 1000px) {
    margin: 1rem;
    width: 40%;
  }
  @media screen and (max-width: 500px) {
    padding: 1rem 0rem;
    text-align: center;
  }
`;

export default Title;
