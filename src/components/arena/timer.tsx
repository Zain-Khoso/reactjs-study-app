// Lib Imports.
import { useRef, useState, useEffect } from 'react';

// Asset Imports.
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { H1, Muted } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

// Types.
type Props = {
  startTime: Date;
  endTime: Date;
};

// Component used inside the arena page to show the timer.
export default function Timer({ startTime, endTime }: Props) {
  const [now, setNow] = useState(Date.now());
  const timer = useRef<number>(undefined);

  const startMs = startTime.getTime();
  const endMs = endTime.getTime();
  const totalDuration = endMs - startMs;

  let minutes: number;
  let seconds: number;
  let progress: number;

  useEffect(() => {
    timer.current = setInterval(() => setNow(Date.now()), 1000);

    return () => clearInterval(timer.current);
  }, []);

  if (now < startMs) {
    const totalSeconds = Math.round(totalDuration / 1000);
    minutes = Math.floor(totalSeconds / 60);
    seconds = Math.round(totalSeconds % 60);
    progress = 100;
  } else if (now >= endMs) {
    minutes = 0;
    seconds = 0;
    progress = 0;
    clearInterval(timer.current);
  } else {
    const remainingMs = endMs - now;
    const totalSeconds = Math.round(remainingMs / 1000);
    minutes = Math.floor(totalSeconds / 60);
    seconds = Math.round(totalSeconds % 60);
    progress = (remainingMs / totalDuration) * 100;
  }

  return (
    <Card className="py-4">
      <CardContent className="space-y-4 py-6!">
        <Muted className="mb-0 text-center font-semibold tracking-wide uppercase">
          Time Remaining
        </Muted>
        <H1
          className={cn(
            'text-center font-medium tabular-nums',
            minutes === 0 && seconds === 0 ? 'text-destructive animate-pulse' : 'text-foreground'
          )}
        >
          {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </H1>
        <Progress value={progress} className="bg-secondary" />
      </CardContent>
    </Card>
  );
}
