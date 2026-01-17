// Lib Imports.
import { motion } from 'motion/react';

// Asset Imports
import { IconTrendingUp } from '@tabler/icons-react';

// Util Imports
import { footerVariants } from '@/lib/motions';

// Component Imports
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Big, P, Small } from '../ui/typography';

// Types
type CurrentUserRankBarProps = {
  rank: number;
  name: string;
  handle: string;
  avatar: string;
  points: number;
  pointsToday: number;
  occupation?: string;
};

// Component used inside loaderboards page to show the ranking of the current user.
export default function CurrentUserRankBar({
  rank,
  name,
  handle,
  avatar,
  points,
  pointsToday,
  occupation = 'Fullstack Developer',
}: CurrentUserRankBarProps) {
  return (
    <motion.article
      variants={footerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="border-border bg-background/90 fixed right-0 bottom-0 left-0 z-50 border-t backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="border-border hidden border-r pr-6 text-center sm:block">
            <Small className="text-muted-foreground font-semibold uppercase">Your Rank</Small>
            <Big className="text-primary font-bold">#{rank}</Big>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>

              <Small className="bg-primary text-primary-foreground absolute -top-1/5 -right-3/12 rounded-full px-1.5 py-0.5 font-semibold sm:hidden">
                #{rank}
              </Small>
            </div>

            <div className="hidden sm:block">
              <P className="font-bold">You ({handle})</P>
              <Small className="text-muted-foreground">{occupation}</Small>
            </div>
          </div>
        </div>

        <div>
          <P className="text-right font-bold">{points.toLocaleString()} pts</P>
          <Small className="text-primary flex items-center justify-end gap-1 font-bold">
            <IconTrendingUp size={10} stroke={3} />+{pointsToday} Today
          </Small>
        </div>
      </div>
    </motion.article>
  );
}
