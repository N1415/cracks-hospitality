// Root layout for Next.js with next-intl
// Note: <html> and <body> are rendered in app/[locale]/layout.tsx
// This root layout must NOT include those tags to avoid hydration mismatches

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
