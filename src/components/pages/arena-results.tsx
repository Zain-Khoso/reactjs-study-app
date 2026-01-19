import React from 'react';
import { IconTrophy, IconTarget, IconClock, IconShare, IconRotate } from '@tabler/icons-react';

// Shadcn UI Imports
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { H1, H2, Muted, Big } from '@/components/ui/typography';

// Assuming your Navbar is in this location
// import { Navbar } from "@/components/navbar";

export default function ArenaResultsPage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      {/* Navbar handled by layout or imported here */}

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center space-y-12 p-6">
        {/* Header Section */}
        <div className="space-y-2 text-center">
          <H1 className="text-5xl font-black tracking-tight">Victory!</H1>
          <Muted className="text-lg">PrepPulse Knowledge Battle Complete</Muted>
        </div>

        {/* Podium Section */}
        <div className="flex h-64 w-full items-end justify-center gap-4 sm:gap-8">
          {/* 2nd Place */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <Avatar className="border-muted h-16 w-16 border-2">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="bg-muted border-border absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border px-2 py-0.5 text-[10px] font-bold">
                2nd
              </div>
            </div>
            <div className="bg-muted/30 border-border flex h-24 w-24 items-center justify-center rounded-t-lg border p-4 text-center">
              <span className="text-sm font-medium">Sarah M.</span>
            </div>
          </div>

          {/* 1st Place - YOU */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <Avatar className="border-primary ring-primary/20 h-20 w-20 border-4 ring-4">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
                <AvatarFallback>YOU</AvatarFallback>
              </Avatar>
              <div className="bg-primary text-primary-foreground absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-black">
                1st
              </div>
            </div>
            <div className="bg-primary/10 border-primary flex h-40 w-32 items-center justify-center rounded-t-xl border-x-2 border-t-2 p-4 text-center shadow-[0_-20px_50px_-12px_rgba(var(--primary),0.2)]">
              <Big className="font-bold">You!</Big>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <Avatar className="border-muted h-14 w-14 border-2">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" />
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <div className="bg-muted border-border absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border px-2 py-0.5 text-[10px] font-bold">
                3rd
              </div>
            </div>
            <div className="bg-muted/20 border-border flex h-16 w-20 items-center justify-center rounded-t-lg border p-4 text-center">
              <span className="text-xs font-medium">Mike K.</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics Card */}
        <Card className="border-border bg-card/50 w-full max-w-3xl backdrop-blur-sm">
          <CardContent className="space-y-8 p-10">
            <H2 className="text-center text-2xl font-bold">Your Performance</H2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Rank */}
              <div className="bg-secondary/30 border-border flex flex-col items-center gap-4 rounded-2xl border p-6">
                <div className="bg-background rounded-xl p-3">
                  <IconTrophy className="text-primary" size={28} />
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-black">1st</span>
                  <Muted className="mt-1 text-xs font-bold tracking-widest uppercase">
                    Final Rank
                  </Muted>
                </div>
              </div>

              {/* Accuracy */}
              <div className="bg-secondary/30 border-border flex flex-col items-center gap-4 rounded-2xl border p-6">
                <div className="bg-background rounded-xl p-3">
                  <IconTarget className="text-primary" size={28} />
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-black">94%</span>
                  <Muted className="mt-1 text-xs font-bold tracking-widest uppercase">
                    Accuracy
                  </Muted>
                </div>
              </div>

              {/* Avg Speed */}
              <div className="bg-secondary/30 border-border flex flex-col items-center gap-4 rounded-2xl border p-6">
                <div className="bg-background rounded-xl p-3">
                  <IconClock className="text-primary" size={28} />
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-black">2.3s</span>
                  <Muted className="mt-1 text-xs font-bold tracking-widest uppercase">
                    Avg Speed
                  </Muted>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
          <Button className="h-14 flex-1 gap-2 text-lg font-bold shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
            <IconShare size={20} />
            Share Proof of Knowledge
          </Button>
          <Button
            variant="outline"
            className="h-14 flex-1 gap-2 border-2 text-lg font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <IconRotate size={20} />
            Rematch
          </Button>
        </div>
      </main>
    </div>
  );
}
