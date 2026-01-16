// Components.
import NavbarSkeleton from './navbar.skeleton';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';

// Loading skeleton for Profile page.
export default function ProfileSkeleton() {
  return (
    <>
      <NavbarSkeleton />

      <main className="mx-auto max-w-7xl space-y-8 px-4 pb-8 xl:px-0">
        <Card>
          <CardContent className="flex flex-col items-center gap-6 pt-6 md:flex-row md:items-start">
            <Skeleton className="h-24 w-24 rounded-full" />

            <div className="w-full flex-1 space-y-4">
              <div className="flex flex-col items-center space-y-2 md:items-start">
                <Skeleton className="h-8 w-48" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-32" />
                </div>
              </div>
              <Skeleton className="mx-auto h-5 w-40 md:mx-0" />
            </div>

            <div className="flex flex-col items-center space-y-2 md:items-end">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-28" />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <Card className="min-h-100">
              <CardHeader className="flex flex-row items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent className="flex min-h-75 items-center justify-center">
                <Skeleton className="h-56 w-56 rounded-full" />
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-3 w-40" />
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-4 w-12" />
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="bg-muted/10 border-none shadow-none">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <Skeleton className="h-10 w-10 rounded-lg" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-3 w-10" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <Skeleton className="h-4 w-36" />
              </CardHeader>
              <CardContent className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-12" />
                    </div>
                    <Skeleton className="h-2 w-full" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Skeleton className="h-4 w-28" />
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex justify-between border-b pb-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
