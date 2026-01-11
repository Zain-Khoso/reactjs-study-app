import { cn } from '@/lib/utils';
import { Small } from './typography';

// Types.
type Props = {
  isLive?: boolean;
};

// Quiz state indicator component.
export default function LivePulse({ isLive = false }: Props) {
  return (
    <div className="flex items-center gap-1">
      {isLive ? <Small className="text-primary">Live</Small> : <></>}

      <span
        className={cn('block h-2 w-2 rounded-full', isLive ? 'bg-primary' : 'bg-foreground')}
      ></span>
    </div>
  );
}
