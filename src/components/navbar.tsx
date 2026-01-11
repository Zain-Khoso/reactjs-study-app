// Assets.
import { IconBoltFilled } from '@tabler/icons-react';

// Component Imports.
import { H3 } from './ui/typography';
import { Button } from './ui/button';

// Navbar Component.
export default function Navbar() {
  return (
    <nav className="border-b-muted flex w-full items-center justify-between border-b p-4">
      <div className="flex items-center gap-2">
        <IconBoltFilled size={32} className="fill-primary" />

        <H3 className="text-primary font-semibold">PrepPulse</H3>
      </div>

      <Button>Login</Button>
    </nav>
  );
}
