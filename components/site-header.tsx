import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold inline-block">YourProduct</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Documentation
            </Link>
            <Link
              href="/docs/features"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" className="text-base" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
            <Button className="text-base" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

