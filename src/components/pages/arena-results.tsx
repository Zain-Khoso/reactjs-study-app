// Lib Imports.
import { Link } from 'react-router';
import { motion } from 'motion/react';

// Asset Imports.
import { IconShare } from '@tabler/icons-react';

// Util Imports.
import { containerVariants, itemVariants } from '@/lib/motions';
import { useAuthRequired } from '@/lib/hooks';

// Component Imports.
import { Button } from '@/components/ui/button';
import { PodiumItem, StatsCard } from '../arena-results';

// Arena Results Page.
export default function ArenaResultsPage() {
  useAuthRequired(null);

  return (
    <>
      <title>Arena Results</title>

      <motion.main
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center space-y-8 px-4 pb-8 lg:px-0"
      >
        <motion.section
          variants={itemVariants}
          className="flex h-60 w-full items-end justify-center gap-4 sm:gap-8"
        >
          <PodiumItem
            position={2}
            name="Sarah M."
            avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
          />

          <PodiumItem
            position={1}
            name="You"
            isUser
            avatarUrl="https://lh3.googleusercontent.com/-vMM9R2UlBpM/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQSh6CEfa4PH8bRLDDUxvUhhTriQ/photo.jpg?sz=512"
          />

          <PodiumItem
            position={3}
            name="Mike K."
            avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
          />
        </motion.section>

        <motion.div variants={itemVariants} className="w-full max-w-3xl">
          <StatsCard rank="1st" accuracy="94%" avgSpeed="2.3s" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex w-full max-w-md flex-col gap-4 sm:flex-row"
        >
          <Button className="flex min-h-10 flex-1">
            <IconShare size={20} />
            Share Proof of Knowledge
          </Button>

          <Button variant="outline" className="flex min-h-10 flex-1" asChild>
            <Link to="/arenas">Play Again</Link>
          </Button>
        </motion.div>
      </motion.main>
    </>
  );
}
