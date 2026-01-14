import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/seo";
import { CookieConsent } from "@/components/shared/CookieConsent";
import "../globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Cracks Hospitality | Restaurant Consulting & F&B Technology",
    template: "%s | Cracks Hospitality",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [{ name: "Manuel Palacio" }, { name: "Nacho López" }],

  creator: siteConfig.name,
  publisher: siteConfig.name,

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
    alternateLocale: "es_ES",
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

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
      es: `${siteConfig.url}/es`,
      "x-default": siteConfig.url,
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
            <CookieConsent />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
