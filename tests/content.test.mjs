import assert from "node:assert/strict";
import test from "node:test";
import {
  getPublishedContentBySlug,
  getPublishedContentEntries,
} from "../src/content/queries.ts";
import {
  validateJournalContentMetadata,
  validateProjectContentMetadata,
  validateUniqueContentSlugs,
} from "../src/content/validation.ts";

const projectDraft = {
  title: "Test Project",
  slug: "test-project",
  description: null,
  category: null,
  technologies: [],
  featured: false,
  publicationStatus: "draft",
};

test("project metadata accepts a draft without publishing incomplete details", () => {
  assert.equal(
    validateProjectContentMetadata(projectDraft).publicationStatus,
    "draft",
  );
});

test("project metadata requires a summary and category before publication", () => {
  assert.throws(
    () =>
      validateProjectContentMetadata({
        ...projectDraft,
        publicationStatus: "published",
      }),
    /needs a summary and category/,
  );
});

test("journal metadata validates required published fields and ISO dates", () => {
  const article = {
    title: "Test Article",
    slug: "test-article",
    summary: "A test summary.",
    category: "Testing",
    tags: ["validation"],
    publicationDate: "2025-04-01",
    publicationStatus: "published",
  };

  assert.equal(
    validateJournalContentMetadata(article).publicationStatus,
    "published",
  );
  assert.throws(
    () =>
      validateJournalContentMetadata({
        ...article,
        publicationDate: "2025-02-30",
      }),
    /publication date is invalid/,
  );
});

test("content manifests reject duplicate slugs", () => {
  const duplicateEntries = [
    { metadata: { slug: "same-slug" } },
    { metadata: { slug: "same-slug" } },
  ];

  assert.throws(
    () => validateUniqueContentSlugs(duplicateEntries, "project"),
    /Duplicate project content slug/,
  );
});

test("content queries exclude drafts from published listings and slug lookups", () => {
  const entries = [
    { metadata: { slug: "draft-project", publicationStatus: "draft" } },
    { metadata: { slug: "published-project", publicationStatus: "published" } },
  ];

  assert.deepEqual(
    getPublishedContentEntries(entries).map(({ metadata }) => metadata.slug),
    ["published-project"],
  );
  assert.equal(getPublishedContentBySlug(entries, "draft-project"), undefined);
  assert.equal(
    getPublishedContentBySlug(entries, "published-project")?.metadata.slug,
    "published-project",
  );
});
