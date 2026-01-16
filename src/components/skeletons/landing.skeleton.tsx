// Lib Imports.
import { motion } from 'motion/react';

// Component Imports.
import { Skeleton } from '@/components/ui/skeleton';
import NavbarSkeleton from './navbar.skeleton';
import FooterSkeleton from './footer.skeleton';

// Loading Skeleton for Landing Page.
export default function LandingSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.4 }}
    >
      <NavbarSkeleton />

      <header className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-4 pb-4 md:flex-row md:justify-between md:py-12 lg:gap-36">
        <div className="flex w-full flex-1 flex-col gap-6 lg:gap-8">
          <div className="space-y-4">
            <Skeleton className="h-12 w-[90%] md:h-16" />
            <Skeleton className="h-12 w-[60%] md:h-16" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[85%]" />
          </div>

          <div className="flex w-full gap-4">
            <Skeleton className="h-12 flex-1 rounded-md" />
            <Skeleton className="h-12 flex-1 rounded-md" />
          </div>
        </div>

        <div className="w-full md:flex-1">
          <div className="border-muted bg-card/50 space-y-8 rounded-xl border p-6">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>

            <div className="space-y-4">
              <Skeleton className="mx-auto h-3 w-16" />
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-16 flex-1 rounded-lg" />
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-6 w-48" />
              </div>
              <Skeleton className="h-3 w-40" />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto my-24 flex max-w-7xl flex-col gap-24 px-4 md:my-32 md:gap-48">
        <section className="space-y-12">
          <div className="space-y-4 md:flex md:flex-col md:items-center">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-4 w-full max-w-2xl" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] place-items-center gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border-muted h-80 w-full space-y-4 rounded-xl border p-4">
                <Skeleton className="h-40 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="block items-center gap-8 md:flex lg:gap-16">
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <Skeleton className="h-10 w-48" />
              <Skeleton className="h-4 w-full" />
            </div>

            <ul className="flex flex-col gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-8 w-8 shrink-0 rounded-full" />
                  <div className="w-full space-y-2">
                    <Skeleton className="h-5 w-40" />
                    <Skeleton className="h-4 w-[90%]" />
                  </div>
                </div>
              ))}
            </ul>
          </div>

          <div className="hidden flex-1 flex-col md:flex">
            <div className="border-muted space-y-6 rounded-xl border p-6">
              <Skeleton className="h-7 w-40" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="border-muted flex items-center gap-3 rounded-xl border p-4"
                  >
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                    <Skeleton className="ml-auto h-6 w-12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSkeleton />
    </motion.div>
  );
}
