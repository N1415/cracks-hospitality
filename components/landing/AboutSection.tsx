'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background text-foreground">
      <AnimatedGridPattern
        numSquares={12}
        maxOpacity={0.1}
        duration={4}
        repeatDelay={2}
        className="[mask-image:linear-gradient(to_right,white,transparent),linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)] [mask-composite:intersect] fill-primary stroke-primary dark:fill-primary/30 dark:stroke-primary/30"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {/* Logo with white circle background */}
              <div className="relative w-2/3 max-w-xs aspect-square">
                <div className="absolute inset-[8%] rounded-full bg-white dark:bg-[#2C2C2C]" />
                <Image
                  src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_black_large.png"
                  alt="Cracks Hospitality"
                  fill
                  sizes="(max-width: 768px) 66vw, 300px"
                  className="relative z-10 object-contain dark:hidden"
                />
                <Image
                  src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_white_large.png"
                  alt="Cracks Hospitality"
                  fill
                  sizes="(max-width: 768px) 66vw, 300px"
                  className="relative z-10 object-contain hidden dark:block"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div>
            {/* Title with underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {t('title')}
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-1 bg-secondary rounded-full"
              />
            </motion.div>

            {/* Description paragraphs */}
            <div className="space-y-6 text-muted-foreground text-justify">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="leading-relaxed"
              >
                {t('description')}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="leading-relaxed"
              >
                {t('description2')}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="leading-relaxed"
              >
                {t('description3')}
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
