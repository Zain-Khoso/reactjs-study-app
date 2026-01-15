// Component Imports.
import { Skeleton } from '@/components/ui/skeleton';

// Loading Skeleton for Navbar.
export default function NavbarSkeleton() {
  return (
    <nav className="border-b-muted bg-background/80 sticky top-0 z-50 mx-auto mb-12 flex w-full max-w-7xl items-center justify-between border-b p-4 backdrop-blur-md">
      <div className="flex items-center gap-8">
        <Skeleton className="h-9 w-32 rounded-lg" />

        <ul className="hidden items-center gap-6 md:flex">
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>
              <Skeleton className="bg-foreground/5 h-4 w-20 rounded-md" />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <Skeleton className="bg-foreground/5 h-9 w-9 rounded-full" />

        <div className="flex items-center gap-4">
          <Skeleton className="bg-foreground/5 h-9 w-9 rounded-full" />

          <Skeleton className="bg-foreground/10 h-9 w-9 rounded-full md:w-28 md:rounded-md" />
        </div>
      </div>
    </nav>
  );
}
