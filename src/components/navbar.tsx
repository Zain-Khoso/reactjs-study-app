// Lib Imports.
import { Link } from 'react-router';

// Component Imports.
import BrandLogo from './ui/brand-logo';
import { Button } from './ui/button';

// Navbar Component.
export default function Navbar() {
  return (
    <nav className="border-b-muted flex w-full items-center justify-between border-b p-4">
      <BrandLogo />

      <ul className="hidden items-center gap-4 md:flex">
        <li>
          <Link to="/arenas" className="text-muted-foreground">
            Arena
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" className="text-muted-foreground">
            Leaderboard
          </Link>
        </li>
        <li>
          <Link to="/ranking" className="text-muted-foreground">
            Ranking
          </Link>
        </li>
        <li>
          <Link to="/profile" className="text-muted-foreground">
            Profile
          </Link>
        </li>
      </ul>

      <Button>Login</Button>
    </nav>
  );
}
