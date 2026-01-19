// Asset Imports.
import { IconTrophy, IconTarget, IconClock, type Icon } from '@tabler/icons-react';

// Component Imports.
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { H3, Small } from '@/components/ui/typography';

// Types.
type Stat = {
  icon: Icon;
  val: string;
  label: string;
};

type PerformanceStatsProps = {
  rank: string;
  accuracy: string;
  avgSpeed: string;
};

// Component used inside Arena Results Page to show performance stats.
export default function PerformanceStats({ rank, accuracy, avgSpeed }: PerformanceStatsProps) {
  const stats: Stat[] = [
    { icon: IconTrophy, val: rank, label: 'Final Rank' },
    { icon: IconTarget, val: accuracy, label: 'Accuracy' },
    { icon: IconClock, val: avgSpeed, label: 'Avg Speed' },
  ];

  return (
    <Card className="w-full">
      <CardContent className="space-y-6">
        <H3 className="text-center font-semibold">Your Performance</H3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <StatCard
              key={`stat-${stat.label}-${i}`}
              icon={stat.icon}
              val={stat.val}
              label={stat.label}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Component used to show individual stat card.
function StatCard({ icon: Icon, val, label }: Stat) {
  return (
    <Card className="gap-4">
      <CardHeader>
        <div className="bg-secondary mx-auto w-fit rounded-xl p-3">
          <Icon className="text-primary" size={28} />
        </div>
      </CardHeader>
      <CardContent>
        <H3 className="text-center font-semibold">{val}</H3>
        <Small className="text-muted-foreground mt-1 block text-center font-semibold uppercase">
          {label}
        </Small>
      </CardContent>
    </Card>
  );
}
