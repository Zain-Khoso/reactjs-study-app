// Component Imports.
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Muted } from '../ui/typography';

// Types.
type QuickStatsProps = {
  stats: {
    label: string;
    val: string | number;
  }[];
};

// Component used inside profile page to show some quick stats of the profile.
export default function QuickStats({ stats }: QuickStatsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground uppercase">Quick Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((s, i) => (
          <div
            key={`${i}-quickstats`}
            className="border-border/50 flex items-center justify-between border-b pb-2 last:border-0 last:pb-0"
          >
            <Muted>{s.label}</Muted>
            <Muted className="font-bold">{s.val}</Muted>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
