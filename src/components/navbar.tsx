// Lib Imports.
import { Link, useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'motion/react';

// Assets.
import {
  IconArrowBigRightLinesFilled,
  IconSunFilled,
  IconMoonFilled,
  IconBellFilled,
} from '@tabler/icons-react';

// Util Imports.
import { cn } from '@/lib/utils';

// Hooks.
import { useTheme } from '@/hooks/useTheme';

// Component Imports.
import BrandLogo from './ui/brand-logo';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Types.
type Props = {
  user: any;
};

// Data.
const publicLinks = [
  { label: 'Creator', to: 'https://linkedin.com/in/zain-khoso', hash: true, external: true },
  {
    label: 'Source Code',
    to: 'https://github.com/zain-khoso/reactjs-study-app',
    hash: true,
    external: true,
  },
  { label: 'Live Arenas', to: '/#arenas', hash: true, external: false },
  { label: 'Assessment', to: '/#assessment', hash: true, external: false },
];
const authLinks = [
  { label: 'Dashboard', to: '/dashboard', hash: true, external: false },
  { label: 'Profile', to: '/profile', hash: true, external: false },
  { label: 'Battles', to: '/battles', hash: true, external: false },
  { label: 'Leaderboard', to: '/leaderboard', hash: true, external: false },
];

// Navbar for the entire application.
export default function Navbar({ user }: Props) {
  const { isDark, setIsDark } = useTheme();
  const { pathname } = useLocation();

  const links = user ? authLinks : publicLinks;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="border-b-muted bg-background/80 sticky top-0 z-50 mx-auto mb-12 flex w-full max-w-7xl items-center justify-between border-b p-4 backdrop-blur-md"
    >
      <div className="flex items-center gap-8">
        <BrandLogo />

        <ul className={cn('hidden items-center gap-6 md:flex', !user && 'mr-8 ml-auto')}>
          {links.map((item, index) => {
            const isActive = pathname === item.to;

            return (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.2 }}
              >
                {item.hash ? (
                  <HashLink
                    to={item.to}
                    smooth
                    className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </HashLink>
                ) : (
                  <Link
                    to={item.to}
                    target={item.external ? '_blank' : undefined}
                    className={cn(
                      'hover:text-primary text-sm font-medium transition-colors',
                      isActive
                        ? 'text-primary underline underline-offset-4'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          aria-label={isDark() ? 'Lightmode' : 'Darkmode'}
          className="group rounded-full"
          onClick={() => setIsDark(!isDark())}
        >
          {isDark() ? (
            <IconSunFilled className="transition duration-300 group-hover:rotate-12" />
          ) : (
            <IconMoonFilled className="transition duration-300 group-hover:rotate-12" />
          )}
        </Button>

        {user ? (
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary rounded-full"
            >
              <IconBellFilled size={20} />
            </Button>

            <Link to="/profile">
              <Avatar className="border-border h-9 w-9 border transition-transform hover:scale-105">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild className="px-6">
              <Link to="/signin" className="flex items-center gap-2">
                Sign In
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <IconArrowBigRightLinesFilled size={18} />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
