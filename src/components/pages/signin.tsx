// Lib Imports.
import { Link } from 'react-router';
import { motion } from 'motion/react';

// Asset Imports.
import {
  IconBoltFilled,
  IconBrandDiscordFilled,
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
  IconBrandXFilled,
  IconShieldHalfFilled,
  IconArrowBigRightLinesFilled,
} from '@tabler/icons-react';

// Util Imports.
import { signInPageMotions as motionVariants } from '@/lib/motions';
import { signIn } from '@/lib/auth-client';

// Hook Imports.
import { useDocTitle } from '@/hooks/useDocTitle';

// Component Imports.
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { H3, Muted } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

// Data.
const SSOs = [
  {
    icon: IconBrandGoogleFilled,
    label: 'Google',
    action: () => signIn('google'),
  },
  {
    icon: IconBrandDiscordFilled,
    label: 'Discord',
    action: () => signIn('discord'),
  },
  {
    icon: IconBrandFacebookFilled,
    label: 'Facebook',
    action: () => signIn('facebook'),
  },
  {
    icon: IconBrandXFilled,
    label: 'X',
    action: () => signIn('x'),
  },
];

// User Authentication Page.
export default function SignInPage() {
  useDocTitle('Join Preplus | Competitive Assessment Platform');

  return (
    <div className="relative grid min-h-screen w-full place-items-center overflow-hidden">
      <motion.div
        variants={motionVariants.upperCircle}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="bg-primary/5 absolute -top-[15%] left-[5%] aspect-square h-64 w-64 rounded-full transition-all md:left-[15%] md:h-96 md:w-96"
      />

      <motion.div
        variants={motionVariants.lowerCircle}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="bg-primary/5 absolute -right-[5%] -bottom-[10%] aspect-square h-72 w-72 rounded-full transition-all md:right-[10%] md:h-120 md:w-120"
      />

      <motion.div
        variants={motionVariants.ssoCard}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="z-10 w-full"
      >
        <Card className="border-foreground/10 bg-foreground/3 mx-auto w-full max-w-[90%] shadow-2xl backdrop-blur-xs sm:max-w-90">
          <CardHeader className="flex flex-col items-center gap-6">
            <div className="bg-primary/20 border-primary/40 flex items-center justify-center rounded-xl border p-2">
              <IconBoltFilled size={24} className="text-primary" />
            </div>

            <div className="space-y-2">
              <Link to="/">
                <H3 className="text-center font-bold">PrepPlus</H3>
              </Link>
              <Muted className="text-center">Join the Arena.</Muted>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {SSOs.map(({ icon: Icon, label, action }, i) => (
              <motion.div
                key={`sso-${label}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                  delay: 1.4 + i * 0.12,
                }}
              >
                <Button
                  variant={'secondary'}
                  className="group relative flex h-auto w-full gap-2 py-2"
                  onClick={action}
                >
                  <Icon />
                  Continue with {label}
                  <IconArrowBigRightLinesFilled className="text-primary absolute top-1/2 right-4 -translate-x-4 -translate-y-1/2 opacity-0 transition duration-250 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                </Button>
              </motion.div>
            ))}
          </CardContent>

          <CardFooter className="bg-transparent">
            <Link
              to="/privacy-policy"
              className="text-muted-foreground group flex w-full items-center justify-center gap-2"
            >
              <IconShieldHalfFilled size={20} />
              Privacy Policy
            </Link>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.footer
        variants={motionVariants.footer}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="absolute bottom-8 w-full"
      >
        <Muted className="text-center">
          &copy; {new Date().getFullYear()} PrepPulse. All rights reserved.
        </Muted>
      </motion.footer>
    </div>
  );
}
