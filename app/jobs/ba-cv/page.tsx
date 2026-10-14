import Link from "next/link"
import type { Metadata } from "next"
import { DownloadIcon } from "lucide-react"
import { BaCvSheet } from "@/components/ba-cv-sheet"
import { PrintButton } from "@/components/print-button"
import { buttonVariants } from "@/components/ui/button"
import { baCvFilled, baCvTemplate } from "@/lib/content/ba-cv"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Junior BA CV template",
  description:
    "One-page junior Business Analyst CV for Sri Lanka IT — filled sample and blank template. Print to PDF.",
}

export default function BaCvPage() {
  return (
    <main className="cv-print mx-auto w-full max-w-5xl px-4 py-8">
      <div className="print:hidden mb-8">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Jobs · BA · Sri Lanka IT
        </p>
        <h1 className="font-heading mt-2 text-4xl tracking-tight">
          Junior BA CV
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Internship already finished. Target title is Junior Business Analyst.
          Dates are past tense. Print this page → Save as PDF for applications.
          Or download .txt and paste into Word (Calibri 11, ~1.5 cm margins, one
          page, no photo).
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href="/api/download/jobs-ba-cv"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            <DownloadIcon data-icon="inline-start" />
            Download filled sample (.txt)
          </a>
          <a
            href="/api/download/jobs-ba-cv-template"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            <DownloadIcon data-icon="inline-start" />
            Download blank template (.txt)
          </a>
          <PrintButton className="border" />
          <Link
            href="/jobs"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            Back to Jobs
          </Link>
        </div>
      </div>

      <p className="print:hidden mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Filled sample — replace every [bracket]
      </p>
      <BaCvSheet cv={baCvFilled} />

      <div className="print:hidden mt-14">
        <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Blank template
        </p>
        <BaCvSheet cv={baCvTemplate} />
      </div>
    </main>
  )
}
