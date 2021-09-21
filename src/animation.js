export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const titleAnimation = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
export const descriptionAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.25, delay: 1.2, ease: "easeOut" },
  },
};

export const photoAnimation = {
  hidden: { scale: 1.3, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
    y: 0,
  },
};
export const descriptionPhotoAnimation = {
  hidden: { scale: 1.3 },
  show: {
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
    y: 0,
  },
};
export const scrollReveal = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
export const ImageScrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
export const WaveAnimation = {
  hidden: { pathLength: 0, pathOffset: 1, transition: { duration: 1 } },
  show: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 1,
    },
  },
};
