// Lib Imports.
import { Link } from 'react-router';

// Assets.
import { IconBoltFilled } from '@tabler/icons-react';

// Component Imports.
import { H3 } from './typography';

// Component.
export default function BrandLogo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <IconBoltFilled size={32} className="fill-primary" />

      <H3 className="text-primary font-semibold">Preplus</H3>
    </Link>
  );
}
