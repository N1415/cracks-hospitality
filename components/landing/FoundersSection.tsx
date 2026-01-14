'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const founders = [
  {
    key: 'manuel',
    image: 'https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Images/Cracks%20website/manu.jpg',
    linkedin: 'https://www.linkedin.com/in/manuelpalacioleon/',
    objectPosition: 'object-[0%_30%]', // Face is on left side
  },
  {
    key: 'nacho',
    image: 'https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Images/Cracks%20website/nacho.jpg',
    linkedin: 'https://www.linkedin.com/in/nacholopezalvarez/',
    objectPosition: 'object-[50%_20%]', // Face is near top
  },
] as const;

export function FoundersSection() {
  const t = useTranslations('founders');

  return (
    <section id="founders" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Photo */}
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto ring-4 ring-primary relative">
                  <Image
                    src={founder.image}
                    alt={t(`${founder.key}.name`)}
                    fill
                    sizes="(max-width: 768px) 192px, 224px"
                    className={`object-cover ${founder.objectPosition}`}
                  />
                </div>
                {/* LinkedIn Badge */}
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-foreground/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Name & Role */}
              <h3 className="text-2xl font-bold mb-1">{t(`${founder.key}.name`)}</h3>
              <p className="text-secondary font-medium mb-4">{t(`${founder.key}.role`)}</p>

              {/* Bio */}
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {t(`${founder.key}.bio`)}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
