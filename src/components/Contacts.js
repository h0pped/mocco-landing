import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FullWindow,
  Content,
  TextDiv,
  Title,
  StyledDescription,
  Image,
} from "../styles";
import contactImage from "../assets/images/mocco-hall.jpeg";
const Contacts = () => {
  return (
    <StyledFullWindow>
      <Content>
        <TextDiv>
          <Title>
            Семейный ужин, романтическое свидание, деловая встреча - повод не
            важен. Важно, что в <span>MOCCO</span> всегда вкусно и уютно.
          </Title>
          <ContactsDescription>
            Рады вам <Time>24/7</Time>!
            <ContactsContainer>
              <a href="tel:+380953002909">+38 (095) 300 29 09</a>
              <a href="https://www.google.com/maps/place/%D0%9C%D0%BE%D0%BA%D0%BA%D0%BE/@50.4476549,30.5249333,15z/data=!4m5!3m4!1s0x0:0x1d5f86142fc5e7ae!8m2!3d50.4476549!4d30.5249333">
                м. Київ, вул. Хрещатик 15/4 (Пассаж) 24h
              </a>
              <a href="mailto:info@mocco.kiev.ua">info@mocco.kiev.ua</a>
            </ContactsContainer>
          </ContactsDescription>
        </TextDiv>
        <Image>
          <img src={contactImage} alt="Description" />
        </Image>
      </Content>
    </StyledFullWindow>
  );
};
const StyledFullWindow = styled(FullWindow)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0rem 4rem;

  transform: translateZ(0);
`;

const ContactsDescription = styled(StyledDescription)`
  font-weight: 300;
  margin-top: 8rem;
`;
const Time = styled.span``;
const ContactsContainer = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  a {
    color: #f4f4f4;
    font-size: 1.5rem;
    font-weight: 300;
  }
`;
export default Contacts;
