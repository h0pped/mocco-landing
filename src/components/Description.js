import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  descriptionAnimation,
  ImageScrollReveal,
  scrollReveal,
  titleAnimation,
  WaveAnimation,
} from "../animation";
import { useScroll } from "../useScroll";
import {
  FullWindow,
  Content,
  TextDiv,
  Title,
  StyledDescription,
  Image,
  Hide,
  WaveSvg,
} from "../styles";
import descriptionImage from "../assets/images/description.jpg";
const Description = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFullWindow
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Content>
        <TextDiv>
          <Hide>
            <Title variants={titleAnimation}>
              <StyledSpan>МОССО</StyledSpan> - место людей
            </Title>
          </Hide>
          <Hide>
            <Title variants={titleAnimation}>любящих вкусить жизнь</Title>
          </Hide>
          <Hide>
            <Title variants={titleAnimation}>
              с характерными ей восторгами
            </Title>
          </Hide>
          <StyledDescription variants={descriptionAnimation}>
            Каждая деталь интерьера и атмосфера выдержанные в лучших традициях
            классики заставляют наших посетителей возвращаться к нам вновь и
            вновь
          </StyledDescription>
        </TextDiv>
        <Image
          variants={ImageScrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <img src={descriptionImage} alt="Description" />
        </Image>
      </Content>
      <WaveSvg
        viewBox="0 0 1440 363"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={WaveAnimation}
          animate={controls}
          initial="hidden"
          ref={element}
          transition={{ duration: 1 }}
          d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
          stroke="#c8a259"
          strokeOpacity="0.5"
          strokeWidth="10"
        />
      </WaveSvg>
    </StyledFullWindow>
  );
};
const StyledFullWindow = styled(FullWindow)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #1e1e1e;

  transform: translateZ(0);
`;
const StyledSpan = styled.span`
  font-weight: lighter;
`;

export default Description;
