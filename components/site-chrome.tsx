import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "/guides/developer", label: "Developers" },
  { href: "/guides/qa", label: "QA" },
  { href: "/guides/ba", label: "BA" },
  { href: "/guides/devops", label: "DevOps" },
  { href: "/jobs", label: "Jobs" },
  { href: "/guides/ai", label: "AI" },
  { href: "/guides/team", label: "Team" },
  { href: "/downloads", label: "Files" },
]

export function SiteHeader() {
  return (
    <header className="print:hidden sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-heading text-lg tracking-tight">Intern Path</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            Developer · QA · BA · DevOps
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="print:hidden mt-auto border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Pick a path. Follow the weeks. Do the practice.</p>
        <p>Print a guide if you want an offline copy.</p>
      </div>
    </footer>
  )
}
