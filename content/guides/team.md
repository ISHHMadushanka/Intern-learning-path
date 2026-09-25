# How developer, QA, BA, and DevOps interns work together

Software is a team sport. Interns who only study “their” track still fail the internship: they throw work over the wall.

Use this with the ShiftBoard capstone (a tiny shift-swap product). If your company has a real intern project, use that instead.

## Who owns what (simple)

| Moment | BA | Developer | QA | DevOps |
| --- | --- | --- | --- | --- |
| Someone is in pain | Names the problem, who, evidence | Listens; does not jump to stack | Names risk if we get it wrong | Names “can we even run this?” |
| We might build it | Stories + AC + exceptions | Feasibility, smallest slice | Testability of AC; missing cases | Environments, secrets, CI needed |
| Building | Answers questions same day | Small PRs, test notes | Exploratory on staging; API checks | Pipeline green; staging reachable |
| Change of mind | Updates AC, tells everyone | Adjusts scope, does not ghost QA | Retests what changed | Config / env changes in Git |
| Done | “This matches the problem” | Merged | Residual risk is explicit | Deployed to intern env; runbook note |

Nobody “owns quality” or “owns production” alone. QA *reports* quality. Dev *builds* it in. BA *defines* what good means. DevOps *makes the path to run it repeatable*.

## Shared language worth learning together

Spend one hour as a group on:

- [User stories](https://www.atlassian.com/agile/project-management/user-stories)
- [Gherkin](https://cucumber.io/docs/gherkin/reference/) — one example, three roles
- [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [Scrum events](https://www.atlassian.com/agile/scrum) as your team actually runs them
- GitHub [pull requests](https://docs.github.com/en/pull-requests) — even BAs should know how to read a diff at a high level
- [Docker Get started](https://docs.docker.com/get-started/) — DevOps leads; Dev and QA should see a container run

## A 2-week team drill (do this)

**Product:** intern ShiftBoard — request to swap a shift.

1. **BA (day 1–2):** problem brief, 4 stories, AC including “lead rejects.”
2. **Trio refinement (1 hour):** cut to one MVP story. QA lists tests from AC. Dev says what is hard.
3. **Dev (day 3–7):** one flow works, plus empty and error.
4. **DevOps (day 3–8):** Dockerfile + CI on push. Staging or local Docker that QA can hit.
5. **QA (day 5–9):** charter + bugs + one API check. File bugs with evidence.
6. **BA (day 8–10):** update AC from bugs. Decide what is MVP vs later.
7. **Demo (30 min):** BA states the problem, Dev shows the flow, QA shows remaining risk, DevOps shows the pipeline.

That drill is closer to industry than any solo certificate.

## Habits that make seniors want you back

- **Write it down.** Decisions in chat die. Put them in the ticket.
- **Show work early.** A bad draft on day 2 beats a perfect surprise on day 10.
- **Name blockers with a date.** “Waiting on access since Tuesday.”
- **Praise across roles.** QA who writes a great bug, Dev who asks a clarifying question, BA who cuts scope, DevOps who makes CI readable — say it in standup.
- **Do not weaponize process.** “That’s not my job” is how intern teams rot.

## Links all three should keep

- [Google Technical Writing](https://developers.google.com/tech-writing)
- [SQLBolt](https://sqlbolt.com/) — data literacy is shared
- [Postman Learning](https://learning.postman.com/) — APIs are shared
- [Figma resource library](https://www.figma.com/resource-library/) — read the frames
- [A11Y Project checklist](https://www.a11yproject.com/checklist/)
- [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [The Missing Semester](https://missing.csail.mit.edu/) (Dev, QA, DevOps especially)
- [Docker Get started](https://docs.docker.com/get-started/)
