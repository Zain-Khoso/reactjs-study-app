// Lib Imports.
import { useMemo } from 'react';
import { motion } from 'motion/react';

// Util Imports.
import { cn } from '@/lib/utils';
import { arenaResultsPodium, arenaResultsPodiumAvatars } from '@/lib/motions';

// Component Imports.
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Big, Small } from '@/components/ui/typography';

// Types.
type PodiumItemProps = {
  position: 1 | 2 | 3;
  name: string;
  avatarUrl: string;
  isUser?: boolean;
};

// Component used inisde Arena Results Page to show podium items.
export default function PodiumItem({ position, name, avatarUrl, isUser }: PodiumItemProps) {
  const configs = useMemo(
    () => ({
      1: {
        height: 'h-32',
        width: 'w-32',
        avatarSize: 'h-20 w-20',
        barStyle:
          'bg-primary/10 border-primary border-x-2 border-t-2 rounded-t-xl shadow-[0_-20px_50px_-12px_rgba(var(--primary),0.2)]',
        avatarStyle: 'border-primary ring-primary/20 border-4 ring-4',
        badgeVariant: 'default' as const,
        delay: 1.0,
        label: '1st',
        textComponent: <Big className="font-semibold">{isUser ? 'You!' : name}</Big>,
      },

      2: {
        height: 'h-16',
        width: 'w-24',
        avatarSize: 'h-16 w-16',
        barStyle: 'bg-muted/30 border-border border rounded-t-lg',
        avatarStyle: 'border-muted border-2',
        badgeVariant: 'secondary' as const,
        delay: 0.7,
        label: '2nd',
        textComponent: <Small>{isUser ? 'You!' : name}</Small>,
      },

      3: {
        height: 'h-12',
        width: 'w-20',
        avatarSize: 'h-14 w-14',
        barStyle: 'bg-muted/20 border-border border rounded-t-lg',
        avatarStyle: 'border-muted border-2',
        badgeVariant: 'secondary' as const,
        delay: 0.5,
        label: '3rd',
        textComponent: <Small>{isUser ? 'You!' : name}</Small>,
      },
    }),
    [name, isUser]
  );

  const config = configs[position];

  return (
    <article className="flex flex-col items-center gap-3">
      <motion.div
        variants={arenaResultsPodiumAvatars(config.delay)}
        initial="initial"
        animate="animate"
        className="relative z-10"
      >
        <Avatar className={cn(config.avatarSize, config.avatarStyle)}>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <Badge
          variant={config.badgeVariant}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2"
        >
          {config.label}
        </Badge>
      </motion.div>

      <div className={cn(config.height, config.width)}>
        <motion.div
          variants={arenaResultsPodium}
          initial="initial"
          animate="animate"
          style={{ originY: 1 }}
          transition={position === 1 ? { delay: 0.15 } : undefined}
          className={cn(
            'flex h-full w-full items-center justify-center p-4 text-center',
            config.barStyle
          )}
        >
          {config.textComponent}
        </motion.div>
      </div>
    </article>
  );
}
