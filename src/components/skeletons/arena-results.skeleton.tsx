// Component Imports.
import { Skeleton } from '@/components/ui/skeleton';

// Loading skeleton for Arena Results Page.
export default function ArenaResultsSkeleton() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center space-y-8 px-4 pb-8 lg:px-0">
      <section className="flex h-60 w-full items-end justify-center gap-4 sm:gap-8">
        <div className="flex flex-col items-center gap-3">
          <Skeleton className="h-16 w-16 rounded-full" />
          <Skeleton className="h-16 w-24 rounded-t-lg" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <Skeleton className="h-20 w-20 rounded-full" />
          <Skeleton className="h-32 w-32 rounded-t-xl" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <Skeleton className="h-14 w-14 rounded-full" />
          <Skeleton className="h-12 w-20 rounded-t-lg" />
        </div>
      </section>

      <div className="w-full max-w-3xl">
        <div className="bg-card rounded-xl border p-6 shadow-sm">
          <div className="flex flex-col items-center space-y-6">
            <Skeleton className="h-8 w-48" />
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col items-center space-y-4 rounded-xl border p-4">
                  <Skeleton className="h-12 w-12 rounded-xl" />
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
        <Skeleton className="h-10 flex-1 rounded-md" />
        <Skeleton className="h-10 flex-1 rounded-md" />
      </div>
    </main>
  );
}
