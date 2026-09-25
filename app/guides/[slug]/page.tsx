import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ShareActions } from "@/components/share-actions"
import {
  extractToc,
  getGuide,
  guides,
  readGuideMarkdown,
  renderGuideHtml,
} from "@/lib/guides"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return { title: "Guide" }
  return { title: guide.title, description: guide.summary }
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const markdown = readGuideMarkdown(slug)
  const html = renderGuideHtml(markdown)
  const toc = extractToc(markdown).filter((item) => item.depth === 2)

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <article>
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {guide.kicker} · {guide.time}
        </p>
        <h1 className="font-heading mt-2 text-4xl tracking-tight text-balance">
          {guide.title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{guide.summary}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          For {guide.audience}.
        </p>

        <div className="print:hidden mt-6 rounded-xl border bg-card p-4">
          <p className="mb-3 text-sm font-medium">Share this document</p>
          <ShareActions slug={guide.slug} />
          <p className="mt-3 text-xs text-muted-foreground">
            Copy intern message pastes a ready note with this URL. Download .md
            saves the file. Print / PDF uses your browser (Save as PDF).
          </p>
        </div>

        <div
          className="guide-prose mt-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
        </nav>
        <div className="mt-6 border-t pt-4 text-sm">
          <p className="font-medium">Also send</p>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            {guides
              .filter((g) => g.slug !== slug && g.kind !== "lead")
              .slice(0, 4)
              .map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="hover:text-foreground">
                    {g.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}
