// Component Imports.
import BrandLogo from './ui/brand-logo';
import { Button } from './ui/button';

// Navbar Component.
export default function Navbar() {
  return (
    <nav className="border-b-muted flex w-full items-center justify-between border-b p-4">
      <BrandLogo />

      <Button>Login</Button>
    </nav>
  );
}
