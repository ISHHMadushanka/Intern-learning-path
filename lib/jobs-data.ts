export type JobRoleId = "ba"

export type JobRoleMeta = {
  slug: JobRoleId
  file: string
  title: string
  kicker: string
  summary: string
  audience: string
}

export const jobRoles: JobRoleMeta[] = [
  {
    slug: "ba",
    file: "ba.md",
    title: "Find a BA job after the internship",
    kicker: "Business analysts",
    summary:
      "Internship already finished: Sri Lanka IT boards, a one-page junior BA CV, LinkedIn, and interview pack.",
    audience: "People who just finished a BA internship and want a junior / associate BA job",
  },
]

export function getJobRole(slug: string): JobRoleMeta | undefined {
  return jobRoles.find((role) => role.slug === slug)
}

export function jobDownloadFileName(slug: string) {
  return `intern-path-jobs-${slug}.md`
}
