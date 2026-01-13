// Lib Imports.
import { Link } from 'react-router';

// Component Imports.
import BrandLogo from './ui/brand-logo';
import { Muted } from './ui/typography';

export default function Footer() {
  return (
    <footer className="border-muted mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t px-4 py-8">
      <section className="border-muted flex flex-col justify-between gap-8 border-b pb-8 md:flex-row md:flex-wrap md:landscape:gap-16">
        <article className="flex-[1.8] space-y-4">
          <BrandLogo />

          <Muted>Real-time competitive testing platform for professionals worldwide.</Muted>
        </article>

        <ul className="flex flex-1 flex-col gap-2">
          <li>Platform</li>
          <li>
            <Muted>
              <Link to="/arenas">Live Arenas</Link>
            </Muted>
          </li>
          <li>
            <Muted>
              <Link to="/leaderboards">Leaderboards</Link>
            </Muted>
          </li>
        </ul>

        <ul className="flex flex-1 flex-col gap-2">
          <li>Support</li>
          <li>
            <Muted>
              <Link to="mailto:zain.khoso.dev@gmail.com" target="_blank">
                Contact Me
              </Link>
            </Muted>
          </li>
          <li>
            <Muted>
              <Link to="https://github.com/Zain-Khoso/reactjs-study-app/wiki" target="_blank">
                Community
              </Link>
            </Muted>
          </li>
        </ul>

        <ul className="flex flex-1 flex-col gap-2">
          <li>Legal</li>
          <li>
            <Muted>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </Muted>
          </li>
          <li>
            <Muted>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </Muted>
          </li>
        </ul>

        <ul className="flex flex-1 flex-col gap-2">
          <li>Creator</li>
          <li>
            <Muted>
              <Link to="https://linkedin.com/zain-khoso" target="_blank">
                Linkedin
              </Link>
            </Muted>
          </li>
          <li>
            <Muted>
              <Link to="https://github.com/zain-khoso" target="_blank">
                Github
              </Link>
            </Muted>
          </li>
          <li>
            <Muted>
              <Link to="https://fiverr.com/zainkhosodev" target="_blank">
                Fiverr
              </Link>
            </Muted>
          </li>
        </ul>
      </section>

      <Muted className="text-center">
        &copy; {new Date().getFullYear()} Preplus. All rights reserved.
      </Muted>
    </footer>
  );
}
