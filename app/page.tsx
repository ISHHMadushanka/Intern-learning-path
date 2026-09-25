import Link from "next/link"
import {
  ArrowRightIcon,
  CloudIcon,
  Code2Icon,
  CompassIcon,
  FlaskConicalIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const roles = [
  {
    slug: "developer",
    title: "Developer",
    kicker: "Build and ship",
    delay: "home-delay-2",
    icon: Code2Icon,
    accent: "from-teal-500/15 to-cyan-500/5",
    iconClass: "text-teal-700",
    blurb:
      "Git, HTTP, one stack, debugging, and a pull request a senior will actually review.",
  },
  {
    slug: "qa",
    title: "QA",
    kicker: "Protect quality",
    delay: "home-delay-3",
    icon: FlaskConicalIcon,
    accent: "from-amber-500/20 to-orange-500/5",
    iconClass: "text-amber-800",
    blurb:
      "Risk, test design, bugs that get fixed, then a little automation — not click-all-buttons.",
  },
  {
    slug: "ba",
    title: "Business analyst",
    kicker: "Shape the work",
    delay: "home-delay-4",
    icon: CompassIcon,
    accent: "from-indigo-500/15 to-violet-500/5",
    iconClass: "text-indigo-700",
    blurb:
      "Problem vs solution, stories with real acceptance criteria, process, and data.",
  },
  {
    slug: "devops",
    title: "DevOps",
    kicker: "Ship and run",
    delay: "home-delay-5",
    icon: CloudIcon,
    accent: "from-sky-500/20 to-blue-500/5",
    iconClass: "text-sky-800",
    blurb:
      "Linux, Docker, CI/CD, and a pipeline you can debug — not a pile of cloud certificates.",
  },
] as const

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="home-orb home-orb-a" aria-hidden />
      <div className="home-orb home-orb-b" aria-hidden />

      <section className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-14 pb-10 text-center sm:pt-20 sm:pb-14">
        <p className="home-fade text-sm font-medium tracking-[0.2em] text-primary uppercase">
          Intern Path
        </p>
        <h1 className="font-heading home-fade home-delay-1 mt-4 max-w-3xl text-4xl leading-[1.12] tracking-tight text-balance sm:text-6xl">
          Pick your path. Get ready for the job.
        </h1>
        <p className="home-fade home-delay-2 mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
          Eight weeks of sequenced practice for Developer, QA, Business
          Analyst, and DevOps interns — what teams actually need, what to skip,
          and how to use AI without faking the skill.
        </p>
      </section>

      <section className="relative mx-auto grid w-full max-w-6xl gap-4 px-4 pb-6 sm:grid-cols-2 xl:grid-cols-4">
        {roles.map((role) => {
          const Icon = role.icon
          return (
            <Link
              key={role.slug}
              href={`/guides/${role.slug}`}
              className={cn(
                "home-fade group flex flex-col rounded-2xl ring-1 ring-foreground/10 bg-card p-5 text-left transition-transform duration-300 hover:-translate-y-1.5 hover:ring-foreground/20",
                role.delay
              )}
            >
              <div
                className={cn(
                  "mb-4 flex size-12 items-center justify-center rounded-2xl bg-linear-to-br",
                  role.accent
                )}
              >
                <Icon className={cn("size-6 home-icon-float", role.iconClass)} />
              </div>
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {role.kicker}
              </p>
              <h2 className="font-heading mt-1 text-2xl tracking-tight">
                {role.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                {role.blurb}
              </p>
              <span
                className={cn(
                  buttonVariants(),
                  "mt-5 w-full group-hover:bg-primary/80"
                )}
              >
                Start this path
                <ArrowRightIcon data-icon="inline-end" />
              </span>
            </Link>
          )
        })}
      </section>

      <section className="relative mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 sm:grid-cols-2">
        <Link
          href="/guides/ai"
          className="home-fade home-delay-6 rounded-2xl bg-card p-5 ring-1 ring-foreground/10 transition-transform hover:-translate-y-1"
        >
          <SparklesIcon className="size-5 text-primary" />
          <h2 className="font-heading mt-3 text-xl tracking-tight">
            AI for interns
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Use today’s models as a pair. Verify everything. Never ship what
            you cannot explain.
          </p>
        </Link>
        <Link
          href="/guides/team"
          className="home-fade home-delay-6 rounded-2xl bg-card p-5 ring-1 ring-foreground/10 transition-transform hover:-translate-y-1"
        >
          <UsersIcon className="size-5 text-primary" />
          <h2 className="font-heading mt-3 text-xl tracking-tight">
            How the roles work
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Software is a team sport. A short drill so Dev, QA, BA, and DevOps
            intern work does not bounce over a wall.
          </p>
        </Link>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-16">
        <div className="home-fade home-delay-6 grid gap-6 rounded-2xl bg-primary px-6 py-8 text-primary-foreground sm:grid-cols-3">
          <div>
            <p className="text-sm font-medium opacity-80">01</p>
            <p className="font-heading mt-1 text-xl">Choose a path</p>
            <p className="mt-1 text-sm opacity-80">
              Open Developer, QA, BA, or DevOps. Follow the weeks in order.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium opacity-80">02</p>
            <p className="font-heading mt-1 text-xl">Do the practice</p>
            <p className="mt-1 text-sm opacity-80">
              Links teach. Practice is what makes you intern-ready.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium opacity-80">03</p>
            <p className="font-heading mt-1 text-xl">Show your work</p>
            <p className="mt-1 text-sm opacity-80">
              A repo, a pipeline, a bug report, or a brief — not a pile of
              certificates.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
