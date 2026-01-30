// Lib Imports.
import { Link } from 'react-router';

// Util Imports.
import { getInitials } from '@/lib/utils';

// Component Imports.
import BrandLogo from '../ui/brand-logo';
import { NavLink, ThemeToggle } from './components';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

// Types.
import type { User } from 'better-auth';

// Data.
const links = [
  { label: 'Arenas', href: '/dashboard/arenas' },
  { label: 'Practice', href: '/practice' },
  { label: 'Rankings', href: '/dashboard/leaderboard' },
  { label: 'Achievements', href: '/dashboard' },
];

// Navbar for dashboard pages.
export default function Navbar({ user }: { user: User }) {
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

        <Avatar asChild>
          <Link to="/dashboard">
            <AvatarImage alt={`${user.name}'s Avatar`} src={user.image || undefined} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Link>
        </Avatar>
      </section>
    </nav>
  );
}
