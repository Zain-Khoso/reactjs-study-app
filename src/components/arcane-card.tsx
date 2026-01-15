// Lib Imports.
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Util Imports.
import { calculateTimeLeft, formatCategorySlug } from '@/lib/utils';

// Component Imports.
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { H3, Big, Muted } from '@/components/ui/typography';
import LivePulse from './ui/live-pulse';

// Types.
type Props = {
  startsAt: Date | string;
  category: string;
  prizePool: number;
  competitors: number;
  title?: string;
};

export default function ArcaneCard({
  startsAt,
  category,
  prizePool,
  competitors,
  title = 'Monthly Arcane',
}: Props) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startsAt));

  useEffect(() => {
    if (timeLeft.isLive) return;

    const timer = setInterval(() => {
      const newTime = calculateTimeLeft(startsAt);
      setTimeLeft(newTime);

      if (newTime.isLive) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft.isLive]);

  const stats = [
    { label: 'Days', val: timeLeft.days },
    { label: 'Hrs', val: timeLeft.hours },
    { label: 'Min', val: timeLeft.minutes },
    { label: 'Sec', val: timeLeft.seconds },
  ];

  return (
    <Card className="border-primary/20 shadow-primary/10 w-full shadow-lg">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <H3>{title}</H3>

        <LivePulse isLive={timeLeft.isLive} />
      </CardHeader>

      <CardContent className="space-y-1 lg:space-y-4">
        <Muted className="text-center tracking-widest uppercase">Starts In</Muted>

        <ul className="flex w-full items-center gap-2">
          {stats.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border-muted relative flex max-h-fit flex-1 flex-col items-center overflow-hidden rounded-lg border-2 py-2"
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={`monthly-arcane-timer-${item.label}-${item.val}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <Big className="text-primary font-mono">
                    {item.val.toString().padStart(2, '0')}
                  </Big>
                </motion.span>
              </AnimatePresence>

              <Muted className="text-xs uppercase">{item.label}</Muted>
            </motion.li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2">
        <div className="w-full">
          <Muted>{formatCategorySlug(category)}</Muted>
          <Big className="text-xl">Prize Pool: ${prizePool.toLocaleString()}</Big>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-muted h-px w-full origin-left"
        />

        <Muted className="text-primary">
          {Intl.NumberFormat('en-US', { notation: 'compact' }).format(competitors)} Registered
          Competitors
        </Muted>
      </CardFooter>
    </Card>
  );
}
