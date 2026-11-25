import Link from "next/link";

export function Brand() {
  return (
    <Link
      className="shrink-0 font-heading text-xl font-bold tracking-tight text-foreground"
      href="/"
      aria-label="Vishant Kumar home"
    >
      vk
      <span className="text-primary" aria-hidden="true">
        .
      </span>
    </Link>
  );
}
