// Component Imports.
import { Skeleton } from '../ui/skeleton';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';

// Loading skeleton for the arena card component.
export default function ArenaCardSkeleton() {
  return (
    <Card className="h-full w-full">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <Skeleton className="h-12 w-12 rounded-lg" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-between">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-12" />
        </div>
        <div className="flex w-full items-center justify-between">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-16" />
        </div>
      </CardFooter>
    </Card>
  );
}
