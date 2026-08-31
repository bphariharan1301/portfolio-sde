import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { nav, profile } from "@/content/profile";

const social = [
  { label: "GitHub", href: profile.links.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
  {
    label: "Email",
    href: `mailto:${profile.links.email}`,
    Icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium tracking-tight text-fg">
              {profile.name}
            </p>
            <p className="mt-1.5 text-sm text-subtle">
              {profile.role} · {profile.discipline}
            </p>
            <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-wider text-faint">
              {profile.location}
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <p className="font-mono text-eyebrow uppercase text-faint">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-mono text-eyebrow uppercase text-faint">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-2.5">
                {social.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        href.startsWith("mailto:")
                          ? undefined
                          : "noreferrer noopener"
                      }
                      className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                    >
                      <Icon aria-hidden className="h-3.5 w-3.5" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.6875rem] text-faint">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-[0.6875rem] text-faint">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
