// Lib Imports.
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'motion/react';

// Assets.
import { IconArrowBigRightLinesFilled, IconSunFilled, IconMoonFilled } from '@tabler/icons-react';

// Hooks.
import { useTheme } from '@/hooks/useTheme';

// Component Imports.
import BrandLogo from './ui/brand-logo';
import { Button } from './ui/button';

// Data.
const navLinks = [
  { label: 'Creator', to: 'https://linkedin.com/in/zain-khoso', external: true },
  {
    label: 'Source Code',
    to: 'https://github.com/zain-khoso/reactjs-study-app',
    external: true,
  },
  { label: 'Live Arenas', to: '/#arenas', hash: true },
  { label: 'Assessment', to: '/#assessment', hash: true },
];

// Navbar Component.
export default function Navbar() {
  const { isDark, setIsDark } = useTheme();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="border-b-muted mx-auto mb-12 flex w-full max-w-7xl items-center justify-between border-b p-4"
    >
      <BrandLogo />

      <ul className="hidden items-center gap-6 md:flex">
        {navLinks.map((item, index) => (
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
                className="text-muted-foreground transition-colors hover:text-purple-500"
              >
                {item.label}
              </HashLink>
            ) : (
              <Link
                to={item.to}
                target={item.external ? '_blank' : undefined}
                className="text-muted-foreground transition-colors hover:text-purple-500"
              >
                {item.label}
              </Link>
            )}
          </motion.li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button
          variant="outline"
          size="icon"
          aria-label={isDark() ? 'Lightmode' : 'Darkmode'}
          className="group"
          onClick={() => setIsDark(!isDark())}
        >
          {isDark() ? (
            <IconSunFilled className="transition duration-300 group-hover:rotate-30" />
          ) : (
            <IconMoonFilled className="transition duration-300 group-hover:rotate-30" />
          )}
        </Button>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button asChild>
            <Link to="/signin" className="flex items-center gap-2">
              Sign In
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <IconArrowBigRightLinesFilled />
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
