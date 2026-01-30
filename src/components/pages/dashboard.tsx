// Lib Imports.
import { motion } from 'motion/react';

// Asset Imports.
import { IconAtom, IconCalculator, IconFlask } from '@tabler/icons-react';

// Util Imports.
import { containerVariants } from '@/lib/motions';
import { useAuthRequired } from '@/lib/hooks';

// Component Imports.
import {
  UserInfoCard,
  StatsChart,
  BattleHistory,
  LevelProgrssion,
  QuickStats,
  AccountSettings,
} from '../profile';

// Data.
const chartData = [
  { label: 'Computer Science', points: 316 },
  { label: 'History', points: 280 },
  { label: 'Physics', points: 190 },
];
const user = {
  image:
    'https://lh3.googleusercontent.com/-vMM9R2UlBpM/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQSh6CEfa4PH8bRLDDUxvUhhTriQ/photo.jpg?sz=512',
  name: 'Zain Khoso',
  level: 14,
  memberSince: new Date('2 Jan, 2026'),
  headline: 'Full stack Developer',
  points: 3471,
  pointsThisWeek: 1281,
};
const battles = [
  {
    subject: 'Quantum Physics',
    players: 42,
    date: new Date('Jan 15, 2026'),
    rank: 4,
    points: 850,
    icon: IconAtom,
  },
  {
    subject: 'Advanced Calculus',
    players: 12,
    date: new Date('Jan 14, 2026'),
    rank: 1,
    points: 1200,
    icon: IconCalculator,
  },
  {
    subject: 'Organic Chemistry',
    players: 64,
    date: new Date('Jan 13, 2026'),
    rank: 12,
    points: 450,
    icon: IconFlask,
  },
];
const levels = [
  {
    label: 'Mathematics',
    top: 2,
    value: 92,
    current: '4,850 / 5,000 to Grandmaster',
  },
  {
    label: 'Organic Chemistry',
    top: 15,
    value: 65,
    current: '1,200 / 2,000 to Diamond III',
  },
  {
    label: 'Art & Design',
    top: 32,
    value: 45,
    current: '900 / 1,500 to Gold I',
  },
];
const stats = [
  { label: 'Global Rank', val: '#1,024' },
  { label: 'Total Battles', val: '4,218' },
  { label: 'Win Rate', val: '74.2%' },
  { label: 'Avg Rank', val: '#4.1' },
  { label: 'Current Streak', val: '12 days' },
  { label: 'Total XP', val: '124.5k' },
];

// User/Profile Page.
export default function UserPage() {
  useAuthRequired(true);

  return (
    <>
      <title>User Profile</title>

      <motion.main
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mx-auto max-w-7xl space-y-8 px-4 pb-8 xl:px-0"
      >
        <UserInfoCard {...user} />

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <article className="space-y-8 lg:col-span-2">
            <StatsChart data={chartData} user={user} />

            <BattleHistory battles={battles} />
          </article>

          <article className="space-y-8">
            <LevelProgrssion stats={levels} />

            <QuickStats stats={stats} />

            <AccountSettings />
          </article>
        </section>
      </motion.main>
    </>
  );
}
