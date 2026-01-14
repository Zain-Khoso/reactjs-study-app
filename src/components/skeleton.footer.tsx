// Component Imports.
import { Skeleton } from './ui/skeleton';

// Loading Skeleton for general layout footer.
export function FooterSkeleton() {
  return (
    <footer className="border-muted mx-auto max-w-7xl border-t px-4 py-12">
      <div className="border-muted flex flex-col justify-between gap-12 border-b pb-12 md:flex-row md:flex-wrap">
        <div className="flex-[1.8] space-y-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-4 w-64" />
        </div>

        {[1, 2, 3, 4].map((col) => (
          <div key={col} className="flex flex-1 flex-col gap-4">
            <Skeleton className="h-5 w-20" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Skeleton className="h-4 w-48" />
      </div>
    </footer>
  );
}
