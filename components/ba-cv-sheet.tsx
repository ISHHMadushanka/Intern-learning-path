import type { CvDoc } from "@/lib/content/ba-cv"

export function BaCvSheet({ cv }: { cv: CvDoc }) {
  return (
    <div className="cv-sheet">
      <header>
        <h1>{cv.name}</h1>
        <p className="cv-title">{cv.targetTitle}</p>
        <p className="cv-tag">{cv.tagline}</p>
        <p className="cv-contact">
          {cv.city}
          {"  ·  "}
          {cv.phone}
          {"  ·  "}
          {cv.email}
          {"  ·  "}
          {cv.linkedin}
        </p>
      </header>

      <h2>Summary</h2>
      <p>{cv.summary}</p>

      <h2>Experience</h2>
      {cv.experience.map((job) => (
        <div key={`${job.company}-${job.dates}`} className="mb-3">
          <div className="cv-job-head">
            <p>
              <strong>{job.title}</strong>
              {"  ·  "}
              {job.company}
              {"  ·  "}
              {job.location}
            </p>
            <p>{job.dates}</p>
          </div>
          <ul className="mt-1.5">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Selected work</h2>
      {cv.projects.map((project) => (
        <div key={project.name} className="mb-2">
          <p>
            <strong>{project.name}</strong>
          </p>
          <ul className="mt-1.5">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Skills</h2>
      {cv.skills.map((row) => (
        <p key={row.group} className="mb-1">
          <strong>{row.group}.</strong> {row.items}
        </p>
      ))}

      <h2>Education</h2>
      <div className="cv-job-head">
        <p>
          <strong>{cv.education.degree}</strong>
          {"  ·  "}
          {cv.education.school}
        </p>
        <p>{cv.education.dates}</p>
      </div>
      <p className="mt-1">{cv.education.note}</p>

      {cv.extra.map((row) => (
        <p key={row.group} className="mt-2">
          <strong>{row.group}.</strong> {row.items}
        </p>
      ))}
    </div>
  )
}
