import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import instagram from "../assets/svg/instagram.svg";
import facebook from "../assets/svg/facebook.svg";
const Footer = () => {
  return (
    <StyledFooter>
      <Contacts>
        <a href="tel:+380953002909">+38 (095) 300 29 09</a>
        <a href="https://www.google.com/maps/place/%D0%9C%D0%BE%D0%BA%D0%BA%D0%BE/@50.4476549,30.5249333,15z/data=!4m5!3m4!1s0x0:0x1d5f86142fc5e7ae!8m2!3d50.4476549!4d30.5249333">
          м. Київ, вул. Хрещатик 15/4 (Пассаж) 24h
        </a>
        <a href="mailto:info@mocco.kiev.ua">info@mocco.kiev.ua</a>
      </Contacts>
      <Media>
        <a href="https://www.facebook.com/mocco.kiev.ua/">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/mocco_kyiv">
          <img src={instagram} alt="instagram" />
        </a>
      </Media>
      <Logo>
        <a href="/">Mocco</a>
      </Logo>
    </StyledFooter>
  );
};
const StyledFooter = styled(motion.div)`
  min-height: 15vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  color: white;
  padding: 0rem 4rem;
  @media screen and (max-width: 500px) {
    padding: 2rem 0;
    flex-direction: column;
    text-align: center;
  }
`;
const Contacts = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  width: 33%;

  a {
    margin-bottom: 0.5rem;
    color: #f4f4f4;
    font-weight: 300;
  }
  @media screen and (max-width: 500px) {
    padding: 0;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 100%;
  }
`;
const Media = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 33%;
  align-items: center;
  a {
    img {
      width: 4rem;
    }
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    a {
      margin: 0rem 2rem;
    }
  }
`;
const Logo = styled(motion.div)`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  a {
    font-size: 2rem;
    font-weight: 200;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;
export default Footer;
