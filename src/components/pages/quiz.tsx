// Lib Imports.
import { useState } from 'react';

// Asset Imports.
import { IconChevronRight, IconTrendingUp, IconTrophy, IconBulb } from '@tabler/icons-react';

// Component Imports.
import LivePulse from '@/components/ui/live-pulse';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { H1, H2, H3, Muted, Small } from '../ui/typography';

// Live Quiz Page.
export default function QuizPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>('B');

  const options = [
    { id: 'A', text: 'O(n)' },
    { id: 'B', text: 'O(log n)' },
    { id: 'C', text: 'O(n²)' },
    { id: 'D', text: 'O(1)' },
  ];

  return (
    <main className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-8 md:px-8 lg:h-[calc(100dvh-118px)] lg:grid-cols-[1fr_380px] lg:overflow-hidden xl:px-0">
      <section className="lg:no-scrollbar space-y-8 lg:overflow-auto">
        <Card className="py-4">
          <CardContent className="space-y-4 py-6!">
            <Muted className="mb-0 text-center font-semibold tracking-wide uppercase">
              Time Remaining
            </Muted>

            <H1 className="text-center font-medium">00:28</H1>

            <Progress value={45} className="bg-secondary" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge variant="default">Q15</Badge>

                <Badge variant="outline">Medium</Badge>
                <Badge variant="secondary">
                  <IconBulb size={14} /> Data Structures
                </Badge>
              </div>

              <Muted className="text-muted-foreground font-medium">15/30 Questions</Muted>
            </div>

            <H3 className="leading-loose font-medium">
              What is the time complexity of searching for an element in a balanced Binary Search
              Tree?
            </H3>
          </CardContent>
        </Card>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {options.map(({ id, text }) => {
            const isSelected = selectedOption === id;
            return (
              <Button
                key={`question-option-${id}-${text}`}
                variant={isSelected ? 'default' : 'secondary'}
                className="py-8"
                onClick={() => setSelectedOption(id)}
              >
                {text}
              </Button>
            );
          })}
        </section>

        <div>
          <Button variant="outline" className="ml-auto flex items-center px-10">
            Submit Answer
            <IconChevronRight size={20} stroke={3} />
          </Button>
        </div>
      </section>

      <aside className="lg:overflow-hidden">
        <Card className="flex h-full flex-col">
          <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
            <CardTitle className="flex items-center gap-2">
              <IconTrophy size={24} className="text-primary" />
              <H3>Live Rank</H3>
            </CardTitle>

            <LivePulse isLive />
          </CardHeader>

          <CardContent className="flex flex-1 flex-col space-y-6 overflow-hidden">
            <Card className="mt-px min-h-fit">
              <CardContent className="flex flex-col items-center gap-2">
                <Small className="text-muted-foreground text-center font-bold uppercase">
                  Your Current Rank
                </Small>

                <H2 className="font-black">#342</H2>

                <div className="text-primary flex items-center justify-center gap-1.5 text-sm font-bold">
                  <IconTrendingUp size={16} />

                  <span>+23 positions</span>
                </div>
              </CardContent>
            </Card>

            <ul className="flex-1 space-y-3 overflow-y-auto">
              <li>
                <Muted>Top Players</Muted>
              </li>

              {[
                { rank: 1, name: 'Alex Chen', pts: '3,890' },
                { rank: 2, name: 'Sarah Kumar', pts: '3,765' },
                { rank: 3, name: 'Mike Johnson', pts: '3,620' },
                { rank: 4, name: 'Emma Wilson', pts: '3,510' },
                { rank: 5, name: 'David Lee', pts: '3,445' },
              ].map((p) => (
                <li
                  key={p.rank}
                  className="group border-border/50 bg-muted/20 hover:bg-accent/60 flex items-center gap-3 rounded-md border p-3 transition-colors"
                >
                  <Small className="text-muted-foreground font-bold">{p.rank}</Small>

                  <Avatar>
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${p.name}`}
                    />

                    <AvatarFallback>{p.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <Small className="font-bold">{p.name}</Small>
                    <Small className="text-muted-foreground font-medium uppercase tabular-nums">
                      {p.pts} pts
                    </Small>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="min-h-fit">
            <Muted className="text-center">
              Active Players: <span className="text-foreground font-bold">1,247</span>
            </Muted>
          </CardFooter>
        </Card>
      </aside>
    </main>
  );
}
