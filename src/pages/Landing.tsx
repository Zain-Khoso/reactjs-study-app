// Assets.
import { IconBrandGithubFilled, IconBriefcaseFilled } from '@tabler/icons-react';

// Component Imports.
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Big, H1, H2, H3, P, Small } from '@/components/ui/typography';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import LivePulse from '@/components/ui/live-pulse';

// Page.
export default function Landing() {
  return (
    <>
      <header className="flex h-auto min-h-dvh w-dvw flex-col items-center gap-12">
        <Navbar />

        <section className="flex w-full flex-col gap-16 px-4">
          <article className="flex flex-col gap-4">
            <H1>Pulse the Competition</H1>

            <P className="text-foreground/80">
              Real-time competitive testing that pushes your limits. Battle the best minds in your
              field and climb the percentile rankings.
            </P>

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
    </>
  );
}
