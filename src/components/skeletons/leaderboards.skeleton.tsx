// Component Imports.
import NavbarSkeleton from './navbar.skeleton';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Loading skeleton for the Leadboards page.
export default function LeaderboardSkeleton() {
  return (
    <>
      <NavbarSkeleton />

      <div className="mx-auto max-w-7xl animate-pulse space-y-8 px-4 pb-32">
        <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-4 w-64" />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Skeleton className="h-10 w-50 lg:w-64" />
            <Skeleton className="h-10 w-48" />
          </div>
        </section>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-6 w-40" />
          </CardHeader>

          <CardContent className="p-0">
            <div className="flex items-end justify-center gap-4 border-b py-12 sm:gap-12">
              <div className="flex flex-col items-center gap-3">
                <Skeleton className="h-20 w-20 rounded-full" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>

              <div className="mb-6 flex flex-col items-center gap-3">
                <Skeleton className="h-24 w-24 rounded-full" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-3 w-20" />
              </div>

              <div className="flex flex-col items-center gap-3">
                <Skeleton className="h-20 w-20 rounded-full" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>

            <ul className="divide-border divide-y">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <Skeleton className="h-4 w-4" />
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-20" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="border-border bg-background/90 fixed right-0 bottom-0 left-0 z-50 border-t backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-6">
              <div className="hidden space-y-2 border-r pr-6 sm:block">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-6 w-10" />
              </div>
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="hidden space-y-2 sm:block">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
