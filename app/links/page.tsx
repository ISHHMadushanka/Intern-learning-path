"use client"

import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { resources } from "@/lib/content/resources"
import type { RoleId } from "@/lib/content/types"

const filters: { id: "all" | RoleId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "developer", label: "Developers" },
  { id: "qa", label: "QA" },
  { id: "ba", label: "BA" },
  { id: "devops", label: "DevOps" },
]

export default function LinksPage() {
  const [role, setRole] = useState<"all" | RoleId>("all")
  const [query, setQuery] = useState("")

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return resources.filter((item) => {
      const roleOk =
        role === "all" || item.roles === "all" || item.roles.includes(role)
      if (!roleOk) return false
      if (!q) return true
      return `${item.title} ${item.publisher} ${item.why}`
        .toLowerCase()
        .includes(q)
    })
  }, [role, query])

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="font-heading text-4xl tracking-tight">Link library</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Every resource used in the paths, in one list. Prefer the role documents
        first — this page is the index, not the curriculum.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search links"
          className="max-w-sm"
        />
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setRole(item.id)}
              className="rounded-full"
            >
              <Badge variant={role === item.id ? "default" : "outline"}>
                {item.label}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <p className="mt-10 text-muted-foreground">
          No links match that search. Try “SQL”, “Playwright”, or clear the
          filter.
        </p>
      ) : (
        <ul className="mt-8 divide-y rounded-xl border bg-card">
          {list.map((item) => (
            <li key={item.id} className="px-4 py-4 sm:px-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline-offset-4 hover:underline"
                >
                  {item.title}
                </a>
                <span className="text-xs text-muted-foreground">
                  {item.cost} · {item.kind} · {item.level}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.why}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {item.publisher} · {item.time}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
