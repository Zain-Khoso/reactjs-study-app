// Lib Imports.
import { Link } from 'react-router';
import { motion } from 'motion/react';

// Asset Imports.
import {
  IconArrowBigRightLinesFilled,
  IconBadgesFilled,
  IconSquareLetterEFilled,
  IconEngineFilled,
  IconGlobeFilled,
  IconCircleNumber1Filled,
  IconCircleNumber2Filled,
  IconCircleNumber3Filled,
} from '@tabler/icons-react';

// Util Imports.
import { pageMotions } from '@/lib/motions';
import { useAuthRequired } from '@/lib/hooks';

// Component Imports.
import { H1, H2, Big, Muted, Small } from '@/components/ui/typography';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import ArenaCard from '@/components/ui/arena-card';
import ArcaneCard from '@/components/arcane-card';
import { Button } from '@/components/ui/button';
import Footer from '../footer';

// Static Data.
const arenas = [
  {
    link: '/arena/1',
    icon: IconSquareLetterEFilled,
    isLive: true,
    title: 'English',
    desc: 'Master syntax, vocabulary, and comprehension. Precision is everything when a single comma determines your global rank.',
    playersJoined: 3728,
    startsAt: new Date(Date.now() - 1000 * 60 * 60 * 0.5),
  },
  {
    link: '/arena/2',
    icon: IconEngineFilled,
    isLive: false,
    title: 'Physics',
    desc: 'From mechanics to quantum theory. Apply complex formulas at lightning speed to dominate the high-velocity physics leaderboard.',
    playersJoined: 235,
    startsAt: new Date(Date.now() + 1000 * 60 * 60 * 5),
  },
  {
    link: '/arena/3',
    icon: IconGlobeFilled,
    isLive: true,
    title: 'World Current Affairs',
    desc: 'The ultimate global awareness test. Track geopolitics and breaking news to prove you are the best-informed mind online.',
    playersJoined: 83,
    startsAt: new Date(Date.now() - 1000 * 60 * 60 * 0.25),
  },
];

// Page.
export default function Landing() {
  useAuthRequired(null);

  return (
    <>
      <title>The Ultimate Real-Time Testing Arena</title>

      <motion.div variants={pageMotions} initial="initial" animate="animate" exit="exit">
        <header className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-4 pb-4 md:flex-row md:justify-between md:py-12 lg:gap-36">
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-1 flex-col gap-6 lg:gap-8"
          >
            <H1>The Gold Standard of Knowledge.</H1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Muted>
                Static quizzes are dead. Preplus brings live, e-sports intensity to educational
                content. Faster questions, deeper analytics, and total leaderboard dominance.
              </Muted>
            </motion.div>

            <motion.div
              className="flex w-full gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button className="flex-1" asChild>
                <Link to="/login" className="group">
                  Get Started
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  >
                    <IconArrowBigRightLinesFilled className="ml-2" />
                  </motion.span>
                </Link>
              </Button>

              <Button variant="outline" className="flex-1" asChild>
                <Link to="/leaderboards">
                  Leaderboard <IconBadgesFilled className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
            className="w-full md:flex-1"
          >
            <ArcaneCard
              category={'computer-science'}
              competitors={3782}
              prizePool={1000}
              startsAt={new Date(Date.now() + 1000 * 8)}
            />
          </motion.div>
        </header>

        <main className="mx-auto my-24 flex max-w-7xl flex-col gap-24 px-4 md:my-32 md:gap-48">
          <section id="arenas" className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-2 md:text-center"
            >
              <H2 className="md:text-center">Trending Arenas</H2>
              <Muted className="md:text-center">
                The most crowded lobbies on Preplus right now. Join thousands of players in our
                highest-concurrency battles and test your skills under pressure.
              </Muted>
            </motion.div>

            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] place-items-center gap-6">
              {arenas.map((arena, index) => (
                <motion.li
                  key={`arena-${arena.startsAt.toISOString()}`}
                  className="h-full w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, transition: { delay: 0 } }}
                >
                  <ArenaCard {...arena} />
                </motion.li>
              ))}
            </ul>
          </section>

          <section id="assessment" className="block items-center gap-8 md:flex lg:gap-16">
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="flex-1 space-y-12"
            >
              <div className="space-y-2">
                <H2>The Preplus Edge</H2>
                <Muted>
                  Our proprietary scoring engine analyzes more than just your answers. We measure
                  the three pillars of elite performance to determine your global rank.
                </Muted>
              </div>

              <ul className="flex flex-col gap-6">
                {[
                  {
                    icon: <IconCircleNumber1Filled />,
                    title: 'Speed is the ultimate tiebreaker',
                    text: 'Points decay every second, rewarding those who can process complex information and react faster than the rest of the field.',
                  },
                  {
                    icon: <IconCircleNumber2Filled />,
                    title: 'Consistency is rewarded',
                    text: "Maintaining a 'Perfect Streak' applies a score multiplier, separating casual players from those who have truly mastered the subject matter.",
                  },
                  {
                    icon: <IconCircleNumber3Filled />,
                    title: 'Not all questions are equal',
                    text: 'Harder questions—identified by real-time global fail rates—yield higher point rewards, ensuring your rank reflects true intellectual depth.',
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * i }}
                    className="flex gap-2"
                  >
                    <div className="text-primary block max-h-8 min-h-8 max-w-8 min-w-8">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-bold">{item.title}</span>
                      <Muted>{item.text}</Muted>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.article>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="hidden max-h-fit flex-1 flex-col md:flex"
            >
              <Card className="from-card to-background border-primary/10 bg-linear-to-b">
                <CardHeader>
                  <Big>Ranked Individuals</Big>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  {[
                    { name: 'Dr. Sarah Chen', initial: 'Dr', percent: '99.7%', sub: 'Biology' },
                    { name: 'Alex Rodriguez', initial: 'A', percent: '98.9%', sub: 'Maths' },
                    { name: 'Maria Santos', initial: 'M', percent: '99.7%', sub: 'Chemistry' },
                  ].map((user, i) => (
                    <motion.article
                      key={user.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5 + i * 0.2 } }}
                      whileHover={{ x: 5, borderColor: 'var(--primary)' }}
                      transition={{ duration: 0.5 }}
                      className="bg-background border-muted rounded-xl border-2"
                    >
                      <Link to={'/user/' + i} className="flex w-full items-center gap-2 p-4">
                        <Avatar>
                          <AvatarFallback>{user.initial}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.name}</span>
                        <div className="ml-auto text-right">
                          <span className="text-primary block font-bold">{user.percent}</span>
                          <Small className="text-muted-foreground block">{user.sub}</Small>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </section>
        </main>
      </motion.div>

      <Footer />
    </>
  );
}
