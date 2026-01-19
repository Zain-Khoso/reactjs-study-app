// Lib Imports.
import { Link } from 'react-router';

// Asset Imports.
import { IconTrophy, IconTarget, IconClock, IconShare } from '@tabler/icons-react';

// Component Imports.
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { H1, H2, Muted, Big, Small, H3 } from '@/components/ui/typography';
import { Badge } from '../ui/badge';

// Arena Results Page.
export default function ArenaResultsPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center space-y-8 px-4 pb-8 lg:px-0">
      <section className="space-y-2 text-center">
        <H1 className="font-semibold">Victory!</H1>
        <Muted>PrepPulse Knowledge Battle Complete</Muted>
      </section>

      <section className="flex w-full items-end justify-center gap-4 sm:gap-8">
        <article className="flex flex-col items-center gap-3">
          <div className="relative">
            <Avatar className="border-muted h-16 w-16 border-2">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>

            <Badge variant="secondary" className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              2nd
            </Badge>
          </div>

          <div className="bg-muted/30 border-border flex h-24 w-24 items-center justify-center rounded-t-lg border p-4 text-center">
            <Small>Sarah M.</Small>
          </div>
        </article>

        <article className="flex flex-col items-center gap-3">
          <div className="relative">
            <Avatar className="border-primary ring-primary/20 h-20 w-20 border-4 ring-4">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
              <AvatarFallback>YOU</AvatarFallback>
            </Avatar>

            <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2">1st</Badge>
          </div>

          <div className="bg-primary/10 border-primary flex h-40 w-32 items-center justify-center rounded-t-xl border-x-2 border-t-2 p-4 text-center shadow-[0_-20px_50px_-12px_rgba(var(--primary),0.2)]">
            <Big className="font-semibold">You!</Big>
          </div>
        </article>

        <article className="flex flex-col items-center gap-3">
          <div className="relative">
            <Avatar className="border-muted h-14 w-14 border-2">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>

            <Badge variant="secondary" className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              3rd
            </Badge>
          </div>

          <div className="bg-muted/20 border-border flex h-16 w-20 items-center justify-center rounded-t-lg border p-4 text-center">
            <Small>Mike K.</Small>
          </div>
        </article>
      </section>

      <Card className="w-full max-w-3xl">
        <CardContent className="space-y-6">
          <H3 className="text-center font-semibold">Your Performance</H3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="bg-background mx-auto w-fit rounded-xl p-3">
                  <IconTrophy className="text-primary" size={28} />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <H2 className="text-center font-semibold">1st</H2>

                <Muted className="mt-1 text-center font-semibold uppercase">Final Rank</Muted>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-background mx-auto w-fit rounded-xl p-3">
                  <IconTarget className="text-primary" size={28} />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <H2 className="text-center font-semibold">94%</H2>

                <Muted className="mt-1 text-center font-semibold uppercase">Accuracy</Muted>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-background mx-auto w-fit rounded-xl p-3">
                  <IconClock className="text-primary" size={28} />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <H2 className="text-center font-semibold">2.3s</H2>

                <Muted className="mt-1 text-center font-semibold uppercase">Avg Speed</Muted>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
        <Button>
          <IconShare size={20} />
          Share Proof of Knowledge
        </Button>

        <Button variant="outline">
          <Link to="/arena">Play Again</Link>
        </Button>
      </div>
    </main>
  );
}
