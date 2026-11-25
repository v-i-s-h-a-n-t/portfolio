import type { Metadata } from "next";
import { Download } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { canonicalPath } from "@/lib/site-url";

export const metadata: Metadata = {
  title: `Résumé | ${profile.name}`,
  description: `View or download ${profile.name}'s résumé.`,
  alternates: canonicalPath("/resume"),
};

export default function ResumePage() {
  return (
    <section aria-labelledby="resume-heading" className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 id="resume-heading">Résumé</h1>
          <p className="text-muted-foreground">
            View or download my résumé as a PDF.
          </p>
        </div>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          download
          href="/documents/vishant-kumar-resume.pdf"
        >
          Download PDF
          <Download aria-hidden="true" />
        </Link>
      </header>

      <iframe
        className="h-[min(80vh,900px)] min-h-[640px] w-full rounded-lg border border-border bg-card"
        src="/documents/vishant-kumar-resume.pdf"
        title={`${profile.name} résumé PDF`}
      />
    </section>
  );
}
