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
