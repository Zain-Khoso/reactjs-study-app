// Lib Imports.
import { motion } from 'motion/react';

// Asset Imports
import { IconBooks, IconCode, IconHistory, IconFlask, IconCalculator } from '@tabler/icons-react';

// Util Imports.
import { containerVariants, itemVariants } from '@/lib/motions';

// Component Imports.
import { H2, P, Muted } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import ArenaCard from '@/components/ui/arena-card';

// Data.
const LIVE_ARENAS = [
  {
    id: 1,
    title: 'Medicine',
    desc: 'Advanced Level',
    icon: IconBooks,
    playersJoined: 247,
    startsAt: new Date(Date.now() - 1000 * 60 * 10), // 10 mins ago
    isLive: true,
    link: '/arenas/medicine',
  },
  {
    id: 2,
    title: 'JavaScript',
    desc: 'Intermediate Level',
    icon: IconCode,
    playersJoined: 189,
    startsAt: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
    isLive: true,
    link: '/arenas/javascript',
  },
  {
    id: 3,
    title: 'History',
    desc: 'Expert Level',
    icon: IconHistory,
    playersJoined: 156,
    startsAt: new Date(Date.now() - 1000 * 60 * 25), // 25 mins ago
    isLive: true,
    link: '/arenas/history',
  },
];
const UPCOMING_ARENAS = [
  {
    id: 4,
    title: 'Chemistry',
    desc: 'Starts in 15 minutes',
    icon: IconFlask,
    playersJoined: 180,
    startsAt: new Date(Date.now() + 1000 * 60 * 15),
    isLive: false,
    link: '/arenas/chemistry',
  },
  {
    id: 5,
    title: 'Mathematics',
    desc: 'Starts in 32 minutes',
    icon: IconCalculator,
    playersJoined: 150,
    startsAt: new Date(Date.now() + 1000 * 60 * 32),
    isLive: false,
    link: '/arenas/mathematics',
  },
];

// Page to browse Arenas to Participate in.
export default function ArenasPage() {
  return (
    <motion.main
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mx-auto max-w-7xl space-y-12 px-6 py-8 pb-32"
    >
      {/* Header Section */}
      <motion.section variants={itemVariants} className="space-y-1">
        <H2>Active Arenas</H2>
        <Muted>Join live battles and compete with players worldwide</Muted>
      </motion.section>

      {/* Live Now Section */}
      <section className="space-y-6">
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            <P className="font-bold tracking-tight uppercase">Live Now</P>
          </div>
          <Badge variant="secondary" className="text-muted-foreground font-medium">
            {LIVE_ARENAS.length} Active Battles
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LIVE_ARENAS.map((arena) => (
            <motion.div key={arena.id} variants={itemVariants}>
              <ArenaCard {...arena} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="space-y-6">
        <motion.div variants={itemVariants}>
          <P className="font-bold tracking-tight uppercase">Upcoming Arenas</P>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {UPCOMING_ARENAS.map((arena) => (
            <motion.div key={arena.id} variants={itemVariants}>
              <ArenaCard {...arena} />
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}
