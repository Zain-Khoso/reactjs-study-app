// Lib Imports.
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { motion } from 'motion/react';

// Asset Imports
import { IconCurrentLocationFilled } from '@tabler/icons-react';

// Util Imports.
import { itemVariants } from '@/lib/motions';

// Component Imports.
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { P, Muted } from '../ui/typography';

// Types.
import { type ChartConfig } from '../ui/chart';

type Props = {
  data: {
    label: string;
    points: number;
  }[];
  user: {
    memberSince: Date;
  };
};

// Data.
const chartConfig: ChartConfig = {
  points: {
    label: 'Points',
    color: 'var(--chart-1)',
  },
};

// Component used in profile page to show charts.
export default function SubjectChart({ data, user }: Props) {
  const memberSince = user.memberSince.toLocaleDateString('pk', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <motion.div variants={itemVariants}>
      <Card className="min-h-100">
        <CardHeader className="flex items-center gap-2">
          <IconCurrentLocationFilled size={24} className="text-primary h-5 w-5" />

          <CardTitle>Topic Mastery</CardTitle>
        </CardHeader>

        <CardContent className="flex min-h-75 items-center justify-center">
          <ChartContainer config={chartConfig} className="aspect-square h-full max-h-62 w-full">
            <RadarChart data={data}>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <PolarGrid className="fill-primary opacity-10" gridType="circle" />
              <PolarAngleAxis dataKey="label" />
              <Radar dataKey="points" fill="var(--color-primary)" fillOpacity={0.6} />
            </RadarChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="flex-col gap-2 text-sm">
          <P>{data.map((field) => field.label).join(' · ')}</P>
          <Muted>Your stats since {memberSince}</Muted>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
