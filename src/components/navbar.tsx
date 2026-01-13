// Lib Imports.
import { Link } from 'react-router';

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
    <nav className="border-b-muted flex w-full items-center justify-between border-b p-4">
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
          <Link to="/#arenas" className="text-muted-foreground">
            Live Arenas
          </Link>
        </li>
        <li>
          <Link to="/#assessment" className="text-muted-foreground">
            Assessment
          </Link>
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
