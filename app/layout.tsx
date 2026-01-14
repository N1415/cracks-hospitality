import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
  title: "Cracks Hospitality | Soul & Scale",
  description: "Where hospitality vision meets execution. Expert consulting and AI-powered technology for restaurant success.",
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
