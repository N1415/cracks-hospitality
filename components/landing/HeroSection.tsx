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
        alt: 'Cracks Hospitality',
        text: 'Cracks Hospitality',
      }}
      slogan={t('tagline')}
      title={
        <>
          {t('subtitle').split(' ').slice(0, 2).join(' ')}
          <br />
          {t('subtitle').split(' ').slice(2).join(' ')}
        </>
      }
      subtitle={t('description')}
      callToAction={{
        text: t('ctaStudio'),
        href: 'https://cracks-studio.com',
      }}
      secondaryCallToAction={{
        text: t('ctaApp'),
        href: 'https://cracks-app.com',
      }}
      backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
      contactInfo={{
        website: 'cracks-hospitality.com',
        phone: '+66 (0) 123 456 789',
        address: 'Bangkok, Thailand',
      }}
    />
  );
}
