// Asset Imports.
import { IconTrophy, IconTrendingUp } from '@tabler/icons-react';

// Component Imports.
import LivePulse from '@/components/ui/live-pulse';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { H2, H3, Muted, Small } from '@/components/ui/typography';

// Types.
type Player = {
  rank: number;
  name: string;
  pts: string;
};

type LiveRankSidebarProps = {
  currentRank: number;
  rankChange: number;
  topPlayers: Player[];
  activePlayersCount: number;
};

// Component used inside the arena page to show the arenas live rankings.
export default function RankPanel({
  currentRank,
  rankChange,
  topPlayers,
  activePlayersCount,
}: LiveRankSidebarProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
        <CardTitle className="flex items-center gap-2">
          <IconTrophy size={24} className="text-primary" />
          <H3>Live Rank</H3>
        </CardTitle>

        <LivePulse isLive />
      </CardHeader>

      <CardContent className="flex flex-1 flex-col space-y-6 overflow-hidden">
        <UserRankCard rank={currentRank} change={rankChange} />
        <TopPlayersList players={topPlayers} />
      </CardContent>

      <CardFooter className="min-h-fit">
        <Muted className="text-center">
          Active Players:{' '}
          <span className="text-foreground font-bold">{activePlayersCount.toLocaleString()}</span>
        </Muted>
      </CardFooter>
    </Card>
  );
}

// Component to show the current user's rank.
function UserRankCard({ rank, change }: { rank: number; change: number }) {
  return (
    <Card className="mt-px min-h-fit">
      <CardContent className="flex flex-col items-center gap-2">
        <Small className="text-muted-foreground text-center font-bold uppercase">
          Your Current Rank
        </Small>

        <H2 className="font-black">#{rank}</H2>

        <div className="text-primary flex items-center justify-center gap-1.5 text-sm font-bold">
          <IconTrendingUp size={16} />
          <span>+{change} positions</span>
        </div>
      </CardContent>
    </Card>
  );
}

// Component to show a top user.
function PlayerListItem({ player }: { player: Player }) {
  return (
    <li className="group border-border/50 bg-muted/20 hover:bg-accent/60 flex items-center gap-3 rounded-md border p-3 transition-colors">
      <Small className="text-muted-foreground font-bold">{player.rank}</Small>

      <Avatar>
        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${player.name}`} />
        <AvatarFallback>{player.name[0]}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <Small className="font-bold">{player.name}</Small>
        <Small className="text-muted-foreground font-medium uppercase tabular-nums">
          {player.pts} pts
        </Small>
      </div>
    </li>
  );
}

// Component to list all the top players.
function TopPlayersList({ players }: { players: Player[] }) {
  return (
    <ul className="flex-1 space-y-3 overflow-y-auto">
      <li>
        <Muted>Top Players</Muted>
      </li>
      {players.map((player) => (
        <PlayerListItem key={`player-rank-${player.rank}`} player={player} />
      ))}
    </ul>
  );
}
