import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import { siteConfig } from "@/config/siteConfig";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap"
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap"
});

const ibmMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaveeshaheshan.github.io/latexguard-web"),
  title: {
    default: `${siteConfig.brandName} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.brandName}`
  },
  description: siteConfig.description,
  keywords: [
    "LatexGuard",
    "R26-IT-120",
    "Rubber Quality Assessment",
    "Volatile Fatty Acid",
    "VFA Estimation",
    "ESP32 IoT",
    "Random Forest Soft-Sensing",
    "Deep Q-Network Logistics",
    "SLIIT Research Project",
    "Smart Agriculture"
  ],
  authors: [{ name: "R26-IT-120 Research Group", url: siteConfig.repoUrl }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} | ${siteConfig.title}`,
    description: siteConfig.description
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="%2307751a" d="M16 2C16 2 6 14 6 20a10 10 0 0 0 20 0C26 14 16 2 16 2z"/></svg>',
        type: "image/svg+xml"
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0c120d" }
  ]
};

// Inline anti-flash script for theme initialization
const themeInitScript = `
(function() {
  try {
    var storedTheme = localStorage.getItem('latexguard-theme');
    var theme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${figtree.variable} ${ibmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-[var(--wash)] text-[var(--text)] antialiased">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
