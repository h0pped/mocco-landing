import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import {
  descriptionAnimation,
  ImageScrollReveal,
  scrollReveal,
  titleAnimation,
  WaveAnimation,
} from "../animation";

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
import barImage from "../assets/images/bar.jpg";

const Bar = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFullWindow
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledContent>
        <TextDiv>
          <Hide>
            <Title variants={titleAnimation}>Каждая деталь особенна</Title>
          </Hide>
          <Hide>
            <Title variants={titleAnimation}>
              <a href="https://mocco.kiev.ua/menu/b.pdf">Бар</a> - одна из них
            </Title>
          </Hide>

          <StyledDescription variants={descriptionAnimation}>
            Наши бармены могут из всевозможных напитков создавать шедевры в виде
            авторских коктейлей, а{" "}
            <a href="https://mocco.kiev.ua/menu/vino.pdf">винная карта</a> точно
            не оставит вас равнодушными
          </StyledDescription>
        </TextDiv>
        <Image
          variants={ImageScrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <img src={barImage} alt="Bar" />
        </Image>
        <WaveSvg
          viewBox="0 0 1440 363"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 1 }}
          transform="scale(-1) translate(0, -100)"
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
  background: #1e1e1e;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const StyledContent = styled(Content)`
  flex-direction: row-reverse;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
export default Bar;
