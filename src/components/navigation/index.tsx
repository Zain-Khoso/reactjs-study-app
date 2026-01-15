// Lib Imports.
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';

// Assets.
import { IconArrowBigRightLinesFilled } from '@tabler/icons-react';

// Component Imports.
import BrandLogo from '../ui/brand-logo';
import { Button } from '../ui/button';
import { NavLink, ThemeToggle } from './navlink-and-theme-toggle';
import { NotificationsDropdown, UserDropdown } from './dropdowns';

// Types.
type Props = {
  user: any;
};

// Data.
const publicLinks = [
  { label: 'Creator', href: 'https://linkedin.com/in/zain-khoso', hash: false, external: true },
  {
    label: 'Source Code',
    href: 'https://github.com/zain-khoso/reactjs-study-app',
    hash: false,
    external: true,
  },
  { label: 'Live Arenas', href: '/#arenas', hash: true, external: false },
  { label: 'Assessment', href: '/#assessment', hash: true, external: false },
];
const authLinks = [
  { label: 'Dashboard', href: '/dashboard', hash: false, external: false },
  { label: 'Profile', href: '/profile', hash: false, external: false },
  { label: 'Arenas', href: '/arenas', hash: false, external: false },
  { label: 'Leaderboards', href: '/leaderboards', hash: false, external: false },
];

// Navbar for the entire application.
export default function Navbar({ user }: Props) {
  const { pathname } = useLocation();

  const links = user ? authLinks : publicLinks;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delayChildren: 0.1 }}
      className="border-b-muted bg-background/80 sticky top-0 z-50 mx-auto mb-12 flex w-full max-w-7xl items-center justify-between border-b p-4 backdrop-blur-md"
    >
      <div className="flex items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <BrandLogo />
        </motion.div>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link, index) => (
            <NavLink
              key={`${link.label}-${link.href}`}
              index={index}
              isActive={link.href.endsWith(pathname)}
              {...link}
            />
          ))}
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex items-center gap-2"
      >
        <ThemeToggle />

        {user ? (
          <div className="flex items-center gap-4">
            <NotificationsDropdown />

            <UserDropdown user={user} />
          </div>
        ) : (
          <Button asChild className="px-6">
            <Link to="/signin">
              Sign In
              <IconArrowBigRightLinesFilled size={18} />
            </Link>
          </Button>
        )}
      </motion.div>
    </motion.nav>
  );
}
