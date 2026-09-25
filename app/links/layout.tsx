import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Link library",
  description: "Every curated resource used in the intern study paths.",
}

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
