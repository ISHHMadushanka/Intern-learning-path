export type CvExperience = {
  title: string
  company: string
  location: string
  dates: string
  bullets: string[]
}

export type CvDoc = {
  name: string
  targetTitle: string
  tagline: string
  city: string
  phone: string
  email: string
  linkedin: string
  summary: string
  experience: CvExperience[]
  projects: { name: string; bullets: string[] }[]
  skills: { group: string; items: string }[]
  education: { degree: string; school: string; dates: string; note: string }
  extra: { group: string; items: string }[]
}

/** Filled example: internship already finished. Replace facts, keep the shape. */
export const baCvFilled: CvDoc = {
  name: "Nimesh Fernando",
  targetTitle: "Junior Business Analyst",
  tagline: "Requirements · user stories · process mapping · UAT",
  city: "Colombo, Sri Lanka",
  phone: "077 123 4567",
  email: "nimesh.fernando@email.com",
  linkedin: "linkedin.com/in/nimesh-fernando",
  summary:
    "Recently completed a Business Analyst internship in a Sri Lankan software team. I turn messy stakeholder requests into user stories, process maps, and UAT that developers and QA can use. Comfortable on English sprint and client calls. Seeking a Junior or Associate BA role in a product or IT-services company.",
  experience: [
    {
      title: "Business Analyst Intern",
      company: "[Software company]",
      location: "Colombo",
      dates: "Jun 2026 – Oct 2026",
      bullets: [
        "Elicited requirements from 8 stakeholders (product, operations, QA) for [module / product] and wrote 22 user stories with Given/When/Then acceptance criteria used in sprint refinement.",
        "Mapped As-Is and To-Be process (swimlane) for [process], including reject, timeout, and permission-denied paths that were missing from the first draft.",
        "Prepared 18 UAT scenarios, logged defects in Jira, and retested with QA before client demo.",
        "Kept a live tracker of open questions and requirement changes so engineering did not work from Slack or email threads.",
        "Joined stand-ups, refinement, and sprint reviews with an overseas client; sent 8-line recaps (decisions, owners, dates).",
      ],
    },
  ],
  projects: [
    {
      name: "Selected intern work — [feature or process] (sanitised)",
      bullets: [
        "Problem: [who was blocked, how often, what “done” meant] — wrote this before proposing UI.",
        "Delivered: stakeholder list, 6 stories with AC (2 exception paths), current vs future flow, MVP cut when scope grew.",
      ],
    },
  ],
  skills: [
    {
      group: "Business analysis",
      items:
        "Elicitation, user stories, acceptance criteria, process mapping (swimlane / BPMN), UAT, scope cuts, meeting recaps",
    },
    {
      group: "Tools",
      items:
        "Jira, Confluence, Excel (pivot, lookup), SQL (SELECT, JOIN), Figma (comment on frames), Microsoft Teams",
    },
    {
      group: "Ways of working",
      items: "Scrum / Agile, SDLC, English stakeholder communication",
    },
  ],
  education: {
    degree: "BSc in Information Technology",
    school: "[University]",
    dates: "Graduated 2026",
    note: "Coursework: software engineering, databases, business process",
  },
  extra: [
    { group: "Languages", items: "English (professional), Sinhala (native)" },
    {
      group: "Certifications",
      items: "ECBA — in progress (remove this line if not true)",
    },
  ],
}

/** Blank template they fill in Word or on this site. */
export const baCvTemplate: CvDoc = {
  name: "[YOUR NAME]",
  targetTitle: "Junior Business Analyst",
  tagline: "Requirements · user stories · process mapping · UAT",
  city: "[City], Sri Lanka",
  phone: "[0XX XXX XXXX]",
  email: "[you@email.com]",
  linkedin: "linkedin.com/in/[your-url]",
  summary:
    "Recently completed a Business Analyst internship at [Company]. I [one sentence of proof: stories, process, UAT]. Seeking a Junior / Associate BA role in a Sri Lankan IT company.",
  experience: [
    {
      title: "Business Analyst Intern",
      company: "[Company]",
      location: "[City]",
      dates: "[Start month year] – [End month year]",
      bullets: [
        "Elicited requirements from [n] stakeholders for [module] and wrote [n] user stories with testable acceptance criteria.",
        "Mapped As-Is / To-Be process for [process], including [one exception path].",
        "Supported UAT: [n] scenarios, defects in Jira, retest before demo.",
        "Ran / joined [stand-ups, refinement, client demo]; wrote short recaps with decisions and owners.",
        "[One more bullet only if it is a real outcome — delete otherwise.]",
      ],
    },
  ],
  projects: [
    {
      name: "[Feature or campus/process case — no client secrets]",
      bullets: [
        "Problem: [who, hurt, how we would know it is better].",
        "Artefacts: [stories + AC / process map / UAT table].",
      ],
    },
  ],
  skills: [
    {
      group: "Business analysis",
      items:
        "Elicitation, user stories, acceptance criteria, process mapping, UAT",
    },
    {
      group: "Tools",
      items: "Jira, Confluence, Excel, [SQL if true], [Figma if true]",
    },
    {
      group: "Ways of working",
      items: "Scrum, English communication",
    },
  ],
  education: {
    degree: "[Degree]",
    school: "[University]",
    dates: "[Year]",
    note: "[Optional: 1 line of relevant modules]",
  },
  extra: [
    { group: "Languages", items: "English, [Sinhala / Tamil]" },
    { group: "Certifications", items: "[ECBA / none — delete row if empty]" },
  ],
}

export function formatBaCvText(cv: CvDoc): string {
  const skills = cv.skills
    .map((row) => `${row.group}: ${row.items}`)
    .join("\n")
  const extra = cv.extra.map((row) => `${row.group}: ${row.items}`).join("\n")
  const experience = cv.experience
    .map((job) => {
      const bullets = job.bullets.map((b) => `• ${b}`).join("\n")
      return `${job.title}  |  ${job.company}  |  ${job.location}  |  ${job.dates}\n${bullets}`
    })
    .join("\n\n")
  const projects = cv.projects
    .map((project) => {
      const bullets = project.bullets.map((b) => `• ${b}`).join("\n")
      return `${project.name}\n${bullets}`
    })
    .join("\n\n")

  return `${cv.name.toUpperCase()}
${cv.targetTitle}
${cv.tagline}
${cv.city}  |  ${cv.phone}  |  ${cv.email}  |  ${cv.linkedin}

SUMMARY
${cv.summary}

EXPERIENCE
${experience}

SELECTED WORK
${projects}

SKILLS
${skills}

EDUCATION
${cv.education.degree}  |  ${cv.education.school}  |  ${cv.education.dates}
${cv.education.note}

${extra}
`.trim()
}

export const baCoverEmail = `Subject: Application — Junior Business Analyst — [Your Name]

Dear Hiring Manager,

I recently completed a Business Analyst internship at [Company], Colombo ( [start] – [end] ). I gathered requirements, wrote user stories with testable acceptance criteria, mapped process, and supported UAT with developers and QA.

I am applying for the Junior / Associate Business Analyst role. I can walk through a sanitised story sample and process map in an interview.

CV attached (1 page).

Thank you for your time.
[Your Name]
[Phone]  |  [Email]  |  [LinkedIn]`
