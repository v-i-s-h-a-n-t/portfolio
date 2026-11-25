declare module "*.mdx" {
  import type { TechnicalContentMetadata } from "@/content/types";

  export const metadata: TechnicalContentMetadata;
}
