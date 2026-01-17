// Lib Imports.
import { motion } from 'motion/react';

// Util Imports.
import { itemVariants } from '@/lib/motions';

// Component Imports.
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Muted, Small } from '../ui/typography';

// Types.
type PercentileStat = {
  label: string;
  top: number;
  value: number;
  current: string;
};
type GlobalPercentileProps = {
  stats: PercentileStat[];
};

// Component to list level progessions.
export default function GlobalPercentile({ stats }: GlobalPercentileProps) {
  return (
    <motion.div variants={itemVariants}>
      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground uppercase">Global Percentile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {stats.map((stat, i) => (
            <PercentileItem key={`stat-${i}`} stat={stat} />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Component to show a single level progession.
function PercentileItem({ stat }: { stat: PercentileStat }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <Muted>{stat.label}</Muted>
        <Muted className="font-semibold">Top {stat.top}%</Muted>
      </div>

      <Progress value={stat.value} className="h-2" />

      <Small className="text-muted-foreground">{stat.current}</Small>
    </div>
  );
}
