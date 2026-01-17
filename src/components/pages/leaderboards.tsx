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
  IconSearch,
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

// Types.
type LeaderboardSubject = 'Global' | 'Computer Science' | 'Mathematics' | 'History' | 'Physics';

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
    name: 'Alex Rodriguez',
    handle: '@alex_r',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    points: 3124,
    pointsToday: 145,
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
    <div className={cn('flex flex-col items-center gap-2', isWinner ? 'mb-6' : 'mb-0')}>
      <div className="relative">
        {/* Using primary/border variables instead of hard-coded yellow */}
        <div
          className={cn(
            'relative rounded-full p-1 transition-all duration-500',
            isWinner ? 'bg-primary shadow-[0_0_20px_rgba(var(--primary),0.3)]' : 'bg-muted'
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
        <p className="text-sm leading-none font-bold">{entry.name}</p>
        <p className="text-muted-foreground mt-1 text-xs tabular-nums">
          {entry.points.toLocaleString()} pts
        </p>
      </div>
    </div>
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
      className="bg-background min-h-screen pb-32"
    >
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Header & Filters */}
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
            <p className="text-muted-foreground">See how you rank against other users</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Subject Changer */}
            <Popover open={openSubject} onOpenChange={setOpenSubject}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="border-input hover:bg-accent w-[200px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    <IconTrophy size={18} className="text-primary" />
                    {currentSubject}
                  </div>
                  <IconSelector size={16} className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="border-border w-[200px] p-0 shadow-xl">
                <Command>
                  <CommandInput placeholder="Search subject..." icon={<IconSearch size={16} />} />
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
        </div>

        {/* Rankings Card */}
        <Card className="border-border overflow-hidden shadow-sm">
          <CardHeader className="bg-muted/30 border-b py-4">
            <CardTitle className="text-muted-foreground flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
              <IconTrophy size={16} />
              {currentSubject} Rankings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Top 3 Podium */}
            <div className="to-muted/20 flex items-end justify-center gap-4 border-b bg-gradient-to-b from-transparent py-12 sm:gap-12">
              <PodiumItem entry={TOP_THREE[0]} />
              <PodiumItem entry={TOP_THREE[1]} isWinner />
              <PodiumItem entry={TOP_THREE[2]} />
            </div>

            {/* List Rows */}
            <div className="divide-border divide-y">
              {RANKED_LIST.map((user) => (
                <div
                  key={user.rank}
                  className="hover:bg-accent/50 group flex items-center justify-between p-4 transition-all"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-muted-foreground/40 group-hover:text-muted-foreground w-6 text-center text-sm font-bold">
                      {user.rank}
                    </span>
                    <div className="flex items-center gap-3">
                      <Avatar className="border-border group-hover:border-primary/30 h-10 w-10 border transition-colors">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm leading-none font-semibold">{user.name}</p>
                        <p className="text-muted-foreground mt-1 text-xs">{user.handle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold tabular-nums">
                      {user.points.toLocaleString()} pts
                    </p>
                    <div className="text-primary flex items-center justify-end gap-1 text-[10px] font-bold">
                      <IconTrendingUp size={12} stroke={3} />+{user.pointsToday} today
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sticky Bottom User Rank - Using secondary and primary variables */}
      <div className="border-border bg-background/90 fixed right-0 bottom-0 left-0 z-50 border-t backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <div className="border-border hidden border-r pr-6 text-center sm:block">
              <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                Your Rank
              </p>
              <p className="text-primary text-xl font-black">#47</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="border-primary/20 ring-primary/5 h-12 w-12 border-2 ring-2">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=john" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="bg-primary text-primary-foreground absolute -top-1 -right-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold shadow-lg sm:hidden">
                  #47
                </div>
              </div>
              <div className="xs:block hidden">
                <p className="text-sm font-bold">You (@john_doe)</p>
                <p className="text-muted-foreground text-xs italic">
                  Keep practicing to climb higher!
                </p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-foreground text-lg font-black tabular-nums">{1234} pts</p>
            <p className="text-primary flex items-center justify-end gap-0.5 text-[10px] font-bold tracking-tight uppercase">
              <IconTrendingUp size={10} stroke={3} />
              +45 Today
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
