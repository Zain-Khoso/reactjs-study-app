// Util Imports.
import { cn } from '@/lib/utils';

// Component Imports.
import { Small } from './typography';

// Types.
type Props = {
  isLive?: boolean;
};

// Quiz state indicator component.
export default function LivePulse({ isLive = false }: Props) {
  return (
    <div className="flex items-center gap-1">
      <span
        className={cn('block h-3 w-3 rounded-full', isLive ? 'bg-primary' : 'bg-muted-foreground')}
      ></span>

      {isLive ? <Small className="text-primary font-semibold uppercase">Live</Small> : <></>}
    </div>
  );
}
