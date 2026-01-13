// Lib Imports.
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';

// Assets.
import { IconArrowBigRightLinesFilled, IconSunFilled, IconMoonFilled } from '@tabler/icons-react';

// Hooks.
import { useTheme } from '@/hooks/useTheme';

// Component Imports.
import BrandLogo from './ui/brand-logo';
import { Button } from './ui/button';

// Navbar Component.
export default function Navbar() {
  const { isDark, setIsDark } = useTheme();

  return (
    <nav className="border-b-muted mx-auto mb-12 flex w-full max-w-7xl items-center justify-between border-b p-4">
      <BrandLogo />

      <ul className="hidden items-center gap-6 md:flex">
        <li>
          <Link
            to="https://linkedin.com/in/zain-khoso"
            target="_blank"
            className="text-muted-foreground"
          >
            Creator
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/zain-khoso/reactjs-study-app"
            target="_blank"
            className="text-muted-foreground"
          >
            Source Code
          </Link>
        </li>
        <li>
          <HashLink to="/#arenas" smooth className="text-muted-foreground">
            Live Arenas
          </HashLink>
        </li>
        <li>
          <HashLink to="/#assessment" smooth className="text-muted-foreground">
            Assessment
          </HashLink>
        </li>
      </ul>

      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button
          variant="outline"
          size="icon"
          aria-label={isDark() ? 'Lightmode' : 'Darkmode'}
          onClick={() => setIsDark(!isDark())}
        >
          {isDark() ? <IconSunFilled /> : <IconMoonFilled />}
        </Button>

        <Button asChild>
          <Link to="/signin">
            Sign In <IconArrowBigRightLinesFilled />
          </Link>
        </Button>
      </div>
    </nav>
  );
}
