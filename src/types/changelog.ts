export type ChangelogDate = `${number}-${number}-${number}`;

export type ChangelogCategory =
  | "Foundation"
  | "Design"
  | "Portfolio"
  | "Projects"
  | "Content"
  | "Maintenance"
  | "Search";

export type PortfolioChangelogEntry = {
  id: string;
  date: ChangelogDate;
  title: string;
  summary: string;
  category: ChangelogCategory;
  commitShas: readonly string[];
};
