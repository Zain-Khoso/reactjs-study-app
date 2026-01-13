// Lib Imports.
import { Link } from 'react-router';

// Assets.
import {
  IconArrowBigRightLinesFilled,
  IconBadgesFilled,
  IconCode,
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
    icon: IconArrowBigRightLinesFilled,
    isLive: true,
    title: 'Algorithm Showdown',
    desc: 'Test your algorithmic skills against top competitors.',
    playersJoined: 1247,
    startsAt: new Date('2024-07-15T14:00:00'),
  },
  {
    icon: IconCode,
    isLive: false,
    title: 'Web Dev Wars',
    desc: 'Compete in real-time web development challenges.',
    playersJoined: 856,
    startsAt: new Date('2024-07-15T16:00:00'),
  },
  {
    icon: IconBadgesFilled,
    isLive: true,
    title: 'Data Science Duel',
    desc: 'Showcase your data science expertise in competitive scenarios.',
    playersJoined: 932,
    startsAt: new Date('2024-07-15T18:00:00'),
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

      <main className="mx-auto my-28 flex max-w-7xl flex-col gap-16 px-4 md:gap-24">
        <section className="space-y-8">
          <div className="space-y-2 md:text-center">
            <H2 className="md:text-center">Active Arenas</H2>

            <Muted className="md:text-center">
              Choose your battlefields and prove your expertise.
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

        <section className="block items-center gap-8 md:flex lg:gap-16">
          <article className="flex-1 space-y-12">
            <div className="space-y-2">
              <H2>Proof of Knowledge</H2>

              <Muted>
                Our percentile-based ranking system ensures fair competition and accurate skill
                assessment across all domains.
              </Muted>
            </div>

            <ul className="flex flex-col gap-6">
              <li className="flex gap-2">
                <IconCircleNumber1Filled
                  size={48}
                  className="fill-muted-foreground block max-h-fit"
                />

                <div>
                  <span>Real-time Assessment</span>

                  <Muted>
                    Dynamic scoring based on speed, accuracy, and complexity of questions answered.
                  </Muted>
                </div>
              </li>

              <li className="flex gap-2">
                <IconCircleNumber2Filled
                  size={48}
                  className="fill-muted-foreground block max-h-fit"
                />

                <div>
                  <span>Percentile Rankings</span>

                  <Muted>
                    Compare your performance against thousands of professionals in your field.
                  </Muted>
                </div>
              </li>

              <li className="flex gap-2">
                <IconCircleNumber3Filled
                  size={48}
                  className="fill-muted-foreground block max-h-fit"
                />

                <div>
                  <span>Skill Verification</span>

                  <Muted>
                    Earn verified badges and certificates recognized by industry leaders.
                  </Muted>
                </div>
              </li>
            </ul>
          </article>

          <Card className="hidden max-h-fit flex-1 flex-col gap-6 md:flex">
            <CardHeader>
              <Big>Current Ranking</Big>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              <article className="bg-background border-muted flex items-center gap-2 rounded-xl border-2 p-4">
                <Muted>1st</Muted>

                <Avatar>
                  <AvatarFallback>Dr</AvatarFallback>
                </Avatar>

                <span>Dr. Sarah Chen</span>

                <div className="ml-auto">
                  <span className="block text-end">99.7%</span>
                  <Small className="text-muted-foreground block">Medicine</Small>
                </div>
              </article>

              <article className="bg-background border-muted flex items-center gap-2 rounded-xl border-2 p-4">
                <Muted>2nd</Muted>

                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>

                <span>Alex Rodriguez</span>

                <div className="ml-auto">
                  <span className="block text-end">98.9%</span>
                  <Small className="text-muted-foreground block">Technology</Small>
                </div>
              </article>

              <article className="bg-background border-muted flex items-center gap-2 rounded-xl border-2 p-4">
                <Muted>3rd</Muted>

                <Avatar>
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>

                <span>Maria Santos</span>

                <div className="ml-auto">
                  <span className="block text-end">99.7%</span>
                  <Small className="text-muted-foreground block">Medicine</Small>
                </div>
              </article>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-muted mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t px-4 py-8">
        <section className="border-muted flex flex-col justify-between gap-8 border-b pb-8 md:flex-row md:flex-wrap">
          <article className="flex-2 space-y-4">
            <BrandLogo />

            <Muted>Real-time competitive testing platform for professionals worldwide.</Muted>
          </article>

          <ul className="flex flex-1 flex-col gap-2">
            <li>
              <span>Platform</span>
            </li>
            <li>
              <Muted>
                <Link to="/arenas">Live Arenas</Link>
              </Muted>
            </li>
            <li>
              <Muted>
                <Link to="/ranking">Ranking</Link>
              </Muted>
            </li>
            <li>
              <Muted>
                <Link to="/leaderboard">Leaderboard</Link>
              </Muted>
            </li>
          </ul>

          <ul className="flex flex-1 flex-col gap-2">
            <li>
              <span>Support</span>
            </li>
            <li>
              <Muted>
                <Link to="/help">Help Center</Link>
              </Muted>
            </li>
            <li>
              <Muted>
                <Link to="/contact">Contact Us</Link>
              </Muted>
            </li>
            <li>
              <Muted>
                <Link to="/community">Community</Link>
              </Muted>
            </li>
          </ul>

          <ul className="flex flex-1 flex-col gap-2">
            <li>
              <span>Legal</span>
            </li>
            <li>
              <Muted>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </Muted>
            </li>
            <li>
              <Muted>
                <Link to="/terms-of-service">Terms of Service</Link>
              </Muted>
            </li>
            <li>
              <Muted>
                <Link to="/cookie-policy">Cookie Policy</Link>
              </Muted>
            </li>
          </ul>
        </section>

        <Muted className="text-center">
          &copy; {new Date().getFullYear()} PrepPulse. All rights reserved.
        </Muted>
      </footer>
    </>
  );
}
