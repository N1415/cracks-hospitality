'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Palette, Calendar, Settings, Brain, LineChart, Search, UserCheck } from 'lucide-react';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';

const studioFeatures = [
  { key: 'concept', icon: Palette },
  { key: 'design', icon: Users },
  { key: 'operations', icon: Calendar },
  { key: 'management', icon: Settings },
] as const;

const appFeatures = [
  { key: 'ai', icon: Brain },
  { key: 'financial', icon: LineChart },
  { key: 'competitor', icon: Search },
  { key: 'staff', icon: UserCheck },
] as const;

export function ProductsSection() {
  const t = useTranslations('products');

  return (
    <section id="products" className="relative py-24 lg:py-32 bg-background">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="[mask-image:linear-gradient(to_left,white,transparent),linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)] [mask-composite:intersect] fill-primary stroke-primary dark:fill-primary/30 dark:stroke-primary/30"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cracks Studio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="bg-foreground text-background rounded-2xl p-8 lg:p-10 h-full flex flex-col">
              {/* Logo */}
              <div className="mb-6">
                <img
                  src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/studio_white.png"
                  alt="Cracks Studio"
                  className="h-10 dark:hidden"
                />
                <img
                  src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/studio_black.png"
                  alt="Cracks Studio"
                  className="h-10 hidden dark:block"
                />
              </div>

              {/* Tagline */}
              <p className="text-xl text-background tracking-wide mb-4 font-serif font-semibold" style={{ fontVariant: 'small-caps' }}>
                {t('studio.tagline')}
              </p>

              {/* Description */}
              <p className="text-background/80 mb-8 flex-grow">
                {t('studio.description')}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {studioFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.key} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-background/80">
                        {t(`studio.features.${feature.key}`)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Audience */}
              <p className="text-xs text-background/50 mb-6">{t('studio.audience')}</p>

              {/* CTA */}
              <Button
                asChild
                className="bg-background text-foreground hover:bg-background/90 w-full group"
              >
                <a href="https://cracks-studio.com" target="_blank" rel="noopener noreferrer">
                  {t('studio.cta')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Cracks App Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="bg-primary rounded-2xl p-8 lg:p-10 h-full flex flex-col">
              {/* Logo */}
              <div className="mb-6">
                <img
                  src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/app_black.png"
                  alt="Cracks App"
                  className="h-10"
                />
              </div>

              {/* Tagline */}
              <p className="text-xl text-secondary tracking-wide mb-4 font-serif font-semibold" style={{ fontVariant: 'small-caps' }}>
                {t('app.tagline')}
              </p>

              {/* Description */}
              <p className="text-md text-primary-foreground/80 mb-8 flex-grow">
                {t('app.description')}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {appFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.key} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm text-primary-foreground/80">
                        {t(`app.features.${feature.key}`)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Audience */}
              <p className="text-xs text-primary-foreground/50 mb-6">{t('app.audience')}</p>

              {/* CTA */}
              <Button
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/90 w-full group"
              >
                <a href="https://cracks-app.com" target="_blank" rel="noopener noreferrer">
                  {t('app.cta')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
