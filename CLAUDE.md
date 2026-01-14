# Cracks Hospitality Landing Page

Landing page for **Cracks Hospitality** - the parent brand unifying Cracks Studio (consulting) and Cracks App (SaaS platform).

## Tech Stack

- **Framework:** Next.js 15 + TypeScript
- **Package Manager:** pnpm
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Fonts:** Playfair Display (serif, small-caps headers) + Lato (sans-serif body)
- **Animations:** Framer Motion (motion/react)
- **Icons:** Lucide React

## Project Structure

```
cracks-hospitality/
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── components.json              # shadcn/ui config
├── CLAUDE.md                    # This file
│
├── .claude/
│   └── settings.json            # Claude settings
│
├── app/
│   ├── globals.css              ✅ Tailwind + CSS variables (cream primary, orange secondary)
│   ├── layout.tsx               # Root layout with fonts + metadata
│   ├── page.tsx                 # Landing page (all sections)
│   └── favicon.ico
│
├── components/
│   ├── ui/                      # shadcn/ui components (ALREADY COPIED)
│   │   ├── button.tsx           ✅
│   │   ├── badge.tsx            ✅
│   │   ├── card.tsx             ✅
│   │   ├── input.tsx            ✅
│   │   ├── textarea.tsx         ✅
│   │   ├── label.tsx            ✅
│   │   ├── select.tsx           ✅
│   │   ├── sheet.tsx            ✅
│   │   ├── dropdown-menu.tsx    ✅
│   │   └── separator.tsx        ✅
│   │
│   ├── landing/                 # To be created with 21st.dev components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx      # pnpm dlx shadcn@latest add https://21st.dev/r/ravikatiyar162/hero-section-2
│   │   ├── AboutSection.tsx     # pnpm dlx shadcn@latest add https://21st.dev/r/prebuiltui/about
│   │   ├── ProductsSection.tsx  # pnpm dlx shadcn@latest add https://21st.dev/r/aceternity/canvas-reveal-effect
│   │   ├── FoundersSection.tsx  # pnpm dlx shadcn@latest add https://21st.dev/r/meschacirung/team
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   │
│   └── shared/
│       └── ThemeToggle.tsx      ✅
│
├── lib/
│   └── utils.ts                 ✅ cn() helper
│
└── docs/
    ├── API.md                   ✅ Contact form API reference
    └── ASSETS.md                ✅ All logo/image URLs
```

## Color Scheme

Cream as PRIMARY accent, Orange as SUBTLE secondary:

```css
:root {
  /* Primary = Cream (main accent) */
  --primary: #F5F1E8;
  --primary-foreground: #2C2C2C;

  /* Secondary = Orange (subtle accents only) */
  --secondary: #C85C3C;
  --secondary-foreground: #F5F1E8;

  /* Base colors */
  --background: #FFFFFF;
  --foreground: #2C2C2C;
  --muted: #F5F1E8;
  --border: #2C2C2C20;
  --ring: #C85C3C;  /* Orange for focus rings */
}

.dark {
  --background: #2C2C2C;
  --foreground: #F5F1E8;
  --primary: #F5F1E8;
  --primary-foreground: #2C2C2C;
  --muted: #3D3D3D;
  --border: #F5F1E820;
}
```

**Usage:**
- **Cream (#F5F1E8):** Primary buttons, cards, section backgrounds
- **Orange (#C85C3C):** Focus rings, subtle hover states only
- **Dark gray (#2C2C2C):** Text, dark mode backgrounds

## Page Sections

### 1. Hero Section
- Component: `pnpm dlx shadcn@latest add https://21st.dev/r/ravikatiyar162/hero-section-2`
- Headline: "CRACKS HOSPITALITY"
- Tagline: "Soul & Scale - Where Hospitality Vision Meets Execution"
- CTAs: "Explore Cracks Studio" | "Discover Cracks App"

### 2. About Section
- Component: `pnpm dlx shadcn@latest add https://21st.dev/r/prebuiltui/about`
- Logo images (in placeholder):
  - Light: `hospitality_black_large.png`
  - Dark: `hospitality_white_large.png`
- Philosophy: Soul & Scale

### 3. Products Section
- Component: `pnpm dlx shadcn@latest add https://21st.dev/r/aceternity/canvas-reveal-effect`
- Two cards:
  - **Cracks Studio** → cracks-studio.com
  - **Cracks App** → cracks-app.com

### 4. Founders Section
- Component: `pnpm dlx shadcn@latest add https://21st.dev/r/meschacirung/team`
- Manuel & Nacho profiles with photos

### 5. Contact Section
- Simple form (NO Calendly)
- Uses existing SMTP backend
- See `docs/API.md` for details

### 6. Footer
- Links to Studio and App
- Social media links

## Assets

See `docs/ASSETS.md` for all URLs.

### Quick Reference

**Hospitality Logos:**
- Large light: `https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_black_large.png`
- Large dark: `https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_white_large.png`
- Small light: `https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_black.png`
- Small dark: `https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_white.png`

**Favicons:**
- Light: `https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/svg/hospitality_black.svg`
- Dark: `https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/svg/hospitality_white.svg`

**Founder Photos:**
- Manuel: `https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Images/Cracks%20website/manu.jpg`
- Nacho: `https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Images/Cracks%20website/nacho.jpg`

## Contact Form API

**Endpoint:** `POST https://api.cracks-app.com/public/contact`

See `docs/API.md` for full details.

```typescript
{
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  company?: string;
  telephone?: string;
  subject?: string;
  source: "hospitality";  // Always use this value
}
```

## Setup Commands

```bash
# 1. Create Next.js project (in this folder)
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"

# 2. Install dependencies
pnpm add motion lucide-react clsx tailwind-merge next-themes
pnpm add -D @tailwindcss/typography tw-animate-css

# 3. Install Radix UI primitives (for existing UI components)
pnpm add @radix-ui/react-slot @radix-ui/react-label @radix-ui/react-select @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-separator class-variance-authority

# 4. Initialize shadcn/ui
pnpm dlx shadcn@latest init

# 5. Add 21st.dev components
pnpm dlx shadcn@latest add https://21st.dev/r/ravikatiyar162/hero-section-2
pnpm dlx shadcn@latest add https://21st.dev/r/prebuiltui/about
pnpm dlx shadcn@latest add https://21st.dev/r/aceternity/canvas-reveal-effect
pnpm dlx shadcn@latest add https://21st.dev/r/meschacirung/team
```

## Development

```bash
pnpm dev     # Start development server
pnpm build   # Production build
pnpm lint    # Run ESLint
```

## Deployment

- **Platform:** Vercel
- **Domain:** TBD
