// Lib Imports.
import { motion } from 'motion/react';

// Asset Imports
import { IconHistory } from '@tabler/icons-react';

// Util Imports.
import { itemVariants } from '@/lib/motions';

// Component Imports
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { P, Small, Muted } from '../ui/typography';
import { Button } from '@/components/ui/button';

// Types.
import { type Icon } from '@tabler/icons-react';

type BattleRecord = {
  subject: string;
  players: number;
  date: Date;
  rank: number;
  points: number;
  icon: Icon;
};
type BattleHistoryProps = {
  battles: BattleRecord[];
};

// Component used to profile page to show battle/quiz history.
export default function BattleHistory({ battles }: BattleHistoryProps) {
  return (
    <motion.div variants={itemVariants}>
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
          {battles.map((battle, i) => (
            <BattleItem key={`battle-${i}`} battle={battle} />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Component to a single battle/quiz entry in history.
function BattleItem({ battle }: { battle: BattleRecord }) {
  return (
    <Card className="bg-muted/30 hover:bg-muted/50 overflow-hidden transition-colors">
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
  );
}
