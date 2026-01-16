// Assets.
import {
  IconTrophyFilled,
  IconBoltFilled,
  IconStarFilled,
  IconStack3Filled,
  IconCurrentLocationFilled,
  IconChevronRight,
} from '@tabler/icons-react';

// Component Imports.
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

// User/Profile Page.
export default function UserPage() {
  return (
    <>
      <Helmet>
        <title>User Profile | Preplus</title>
      </Helmet>

      <div className="bg-background mx-auto min-h-screen max-w-7xl space-y-8 p-4 md:p-8">
        {/* Header Profile Section */}
        <Card className="border-border/50 bg-card/50 shadow-sm backdrop-blur-sm">
          <CardContent className="flex flex-col items-center gap-6 pt-6 md:flex-row md:items-start">
            <Avatar className="border-primary/20 h-24 w-24 border-2">
              <AvatarImage src="/path-to-alex-chen.png" alt="Alex Chen" />
              <AvatarFallback className="text-2xl">AC</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Alex Chen</h1>
                <div className="mt-1 flex items-center justify-center gap-3 md:justify-start">
                  <Badge variant="secondary" className="gap-1 font-medium">
                    <IconStarFilled className="fill-primary text-primary h-3 w-3" />
                    Level 42
                  </Badge>
                  <span className="text-muted-foreground text-sm">Member since Jan 2025</span>
                </div>
              </div>
              <p className="text-muted-foreground font-medium">
                Full Stack Developer • JavaScript Enthusiast
              </p>
            </div>

            <div className="space-y-1 text-center md:text-right">
              <div className="text-4xl font-bold tabular-nums">15,847</div>
              <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                Total Pulse Points
              </p>
              <div className="text-primary text-xs font-semibold">+245 this week</div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Topic Mastery & Battle History Column */}
          <div className="space-y-8 lg:col-span-2">
            {/* Radar Chart Section */}
            <Card className="min-h-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IconCurrentLocationFilled className="text-primary h-5 w-5" />
                  Topic Mastery
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-muted/20 m-4 flex min-h-75 items-center justify-center rounded-lg">
                {/* Replace with your Chart.js or Recharts Radar implementation */}
                <div className="text-muted-foreground flex flex-col items-center gap-2">
                  <div className="border-muted-foreground/20 flex h-48 w-48 items-center justify-center rounded-full border-4 border-dashed">
                    Radar Chart
                  </div>
                  <div className="mt-4 space-x-2 text-xs opacity-70">
                    <span>JavaScript</span> • <span>React</span> • <span>Node.js</span> •{' '}
                    <span>Python</span> • <span>SQL</span> • <span>Algorithms</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Battle History */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <IconStack3Filled className="text-primary h-5 w-5" />
                  Battle History
                </CardTitle>
                <button className="text-muted-foreground text-xs font-semibold hover:underline">
                  View All
                </button>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: 'JavaScript Arrays Challenge',
                    players: 23,
                    date: 'Jan 10, 2025',
                    rank: '#1',
                    points: '+450 pts',
                    icon: IconTrophyFilled,
                  },
                  {
                    title: 'React Hooks Battle',
                    players: 18,
                    date: 'Jan 9, 2025',
                    rank: '#3',
                    points: '+280 pts',
                    icon: IconBoltFilled,
                  },
                  {
                    title: 'SQL Queries Showdown',
                    players: 31,
                    date: 'Jan 8, 2025',
                    rank: '#5',
                    points: '+190 pts',
                    icon: IconCurrentLocationFilled,
                  },
                  {
                    title: 'Algorithm Sprint',
                    players: 27,
                    date: 'Jan 7, 2025',
                    rank: '#12',
                    points: '+85 pts',
                    icon: IconChevronRight,
                  },
                ].map((battle, i) => (
                  <div
                    key={i}
                    className="bg-muted/30 hover:border-border flex items-center justify-between rounded-xl border border-transparent p-4 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-background rounded-lg border p-2">
                        <battle.icon className="text-muted-foreground h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{battle.title}</div>
                        <div className="text-muted-foreground text-xs">
                          vs {battle.players} players • {battle.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">{battle.rank}</div>
                      <div className="text-primary text-xs font-medium">{battle.points}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar: Stats & Achievements */}
          <div className="space-y-8">
            {/* Global Percentile */}
            <Card>
              <CardHeader>
                <CardTitle className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
                  Global Percentile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    label: 'JavaScript',
                    top: '5%',
                    value: 95,
                    current: '2,150 / 2,200 to next rank',
                  },
                  { label: 'React', top: '8%', value: 92, current: '1,840 / 2,000 to next rank' },
                  {
                    label: 'Algorithms',
                    top: '15%',
                    value: 85,
                    current: '1,275 / 1,500 to next rank',
                  },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{stat.label}</span>
                      <span className="text-muted-foreground">Top {stat.top}</span>
                    </div>
                    <Progress value={stat.value} className="h-2" />
                    <p className="text-muted-foreground text-[10px]">{stat.current}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: 'Total Battles', val: '247' },
                  { label: 'Win Rate', val: '68%' },
                  { label: 'Avg Rank', val: '#4.2' },
                  { label: 'Streak', val: '12 days' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="border-border/50 flex items-center justify-between border-b py-1 last:border-0"
                  >
                    <span className="text-muted-foreground text-sm">{s.label}</span>
                    <span className="font-bold">{s.val}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: 'Speed Demon',
                    desc: 'Complete 10 battles in under 5 minutes',
                    icon: IconBoltFilled,
                  },
                  { title: 'Champion', desc: 'Win 5 battles in a row', icon: IconTrophyFilled },
                  { title: 'Rising Star', desc: 'Reach Level 40', icon: IconStarFilled },
                ].map((ach, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-muted mt-1 rounded-full p-2">
                      <ach.icon className="text-muted-foreground h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{ach.title}</div>
                      <div className="text-muted-foreground text-xs leading-relaxed">
                        {ach.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
