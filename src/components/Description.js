import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FullWindow } from "../styles";
import descriptionImage from "../assets/images/description.jpg";
const Description = () => {
  return (
    <StyledFullWindow>
      <Content>
        <TextDiv>
          <Title>
            <span>МОССО</span> - место людей любящих вкусить жизнь схарактерными
            ей восторгами
          </Title>
          <StyledDescription>
            Каждая деталь интерьера и атмосфера выдержанные в лучших традициях
            классики заставляют наших посетителей возвращаться к нам вновь и
            вновь
          </StyledDescription>
        </TextDiv>
        <Image>
          <img src={descriptionImage} alt="Description" />
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
const Content = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextDiv = styled(motion.div)`
  width: 45%;
`;
const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 200;
  span {
    color: #c8a259;
  }
`;
const StyledDescription = styled(motion.p)`
  font-size: 2rem;
  margin-top: 10rem;
  font-weight: lighter;
`;
const Image = styled(motion.div)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`;
export default Description;
