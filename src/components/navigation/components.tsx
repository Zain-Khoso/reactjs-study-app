// Lib Imports.
import { NavLink as BaseNavLink, useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';

// Asset Imports.
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';

// Util Imports.
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/hooks';

// Component Imports.
import { Button } from '../ui/button';

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
function NavLink({ href, label }: { label: string; href: string }) {
  const { pathname } = useLocation();

  const classNames = 'hover:text-primary text-sm font-medium transition-colors';
  const external = href.startsWith('https://');
  const isActive = !external && pathname.endsWith(href);
  const hash = !external && href.includes('#');

  return (
    <li>
      {hash ? (
        <HashLink to={href} smooth className={cn(classNames, 'text-muted-foreground')}>
          {label}
        </HashLink>
      ) : (
        <BaseNavLink
          to={href}
          target={external ? '_blank' : '_self'}
          className={cn(
            classNames,
            isActive ? 'text-primary underline underline-offset-4' : 'text-muted-foreground'
          )}
        >
          {label}
        </BaseNavLink>
      )}
    </li>
  );
}

export { ThemeToggle, NavLink };
