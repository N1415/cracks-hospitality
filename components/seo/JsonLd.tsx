import { siteConfig } from '@/lib/seo'

interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization schema - core company info
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  legalName: siteConfig.company.legalName,
  url: siteConfig.url,
  logo: siteConfig.images.logo,
  description: siteConfig.description,
  foundingDate: siteConfig.company.foundingYear.toString(),
  founders: siteConfig.company.founders.map((name) => ({
    '@type': 'Person',
    name,
  })),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    contactType: 'customer service',
    availableLanguage: ['English', 'Spanish'],
  },
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.facebook,
    siteConfig.social.instagram,
  ],
}

// ProfessionalService schema - consulting business
export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  description:
    'Restaurant consulting and F&B technology services for hospitality businesses',
  url: siteConfig.url,
  image: siteConfig.images.logo,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.location.city,
    addressCountry: siteConfig.location.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.7563, // Bangkok
    longitude: 100.5018,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 13.7563,
      longitude: 100.5018,
    },
    geoRadius: '5000', // Serves Asia-Pacific
  },
  priceRange: '$$$',
  serviceType: [
    'Restaurant Consulting',
    'F&B Concept Development',
    'Pre-Opening Services',
    'Restaurant Operations',
    'Hospitality Technology',
  ],
}

// WebSite schema - site-level info
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: ['en', 'es'],
}
