import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { SiteLayout } from "@/components/layout/site-layout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { profile } from "@/data/profile";
import { canonicalPath, getSiteUrl } from "@/lib/site-url";
import { serializeJsonLd } from "@/lib/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: `${profile.name} | ${profile.role}`,
  description:
    "Vishant Kumar is a software engineering student in Fiji. Explore his projects, technical skills, and education.",
  alternates: canonicalPath("/"),
  ...(siteUrl
    ? {
        openGraph: {
          type: "website" as const,
          title: `${profile.name} | ${profile.role}`,
          description:
            "Explore Vishant Kumar's software projects, technical skills, and education.",
          images: [new URL("/social-image", siteUrl).toString()],
        },
        twitter: {
          card: "summary_large_image" as const,
          images: [new URL("/social-image", siteUrl).toString()],
        },
      }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: `${profile.name} | ${profile.role}`,
              description:
                "Software engineering projects, skills, and education of Vishant Kumar.",
              ...(siteUrl ? { url: siteUrl.toString() } : {}),
            }),
          }}
        />
        <ThemeProvider>
          <SiteLayout>{children}</SiteLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
