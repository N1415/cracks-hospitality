import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Cracks Hospitality | Restaurant Consulting & F&B Technology",
    template: "%s | Cracks Hospitality",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: [
      {
        url: "https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/svg/hospitality_black.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/svg/hospitality_white.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Cracks Hospitality | Restaurant Consulting & F&B Technology",
    description: siteConfig.descriptions.long,
    images: [
      {
        url: siteConfig.images.ogImage,
        width: 1200,
        height: 630,
        alt: "Cracks Hospitality - Restaurant Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cracks Hospitality | Restaurant Consulting",
    description: siteConfig.descriptions.short,
    images: [siteConfig.images.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
