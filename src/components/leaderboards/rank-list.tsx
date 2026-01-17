// Lib Imports.
import { motion } from 'motion/react';

// Asset Imports.
import { IconTrendingUp } from '@tabler/icons-react';

// Util Imports
import { containerVariants, itemVariants } from '@/lib/motions';

// Component Imports.
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { P, Small } from '../ui/typography';

// Types.
import { type LeaderboardEntry } from './podium-item';
type RankListProps = {
  users: LeaderboardEntry[];
};
type RankListItemProps = {
  user: LeaderboardEntry;
};

// Component used in leaderboards page to list users.
export default function RankList({ users }: RankListProps) {
  return (
    <motion.ul
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="divide-border divide-y"
    >
      {users.map((user) => (
        <RankListItem key={user.rank} user={user} />
      ))}
    </motion.ul>
  );
}

// Component used in leaderboards page to show a single user and its rank.
function RankListItem({ user }: RankListItemProps) {
  return (
    <motion.li
      variants={itemVariants}
      layout
      className="hover:bg-accent/50 group flex items-center justify-between p-4 transition-all"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <Small className="text-muted-foreground">{user.rank}</Small>

        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>

          <div>
            <P className="leading-2">{user.name}</P>
            <Small className="text-muted-foreground">{user.handle}</Small>
          </div>
        </div>
      </div>

      <div>
        <P className="text-right font-bold">{user.points.toLocaleString()} pts</P>
        <Small className="text-primary flex items-center justify-end gap-1 font-bold">
          <IconTrendingUp size={12} stroke={3} />+{user.pointsToday} today
        </Small>
      </div>
    </motion.li>
  );
}
