// Lib Imports.
import { useState } from 'react';
import { motion } from 'motion/react';

// Asset Imports.
import { IconTrophy } from '@tabler/icons-react';

// Util Imports.
import { containerVariants, itemVariants } from '@/lib/motions';
import { useAuthRequired } from '@/lib/hooks';

// Component Imports.
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { H2, Muted } from '../ui/typography';
import { PodiumItem, RankList, LeaderboardToggle, CurrentUserRank } from '../leaderboard';

// Types.
import { type LeaderboardEntry } from '../leaderboard';

// Data.
const subjects = [
  { value: 'Global', label: 'Global Ranking' },
  { value: 'Computer Science', label: 'Computer Science' },
  { value: 'Mathematics', label: 'Mathematics' },
  { value: 'History', label: 'History' },
  { value: 'Physics', label: 'Physics' },
];
const TOP_THREE: LeaderboardEntry[] = [
  {
    rank: 2,
    name: 'Sarah Chen',
    handle: '@sarahc',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    points: 2847,
    pointsToday: 110,
  },
  {
    rank: 1,
    name: 'Zain Khoso',
    handle: '@zainkhoso',
    avatar:
      'https://lh3.googleusercontent.com/-vMM9R2UlBpM/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQSh6CEfa4PH8bRLDDUxvUhhTriQ/photo.jpg?sz=512',
    points: 3511,
    pointsToday: 78,
  },
  {
    rank: 3,
    name: 'Mike Johnson',
    handle: '@mikej',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    points: 2691,
    pointsToday: 92,
  },
];

const RANKED_LIST: LeaderboardEntry[] = [
  {
    rank: 4,
    name: 'Emma Wilson',
    handle: '@emmaw',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    points: 2456,
    pointsToday: 127,
  },
  {
    rank: 5,
    name: 'David Kim',
    handle: '@davidk',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    points: 2298,
    pointsToday: 89,
  },
  {
    rank: 6,
    name: 'Lisa Zhang',
    handle: '@lisaz',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    points: 2156,
    pointsToday: 56,
  },
  {
    rank: 7,
    name: 'Ryan Taylor',
    handle: '@ryant',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan',
    points: 2034,
    pointsToday: 43,
  },
  {
    rank: 8,
    name: 'Amy Foster',
    handle: '@amyf',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amy',
    points: 1967,
    pointsToday: 78,
  },
  {
    rank: 9,
    name: 'James Park',
    handle: '@jamesp',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    points: 1834,
    pointsToday: 92,
  },
];

// Leaderboard page.
export default function LeaderboardPage() {
  useAuthRequired(null);
  const [currentSubject, setCurrentSubject] = useState('Global');

  return (
    <>
      <title>Leaderboards</title>

      <motion.main
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mx-auto max-w-7xl space-y-8 px-4 pb-32"
      >
        <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <article className="space-y-1">
            <H2>Leaderboards</H2>
            <Muted>See how you rank against other users</Muted>
          </article>

          <div className="flex flex-wrap items-center gap-3">
            <LeaderboardToggle
              subjects={subjects}
              currentSubject={currentSubject}
              onSubjectChange={setCurrentSubject}
            />

            <motion.div variants={itemVariants}>
              <Tabs defaultValue="daily" className="w-auto">
                <TabsList className="bg-muted/50 border-border/50 border">
                  <TabsTrigger value="daily">Daily</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="all-time">All-Time</TabsTrigger>
                </TabsList>
              </Tabs>
            </motion.div>
          </div>
        </section>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden">
            <CardHeader className="text-muted-foreground flex items-center gap-2">
              <IconTrophy size={18} />

              <CardTitle className="uppercase">{currentSubject} Rankings</CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <div className="to-muted/20 flex items-end justify-center gap-4 border-b bg-linear-to-b from-transparent py-12 sm:gap-12">
                <PodiumItem entry={TOP_THREE[0]} />
                <PodiumItem entry={TOP_THREE[1]} isWinner />
                <PodiumItem entry={TOP_THREE[2]} />
              </div>

              <RankList users={RANKED_LIST} />
            </CardContent>
          </Card>
        </motion.div>

        <CurrentUserRank
          rank={1}
          name="Zain Khoso"
          handle="@zainkhoso"
          avatar="https://lh3.googleusercontent.com/-vMM9R2UlBpM/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQSh6CEfa4PH8bRLDDUxvUhhTriQ/photo.jpg?sz=512"
          points={3511}
          pointsToday={78}
          occupation="Fullstack Developer"
        />
      </motion.main>
    </>
  );
}
