import { Container } from "@/components/layout/container";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-2 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {currentYear} {profile.name}
        </p>
        <p>Built with Next.js</p>
      </Container>
    </footer>
  );
}
