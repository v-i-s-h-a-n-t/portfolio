import { Container } from "@/components/layout/container";
import { profile } from "@/data/profile";
import Link from "next/link";

async function getCurrentYear() {
  "use cache";

  return new Date().getFullYear();
}

export async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-2 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {currentYear} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <Link
            className="transition-colors hover:text-foreground"
            href="/changelog"
          >
            Changelog
          </Link>
          <p>Built with Next.js</p>
        </div>
      </Container>
    </footer>
  );
}
