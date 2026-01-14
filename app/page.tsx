import { ThemeToggle } from "@/components/shared/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Temporary test page */}
      <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
        <div className="flex items-center gap-4">
          {/* Light theme logo */}
          <img
            src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_black_large.png"
            alt="Cracks Hospitality"
            className="h-24 dark:hidden"
          />
          {/* Dark theme logo */}
          <img
            src="https://moyusgyrteirxbivehyz.supabase.co/storage/v1/object/public/Logos/png/hospitality_white_large.png"
            alt="Cracks Hospitality"
            className="h-24 hidden dark:block"
          />
        </div>

        <h1 className="text-5xl">Cracks Hospitality</h1>
        <p className="text-xl text-muted-foreground">Soul & Scale - Where Hospitality Vision Meets Execution</p>

        <div className="flex gap-4">
          <a
            href="https://cracks-studio.com"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Explore Cracks Studio
          </a>
          <a
            href="https://cracks-app.com"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            Discover Cracks App
          </a>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Toggle theme:</span>
          <ThemeToggle />
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Project setup complete. Running on port 3001.
        </p>
      </div>
    </main>
  );
}
