// Lib Imports.
import { motion } from 'motion/react';

// Asset Imports.
import { IconStarFilled } from '@tabler/icons-react';

// Util Imports.
import { itemVariants } from '@/lib/motions';
import { getInitials, normalizeDate, normalizeNumber } from '@/lib/utils';

// Component Imports.
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Big, P, H2, Muted } from '../ui/typography';

// Type.
type Props = {
  image?: string;
  name: string;
  headline: string;
  level: number;
  points: number;
  pointsThisWeek: number;
  createdAt: Date;
};

// Component to show user information on dashboard/profile page.
export default function UserCard({
  level,
  headline,
  points,
  pointsThisWeek,
  image,
  name,
  createdAt,
}: Props) {
  return (
    <motion.div variants={itemVariants}>
      <Card>
        <CardContent className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <Avatar className="h-24 w-24">
            <AvatarImage src={image} alt={`${name}'s Picture`} />
            <AvatarFallback className="text-2xl">{getInitials(name)}</AvatarFallback>
          </Avatar>

          <section className="flex-1 space-y-2 text-center md:text-left">
            <div className="space-y-2">
              <Big>{name}</Big>

              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Badge variant="secondary" className="gap-1 font-medium">
                  <IconStarFilled className="text-primary" />
                  Level {normalizeNumber(level)}
                </Badge>

                <P className="text-muted-foreground">Member since {normalizeDate(createdAt)}</P>
              </div>
            </div>

            <P className="text-muted-foreground text-center font-medium md:text-left">{headline}</P>
          </section>

          <section className="space-y-2 text-center md:text-right">
            <H2>{normalizeNumber(points)}</H2>

            <Muted className="text-center md:text-right">Total Points</Muted>
            <span className="text-primary font-semibold">
              +{normalizeNumber(pointsThisWeek)} this week
            </span>
          </section>
        </CardContent>
      </Card>
    </motion.div>
  );
}
