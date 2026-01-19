// Lib Imports.
import { Link } from 'react-router';
import { motion } from 'motion/react';

// Asset Imports.
import { IconTrophy, IconTarget, IconClock, IconShare } from '@tabler/icons-react';

// Util Imports.
import {
  arenaResultsPodium,
  arenaResultsPodiumAvatars,
  containerVariants,
  itemVariants,
} from '@/lib/motions';

// Hook Imports.
import { useDocTitle } from '@/hooks/useDocTitle';

// Component Imports.
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Big, Small, H3 } from '@/components/ui/typography';
import { Badge } from '../ui/badge';

// Arena Results Page.
export default function ArenaResultsPage() {
  useDocTitle('Arena Results');

  return (
    <motion.main
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center space-y-8 px-4 pb-8 lg:px-0"
    >
      <motion.section
        variants={itemVariants}
        className="flex h-60 w-full items-end justify-center gap-4 sm:gap-8"
      >
        <article className="flex flex-col items-center gap-3">
          <motion.div
            variants={arenaResultsPodiumAvatars(0.5)}
            initial="initial"
            animate="animate"
            className="relative z-10"
          >
            <Avatar className="border-muted h-16 w-16 border-2">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Badge variant="secondary" className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              2nd
            </Badge>
          </motion.div>

          <div className="h-16 w-24">
            <motion.div
              variants={arenaResultsPodium}
              initial="initial"
              animate="animate"
              style={{ originY: 1 }}
              className="bg-muted/30 border-border flex h-full w-full items-center justify-center rounded-t-lg border p-4 text-center"
            >
              <Small>Sarah M.</Small>
            </motion.div>
          </div>
        </article>

        <article className="flex flex-col items-center gap-3">
          <motion.div
            variants={arenaResultsPodiumAvatars(0.8)}
            initial="initial"
            animate="animate"
            className="relative z-10"
          >
            <Avatar className="border-primary ring-primary/20 h-20 w-20 border-4 ring-4">
              <AvatarImage src="https://lh3.googleusercontent.com/-vMM9R2UlBpM/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQSh6CEfa4PH8bRLDDUxvUhhTriQ/photo.jpg?sz=512" />
              <AvatarFallback>YOU</AvatarFallback>
            </Avatar>
            <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2">1st</Badge>
          </motion.div>

          <div className="h-32 w-32">
            <motion.div
              variants={arenaResultsPodium}
              initial="initial"
              animate="animate"
              style={{ originY: 1 }}
              transition={{ delay: 0.15 }}
              className="bg-primary/10 border-primary flex h-full w-full items-center justify-center rounded-t-xl border-x-2 border-t-2 p-4 text-center shadow-[0_-20px_50px_-12px_rgba(var(--primary),0.2)]"
            >
              <Big className="font-semibold">You!</Big>
            </motion.div>
          </div>
        </article>

        <article className="flex flex-col items-center gap-3">
          <motion.div
            variants={arenaResultsPodiumAvatars(0.3)}
            initial="initial"
            animate="animate"
            className="relative z-10"
          >
            <Avatar className="border-muted h-14 w-14 border-2">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <Badge variant="secondary" className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              3rd
            </Badge>
          </motion.div>

          <div className="h-12 w-20">
            <motion.div
              variants={arenaResultsPodium}
              initial="initial"
              animate="animate"
              style={{ originY: 1 }}
              className="bg-muted/20 border-border flex h-full w-full items-center justify-center rounded-t-lg border p-4 text-center"
            >
              <Small>Mike K.</Small>
            </motion.div>
          </div>
        </article>
      </motion.section>

      <motion.div variants={itemVariants} className="w-full max-w-3xl">
        <Card>
          <CardContent className="space-y-6">
            <H3 className="text-center font-semibold">Your Performance</H3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { icon: IconTrophy, val: '1st', label: 'Final Rank' },
                { icon: IconTarget, val: '94%', label: 'Accuracy' },
                { icon: IconClock, val: '2.3s', label: 'Avg Speed' },
              ].map((m, i) => (
                <Card key={i} className="gap-4">
                  <CardHeader>
                    <div className="bg-secondary mx-auto w-fit rounded-xl p-3">
                      <m.icon className="text-primary" size={28} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <H3 className="text-center font-semibold">{m.val}</H3>
                    <Small className="text-muted-foreground mt-1 block text-center font-semibold uppercase">
                      {m.label}
                    </Small>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex w-full max-w-md flex-col gap-4 sm:flex-row"
      >
        <Button className="flex-1">
          <IconShare size={20} />
          Share Proof of Knowledge
        </Button>
        <Button variant="outline" className="flex-1" asChild>
          <Link to="/arenas">Play Again</Link>
        </Button>
      </motion.div>
    </motion.main>
  );
}
