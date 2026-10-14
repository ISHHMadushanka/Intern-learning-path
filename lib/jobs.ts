import fs from "node:fs"
import path from "node:path"
import { getJobSamples } from "./content/job-samples"
import { getJobRole } from "./jobs-data"

export {
  getJobRole,
  jobDownloadFileName,
  jobRoles,
  type JobRoleId,
  type JobRoleMeta,
} from "./jobs-data"

const DIR = path.join(process.cwd(), "content", "jobs")

export function readJobBody(slug: string): string {
  const meta = getJobRole(slug)
  if (!meta) throw new Error(`Unknown job guide: ${slug}`)
  return fs.readFileSync(path.join(DIR, meta.file), "utf8")
}

export function readJobMarkdown(slug: string): string {
  const body = readJobBody(slug)
  const samples = getJobSamples(slug)
  if (samples.length === 0) return body
  const extra = samples
    .map(
      (sample) => `## ${sample.title}\n\n\`\`\`\n${sample.text.trim()}\n\`\`\`\n`
    )
    .join("\n")
  return `${body.trim()}\n\n---\n\n# Copy-paste samples\n\n${extra}`
}
