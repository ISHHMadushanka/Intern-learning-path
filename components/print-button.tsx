"use client"

import { PrinterIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function PrintButton({ className }: { className?: string }) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={cn("print:hidden", className)}
      onClick={() => window.print()}
    >
      <PrinterIcon data-icon="inline-start" />
      Print / PDF
    </Button>
  )
}
