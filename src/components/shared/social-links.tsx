import { Mail } from "lucide-react";
import type { ReactNode } from "react";
import type { ProfileSocialLinks } from "@/data/profile";

type SocialLinkItem = {
  href: string;
  label: string;
  external: boolean;
  icon: ReactNode;
};

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .297a12 12 0 0 0-3.79 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.806 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12.004 12.004 0 0 0 12 .297"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.456v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.729V1.729C24 .774 23.205 0 22.225 0z"
      />
    </svg>
  );
}

export function SocialLinks({ links }: { links: ProfileSocialLinks }) {
  const items: SocialLinkItem[] = [];

  if (links.github) {
    items.push({
      href: links.github,
      label: "GitHub profile",
      external: true,
      icon: <GitHubIcon />,
    });
  }

  if (links.linkedin) {
    items.push({
      href: links.linkedin,
      label: "LinkedIn profile",
      external: true,
      icon: <LinkedInIcon />,
    });
  }

  if (links.email) {
    items.push({
      href: `mailto:${links.email}`,
      label: "Email",
      external: false,
      icon: <Mail className="size-5" aria-hidden="true" />,
    });
  }

  if (items.length === 0) return null;

  return (
    <ul aria-label="Social links" className="flex items-center gap-1">
      {items.map((item) => (
        <li key={item.label}>
          <a
            aria-label={item.label}
            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            href={item.href}
            rel={item.external ? "noopener noreferrer" : undefined}
            target={item.external ? "_blank" : undefined}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
