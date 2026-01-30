// Types.
import type { Variants } from 'motion/react';

// Motion Variants for general pages.
const pageMotions: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], when: 'beforeChildren' },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
};

// Motion Variants for sigin page specifically.
const logInPageMotions: Record<string, Variants> = {
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

// Motion Variants for container elements.
const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

// Motion Variants for children of 'containerVariants'.
const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  exit: { opacity: 0, y: -20 },
};

// Motion Variants used specifically on the leaderboards page for the current user's info footer.
const userRankVariants: Variants = {
  initial: { y: 100 },
  animate: {
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 30, delay: 0.4 },
  },
  exit: { y: 100 },
};

// Motion Variants for Arena Results Page Podium.
const arenaResultsPodium: Variants = {
  initial: { scaleY: 0, opacity: 0 },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    scaleY: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] },
  },
};

// Motion Variants for Arena Results Page Avatars.
const arenaResultsPodiumAvatars = (delay: number): Variants => ({
  initial: { opacity: 0, y: 60, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: delay,
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.3 },
  },
});

export {
  pageMotions,
  logInPageMotions,
  containerVariants,
  itemVariants,
  userRankVariants,
  arenaResultsPodium,
  arenaResultsPodiumAvatars,
};
