import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FullWindow,
  Content,
  TextDiv,
  Title,
  Image,
  Hide,
  WaveSvg,
} from "../styles";
import {
  descriptionAnimation,
  ImageScrollReveal,
  scrollReveal,
  titleAnimation,
  WaveAnimation,
} from "../animation";
import { useScroll } from "../useScroll";
import contactImage from "../assets/images/mocco-hall.jpeg";
const Contacts = () => {
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
              Семейный ужин, романтическое
            </Title>
          </Hide>
          <Hide>
            <Title variants={titleAnimation}>свидание, деловая встреча -</Title>
          </Hide>
          <Hide>
            <Title variants={titleAnimation}>
              повод не важен. Важно, что в
            </Title>
          </Hide>
          <Hide>
            <Title variants={titleAnimation}>
              <span>MOCCO</span> всегда вкусно и уютно.
            </Title>
          </Hide>
          <Description>
            <Hide>
              <motion.div variants={titleAnimation}>
                Рады вам <Time>24/7</Time>!
              </motion.div>
            </Hide>
            <ContactsContainer variants={descriptionAnimation}>
              <a href="tel:+380953002909">+38 (095) 300 29 09</a>
              <a href="https://www.google.com/maps/place/%D0%9C%D0%BE%D0%BA%D0%BA%D0%BE/@50.4476549,30.5249333,15z/data=!4m5!3m4!1s0x0:0x1d5f86142fc5e7ae!8m2!3d50.4476549!4d30.5249333">
                м. Київ, вул. Хрещатик 15/4 (Пассаж) 24h
              </a>
              <a href="mailto:info@mocco.kiev.ua">info@mocco.kiev.ua</a>
            </ContactsContainer>
          </Description>
        </TextDiv>
        <Image
          variants={ImageScrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <img src={contactImage} alt="Description" />
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
  width: 100%;
  background: #1e1e1e;

  transform: translateZ(0);
`;

const Description = styled(motion.div)`
  font-size: 1.5rem;
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
  @media screen and (max-width: 1200px) {
    align-items: center;
    margin-top: 2rem;

    margin-bottom: 2rem;
    a {
      padding: 0.5rem;
    }
  }
`;
export default Contacts;
