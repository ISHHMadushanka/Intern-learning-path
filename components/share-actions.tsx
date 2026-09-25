"use client"

import { useRef, useState } from "react"
import { CheckIcon, DownloadIcon, Link2Icon, MailIcon, PrinterIcon } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { allRolesMessage, internMessage } from "@/lib/guides-data"

function pageUrl(path: string) {
  return `${window.location.origin}${path}`
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // Fall through to the textarea copy used when clipboard permission is denied.
    }
  }

  const field = document.createElement("textarea")
  field.value = text
  field.setAttribute("readonly", "")
  field.style.position = "fixed"
  field.style.left = "-9999px"
  document.body.appendChild(field)
  field.select()
  document.execCommand("copy")
  field.remove()
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.08 6.45 2.08 11.94c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a10 10 0 0 0 4.78 1.22h.01c5.49 0 9.96-4.45 9.96-9.94a9.84 9.84 0 0 0-2.95-7zM12.04 20.15h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24 2.2 0 4.28.86 5.84 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.55-3.7 8.24-8.23 8.24m4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.8-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29"
      />
    </svg>
  )
}

export function ShareActions({
  slug,
  compact = false,
  allRoles = false,
}: {
  slug: string
  compact?: boolean
  allRoles?: boolean
}) {
  const [copied, setCopied] = useState<"link" | "message" | null>(null)
  const timer = useRef<number | null>(null)

  function flash(kind: "link" | "message") {
    setCopied(kind)
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(null), 2500)
  }

  async function onCopyLink() {
    const path = allRoles ? "/" : `/guides/${slug}`
    await copyText(pageUrl(path))
    flash("link")
  }

  async function onCopyMessage() {
    const origin = window.location.origin
    const text = allRoles
      ? allRolesMessage(origin)
      : internMessage(origin, slug)
    await copyText(text)
    flash("message")
  }

  function onWhatsApp() {
    const origin = window.location.origin
    const text = allRoles
      ? allRolesMessage(origin)
      : internMessage(origin, slug)
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank")
  }

  function onEmail() {
    const origin = window.location.origin
    const text = allRoles
      ? allRolesMessage(origin)
      : internMessage(origin, slug)
    window.location.href = `mailto:?subject=${encodeURIComponent("Your intern study path")}&body=${encodeURIComponent(text)}`
  }

  function onPrint() {
    window.print()
  }

  const status =
    copied === "link"
      ? "Link copied. Paste it in WhatsApp, Slack, or email."
      : copied === "message"
        ? "Intern message copied. Paste it to send."
        : null

  return (
    <div className="flex flex-col items-stretch gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          size={compact ? "sm" : "default"}
          onClick={onCopyLink}
          aria-label="Copy link"
        >
          {copied === "link" ? (
            <CheckIcon data-icon="inline-start" />
          ) : (
            <Link2Icon data-icon="inline-start" />
          )}
          {copied === "link" ? "Copied" : "Copy link"}
        </Button>
        <Button
          type="button"
          size={compact ? "sm" : "default"}
          variant="outline"
          onClick={onCopyMessage}
          aria-label="Copy intern message"
        >
          {copied === "message" ? (
            <CheckIcon data-icon="inline-start" />
          ) : null}
          {copied === "message" ? "Copied" : "Copy intern message"}
        </Button>
        <Button
          type="button"
          size={compact ? "sm" : "default"}
          variant="outline"
          onClick={onWhatsApp}
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp
        </Button>
        <Button
          type="button"
          size={compact ? "sm" : "default"}
          variant="ghost"
          onClick={onEmail}
        >
          <MailIcon data-icon="inline-start" />
          Email
        </Button>
        <a
          href={allRoles ? "/api/download/all" : `/api/download/${slug}`}
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: compact ? "sm" : "default",
            })
          )}
        >
          <DownloadIcon data-icon="inline-start" />
          {allRoles ? "Download study guides" : "Download .md"}
        </a>
        {!allRoles ? (
          <Button
            type="button"
            size={compact ? "sm" : "default"}
            variant="ghost"
            onClick={onPrint}
            className="print:hidden"
          >
            <PrinterIcon data-icon="inline-start" />
            Print / PDF
          </Button>
        ) : null}
      </div>
      <p
        className="min-h-5 text-xs text-primary"
        role="status"
        aria-live="polite"
      >
        {status}
      </p>
    </div>
  )
}
