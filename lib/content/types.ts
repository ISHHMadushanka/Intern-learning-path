export type RoleId = "developer" | "qa" | "ba" | "devops"

export type ResourceKind =
  | "course"
  | "docs"
  | "article"
  | "book"
  | "practice"
  | "video"
  | "tool"

export type Resource = {
  id: string
  title: string
  url: string
  publisher: string
  kind: ResourceKind
  cost: "free" | "freemium"
  time: string
  why: string
  roles: RoleId[] | "all"
  level: "start" | "core" | "stretch"
}

export type Practice = {
  id: string
  title: string
  brief: string
  time: string
}

export type Module = {
  id: string
  week: number
  title: string
  hours: string
  outcome: string
  whyItMatters: string
  skills: string[]
  resourceIds: string[]
  practices: Practice[]
  youKnowItWhen: string[]
  aiNote: string
}

export type InterviewItem = {
  q: string
  lookingFor: string
}

export type RolePath = {
  id: RoleId
  title: string
  short: string
  tagline: string
  who: string
  industryNeeds: string[]
  skipThis: string[]
  modules: Module[]
  capstone: {
    title: string
    brief: string
    deliverables: string[]
  }
  interview: InterviewItem[]
  firstWeekOnJob: string[]
}

export type Guide = {
  slug: string
  title: string
  kicker: string
  summary: string
  sections: {
    id: string
    title: string
    body: string[]
    bullets?: string[]
  }[]
}
