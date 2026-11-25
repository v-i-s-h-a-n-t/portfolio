declare module "*.mdx" {
  import type { ProjectContentMetadata } from "@/content/types";

  export const metadata: ProjectContentMetadata;
}
