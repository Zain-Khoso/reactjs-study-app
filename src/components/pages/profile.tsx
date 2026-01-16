// Lib Imports.
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';
import { motion } from 'motion/react';

// Assets.
import {
  IconStarFilled,
  IconCurrentLocationFilled,
  IconHistory,
  IconDeviceDesktopFilled,
  IconNumber123,
  IconHistoryToggle,
  IconEngineFilled,
} from '@tabler/icons-react';

// Util Imports.
import { generalPageMotions } from '@/lib/motions';

// Hook Imports.
import { useDocTitle } from '@/hooks/useDocTitle';

// Component Imports.
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Big, H2, Muted, P, Small } from '../ui/typography';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '../ui/chart';
import { Button } from '../ui/button';

// Data.
const chartData = [
  { subject: 'Computer', points: 316 },
  { subject: 'History', points: 280 },
  { subject: 'Physics', points: 190 },
];
const chartConfig: ChartConfig = {
  points: {
    label: 'Points',
    color: 'var(--chart-1)',
  },
};

// User/Profile Page.
export default function UserPage() {
  useDocTitle('User Profile');

  return (
    <motion.main
      variants={generalPageMotions}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mx-auto max-w-7xl space-y-8 px-4 pb-8 xl:px-0"
    >
      <Card>
        <CardContent className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src="https://lh3.googleusercontent.com/-vMM9R2UlBpM/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQSh6CEfa4PH8bRLDDUxvUhhTriQ/photo.jpg?sz=512"
              alt="Zain Khoso"
            />
            <AvatarFallback className="text-2xl">ZK</AvatarFallback>
          </Avatar>

          <section className="flex-1 space-y-2 text-center md:text-left">
            <div className="space-y-2">
              <Big>Zain Khoso</Big>

              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Badge variant="secondary" className="gap-1 font-medium">
                  <IconStarFilled className="text-primary" />
                  Level 26
                </Badge>

                <P className="text-muted-foreground">Member since Jan 2026</P>
              </div>
            </div>

            <P className="text-muted-foreground text-center font-medium md:text-left">
              Full Stack Developer
            </P>
          </section>

          <section className="space-y-2 text-center md:text-right">
            <H2>6,840</H2>

            <Muted className="text-center md:text-right">Total Points</Muted>
            <span className="text-primary font-semibold">+1,648 this week</span>
          </section>
        </CardContent>
      </Card>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <article className="space-y-8 lg:col-span-2">
          <Card className="min-h-100">
            <CardHeader className="flex items-center gap-2">
              <IconCurrentLocationFilled size={24} className="text-primary h-5 w-5" />

              <CardTitle>Topic Mastery</CardTitle>
            </CardHeader>

            <CardContent className="flex min-h-75 items-center justify-center">
              <ChartContainer config={chartConfig} className="aspect-square h-full max-h-62 w-full">
                <RadarChart data={chartData}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <PolarGrid className="fill-primary opacity-10" gridType="circle" />
                  <PolarAngleAxis dataKey="subject" />
                  <Radar dataKey="points" fill="var(--color-primary)" fillOpacity={0.6} />
                </RadarChart>
              </ChartContainer>
            </CardContent>

            <CardFooter className="flex-col gap-2 text-sm">
              <P>Computer · History · Physics</P>
              <Muted>Your stats since January 2026</Muted>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <IconHistory size={24} className="text-primary" />
                <CardTitle>Battle History</CardTitle>
              </div>

              <Button
                variant="link"
                className="text-muted-foreground p-0 text-xs font-semibold hover:underline"
              >
                View All
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              {[
                {
                  subject: 'Computer Science',
                  players: 123,
                  date: new Date('Jan 10, 2026'),
                  rank: 1,
                  points: 1450,
                  icon: IconDeviceDesktopFilled,
                },
                {
                  subject: 'Mathematics',
                  players: 18,
                  date: new Date('Jan 9, 2026'),
                  rank: 3,
                  points: 280,
                  icon: IconNumber123,
                },
                {
                  subject: 'History',
                  players: 8,
                  date: new Date('Jan 8, 2026'),
                  rank: 2,
                  points: 190,
                  icon: IconHistoryToggle,
                },
                {
                  subject: 'Physics',
                  players: 27,
                  date: new Date('Jan 7, 2026'),
                  rank: 8,
                  points: 285,
                  icon: IconEngineFilled,
                },
              ].map((battle, i) => (
                <Card
                  key={`battle-${i}`}
                  className="bg-muted/30 hover:bg-muted/50 overflow-hidden transition-colors"
                >
                  <CardContent className="flex items-center gap-4 px-4">
                    <div className="bg-background/20 rounded-lg border p-2 shadow-sm">
                      <battle.icon className="text-muted-foreground h-5 w-5" />
                    </div>

                    <div>
                      <P className="text-left leading-4">{battle.subject}</P>
                      <Small className="text-muted-foreground">
                        vs {battle.players} players •{' '}
                        {battle.date.toLocaleDateString('pk', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </Small>
                    </div>
                  </CardContent>

                  <CardFooter className="flex w-full items-center justify-between gap-2 p-4">
                    <Muted className="text-right leading-4">Ranked #{battle.rank}</Muted>
                    <Small className="text-primary block text-right">+{battle.points}</Small>
                  </CardFooter>
                </Card>
              ))}
            </CardContent>
          </Card>
        </article>

        <article className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-muted-foreground uppercase">Global Percentile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  label: 'Computer Science',
                  top: 5,
                  value: 98,
                  current: '2,150 / 2,200 to next rank',
                },
                { label: 'History', top: 20, value: 78, current: '1,840 / 2,000 to next rank' },
                {
                  label: 'Physics',
                  top: 50,
                  value: 48,
                  current: '1,275 / 1,500 to next rank',
                },
              ].map((stat, i) => (
                <div key={`stat-${i}`} className="space-y-2">
                  <div className="flex justify-between">
                    <Muted>{stat.label}</Muted>
                    <Muted className="font-semibold">Top {stat.top}%</Muted>
                  </div>

                  <Progress value={stat.value} className="h-2" />

                  <Small className="text-muted-foreground">{stat.current}</Small>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-muted-foreground uppercase">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: 'Total Battles', val: '3,829' },
                { label: 'Win Rate', val: '69%' },
                { label: 'Avg Rank', val: '#7.2' },
                { label: 'Streak', val: '17 days' },
              ].map((s, i) => (
                <div
                  key={`${i}-quickstats`}
                  className="border-border/50 flex items-center justify-between border-b pb-2"
                >
                  <Muted>{s.label}</Muted>
                  <Muted className="font-bold">{s.val}</Muted>
                </div>
              ))}
            </CardContent>
          </Card>
        </article>
      </section>
    </motion.main>
  );
}
