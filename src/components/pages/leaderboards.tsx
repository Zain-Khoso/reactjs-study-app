// Lib Imports.
import { useState } from 'react';
import { motion } from 'motion/react';

// Asset Imports.
import {
  IconTrophy,
  IconCheck,
  IconSelector,
  IconCrown,
  IconTrendingUp,
} from '@tabler/icons-react';

// Util Imports.
import { cn } from '@/lib/utils';
import { generalPageMotions } from '@/lib/motions';

// Component Imports.
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Big, H2, Muted, P, Small } from '../ui/typography';

// Types.
type LeaderboardEntry = {
  rank: number;
  name: string;
  handle: string;
  avatar: string;
  points: number;
  pointsToday: number;
};

// Data.
const subjects = [
  { value: 'Global', label: 'Global Ranking' },
  { value: 'Computer Science', label: 'Computer Science' },
  { value: 'Mathematics', label: 'Mathematics' },
  { value: 'History', label: 'History' },
  { value: 'Physics', label: 'Physics' },
];
const TOP_THREE: LeaderboardEntry[] = [
  {
    rank: 2,
    name: 'Sarah Chen',
    handle: '@sarahc',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    points: 2847,
    pointsToday: 110,
  },
  {
    rank: 1,
    name: 'Zain Khoso',
    handle: '@zainkhoso',
    avatar:
      'https://lh3.googleusercontent.com/-vMM9R2UlBpM/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQSh6CEfa4PH8bRLDDUxvUhhTriQ/photo.jpg?sz=512',
    points: 3511,
    pointsToday: 78,
  },
  {
    rank: 3,
    name: 'Mike Johnson',
    handle: '@mikej',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    points: 2691,
    pointsToday: 92,
  },
];

const RANKED_LIST: LeaderboardEntry[] = [
  {
    rank: 4,
    name: 'Emma Wilson',
    handle: '@emmaw',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    points: 2456,
    pointsToday: 127,
  },
  {
    rank: 5,
    name: 'David Kim',
    handle: '@davidk',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    points: 2298,
    pointsToday: 89,
  },
  {
    rank: 6,
    name: 'Lisa Zhang',
    handle: '@lisaz',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    points: 2156,
    pointsToday: 56,
  },
  {
    rank: 7,
    name: 'Ryan Taylor',
    handle: '@ryant',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan',
    points: 2034,
    pointsToday: 43,
  },
  {
    rank: 8,
    name: 'Amy Foster',
    handle: '@amyf',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amy',
    points: 1967,
    pointsToday: 78,
  },
  {
    rank: 9,
    name: 'James Park',
    handle: '@jamesp',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    points: 1834,
    pointsToday: 92,
  },
];

// Component used inside Leaderboard page to show top 3 users.
function PodiumItem({ entry, isWinner }: { entry: LeaderboardEntry; isWinner?: boolean }) {
  return (
    <article className={cn('flex flex-col items-center gap-2', isWinner ? 'mb-6' : 'mb-0')}>
      <div className="relative">
        <div
          className={cn(
            'relative rounded-full p-1 transition-all duration-500',
            isWinner ? 'bg-primary' : 'bg-muted'
          )}
        >
          <Avatar
            className={cn('border-background border-2', isWinner ? 'h-24 w-24' : 'h-20 w-20')}
          >
            <AvatarImage src={entry.avatar} alt={entry.name} />
            <AvatarFallback>{entry.name[0]}</AvatarFallback>
          </Avatar>
        </div>

        <div
          className={cn(
            'bg-background absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold shadow-sm',
            isWinner
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground'
          )}
        >
          {isWinner ? <IconCrown size={16} stroke={2.5} /> : entry.rank}
        </div>
      </div>

      <div className="text-center">
        <P className="text-sm leading-none font-bold">{entry.name}</P>
        <Small className="text-muted-foreground">{entry.points.toLocaleString()} pts</Small>
      </div>
    </article>
  );
}

// Leaderboard page.
export default function LeaderboardPage() {
  const [openSubject, setOpenSubject] = useState(false);
  const [currentSubject, setCurrentSubject] = useState('Global');

  return (
    <motion.main
      variants={generalPageMotions}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mx-auto max-w-7xl space-y-8 px-4 pb-32"
    >
      <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <article className="space-y-1">
          <H2>Leaderboards</H2>
          <Muted>See how you rank against other users</Muted>
        </article>

        <div className="flex flex-wrap items-center gap-3">
          <Popover open={openSubject} onOpenChange={setOpenSubject}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-50 justify-between lg:w-64">
                <div className="flex items-center gap-2">
                  <IconTrophy size={18} className="text-primary" />
                  {currentSubject}
                </div>

                <IconSelector size={16} className="text-muted-foreground" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="border-border w-50 p-0 shadow-xl lg:w-64">
              <Command>
                <CommandInput placeholder="Search subject..." />

                <CommandList>
                  <CommandEmpty>No subject found.</CommandEmpty>

                  <CommandGroup>
                    {subjects.map((s) => (
                      <CommandItem
                        key={s.value}
                        onSelect={() => {
                          setCurrentSubject(s.value);
                          setOpenSubject(false);
                        }}
                        className="cursor-pointer"
                      >
                        <IconCheck
                          size={16}
                          className={cn(
                            'mr-2',
                            currentSubject === s.value ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                        {s.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Tabs defaultValue="daily" className="w-auto">
            <TabsList className="bg-muted/50 border-border/50 border">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="all-time">All-Time</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      <Card className="overflow-hidden">
        <CardHeader className="text-muted-foreground flex items-center gap-2">
          <IconTrophy size={18} />

          <CardTitle className="uppercase">{currentSubject} Rankings</CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="to-muted/20 flex items-end justify-center gap-4 border-b bg-linear-to-b from-transparent py-12 sm:gap-12">
            <PodiumItem entry={TOP_THREE[0]} />
            <PodiumItem entry={TOP_THREE[1]} isWinner />
            <PodiumItem entry={TOP_THREE[2]} />
          </div>

          <ul className="divide-border divide-y">
            {RANKED_LIST.map((user) => (
              <li
                key={user.rank}
                className="hover:bg-accent/50 group flex items-center justify-between p-4 transition-all"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <Small className="text-muted-foreground">{user.rank}</Small>

                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>

                    <div>
                      <P className="leading-2">{user.name}</P>
                      <Small className="text-muted-foreground">{user.handle}</Small>
                    </div>
                  </div>
                </div>

                <div>
                  <P className="text-right font-bold">{user.points.toLocaleString()} pts</P>
                  <Small className="text-primary flex items-center justify-end gap-1 font-bold">
                    <IconTrendingUp size={12} stroke={3} />+{user.pointsToday} today
                  </Small>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <article className="border-border bg-background/90 fixed right-0 bottom-0 left-0 z-50 border-t backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <div className="border-border hidden border-r pr-6 text-center sm:block">
              <Small className="text-muted-foreground font-semibold uppercase">Your Rank</Small>
              <Big className="text-primary font-bold">#1</Big>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://lh3.googleusercontent.com/-vMM9R2UlBpM/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQSh6CEfa4PH8bRLDDUxvUhhTriQ/photo.jpg?sz=512" />
                  <AvatarFallback>ZK</AvatarFallback>
                </Avatar>

                <Small className="bg-primary text-primary-foreground absolute -top-1/5 -right-3/12 rounded-full px-1.5 py-0.5 font-semibold sm:hidden">
                  #47
                </Small>
              </div>

              <div className="hidden sm:block">
                <P className="font-bold">You (@zainkhoso)</P>
                <Small className="text-muted-foreground">Fullstack Developer</Small>
              </div>
            </div>
          </div>

          <div>
            <P className="text-right font-bold">{(3511).toLocaleString()} pts</P>
            <Small className="text-primary flex items-center justify-end gap-1 font-bold">
              <IconTrendingUp size={10} stroke={3} />
              +78 Today
            </Small>
          </div>
        </div>
      </article>
    </motion.main>
  );
}
