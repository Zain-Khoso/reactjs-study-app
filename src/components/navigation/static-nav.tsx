// Lib Imports.
import { Link } from 'react-router';

// Component Imports.
import BrandLogo from '../ui/brand-logo';
import { Button } from '../ui/button';
import { NavLink, ThemeToggle } from './navlink-and-theme-toggle';

// Data.
const links = [
  { label: 'Arena', href: '/#arenas' },
  { label: 'Topics', href: '/#subjects' },
  { label: 'Leaderboard', href: '/#assessment' },
  { label: 'Mission', href: '/#about' },
];

// Navbar for static pages.
export default function Navbar() {
  return (
    <nav className="border-b-muted bg-background/80 sticky top-0 z-50 mx-auto mb-12 flex w-full max-w-7xl items-center justify-between border-b p-4 backdrop-blur-md">
      <section className="flex items-center gap-8">
        <BrandLogo />

        <ul className="hidden items-center gap-6 md:flex">
          {links.map(({ href, label }) => (
            <NavLink key={`navbar-navlink-${label}-${href}`} href={href} label={label} />
          ))}
        </ul>
      </section>

      <section className="flex items-center gap-2">
        <ThemeToggle />

        <div className="space-x-2">
          <Button asChild variant="link">
            <Link to="/login">Login</Link>
          </Button>

          <Button asChild>
            <Link to="/arenas">Take a Quiz</Link>
          </Button>
        </div>
      </section>
    </nav>
  );
}
