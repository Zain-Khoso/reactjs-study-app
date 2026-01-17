// Lib Imports.
import { useMemo } from 'react';
import { motion } from 'motion/react';

// Asset Imports.
import { IconStarFilled } from '@tabler/icons-react';

// Util Imports.
import { itemVariants } from '@/lib/motions';

// Component Imports.
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Big, P, H2, Muted } from '../ui/typography';

// Type.
type Props = {
  image: string | null;
  name: string;
  level: number;
  memberSince: Date;
  headline: string;
  points: number;
  pointsThisWeek: number;
};

// Component to show user information on profile page.
export default function UserCard({
  image,
  level,
  name,
  memberSince,
  headline,
  points,
  pointsThisWeek,
}: Props) {
  const memberSinceText = memberSince.toLocaleDateString('pk', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const initials = useMemo<string>(() => {
    const names = name.split(' ');
    if (names.length === 0) return 'U';

    const firstInitial = names.at(0)?.at(0)?.toUpperCase() ?? 'U';
    if (names.length === 1) return names.at(0)?.at(0)?.toUpperCase() ?? 'U';

    const lastInitial = names.at(-1)?.at(0)?.toUpperCase() ?? '';
    return firstInitial + lastInitial;
  }, [name]);

  return (
    <motion.div variants={itemVariants}>
      <Card>
        <CardContent className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <Avatar className="h-24 w-24">
            <AvatarImage src={image ?? undefined} alt={`${name}'s Picture`} />
            <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
          </Avatar>

          <section className="flex-1 space-y-2 text-center md:text-left">
            <div className="space-y-2">
              <Big>{name}</Big>

              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Badge variant="secondary" className="gap-1 font-medium">
                  <IconStarFilled className="text-primary" />
                  Level {level}
                </Badge>

                <P className="text-muted-foreground">Member since {memberSinceText}</P>
              </div>
            </div>

            <P className="text-muted-foreground text-center font-medium md:text-left">{headline}</P>
          </section>

          <section className="space-y-2 text-center md:text-right">
            <H2>{points.toLocaleString('en-uk')}</H2>

            <Muted className="text-center md:text-right">Total Points</Muted>
            <span className="text-primary font-semibold">
              +{pointsThisWeek.toLocaleString('en-uk')} this week
            </span>
          </section>
        </CardContent>
      </Card>
    </motion.div>
  );
}
