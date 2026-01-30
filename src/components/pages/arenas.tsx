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
    title: 'Clinical Medicine',
    desc: 'Test your diagnostic skills in this high-stakes arena covering advanced pathology and patient care.',
    icon: IconBooks,
    playersJoined: 247,
    startsAt: new Date(Date.now() - 1000 * 60 * 10),
    isLive: true,
    link: '/dashboard/arenas/medicine',
  },
  {
    id: 2,
    title: 'Fullstack JS',
    desc: 'Battle through React hooks and Node.js architecture patterns in this rapid-fire coding challenge.',
    icon: IconCode,
    playersJoined: 189,
    startsAt: new Date(Date.now() - 1000 * 60 * 5),
    isLive: true,
    link: '/dashboard/arenas/javascript',
  },
  {
    id: 3,
    title: 'Modern History',
    desc: 'A deep dive into 20th-century geopolitics. Perfect for those who know their treaties and revolutions.',
    icon: IconHistory,
    playersJoined: 156,
    startsAt: new Date(Date.now() - 1000 * 60 * 25),
    isLive: true,
    link: '/dashboard/arenas/history',
  },
];

const UPCOMING_ARENAS = [
  {
    id: 4,
    title: 'Organic Chemistry',
    desc: 'Master molecular structures and reaction mechanisms. Ideal for pre-med students looking to sharpen their edge.',
    icon: IconFlask,
    playersJoined: 180,
    startsAt: new Date(Date.now() + 1000 * 60 * 15),
    isLive: false,
    link: '/dashboard/arenas/chemistry',
  },
  {
    id: 5,
    title: 'Applied Calculus',
    desc: 'Solve real-world engineering problems using advanced derivatives and integrals under intense time pressure.',
    icon: IconCalculator,
    playersJoined: 150,
    startsAt: new Date(Date.now() + 1000 * 60 * 32),
    isLive: false,
    link: '/dashboard/arenas/mathematics',
  },
];

// Page to browse Arenas to Participate in.
export default function ArenasPage() {
  return (
    <>
      <title>Arenas</title>

      <motion.main
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mx-auto max-w-7xl space-y-12 px-6 pb-8 lg:pb-16 xl:px-0"
      >
        <motion.section variants={itemVariants} className="space-y-1">
          <H2>Active Arenas</H2>
          <Muted>Join live battles and compete with players worldwide</Muted>
        </motion.section>

        <section className="space-y-6">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
              <P className="font-semibold">Live Now</P>
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

        <section className="space-y-6">
          <motion.div variants={itemVariants}>
            <P className="font-semibold">Upcoming Arenas</P>
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
    </>
  );
}
