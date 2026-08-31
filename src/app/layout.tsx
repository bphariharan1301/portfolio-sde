import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { profile, siteUrl } from "@/content/profile";
import { themeScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Hariharan B P — Software Engineer & Product Builder";
const description =
  "Software Engineer building full-stack products, healthcare systems, AI-assisted workflows and data-driven applications with React, Next.js and Python.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Hariharan B P",
  },
  description,
  applicationName: "Hariharan B P — Portfolio",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Hariharan B P",
    "Software Engineer",
    "Product Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "Healthcare software",
    "FHIR",
    "RxNorm",
    "LangChain",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: profile.name,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090a" },
    { media: "(prefers-color-scheme: light)", color: "#f6f5f2" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: "Software Engineer",
  description,
  email: `mailto:${profile.links.email}`,
  sameAs: [profile.links.linkedin, profile.links.github],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Django",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "FHIR",
    "RxNorm",
    "LangChain",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.education.school,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-bg text-fg">
        <ThemeProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          // Static, author-controlled JSON-LD.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
