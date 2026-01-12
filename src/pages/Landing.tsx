// Lib Imports.
import { Link } from 'react-router';

// Assets.
import {
  IconBrandGithubFilled,
  IconBriefcaseFilled,
  IconCode,
  IconCircleNumber1Filled,
  IconCircleNumber2Filled,
  IconCircleNumber3Filled,
} from '@tabler/icons-react';

// Component Imports.
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { H1, H2, H3, Big, Small, Muted } from '@/components/ui/typography';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import LivePulse from '@/components/ui/live-pulse';
import ArenaCard from '@/components/ui/arena-card';
import BrandLogo from '@/components/ui/brand-logo';

// Static Data.
const arenas = [
  {
    icon: IconBriefcaseFilled,
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
    icon: IconBrandGithubFilled,
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
      <header className="flex h-dvh w-full flex-col items-center gap-12">
        <Navbar />

        <section className="flex max-w-full flex-col gap-16 px-4 pb-4">
          <article className="flex flex-col gap-4">
            <H1>Pulse the Competition</H1>

            <Muted>
              Real-time competitive testing that pushes your limits. Battle the best minds in your
              field and climb the percentile rankings.
            </Muted>

            <div className="space-x-4">
              <Button>
                Creator <IconBriefcaseFilled />
              </Button>
              <Button variant="outline">
                Source <IconBrandGithubFilled />
              </Button>
            </div>
          </article>

          <Card>
            <CardHeader className="flex w-full items-center justify-between">
              <H3>Next Big Battle</H3>

              <LivePulse />
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              <span className="block w-full text-center uppercase">Starting In</span>

              <ul className="flex w-full items-center gap-2">
                <li className="bg-background border-muted flex aspect-square flex-1 flex-col items-center gap-2 rounded-lg border-2 py-2">
                  <Big>00</Big>
                  <Small>Days</Small>
                </li>
                <li className="bg-background border-muted flex aspect-square flex-1 flex-col items-center gap-2 rounded-lg border-2 py-2">
                  <Big>00</Big>
                  <Small>Hours</Small>
                </li>
                <li className="bg-background border-muted flex aspect-square flex-1 flex-col items-center gap-2 rounded-lg border-2 py-2">
                  <Big>00</Big>
                  <Small>Minutes</Small>
                </li>
                <li className="bg-background border-muted flex aspect-square flex-1 flex-col items-center gap-2 rounded-lg border-2 py-2">
                  <Big>00</Big>
                  <Small>Seconds</Small>
                </li>
              </ul>
            </CardContent>

            <CardFooter className="flex flex-col items-start gap-6">
              <div className="flex flex-col gap-2">
                <Small>Computer Science</Small>
                <H3>Price Pool: $10,000</H3>
              </div>

              <span className="muted">2, 856 Registered Competitors</span>
            </CardFooter>
          </Card>
        </section>
      </header>

      <main className="my-24 flex flex-col gap-16 px-4">
        <section className="space-y-8">
          <div className="space-y-2">
            <H2>Active Arenas</H2>

            <Muted>Choose your battlefields and prove your expertise.</Muted>
          </div>

          <ul className="flex w-full flex-col gap-6">
            {arenas.map((arena) => (
              <li key={`arena-${arena.startsAt.toISOString()}`} className="w-full">
                <ArenaCard {...arena} />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <article className="space-y-12">
            <div className="space-y-2">
              <H2>Proof of Knowledge</H2>

              <Muted>
                Our percentile-based ranking system ensures fair competition and accurate skill
                assessment across all domains.
              </Muted>
            </div>

            <ul className="flex flex-col gap-6">
              <li className="flex gap-2">
                <IconCircleNumber1Filled size={48} className="block max-h-fit" />

                <div>
                  <span className="font-semibold">Real-time Assessment</span>

                  <Muted>
                    Dynamic scoring based on speed, accuracy, and complexity of questions answered.
                  </Muted>
                </div>
              </li>

              <li className="flex gap-2">
                <IconCircleNumber2Filled size={48} className="block max-h-fit" />

                <div>
                  <span className="font-semibold">Percentile Rankings</span>

                  <Muted>
                    Compare your performance against thousands of professionals in your field.
                  </Muted>
                </div>
              </li>

              <li className="flex gap-2">
                <IconCircleNumber3Filled size={48} className="block max-h-fit" />

                <div>
                  <span className="font-semibold">Skill Verification</span>

                  <Muted>
                    Earn verified badges and certificates recognized by industry leaders.
                  </Muted>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </main>

      <footer className="border-muted flex flex-col justify-between gap-8 border-t px-4 py-8">
        <section className="border-muted flex flex-col justify-between gap-8 border-b pb-8">
          <article className="space-y-4">
            <BrandLogo />

            <Muted>Real-time competitive testing platform for professionals worldwide.</Muted>
          </article>

          <ul className="flex flex-col gap-2">
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

          <ul className="flex flex-col gap-2">
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

          <ul className="flex flex-col gap-2">
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
