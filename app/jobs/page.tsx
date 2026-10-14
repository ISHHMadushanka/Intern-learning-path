import Link from "next/link"
import type { Metadata } from "next"
import { DownloadIcon } from "lucide-react"
import { CopyPanel } from "@/components/copy-panel"
import { PrintButton } from "@/components/print-button"
import { buttonVariants } from "@/components/ui/button"
import { getJobSamples } from "@/lib/content/job-samples"
import { extractToc, renderGuideHtml } from "@/lib/guides"
import { getJobRole, readJobBody } from "@/lib/jobs"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Jobs after internship",
  description:
    "Sri Lanka IT job hunt after a BA internship: where to apply, junior BA CV, LinkedIn, and interview pack.",
}

export default function JobsPage() {
  const guide = getJobRole("ba")
  if (!guide) throw new Error("BA job guide missing")

  const markdown = readJobBody("ba")
  const html = renderGuideHtml(markdown)
  const toc = extractToc(markdown).filter((item) => item.depth === 2)
  const samples = getJobSamples("ba")

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <article>
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {guide.kicker} · Sri Lanka IT
        </p>
        <h1 className="font-heading mt-2 text-4xl tracking-tight text-balance">
          {guide.title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{guide.summary}</p>
        <p className="mt-1 text-sm text-muted-foreground">For {guide.audience}.</p>

        <div className="print:hidden mt-6 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              buttonVariants({ size: "sm" }),
              "pointer-events-none"
            )}
          >
            BA
          </span>
          <span
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "pointer-events-none text-muted-foreground opacity-60"
            )}
          >
            More roles later
          </span>
        </div>

        <div className="print:hidden mt-6 flex flex-wrap gap-2">
          <Link
            href="/jobs/ba-cv"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Junior BA CV template
          </Link>
          <a
            href="/api/download/jobs-ba-cv"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            <DownloadIcon data-icon="inline-start" />
            CV sample .txt
          </a>
          <a
            href="/api/download/jobs-ba-cv-template"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            <DownloadIcon data-icon="inline-start" />
            Blank CV .txt
          </a>
          <a
            href="/api/download/jobs-ba"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            Download full guide .md
          </a>
          <Link
            href="/guides/ba"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            BA study path
          </Link>
        </div>

        <div
          className="guide-prose mt-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <section id="copy-paste-samples" className="mt-12 scroll-mt-24 space-y-4">
          <h2 className="font-heading text-2xl tracking-tight">
            Copy-paste samples
          </h2>
          <p className="text-sm text-muted-foreground">
            Replace names, dates, and anything in [brackets]. Keep the CV to
            one page. For a formatted PDF, open the{" "}
            <Link href="/jobs/ba-cv" className="underline underline-offset-4">
              Junior BA CV template
            </Link>{" "}
            and Print → Save as PDF. Never paste real client secrets.
          </p>
          {samples.map((sample) => (
            <CopyPanel
              key={sample.id}
              title={sample.title}
              hint={sample.hint}
              text={sample.text}
            />
          ))}
        </section>
      </article>

      <aside className="print:hidden lg:sticky lg:top-20 lg:self-start">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          On this page
        </p>
        <nav className="mt-3 flex flex-col gap-1.5 text-sm">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {item.text}
            </a>
          ))}
          <a
            href="#copy-paste-samples"
            className="text-muted-foreground hover:text-foreground"
          >
            Copy-paste samples
          </a>
        </nav>
        <div className="mt-6 border-t pt-4 text-sm">
          <p className="font-medium">Also</p>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li>
              <Link href="/jobs/ba-cv" className="hover:text-foreground">
                Junior BA CV (print / PDF)
              </Link>
            </li>
            <li>
              <Link href="/guides/ba" className="hover:text-foreground">
                BA intern study path
              </Link>
            </li>
            <li>
              <Link href="/guides/ai" className="hover:text-foreground">
                AI for interns
              </Link>
            </li>
          </ul>
          <PrintButton className="mt-4 text-muted-foreground" />
        </div>
      </aside>
    </div>
  )
}
