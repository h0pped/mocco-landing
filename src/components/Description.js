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
import descriptionImage from "../assets/images/description.jpg";
const Description = () => {
  return (
    <StyledFullWindow>
      <Content>
        <TextDiv>
          <Title>
            <StyledSpan>МОССО</StyledSpan> - место людей любящих вкусить жизнь
            схарактерными ей восторгами
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
const StyledSpan = styled.span`
  font-weight: lighter;
`;

export default Description;
