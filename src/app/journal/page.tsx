export default function JournalPage() {
  return (
    <section aria-labelledby="journal-heading" className="space-y-2">
      <h1
        className="font-heading text-3xl font-semibold tracking-tight"
        id="journal-heading"
      >
        Journal
      </h1>
      <p className="max-w-prose text-muted-foreground">
        Journal entries will appear here when they are ready to publish.
      </p>
    </section>
  );
}
