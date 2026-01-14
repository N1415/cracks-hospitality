'use client';

import { useTranslations } from 'next-intl';
import { Linkedin, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Link } from '@/i18n/navigation';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/cracks-hospitality-studio', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/people/Cracks-Hospitality-Studio/61577749381887/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/crackshospitalitystudio', label: 'Instagram' },
];

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#2C2C2C] dark:bg-[#2C2C2C] dark:text-[#F5F1E8] py-16">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <Separator className="bg-[#2C2C2C]/20 dark:bg-[#F5F1E8]/20 mb-12" />
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-start gap-4 mb-4">
              <img
                src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_black.png"
                alt="Cracks Hospitality"
                className="h-16 dark:hidden"
              />
              <img
                src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_white.png"
                alt="Cracks Hospitality"
                className="h-16 hidden dark:block"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold tracking-wide uppercase">Cracks Hospitality</span>
                <span className="text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60 text-sm">Building hospitality icons,</span>
                <span className="text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60 text-sm">one restaurant at a time</span>
              </div>
            </div>

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
                    className="w-10 h-10 rounded-full bg-[#F5F1E8] dark:bg-[#F5F1E8]/10 flex items-center justify-center hover:bg-[#F5F1E8]/80 dark:hover:bg-[#F5F1E8]/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-[#2C2C2C]/90 dark:text-[#F5F1E8]/90">{t('company')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60 hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
                >
                  {t('home')}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60 hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
                >
                  {t('vision')}
                </a>
              </li>
              <li>
                <a
                  href="#difference"
                  className="text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60 hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
                >
                  {t('howWeWork')}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60 hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
                >
                  {t('ourSolutions')}
                </a>
              </li>
              <li>
                <a
                  href="#founders"
                  className="text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60 hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
                >
                  {t('team')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-[#2C2C2C]/90 dark:text-[#F5F1E8]/90">{t('products')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://cracks-studio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60 hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
                >
                  {t('studio')}
                </a>
              </li>
              <li>
                <a
                  href="https://cracks-app.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60 hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
                >
                  {t('app')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-[#2C2C2C]/90 dark:text-[#F5F1E8]/90">{t('contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:nacho@cracks-studio.com"
                  className="hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
                >
                  {t('email')}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+66800743811"
                  className="hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
                >
                  {t('phone')}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#2C2C2C]/60 dark:text-[#F5F1E8]/60">
                <MapPin className="w-4 h-4" />
                <span>{t('location')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#2C2C2C]/50 dark:text-[#F5F1E8]/50">
          <p>
            &copy; {currentYear} Cracks Hospitality. {t('rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/legal/privacy"
              className="hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
            >
              {t('privacy')}
            </Link>
            <Link
              href="/legal/terms"
              className="hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
            >
              {t('terms')}
            </Link>
            <Link
              href="/legal/cookies"
              className="hover:text-[#2C2C2C] dark:hover:text-[#F5F1E8] transition-colors"
            >
              {t('cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
