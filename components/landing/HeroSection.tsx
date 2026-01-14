'use client';

import { useTranslations } from 'next-intl';
import { HeroSection as HeroSectionUI } from '@/components/ui/hero-section-2';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <HeroSectionUI
      className="min-h-screen"
      logo={{
        url: 'https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_black.png',
        darkUrl: 'https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_white.png',
        alt: 'Cracks Hospitality',
        text: 'Cracks Hospitality',
      }}
      slogan={t('tagline')}
      title={
        <>
          {t('subtitleLine1')}
          <br />
          {t('subtitleLine2')}
        </>
      }
      subtitle={t('description')}
      subtitle2={t('description2')}
      callToAction={{
        text: t('ctaStudio'),
        href: 'https://cracks-studio.com',
      }}
      secondaryCallToAction={{
        text: t('ctaApp'),
        href: 'https://cracks-app.com',
      }}
      backgroundImage="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Images/Cracks%20website/home-photo.jpg"
      contactInfo={{
        website: 'cracks-hospitality.com',
        phone: '+66 (0) 80 074 3811',
        address: 'Bangkok, Thailand',
      }}
    />
  );
}
