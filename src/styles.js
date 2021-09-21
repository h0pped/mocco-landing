import styled from "styled-components";
import { motion } from "framer-motion";

export const FullWindow = styled(motion.div)`
  min-width: 100vw;
  min-height: 100vh;

  color: #f4f4f4;
  @media screen and (max-width: 500px) {
    min-height: 70vh;
  }
`;
export const ScrollDown = styled(motion.div)`
  margin-top: 10rem;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(1.5rem);
  }
`;
export const Content = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 4rem;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 5rem 0rem;
    text-align: center;
  }
`;

export const TextDiv = styled(motion.div)`
  width: 45%;
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;
export const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 300;
  span {
    color: #c8a259;
  }
`;
export const StyledDescription = styled(motion.p)`
  font-size: 2rem;
  margin-top: 10rem;
  font-weight: lighter;
  @media screen and (max-width: 1200px) {
    margin: 3rem 0rem;
  }
`;
export const Image = styled(motion.div)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 999;
  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
    z-index: 999;
    @media screen and (max-width: 800px) {
      height: 50vh;
    }
    @media screen and (max-width: 500px) {
      height: 30vh;
    }
  }
`;
export const Hide = styled(motion.div)`
  overflow: hidden;
`;
export const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: -1;
`;
