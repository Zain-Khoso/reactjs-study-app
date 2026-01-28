// Lib Imports.
import { NavLink as BaseNavLink } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'motion/react';

// Asset Imports.
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';

// Util Imports.
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/hooks';

// Component Imports.
import { Button } from '../ui/button';

// Types.
type NavLinkProps = {
  index: number;
  label: string;
  href: string;
  isActive: boolean;
  external: boolean;
  hash?: boolean;
};

// Theme toggle icon button used in navbar.
function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark() ? 'Lightmode' : 'Darkmode'}
      className="group rounded-full"
      onClick={() => setIsDark(!isDark())}
    >
      {isDark() ? (
        <IconSunFilled className="text-muted-foreground group-hover:text-primary transition duration-300 group-hover:rotate-12" />
      ) : (
        <IconMoonFilled className="text-muted-foreground group-hover:text-primary transition duration-300 group-hover:rotate-12" />
      )}
    </Button>
  );
}

// Navigation Link.
function NavLink({ index, href, label, isActive, external, hash = false }: NavLinkProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index + 0.2 }}
    >
      {hash ? (
        <HashLink
          to={href}
          smooth
          className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
        >
          {label}
        </HashLink>
      ) : (
        <BaseNavLink
          to={href}
          target={external ? '_blank' : '_self'}
          className={cn(
            'hover:text-primary text-sm font-medium transition-colors',
            isActive ? 'text-primary underline underline-offset-4' : 'text-muted-foreground'
          )}
        >
          {label}
        </BaseNavLink>
      )}
    </motion.li>
  );
}

export { type NavLinkProps, ThemeToggle, NavLink };
