import styled from "styled-components";
import { motion } from "framer-motion";

export const FullWindow = styled(motion.div)`
  min-width: 100vw;
  min-height: 100vh;

  color: #f4f4f4;
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
`;

export const TextDiv = styled(motion.div)`
  width: 45%;
`;
export const Title = styled(motion.h2)`
  font-size: 2.7rem;
  font-weight: 400;
  span {
    color: #c8a259;
  }
`;
export const StyledDescription = styled(motion.p)`
  font-size: 2rem;
  margin-top: 10rem;
  font-weight: lighter;
`;
export const Image = styled(motion.div)`
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
