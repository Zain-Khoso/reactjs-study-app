// Lib Imports.
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { motion } from 'motion/react';

// Component Imports.
import { H2, H3, P } from '@/components/ui/typography';

// Privacy Policy of the application.
export default function PrivacyPolicyPage() {
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Preplus</title>
        <meta name="title" content="Privacy Policy | Your Data at Preplus" />
        <meta
          name="description"
          content="Learn how Preplus handles your SSO authentication data and performance metrics. We prioritize your privacy and data security."
        />
      </Helmet>

      <motion.main
        key={pathname}
        className="mx-auto mb-24 max-w-7xl flex-col space-y-16 px-4 md:mb-32 md:space-y-24"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <H2>Privacy Policy</H2>

        <article className="space-y-4">
          <H3>1. Information We Collect</H3>
          <P>
            Preplus collects basic profile information when you authenticate via Third-Party SSO
            (Google or Discord). This includes your display name, email address, and profile
            picture. We also collect "Performance Data," which consists of your quiz responses,
            completion times, and streak history to calculate your global ranking.
          </P>
        </article>

        <article className="space-y-4">
          <H3>2. Use of Data</H3>
          <P>
            Your data is used solely to maintain the competitive integrity of the Preplus Arena. We
            use your profile information to personalize your dashboard and your performance metrics
            to generate live leaderboards. Your email is used only for essential account-related
            communication and will never be sold to third parties.
          </P>
        </article>

        <article className="space-y-4">
          <H3>3. Data Retention & Deletion</H3>
          <P>
            We retain your account information and battle history as long as your account remains
            active. You have the right to request a full deletion of your data at any time. Upon
            receiving a deletion request at our contact email, all associated records, including
            leaderboard entries and SSO tokens, will be permanently removed from our database.
          </P>
        </article>

        <article className="space-y-4">
          <H3>4. Cookies and Local Storage</H3>
          <P>
            Preplus utilizes local storage and essential cookies to maintain your active session and
            ensure real-time synchronization with our game servers. These technical "Strictly
            Necessary" cookies are required for the Battle Arena to function and do not track your
            activity on external websites.
          </P>
        </article>

        <article className="space-y-4">
          <H3>5. Data Security</H3>
          <P>
            As a personal project, we prioritize the safety of your information by utilizing
            industry-standard encryption and secure SSO protocols. While we implement robust
            measures to protect against unauthorized access in accordance with Pakistan’s data
            protection standards, no transmission over the internet can be guaranteed as 100%
            secure.
          </P>
        </article>

        <article className="space-y-4">
          <H3>6. Third-Party Services</H3>
          <P>
            Preplus integrates with third-party providers for authentication (Google/Discord) and
            hosting (Vercel). These services may collect information as per their own privacy
            policies. We encourage users to review the privacy statements of these providers to
            understand how they handle data outside of the Preplus environment.
          </P>
        </article>

        <article className="space-y-4">
          <H3>7. Contact Information</H3>
          <P>
            If you have any questions regarding this Privacy Policy or wish to exercise your rights
            to access or delete your personal data, please contact the developer directly at
            zain.khoso.dev@gmail.com. We aim to respond to all data-related inquiries within 72
            hours.
          </P>
        </article>
      </motion.main>
    </>
  );
}
