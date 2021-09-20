import styled from "styled-components";
import { motion } from "framer-motion";

export const FullWindow = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: blur(2px);
    transform: scale(1.1);
  }

  color: #f4f4f4;
`;
