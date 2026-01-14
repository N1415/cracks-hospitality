'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { Menu, Globe } from 'lucide-react';
import { locales, type Locale, localeNames } from '@/i18n/config';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function NavigationWrapper() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [showScrollNav, setShowScrollNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isPastHero = currentScrollY > 100;

      setScrolled(currentScrollY > 50);
      setIsInHero(!isPastHero);

      if (!isPastHero) {
        setShowScrollNav(false);
      } else if (currentScrollY > lastScrollY) {
        setShowScrollNav(false);
      } else {
        setShowScrollNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#difference', label: t('difference') },
    { href: '#products', label: t('products') },
    { href: '#founders', label: t('founders') },
    { href: '#contact', label: t('contact') },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hero Navigation (transparent, centered) */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isInHero ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-center h-16 px-6 md:px-12 lg:px-16 bg-transparent">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-9 text-foreground/80 hover:text-foreground hover:bg-foreground/10">
                    <Globe className="size-4" />
                    <span className="sr-only">Change language</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {locales.map((loc) => (
                    <DropdownMenuItem
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={locale === loc ? 'bg-accent' : ''}
                    >
                      {localeNames[loc]}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <ThemeToggle />
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden items-center justify-between w-full">
              <div className="flex items-center gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-9 text-foreground/80 hover:text-foreground hover:bg-foreground/10">
                      <Globe className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {locales.map((loc) => (
                      <DropdownMenuItem
                        key={loc}
                        onClick={() => handleLocaleChange(loc)}
                        className={locale === loc ? 'bg-accent' : ''}
                      >
                        {localeNames[loc]}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <ThemeToggle />
              </div>

              <div className="flex">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-9 text-foreground/80 hover:text-foreground hover:bg-foreground/10">
                      <Menu className="size-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px]">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <img
                          src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_black.png"
                          alt="Cracks Hospitality"
                          className="h-6 dark:hidden"
                        />
                        <img
                          src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_white.png"
                          alt="Cracks Hospitality"
                          className="h-6 hidden dark:block"
                        />
                      </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-4 mt-8">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={handleLinkClick}
                          className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll Navigation (pill style with logo, centered) */}
      <nav
        className={`fixed top-4 inset-x-0 z-50 transition-all duration-300 ${
          showScrollNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-center h-14 px-6 md:px-12 lg:px-16">
            {/* Desktop Layout - Centered */}
            <div
              className={`hidden md:flex items-center gap-8 px-6 py-2 rounded-xl backdrop-blur-md shadow-lg border border-border transition-colors ${
                scrolled ? 'bg-background/90' : 'bg-background/70'
              }`}
            >
              <Link href="/" className="flex items-center">
                <img
                  src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_black.png"
                  alt="Cracks Hospitality"
                  className="h-7 dark:hidden"
                />
                <img
                  src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_white.png"
                  alt="Cracks Hospitality"
                  className="h-7 hidden dark:block"
                />
              </Link>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-9 text-foreground/80 hover:text-foreground hover:bg-foreground/10">
                    <Globe className="size-4" />
                    <span className="sr-only">Change language</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {locales.map((loc) => (
                    <DropdownMenuItem
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={locale === loc ? 'bg-accent' : ''}
                    >
                      {localeNames[loc]}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <ThemeToggle />
            </div>

            {/* Mobile Layout */}
            <div
              className={`flex md:hidden items-center justify-between w-full px-4 py-2 rounded-xl backdrop-blur-md shadow-lg border border-border transition-colors ${
                scrolled ? 'bg-background/90' : 'bg-background/70'
              }`}
            >
              <div className="flex items-center gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-9 text-foreground/80 hover:text-foreground hover:bg-foreground/10">
                      <Globe className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {locales.map((loc) => (
                      <DropdownMenuItem
                        key={loc}
                        onClick={() => handleLocaleChange(loc)}
                        className={locale === loc ? 'bg-accent' : ''}
                      >
                        {localeNames[loc]}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <ThemeToggle />
              </div>

              <div className="flex">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-9 text-foreground/80 hover:text-foreground hover:bg-foreground/10">
                      <Menu className="size-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px]">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <img
                          src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_black.png"
                          alt="Cracks Hospitality"
                          className="h-6 dark:hidden"
                        />
                        <img
                          src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_white.png"
                          alt="Cracks Hospitality"
                          className="h-6 hidden dark:block"
                        />
                      </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-4 mt-8">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={handleLinkClick}
                          className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
