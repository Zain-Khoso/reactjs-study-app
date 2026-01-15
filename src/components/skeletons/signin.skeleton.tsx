// Componet Imports.
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

// Loading skeleton for Sign In page.
export default function SignInSkeleton() {
  return (
    <div className="bg-background relative grid min-h-screen w-full place-items-center overflow-hidden">
      <div className="bg-primary/5 absolute -top-[15%] left-[5%] aspect-square h-64 w-64 rounded-full blur-2xl md:left-[15%] md:h-96 md:w-96" />
      <div className="bg-primary/5 absolute -right-[5%] -bottom-[10%] aspect-square h-72 w-72 rounded-full blur-2xl md:right-[10%] md:h-120 md:w-120" />

      <div className="z-10 w-full">
        <Card className="border-foreground/10 bg-background/3 mx-auto w-full max-w-[90%] shadow-2xl backdrop-blur-xs sm:max-w-90">
          <CardHeader className="flex flex-col items-center gap-6">
            <Skeleton className="bg-primary/10 h-10 w-10 rounded-xl" />

            <div className="flex flex-col items-center space-y-3">
              <Skeleton className="bg-background/10 h-8 w-32 rounded-md" />

              <Skeleton className="bg-background/5 h-4 w-24 rounded-md" />
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="bg-background/5 h-10 w-full rounded-md" />
            ))}
          </CardContent>

          <CardFooter className="flex justify-center bg-transparent pb-6">
            <Skeleton className="bg-background/5 h-4 w-28 rounded-md" />
          </CardFooter>
        </Card>
      </div>

      <div className="absolute bottom-8 flex w-full justify-center">
        <Skeleton className="bg-background/5 h-4 w-48 rounded-md" />
      </div>
    </div>
  );
}
