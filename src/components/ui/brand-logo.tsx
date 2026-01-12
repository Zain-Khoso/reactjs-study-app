// Component Imports.
import { IconBoltFilled } from '@tabler/icons-react';
import { H3 } from './typography';

// Component.
export default function BrandLogo() {
  return (
    <div className="flex items-center gap-2">
      <IconBoltFilled size={32} className="fill-primary" />

      <H3 className="text-primary font-semibold">PrepPulse</H3>
    </div>
  );
}
