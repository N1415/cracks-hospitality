import { setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
import { NavigationWrapper } from '@/components/landing/NavigationWrapper';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import {
  JsonLd,
  organizationSchema,
  professionalServiceSchema,
  websiteSchema,
} from '@/components/seo/JsonLd';

// Lazy load below-fold sections to reduce initial bundle size
const DifferenceSection = dynamic(() => import('@/components/landing/DifferenceSection').then(mod => ({ default: mod.DifferenceSection })));
const ProductsSection = dynamic(() => import('@/components/landing/ProductsSection').then(mod => ({ default: mod.ProductsSection })));
const FoundersSection = dynamic(() => import('@/components/landing/FoundersSection').then(mod => ({ default: mod.FoundersSection })));
const ContactSection = dynamic(() => import('@/components/landing/ContactSection').then(mod => ({ default: mod.ContactSection })));
const Footer = dynamic(() => import('@/components/landing/Footer').then(mod => ({ default: mod.Footer })));

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Structured Data for SEO */}
      <JsonLd data={organizationSchema} />
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={websiteSchema} />

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
    </>
  );
}
