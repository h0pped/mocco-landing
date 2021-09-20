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
import barImage from "../assets/images/bar.jpg";

const Bar = () => {
  return (
    <StyledFullWindow>
      <StyledContent>
        <TextDiv>
          <Title>
            Каждая деталь особенна <br />
            <a>Бар</a> - одна из них
          </Title>
          <StyledDescription>
            Наши бармены могут из всевозможных напитков создавать шедевры в виде
            авторских коктейлей, а <a>винная карта</a> точно не оставит вас
            равнодушными
          </StyledDescription>
        </TextDiv>
        <Image>
          <img src={barImage} alt="Bar" />
        </Image>
      </StyledContent>
    </StyledFullWindow>
  );
};
const StyledFullWindow = styled(FullWindow)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0rem 4rem;
`;
const StyledContent = styled(Content)`
  flex-direction: row-reverse;
`;
export default Bar;
