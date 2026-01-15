// Component Imports.
import { Skeleton } from '@/components/ui/skeleton';

// Loading Skeleton for Navbar.
export default function NavbarSkeleton() {
  return (
    <nav className="border-muted mx-auto mb-12 flex w-full max-w-7xl items-center justify-between border-b p-4">
      <Skeleton className="h-10 w-32 rounded-md" />

      <ul className="hidden items-center gap-6 md:flex">
        {[1, 2, 3, 4].map((i) => (
          <li key={i}>
            <Skeleton className="h-4 w-20" />
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <Skeleton className="h-10 w-10 rounded-md" />
        <Skeleton className="h-10 w-28 rounded-md" />
      </div>
    </nav>
  );
}
