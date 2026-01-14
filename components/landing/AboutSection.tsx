'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 lg:py-32 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Image with Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] flex items-center justify-center">
              {/* Logo as main image content - switches based on theme */}
              <img
                src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_black_large.png"
                alt="Cracks Hospitality"
                className="relative z-10 w-2/3 max-w-xs dark:hidden"
              />
              <img
                src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_white_large.png"
                alt="Cracks Hospitality"
                className="relative z-10 w-2/3 max-w-xs hidden dark:block"
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Title with underline */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {t('title')}
              </h2>
              <div className="h-1 w-16 bg-secondary rounded-full" />
            </div>

            {/* Description paragraphs */}
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {t('description')}
              </p>
              <p className="leading-relaxed">
                {t('pillars.soul.description')}
              </p>
              <p className="leading-relaxed">
                {t('pillars.scale.description')}
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-white hover:bg-secondary/90 group"
              >
                <a href="#founders">
                  {t('subtitle')}
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
