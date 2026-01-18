// Component Imports.
import NavbarSkeleton from './navbar.skeleton';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Leading skeleton for the quiz page.
export default function QuizSkeleton() {
  return (
    <>
      <NavbarSkeleton />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-8 md:px-8 lg:h-[calc(100dvh-118px)] lg:grid-cols-[1fr_380px] xl:px-0">
        <div className="space-y-8">
          <Card className="py-4">
            <CardContent className="flex flex-col items-center space-y-4 py-6!">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-12 w-48" />
              <Skeleton className="h-2 w-full" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-12" />
                  <Skeleton className="h-6 w-20" />
                </div>
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-16 w-full rounded-md" />
            ))}
          </div>
        </div>

        <aside>
          <Card className="h-full">
            <CardHeader className="border-border/50 space-y-2 border-b">
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <Skeleton className="h-32 w-full rounded-xl" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-24" />
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-14 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </>
  );
}
