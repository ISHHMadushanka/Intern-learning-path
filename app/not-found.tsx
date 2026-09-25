import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-20">
      <h1 className="font-heading text-3xl tracking-tight">Page not found</h1>
      <p className="text-muted-foreground">
        That guide does not exist. Open the home page and pick a role path.
      </p>
      <Link href="/" className={buttonVariants()}>
        Back to Intern Path
      </Link>
    </main>
  )
}
