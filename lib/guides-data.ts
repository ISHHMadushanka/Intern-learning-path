export type GuideKind = "lead" | "role" | "shared"

export type GuideMeta = {
  slug: string
  file: string
  title: string
  kicker: string
  summary: string
  audience: string
  time: string
  kind: GuideKind
  shareVerb: string
}

export const guides: GuideMeta[] = [
  {
    slug: "start-here",
    file: "start-here.md",
    title: "How to share this with your intern team",
    kicker: "For you",
    summary:
      "One public link, then copy a ready-made message into WhatsApp, email, or Slack.",
    audience: "Intern leads and mentors",
    time: "2 min",
    kind: "lead",
    shareVerb: "Copy sharing guide",
  },
  {
    slug: "developer",
    file: "developer.md",
    title: "Developer intern path",
    kicker: "Developers",
    summary:
      "Eight weeks from Git and HTTP to a pull request a senior will actually review.",
    audience: "Software developer interns",
    time: "8 weeks · 6–8 hrs/week",
    kind: "role",
    shareVerb: "Send to developers",
  },
  {
    slug: "qa",
    file: "qa.md",
    title: "QA intern path",
    kicker: "QA / testers",
    summary:
      "Risk, test design, bugs developers can reproduce, then a little automation.",
    audience: "QA and tester interns",
    time: "8 weeks · 6–8 hrs/week",
    kind: "role",
    shareVerb: "Send to QA",
  },
  {
    slug: "ba",
    file: "ba.md",
    title: "Business analyst intern path",
    kicker: "Business analysts",
    summary:
      "Problem vs solution, stories with real acceptance criteria, process and data.",
    audience: "BA interns",
    time: "8 weeks · 6–8 hrs/week",
    kind: "role",
    shareVerb: "Send to BAs",
  },
  {
    slug: "devops",
    file: "devops.md",
    title: "DevOps intern path",
    kicker: "DevOps",
    summary:
      "Linux, Git, Docker, CI/CD, and a pipeline you can debug — not a pile of cloud certificates.",
    audience: "DevOps intern",
    time: "8 weeks · 6–8 hrs/week",
    kind: "role",
    shareVerb: "Send to DevOps",
  },
  {
    slug: "ai",
    file: "ai.md",
    title: "AI for interns",
    kicker: "Everyone",
    summary:
      "How to use today’s models without skipping the skill the job still requires.",
    audience: "Every intern",
    time: "30 min + reuse",
    kind: "shared",
    shareVerb: "Send to everyone",
  },
  {
    slug: "team",
    file: "team.md",
    title: "How the roles work together",
    kicker: "Everyone",
    summary:
      "A short drill so Dev, QA, BA, and DevOps intern work does not bounce over a wall.",
    audience: "Mixed intern teams",
    time: "2 weeks as a trio",
    kind: "shared",
    shareVerb: "Send to the whole team",
  },
]

export function getGuide(slug: string): GuideMeta | undefined {
  return guides.find((g) => g.slug === slug)
}

export function downloadFileName(slug: string) {
  return `intern-path-${slug}.md`
}

export function internMessage(origin: string, slug: string) {
  const guide = getGuide(slug)
  if (!guide) return origin
  const url = `${origin}/guides/${slug}`
  const ai = `${origin}/guides/ai`
  if (guide.kind === "lead") {
    return [
      "Intern study paths — send each intern only their role link:",
      "",
      `Developers: ${origin}/guides/developer`,
      `QA: ${origin}/guides/qa`,
      `BAs: ${origin}/guides/ba`,
      `DevOps: ${origin}/guides/devops`,
      "",
      `Everyone also reads: ${ai}`,
      "",
      `How to use this: ${origin}/guides/start-here`,
    ].join("\n")
  }
  if (guide.kind === "shared") {
    return [
      `Please read this (short, for every intern): ${guide.title}`,
      "",
      url,
      "",
      "Follow it with your role path. Do the practice, not only the links.",
    ].join("\n")
  }
  return [
    `Hi — this is your intern study path: ${guide.title}.`,
    "",
    "Open the link and follow it in order. Do the practice, not only the videos. Skip random YouTube playlists.",
    "",
    url,
    "",
    `Everyone also reads the AI guide: ${ai}`,
    "",
    "If you are stuck more than 30 minutes, ask in standup with what you already tried.",
  ].join("\n")
}

export function allRolesMessage(origin: string) {
  return internMessage(origin, "start-here")
}
