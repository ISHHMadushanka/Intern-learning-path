import fs from "node:fs"
import path from "node:path"
import { Marked } from "marked"
import { getGuide } from "./guides-data"

export {
  allRolesMessage,
  downloadFileName,
  getGuide,
  guides,
  internMessage,
  type GuideKind,
  type GuideMeta,
} from "./guides-data"

const DIR = path.join(process.cwd(), "content", "guides")

export function readGuideMarkdown(slug: string): string {
  const meta = getGuide(slug)
  if (!meta) throw new Error(`Unknown guide: ${slug}`)
  return fs.readFileSync(path.join(DIR, meta.file), "utf8")
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const marked = new Marked({
  gfm: true,
  renderer: {
    heading({ tokens, depth }) {
      const html = this.parser.parseInline(tokens)
      const id = slugify(String(html))
      return `<h${depth} id="${id}">${html}</h${depth}>\n`
    },
    link({ href, title, tokens }) {
      const html = this.parser.parseInline(tokens)
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : ""
      const extra =
        href && /^https?:\/\//.test(href)
          ? ` target="_blank" rel="noopener noreferrer"`
          : ""
      return `<a href="${escapeAttr(href ?? "")}"${titleAttr}${extra}>${html}</a>`
    },
  },
})

function escapeAttr(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
}

export type TocItem = { id: string; text: string; depth: number }

export function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = []
  for (const line of markdown.split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line)
    if (!match) continue
    const text = match[2].replace(/[*_`[\]]/g, "").trim()
    items.push({ id: slugify(text), text, depth: match[1].length })
  }
  return items
}

export function renderGuideHtml(markdown: string): string {
  return marked.parse(markdown) as string
}
