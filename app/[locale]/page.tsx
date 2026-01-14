import { setRequestLocale } from 'next-intl/server';
import { NavigationWrapper } from '@/components/landing/NavigationWrapper';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { DifferenceSection } from '@/components/landing/DifferenceSection';
import { ProductsSection } from '@/components/landing/ProductsSection';
import { FoundersSection } from '@/components/landing/FoundersSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <NavigationWrapper />
      <HeroSection />
      <AboutSection />
      <DifferenceSection />
      <ProductsSection />
      <FoundersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
