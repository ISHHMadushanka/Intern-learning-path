import Link from "next/link"
import type { Metadata } from "next"
import { DownloadIcon, FileTextIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { downloadFileName, guides } from "@/lib/guides-data"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Download documents",
  description:
    "Download intern study guides as Markdown files or one ZIP of the learning paths.",
}

export default function DownloadsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="font-heading text-4xl tracking-tight">Download the documents</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        These are the study guides only — not the website source. Open a
        Markdown file in Notion, Google Docs (File → Open), or VS Code. Use
        Print / PDF on a guide page if you need a PDF.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/api/download/all"
          className={cn(buttonVariants({ size: "lg" }))}
        >
          <DownloadIcon data-icon="inline-start" />
          Download study guides (ZIP)
        </a>
        <Link href="/" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
          Back to home
        </Link>
      </div>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {guides
          .filter((guide) => guide.kind !== "lead")
          .map((guide) => (
          <li key={guide.slug}>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2 text-xl">
                  <FileTextIcon className="size-4 shrink-0" />
                  {guide.title}
                </CardTitle>
                <CardDescription>
                  {guide.audience}. File: {downloadFileName(guide.slug)}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-2">
                <a
                  href={`/api/download/${guide.slug}`}
                  className={cn(buttonVariants())}
                >
                  Download .md
                </a>
                <Link
                  href={`/guides/${guide.slug}`}
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Read online
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  )
}
