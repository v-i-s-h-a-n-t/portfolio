import assert from "node:assert/strict";
import test from "node:test";
import {
  getPublishedContentBySlug,
  getPublishedContentEntries,
} from "../src/content/queries.ts";
import {
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

test("project table of contents accepts unique level-two and level-three headings", () => {
  const metadata = validateProjectContentMetadata({
    ...projectDraft,
    tableOfContents: [
      { title: "Overview", level: 2 },
      { title: "Implementation", level: 3 },
    ],
  });

  assert.equal(metadata.tableOfContents.length, 2);
  assert.throws(
    () =>
      validateProjectContentMetadata({
        ...projectDraft,
        tableOfContents: [
          { title: "Setup & usage", level: 2 },
          { title: "Setup usage", level: 2 },
        ],
      }),
    /headings must be unique/,
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
