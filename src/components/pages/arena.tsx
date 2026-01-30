// Lib Imports.
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';

// Asset Imports.
import { IconChevronRight } from '@tabler/icons-react';

// Util Imports.
import { containerVariants, itemVariants } from '@/lib/motions';

// Component Imports.
import { Button } from '@/components/ui/button';
import { Options, Question, RankPanel, Timer } from '../arena';

// Live Arena Page.
export default function ArenaPage() {
  const { pathname } = useLocation();

  const [selectedOption, setSelectedOption] = useState<string | null>('B');

  const options = [
    { id: 'A', text: 'O(n)' },
    { id: 'B', text: 'O(log n)' },
    { id: 'C', text: 'O(n²)' },
    { id: 'D', text: 'O(1)' },
  ];

  return (
    <>
      <title>Arena</title>

      <motion.main
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-8 md:px-8 lg:h-[calc(100dvh-118px)] lg:grid-cols-[1fr_380px] xl:px-0"
      >
        <motion.section
          variants={containerVariants}
          className="lg:no-scrollbar space-y-8 lg:overflow-y-scroll lg:p-1"
        >
          <motion.div variants={itemVariants}>
            <Timer startTime={new Date()} endTime={new Date(Date.now() + 10_000)} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Question
              questionNumber={15}
              totalQuestions={30}
              difficulty="Medium"
              category="Data Structures"
              questionText="What is the time complexity of searching for an element in a balanced Binary Search Tree?"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Options
              options={options}
              selectedOption={selectedOption}
              onSelect={setSelectedOption}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button asChild variant="outline" className="ml-auto flex w-fit items-center px-10">
              <Link to={`${pathname}/@zainkhoso`}>
                Submit Answer
                <IconChevronRight size={20} stroke={3} />
              </Link>
            </Button>
          </motion.div>
        </motion.section>

        <motion.aside variants={itemVariants} className="lg:overflow-y-scroll lg:p-1">
          <RankPanel
            currentRank={342}
            rankChange={23}
            activePlayersCount={1247}
            topPlayers={[
              { rank: 1, name: 'Alex Chen', pts: '3,890' },
              { rank: 2, name: 'Sarah Kumar', pts: '3,765' },
              { rank: 3, name: 'Mike Johnson', pts: '3,620' },
              { rank: 4, name: 'Emma Wilson', pts: '3,510' },
              { rank: 5, name: 'David Lee', pts: '3,445' },
            ]}
          />
        </motion.aside>
      </motion.main>
    </>
  );
}
