// Lib Imports.
import { Link } from 'react-router';

// Assets.
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

// Component Imports.
import Navbar from '@/components/navbar';
import BrandLogo from '@/components/ui/brand-logo';
import ArenaCard from '@/components/ui/arena-card';
import LivePulse from '@/components/ui/live-pulse';
import { H1, H2, H3, Big, Muted, Small } from '@/components/ui/typography';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Static Data.
const arenas = [
  {
    icon: IconSquareLetterEFilled,
    isLive: true,
    title: 'English',
    desc: 'Master syntax, vocabulary, and comprehension. Precision is everything when a single comma determines your global rank.',
    playersJoined: 3728,
    startsAt: new Date(Date.now() - 1000 * 60 * 60 * 0.5),
  },
  {
    icon: IconEngineFilled,
    isLive: false,
    title: 'Physics',
    desc: 'From mechanics to quantum theory. Apply complex formulas at lightning speed to dominate the high-velocity physics leaderboard.',
    playersJoined: 235,
    startsAt: new Date(Date.now() + 1000 * 60 * 60 * 5),
  },
  {
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
  return (
    <>
      <header className="mx-auto flex h-fit w-full max-w-7xl flex-col items-center gap-12">
        <Navbar />

        <section className="flex w-full flex-col items-center gap-16 px-4 pb-4 md:flex-row md:justify-between md:py-12 lg:gap-36">
          <article className="flex flex-1 flex-col gap-6 lg:gap-8">
            <H1>The Gold Standard of Knowledge.</H1>

            <Muted>
              Static quizzes are dead. Preplus brings live, e-sports intensity to educational
              content. Faster questions, deeper analytics, and total leaderboard dominance.
            </Muted>

            <div className="flex w-full gap-4">
              <Button className="flex-1" asChild>
                <Link to="/signin">
                  Get Started <IconArrowBigRightLinesFilled />
                </Link>
              </Button>

              <Button variant="outline" className="flex-1" asChild>
                <Link to="/leaderboard">
                  Learderboard <IconBadgesFilled />
                </Link>
              </Button>
            </div>
          </article>

          <Card className="w-full md:flex-1">
            <CardHeader className="flex w-full items-center justify-between">
              <H3>Monthly Arcane</H3>

              <LivePulse />
            </CardHeader>

            <CardContent className="space-y-1 lg:space-y-4">
              <Muted className="text-center uppercase">Starts In</Muted>

              <ul className="flex w-full items-center gap-2">
                <li className="bg-background border-muted flex max-h-fit flex-1 flex-col items-center rounded-lg border-2 py-2">
                  <Big>03</Big>
                  <Muted className="uppercase">Days</Muted>
                </li>
                <li className="bg-background border-muted flex max-h-fit flex-1 flex-col items-center rounded-lg border-2 py-2">
                  <Big>08</Big>
                  <Muted className="uppercase">Hrs</Muted>
                </li>
                <li className="bg-background border-muted flex max-h-fit flex-1 flex-col items-center rounded-lg border-2 py-2">
                  <Big>20</Big>
                  <Muted className="uppercase">Min</Muted>
                </li>
                <li className="bg-background border-muted flex max-h-fit flex-1 flex-col items-center rounded-lg border-2 py-2">
                  <Big>01</Big>
                  <Muted className="uppercase">Sec</Muted>
                </li>
              </ul>
            </CardContent>

            <CardFooter className="flex-col items-start gap-2">
              <div>
                <Muted>Computer Science</Muted>
                <Big>Price Pool: {Number(1000).toLocaleString()}</Big>
              </div>

              <Muted>{Number(347823).toLocaleString()} Registered Competitors</Muted>
            </CardFooter>
          </Card>
        </section>
      </header>

      <main className="mx-auto my-24 flex max-w-7xl flex-col gap-24 px-4 md:my-32 md:gap-48">
        <section id="arenas" className="space-y-12">
          <div className="space-y-2 md:text-center">
            <H2 className="md:text-center">Trending Arenas</H2>

            <Muted className="md:text-center">
              The most crowded lobbies on Preplus right now. Join thousands of players in our
              highest-concurrency battles and test your skills under pressure.
            </Muted>
          </div>

          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] place-items-center gap-6">
            {arenas.map((arena) => (
              <li key={`arena-${arena.startsAt.toISOString()}`} className="h-full w-full">
                <ArenaCard {...arena} />
              </li>
            ))}
          </ul>
        </section>

        <section id="assessment" className="block items-center gap-8 md:flex lg:gap-16">
          <article className="flex-1 space-y-12">
            <div className="space-y-2">
              <H2>The Preplus Edge</H2>

              <Muted>
                Our proprietary scoring engine analyzes more than just your answers. We measure the
                three pillars of elite performance to determine your global rank.
              </Muted>
            </div>

            <ul className="flex flex-col gap-6">
              <li className="flex gap-2">
                <IconCircleNumber1Filled className="fill-muted-foreground block max-h-8 min-h-8 max-w-8 min-w-8" />

                <div>
                  <span>Speed is the ultimate tiebreaker</span>

                  <Muted>
                    Points decay every second, rewarding those who can process complex information
                    and react faster than the rest of the field.
                  </Muted>
                </div>
              </li>

              <li className="flex gap-2">
                <IconCircleNumber2Filled className="fill-muted-foreground block max-h-8 min-h-8 max-w-8 min-w-8" />

                <div>
                  <span>Consistency is rewarded</span>

                  <Muted>
                    Maintaining a "Perfect Streak" applies a score multiplier, separating casual
                    players from those who have truly mastered the subject matter.
                  </Muted>
                </div>
              </li>

              <li className="flex gap-2">
                <IconCircleNumber3Filled className="fill-muted-foreground block max-h-8 min-h-8 max-w-8 min-w-8" />

                <div>
                  <span>Not all questions are equal</span>

                  <Muted>
                    Harder questions—identified by real-time global fail rates—yield higher point
                    rewards, ensuring your rank reflects true intellectual depth.
                  </Muted>
                </div>
              </li>
            </ul>
          </article>

          <Card className="hidden max-h-fit flex-1 flex-col gap-6 md:flex">
            <CardHeader>
              <Big>Ranked Indivisuals</Big>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              <article className="bg-background border-muted flex items-center gap-2 rounded-xl border-2 p-4">
                <Avatar>
                  <AvatarFallback>Dr</AvatarFallback>
                </Avatar>

                <span>Dr. Sarah Chen</span>

                <div className="ml-auto">
                  <span className="block text-end">99.7%</span>
                  <Small className="text-muted-foreground block">Biology</Small>
                </div>
              </article>

              <article className="bg-background border-muted flex items-center gap-2 rounded-xl border-2 p-4">
                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>

                <span>Alex Rodriguez</span>

                <div className="ml-auto">
                  <span className="block text-end">98.9%</span>
                  <Small className="text-muted-foreground block">Maths</Small>
                </div>
              </article>

              <article className="bg-background border-muted flex items-center gap-2 rounded-xl border-2 p-4">
                <Avatar>
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>

                <span>Maria Santos</span>

                <div className="ml-auto">
                  <span className="block text-end">99.7%</span>
                  <Small className="text-muted-foreground block">Chemistry</Small>
                </div>
              </article>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-muted mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t px-4 py-8">
        <section className="border-muted flex flex-col justify-between gap-8 border-b pb-8 md:flex-row md:flex-wrap md:landscape:gap-16">
          <article className="flex-[1.8] space-y-4">
            <BrandLogo />

            <Muted>Real-time competitive testing platform for professionals worldwide.</Muted>
          </article>

          <ul className="flex flex-1 flex-col gap-2">
            <li>Platform</li>
            <li>
              <Muted>
                <Link to="/arenas">Live Arenas</Link>
              </Muted>
            </li>
            <li>
              <Muted>
                <Link to="/leaderboards">Leaderboards</Link>
              </Muted>
            </li>
          </ul>

          <ul className="flex flex-1 flex-col gap-2">
            <li>Support</li>
            <li>
              <Muted>
                <Link to="mailto:zain.khoso.dev@gmail.com" target="_blank">
                  Contact Me
                </Link>
              </Muted>
            </li>
            <li>
              <Muted>
                <Link to="https://github.com/Zain-Khoso/reactjs-study-app/wiki" target="_blank">
                  Community
                </Link>
              </Muted>
            </li>
          </ul>

          <ul className="flex flex-1 flex-col gap-2">
            <li>Legal</li>
            <li>
              <Muted>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </Muted>
            </li>
            <li>
              <Muted>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </Muted>
            </li>
          </ul>

          <ul className="flex flex-1 flex-col gap-2">
            <li>Creator</li>
            <li>
              <Muted>
                <Link to="https://linkedin.com/zain-khoso" target="_blank">
                  Linkedin
                </Link>
              </Muted>
            </li>
            <li>
              <Muted>
                <Link to="https://github.com/zain-khoso" target="_blank">
                  Github
                </Link>
              </Muted>
            </li>
            <li>
              <Muted>
                <Link to="https://fiverr.com/zainkhosodev" target="_blank">
                  Fiverr
                </Link>
              </Muted>
            </li>
          </ul>
        </section>

        <Muted className="text-center">
          &copy; {new Date().getFullYear()} Preplus. All rights reserved.
        </Muted>
      </footer>
    </>
  );
}
