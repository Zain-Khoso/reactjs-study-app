// Lib Imports.
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { motion } from 'motion/react';

// Assets.
import {
  IconBoltFilled,
  IconBrandDiscordFilled,
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
  IconBrandXFilled,
  IconShieldHalfFilled,
  IconArrowBigRightLinesFilled,
} from '@tabler/icons-react';

// Component Imports.
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { H3, Muted } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

// Data.
const SSOs = [
  {
    icon: IconBrandGoogleFilled,
    label: 'Google',
  },
  {
    icon: IconBrandDiscordFilled,
    label: 'Discord',
  },
  {
    icon: IconBrandFacebookFilled,
    label: 'Facebook',
  },
  {
    icon: IconBrandXFilled,
    label: 'X',
  },
];

// User Authentication Page.
export default function SignInPage() {
  return (
    <div className="relative grid min-h-screen w-full place-items-center overflow-hidden">
      <Helmet>
        <title>Join Preplus | Competitive Assessment Platform</title>
        <meta name="title" content="Join Preplus | Sign In to the Arena" />
        <meta
          name="description"
          content="Securely access your Preplus account. Sign in or sign up via SSO to join live arenas, track your performance, and compete with the best."
        />

        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: -150, x: -50 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="bg-primary/5 absolute -top-[15%] left-[5%] aspect-square h-64 w-64 rounded-full transition-all md:left-[15%] md:h-96 md:w-96"
      />

      <motion.div
        initial={{ opacity: 0, y: 150, x: 50 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="bg-primary/5 absolute -right-[5%] -bottom-[10%] aspect-square h-72 w-72 rounded-full transition-all md:right-[10%] md:h-120 md:w-120"
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
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
            {SSOs.map(({ icon: Icon, label }, i) => (
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 w-full"
      >
        <Muted className="text-center">
          &copy; {new Date().getFullYear()} PrepPulse. All rights reserved.
        </Muted>
      </motion.footer>
    </div>
  );
}
