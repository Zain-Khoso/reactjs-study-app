// Component Imports.
import NavbarSkeleton from './navbar.skeleton';
import ArenaCardSkeleton from './arena-card.skeleton';
import { Skeleton } from '@/components/ui/skeleton';

// Loading skeleton for Arenas page.
export default function ArenasSkeleton() {
  return (
    <>
      <NavbarSkeleton />

      <div className="mx-auto max-w-7xl animate-pulse space-y-12 px-6 pb-32 lg:px-0">
        <section className="space-y-2">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-4 w-64" />
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-2 w-2 rounded-full" />
              <Skeleton className="h-5 w-20" />
            </div>
            <Skeleton className="h-6 w-32 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <ArenaCardSkeleton key={i} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <Skeleton className="h-5 w-32" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <ArenaCardSkeleton key={i} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
