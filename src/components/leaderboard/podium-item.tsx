// Util Imports.
import { cn } from '@/lib/utils';

// Asset Imports.
import { IconCrown } from '@tabler/icons-react';

// Component Imports.
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { P, Small } from '../ui/typography';

// Types.
export type LeaderboardEntry = {
  rank: number;
  name: string;
  handle: string;
  avatar: string;
  points: number;
  pointsToday: number;
};

// Component used inside Leaderboard page to show top 3 users.
export default function PodiumItem({
  entry,
  isWinner,
}: {
  entry: LeaderboardEntry;
  isWinner?: boolean;
}) {
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
