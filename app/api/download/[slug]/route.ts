import { NextResponse } from "next/server"
import JSZip from "jszip"
import { downloadFileName, getGuide, guides } from "@/lib/guides-data"
import { readGuideMarkdown } from "@/lib/guides"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  if (slug === "project") {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  if (slug === "all") {
    const zip = new JSZip()
    const folder = zip.folder("intern-path-guides")
    if (!folder) {
      return NextResponse.json({ error: "Could not build zip" }, { status: 500 })
    }
    for (const guide of guides) {
      folder.file(downloadFileName(guide.slug), readGuideMarkdown(guide.slug))
    }
    const bytes = await zip.generateAsync({ type: "uint8array" })
    return new NextResponse(Buffer.from(bytes), {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition":
          'attachment; filename="intern-path-guides.zip"',
      },
    })
  }

  const guide = getGuide(slug)
  if (!guide) {
    return NextResponse.json({ error: "Unknown document" }, { status: 404 })
  }

  const markdown = readGuideMarkdown(slug)
  const filename = downloadFileName(slug)
  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  })
}
