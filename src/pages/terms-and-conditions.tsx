// Lib Imports.
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

// Component Imports.
import { H2, H3, P } from '@/components/ui/typography';

// Terms and Conditions of the application.
export default function TermsAndConditionsPage() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Preplus</title>
        <meta name="title" content="Terms and Conditions | Preplus Arena Rules" />
        <meta
          name="description"
          content="Review the official rules, competitive integrity policies, and anti-cheat protocols for the Preplus real-time testing arena."
        />
      </Helmet>

      <motion.main
        className="mx-auto mb-24 max-w-7xl flex-col space-y-16 px-4 md:mb-32 md:space-y-24"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <H2>Terms and Conditions</H2>

        <article className="space-y-4">
          <H3>1. Agreement to Terms</H3>
          <P>
            By accessing Preplus, you agree to abide by these Terms of Service. This platform is a
            personal educational project operated by zain.khoso.dev@gmail.com. These terms are
            governed by the laws of the Islamic Republic of Pakistan, including the Prevention of
            Electronic Crimes Act (PECA).
          </P>
        </article>

        <article className="space-y-4">
          <H3>2. Educational Content Disclaimer</H3>
          <P>
            Preplus provides a competitive testing environment for educational purposes. While we
            strive for accuracy across our 100k+ MCQ dataset, all content is provided "as-is." We do
            not guarantee that all questions are free from error or up to date with the latest
            academic or competitive standards.
          </P>
        </article>

        <article className="space-y-4">
          <H3>3. Competitive Integrity & Anti-Cheat</H3>
          <P>
            To maintain a fair "Proof of Knowledge" environment, users are prohibited from using
            bots, scripts, or automated tools to answer questions. Any attempt to circumvent our
            real-time synchronization or manipulate server-side timers will result in a permanent
            ban of your SSO-linked account.
          </P>
        </article>

        <article className="space-y-4">
          <H3>4. Age Suitability & Safety</H3>
          <P>
            Preplus is an open educational resource with no strict age restriction. However, users
            under the age of 13 are encouraged to use the platform under parental supervision,
            particularly when engaging with the global live chat features available in the Battle
            Lobbies.
          </P>
        </article>

        <article className="space-y-4">
          <H3>5. Data Collection & SSO</H3>
          <P>
            We use Third-Party SSO (Google, Discord, etc.) to verify identity and track rankings. By
            using Preplus, you consent to the collection of your performance data for the purpose of
            generating global leaderboards and percentile rankings accessible to the public.
          </P>
        </article>

        <article className="space-y-4">
          <H3>6. Limitation of Liability</H3>
          <P>
            Preplus is not liable for any data loss, rank discrepancy due to internet latency, or
            interruption of service. As an independent project, we reserve the right to reset
            leaderboards or modify scoring algorithms at any time to ensure continued competitive
            balance.
          </P>
        </article>

        <article className="space-y-4">
          <H3>7. Contact & Legal Inquiries</H3>
          <P>
            For any legal inquiries, data removal requests, or reports of content inaccuracy, please
            contact the developer directly at zain.khoso.dev@gmail.com.
          </P>
        </article>
      </motion.main>
    </>
  );
}
