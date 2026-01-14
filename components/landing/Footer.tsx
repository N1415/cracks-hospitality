'use client';

import { useTranslations } from 'next-intl';
import { Linkedin, Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/crackshospitality/', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/crackshospitality', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/crackshospitality', label: 'Instagram' },
];

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_white.png"
              alt="Cracks Hospitality"
              className="h-10 mb-4"
            />
            <p className="text-background/60 max-w-sm">{t('tagline')}</p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 text-background/90">{t('products')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://cracks-studio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors"
                >
                  {t('studio')}
                </a>
              </li>
              <li>
                <a
                  href="https://cracks-app.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors"
                >
                  {t('app')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-background/90">{t('contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/60">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:hello@cracks-hospitality.com"
                  className="hover:text-background transition-colors"
                >
                  {t('email')}
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/60">
                <MapPin className="w-4 h-4" />
                <span>{t('location')}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>
            &copy; {currentYear} Cracks Hospitality. {t('rights')}
          </p>
          <a
            href="/privacy"
            className="hover:text-background transition-colors"
          >
            {t('privacy')}
          </a>
        </div>
      </div>
    </footer>
  );
}
