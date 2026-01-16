// Types.
import type { Variants } from 'motion/react';

// Motion Variants for general pages.
const generalPageMotions: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], when: 'beforeChildren' },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
};

const signInPageMotions: Record<string, Variants> = {
  upperCircle: {
    hidden: {
      opacity: 0,
      y: -150,
      x: -50,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
  lowerCircle: {
    hidden: {
      opacity: 0,
      y: 150,
      x: 50,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
  ssoCard: {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: 'easeIn',
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  footer: {
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.8,
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 1,
      },
    },
  },
};

export { generalPageMotions, signInPageMotions };
