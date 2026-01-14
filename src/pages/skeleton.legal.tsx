// Lib Imports.
import { motion } from 'motion/react';

// Component Imports.
import { Skeleton } from '@/components/ui/skeleton';

// Loading skeleton for terms-and-conditions & privacy-policy pages.
export default function LegalSkeleton() {
  return (
    <motion.main
      className="mx-auto mb-24 max-w-7xl flex-col space-y-16 px-4 md:mb-32 md:space-y-24"
      key="legal-skeleton"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.4 }}
    >
      <Skeleton className="h-10 w-64 md:h-12 md:w-80" />

      <div className="space-y-12">
        {[1, 2, 3, 4, 5].map((item) => (
          <article key={item} className="space-y-4">
            <Skeleton className="h-7 w-48" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[40%]" />
            </div>
          </article>
        ))}
      </div>
    </motion.main>
  );
}
