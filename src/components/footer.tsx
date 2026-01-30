// Lib Imports.
import { Link } from 'react-router';
import { motion } from 'motion/react';

// Component Imports.
import BrandLogo from './ui/brand-logo';
import { Muted } from './ui/typography';

// Data.
const links = [
  {
    title: 'Platform',
    links: [
      { label: 'Live Arenas', to: '/dashboard/arenas', external: false },
      { label: 'Leaderboards', to: '/dashboard/leaderboard', external: false },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Me', to: 'mailto:zain.khoso.dev@gmail.com', external: true },
      {
        label: 'Community',
        to: 'https://github.com/Zain-Khoso/reactjs-study-app/wiki',
        external: true,
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms and Conditions', to: '/terms-and-conditions', external: false },
      { label: 'Privacy Policy', to: '/privacy-policy', external: false },
    ],
  },
  {
    title: 'Creator',
    links: [
      { label: 'Linkedin', to: 'https://linkedin.com/in/zain-khoso', external: true },
      { label: 'Github', to: 'https://github.com/zain-khoso', external: true },
      { label: 'Fiverr', to: 'https://fiverr.com/zainkhosodev', external: true },
    ],
  },
];

// Footer for General layout.
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-muted mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t px-4 py-8"
    >
      <section className="border-muted flex flex-col justify-between gap-8 border-b pb-8 md:flex-row md:flex-wrap md:landscape:gap-16">
        <article className="flex-[1.8] space-y-4">
          <BrandLogo />

          <Muted>Real-time competitive testing platform for professionals worldwide.</Muted>
        </article>

        {links.map((col, i) => (
          <motion.ul
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }}
            viewport={{ once: true }}
            className="flex flex-1 flex-col gap-2"
          >
            <li className="text-foreground">{col.title}</li>
            {col.links.map((link) => (
              <motion.li
                key={link.label}
                className="text-muted-foreground"
                whileHover={{ x: 5, color: 'var(--primary)' }}
                transition={{ type: 'tween', duration: 0.2 }}
              >
                <Link
                  to={link.to}
                  target={link.external ? '_blank' : '_self'}
                  className="block w-full"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        ))}
      </section>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <Muted className="text-center">
          &copy; {new Date().getFullYear()} Preplus. All rights reserved.
        </Muted>
      </motion.div>
    </motion.footer>
  );
}
