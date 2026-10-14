import {
  baCoverEmail,
  baCvFilled,
  baCvTemplate,
  formatBaCvText,
} from "./ba-cv"

export type JobSample = {
  id: string
  title: string
  hint: string
  text: string
}

const baLinkedInHeadline = `Junior Business Analyst | Requirements, user stories, process mapping | Colombo`

const baLinkedInAbout = `I recently completed a Business Analyst internship in Sri Lanka’s software industry. I turn messy stakeholder requests into stories developers can build and QA can test.

What I did in the internship
• Sat with users and the team until the problem was clear (not the UI)
• Wrote user stories with testable acceptance criteria
• Mapped As-Is / To-Be process, including exception paths
• Supported UAT and kept requirements in Jira, not in chat threads

Tools: Jira, Confluence, Excel, basic SQL, Figma comments, Scrum.

I am looking for a Junior / Associate BA role in a Sri Lankan IT product or services company.

Open to: Junior Business Analyst, Associate BA, Business Systems Analyst, junior Functional Consultant.`

const baLinkedInExperience = `Business Analyst Intern
[Company] · Internship
Colombo, Sri Lanka · [Start month year] – [End month year]

- Gathered and clarified requirements with product, engineering, and QA for [product / client project].
- Wrote user stories and acceptance criteria used in sprint refinement.
- Mapped process flows and flagged missing states (empty, error, permission, cancel).
- Supported UAT and tracked defects in Jira through retest and demo.`

const baAlumniNote = `Hi [Name] — I recently finished a BA internship at [company] in Colombo and I am applying for junior / associate BA roles in Sri Lanka IT.

I saw you work as a BA / in product at [their company]. Could I ask 10 minutes how your team hires juniors, and what they look for on a CV?

I am not asking you to refer me in this message — just to learn the bar. Thank you.`

const samples: Record<string, JobSample[]> = {
  ba: [
    {
      id: "cv",
      title: "Sample BA CV (filled, 1 page)",
      hint: "Internship already ended. Replace names and [brackets]. Download the formatted version for Print → PDF.",
      text: formatBaCvText(baCvFilled),
    },
    {
      id: "cv-template",
      title: "Blank CV template",
      hint: "Fill every [bracket]. Delete empty rows. Keep one page.",
      text: formatBaCvText(baCvTemplate),
    },
    {
      id: "cover",
      title: "Application email / cover note",
      hint: "Short. Attach the 1-page PDF. Do not paste the whole CV in the email.",
      text: baCoverEmail,
    },
    {
      id: "headline",
      title: "LinkedIn headline",
      hint: "You are no longer “intern” as the job you want. Keep intern only in Experience.",
      text: baLinkedInHeadline,
    },
    {
      id: "about",
      title: "LinkedIn About",
      hint: "Paste into About. First 2 lines show before See more.",
      text: baLinkedInAbout,
    },
    {
      id: "experience",
      title: "LinkedIn Experience bullets",
      hint: "End date must match the CV. Do not leave “Present” if the internship ended.",
      text: baLinkedInExperience,
    },
    {
      id: "alumni",
      title: "Alumni note (LinkedIn)",
      hint: "Short. Do not ask for a job in the first message.",
      text: baAlumniNote,
    },
  ],
}

export function getJobSamples(slug: string): JobSample[] {
  return samples[slug] ?? []
}
