import type { PortfolioChangelogEntry } from "@/types/changelog";

export const portfolioRepositoryUrl =
  "https://github.com/v-i-s-h-a-n-t/portfolio";

export const changelogEntries = [
  {
    id: "portfolio-foundation",
    date: "2026-11-25",
    title: "Portfolio foundation",
    summary:
      "Initialized the Next.js portfolio and added project-quality tooling.",
    category: "Foundation",
    commitShas: [
      "9e17381a0e8b7e5bde8cd3f339ca8b0973c5ebce",
      "f4a25b5e6c83d9eb721f6131dd43ce9bb4589609",
    ],
  },
  {
    id: "theme-and-interface-system",
    date: "2026-11-25",
    title: "Theme and interface system",
    summary:
      "Added semantic light and dark colors, Geist typography, shared styling, and reduced-motion preferences.",
    category: "Design",
    commitShas: [
      "250650ae73573b3d52075262dc3d1b5a01548044",
      "9b40bc5abf0e210fe0158a143aa5358574fa64da",
      "6dd4b1ff8987adbb2070bca30b414c0cf10f678d",
    ],
  },
  {
    id: "responsive-navigation",
    date: "2026-11-25",
    title: "Responsive site navigation",
    summary:
      "Added the global navigation, active page states, mobile menu, and shared page layout.",
    category: "Portfolio",
    commitShas: ["7037ae683c1a55ef2be6420ee171356bb9118f43"],
  },
  {
    id: "profile-and-recognition",
    date: "2026-11-25",
    title: "Profile and academic recognition",
    summary:
      "Added the personal introduction and the Academic Excellence banner and page.",
    category: "Portfolio",
    commitShas: [
      "8ee1661db21fe334ec9f84f491cbda9bd0f4f05f",
      "dd8ebe07861b71895ee64cf6cfca10e1e858337f",
    ],
  },
  {
    id: "selected-work-and-education",
    date: "2026-11-25",
    title: "Selected work, toolkit, and education",
    summary:
      "Built reusable project cards and added the skills and education sections to the homepage.",
    category: "Portfolio",
    commitShas: [
      "0efc9962445e9b71dd7718c3fc019fdd9f06431c",
      "749d354e639e25e00f8e8f5a02a371ff4a1b765f",
      "15f7c5a91d00be75ffd1f05926a70f83c5b9425f",
    ],
  },
  {
    id: "about-contact-resume",
    date: "2026-11-26",
    title: "About, contact, and résumé pages",
    summary:
      "Added the About page, verified contact links, and résumé viewing and download.",
    category: "Portfolio",
    commitShas: [
      "e9614c5f95265c3de194454812209b9dd8085d3f",
      "d5ad61a80121dfc609480ac15857abb948b268f5",
      "4095d46712b844f9ec6cebe96e8e0f0892e4966c",
    ],
  },
  {
    id: "project-directory",
    date: "2026-11-26",
    title: "Project directory and filters",
    summary:
      "Added the project directory with category and technology filters, search, and result feedback.",
    category: "Projects",
    commitShas: [
      "2f088de9bdc65a1ab9467e4be6c4f82ad5c47503",
      "a4067c3338147c435eaeefbe1fe7257645b7d3c6",
      "d3045d65479ce6b249e6ac8bdf489e4b5addfad7",
      "de29f7625bc16c32dc6f6321477174977f18c652",
    ],
  },
  {
    id: "mdx-case-study-system",
    date: "2026-11-26",
    title: "Local MDX case-study system",
    summary:
      "Added typed MDX content discovery and published-only project case-study routes.",
    category: "Content",
    commitShas: [
      "7ada2116bd5770d7b34aa8f704d1a7f504c47f09",
      "5f4574642fdea22473abc9260bc980371ba23a10",
    ],
  },
  {
    id: "technical-content-tools",
    date: "2026-11-26",
    title: "Technical content tools",
    summary:
      "Added syntax highlighting, code copying, and responsive Mermaid diagrams for technical content.",
    category: "Content",
    commitShas: [
      "a8aff9b237077d66e52190a2e0d0cd67b31819e2",
      "a1ecb4cd601208c607bca95c8fe4a8310e317db4",
      "44e395c8bb7867bb7743a55a86b30703807a9ecf",
      "6ec5de9f45f1fbb3aee567ea0441078c7373a729",
    ],
  },
  {
    id: "engineering-journal-removal",
    date: "2026-11-26",
    title: "Portfolio content update",
    summary: "Removed the Engineering Journal section and navigation link.",
    category: "Maintenance",
    commitShas: ["10d3c3ef9bbb330e97e3c454e9e246925c0771e1"],
  },
  {
    id: "published-project-case-studies",
    date: "2026-11-26",
    title: "Project case studies published",
    summary:
      "Published case studies for Applicant Tracking, Distributed Worker Cluster, Student Administration, Search Algorithms, and Mental Health and Wellness.",
    category: "Projects",
    commitShas: [
      "e7d4bbcef8c8e83c397a595d685a54a51c671702",
      "ad37bd8b2aad43cd89e69fed998b26246d6ed415",
      "bfa671669490e76dfc744919faf862aa1064376b",
      "c0be4ae971051f1909c6228d97b81a0948a1fa56",
      "0b80d5f8ab7e962bc4630f1e014bce2d502f3960",
    ],
  },
  {
    id: "global-command-palette",
    date: "2026-11-26",
    title: "Global command palette",
    summary:
      "Added searchable public pages and published projects with Command+K and Control+K shortcuts.",
    category: "Search",
    commitShas: [
      "0ed7dbbb8776dce3a6b1d9387cd0403a9620730d",
      "3079b5f062792ca6312e988cb0b9aa81e6b43f8f",
      "71f382ef954de0deb850eb0ea9660ce075953d81",
      "9d9b9ccd05dbeeeb9d337eb06d8605224c171342",
      "d6e683bcde6fde371b680e7b0346187b46b1f385",
    ],
  },
] satisfies readonly PortfolioChangelogEntry[];
