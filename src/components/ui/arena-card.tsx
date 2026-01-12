// Assets.
import { type Icon, IconCode } from '@tabler/icons-react';

// Component Imports.
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from './card';
import { Small } from './typography';
import LivePulse from './live-pulse';

// Types.
type Props = {
  icon: Icon;
  isLive: boolean;
  title: string;
  desc: string;
  playersJoined: number;
  startsAt: Date;
};

// Card used to show indivisual arenas.
export default function ArenaCard({
  icon: Icon,
  isLive,
  title,
  desc,
  playersJoined,
  startsAt,
}: Props) {
  return (
    <Card className="gap-6">
      <CardHeader className="flex w-full items-center justify-between">
        <div className="bg-muted rounded-lg p-2">
          <Icon size={32} />
        </div>

        <LivePulse isLive={isLive} />
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <CardTitle>{title}</CardTitle>

        <CardDescription>{desc}</CardDescription>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-2">
        <div className="flex w-full items-center justify-between">
          <Small className="text-muted-foreground">Players Joined</Small>
          <Small>{playersJoined.toLocaleString()}</Small>
        </div>

        <div className="flex w-full items-center justify-between">
          <Small className="text-muted-foreground">Starts At</Small>
          <Small>{startsAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Small>
        </div>
      </CardFooter>
    </Card>
  );
}
