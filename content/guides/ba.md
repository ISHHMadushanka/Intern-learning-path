# Business analyst intern path

A sequenced path to become the person who turns a messy problem into something a team can build and test.

**Time:** 8 weeks at 6–8 hours/week.  
**Rule:** Separate **problem** from **solution**. Write so developers and QA can act. Do not invent requirements with AI.

## What industry actually needs from you

Strong intern BAs:

- Ask who is hurt, how often, and what “done” means
- Elicit from people (and from data), not only from a template
- Write user stories with **testable** acceptance criteria
- Map current vs future process with a simple diagram
- Notice missing states: empty, error, permission, audit, rollback
- Work with Dev and QA as partners — not as a ticket vending machine
- Use AI to tidy writing, never to fabricate stakeholder quotes or rules

ECBA / BABOK names are useful later. This path is about **doing the work**.

## Skip this

- 40-page BRDs nobody reads
- User stories with no acceptance criteria
- Jumping to UI (“put a dropdown here”) before the problem is clear
- Copy-pasting BABOK knowledge areas as if they were a checklist for an intern week
- Letting ChatGPT “write the requirements” for a product you have not spoken to anyone about
- Confusing stakeholder preference with evidence

## How to study

Keep `ba-lab/` with: interview notes, problem briefs, story maps, AC, and process sketches. That is your portfolio — prettier templates are optional.

---

## Week 1 — Problem vs solution

**Outcome:** You can write a problem statement that does not smuggle in a UI.

“We need a dashboard” is a solution. “Shift leads cannot see unfilled slots before Friday, so they overtime-staff” is a problem.

**Learn**

1. [IIBA career resources](https://www.iiba.org/career-resources/) — what the profession thinks BA is (skim)
2. [Bridging the Gap](https://www.bridging-the-gap.com/) — practical BA entering the role
3. [Joel on Software](https://www.joelonsoftware.com/) — read a spec / team essay for taste
4. [How to ask a good question](https://stackoverflow.com/help/how-to-ask)
5. [nohello](https://www.nohello.net/)

**Practice**

- Pick a campus or intern pain (room booking, leave, meal pass). Write:
  - Who,
  - What they need to do,
  - What they do today,
  - Why it hurts,
  - How we would know it is better.
- Ban solution words (app, button, AI, dashboard) in the first draft. Add them only in a separate “ideas” list.

**You know it when** a developer could disagree with your solution and still share your problem.

**AI:** Use it to punch holes: “what evidence is missing?” Do not let it fill gaps with fake stats.

---

## Week 2 — Stakeholders and elicitation

**Outcome:** You can plan who to talk to and run a 20-minute conversation that produces facts.

**Learn**

1. Bridging the Gap elicitation articles (start from [bridging-the-gap.com](https://www.bridging-the-gap.com/))
2. [Nielsen Norman: user research methods](https://www.nngroup.com/articles/which-ux-research-methods/)
3. [Google Technical Writing](https://developers.google.com/tech-writing)
4. [Atlassian Agile Coach](https://www.atlassian.com/agile/scrum) — ceremonies you will sit in

**Practice**

- Stakeholder map for ShiftBoard: intern, lead, HR, payroll (even if imaginary). For each: interest, power, what they know.
- Interview a friend as if they were a shift lead. Script: 8 open questions. Take notes in two columns: **fact** vs **opinion**.
- Write 5 follow-ups you would send after the meeting.

**You know it when** your notes are not a transcript; they are structured (process, rules, exceptions, data).

**AI:** It can suggest questions. It cannot attend the meeting. Never paste confidential interview recordings into a public model.

---

## Week 3 — Stories and acceptance criteria

**Outcome:** A developer can build from your story, and QA can test it, without Slack archaeology.

**Learn**

1. [Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories)
2. [Mike Cohn: user stories](https://www.mountaingoatsoftware.com/agile/user-stories) — INVEST, splitting
3. [Jeff Patton: user story mapping](https://www.jpattonassociates.com/user-story-mapping/)
4. [Gherkin reference](https://cucumber.io/docs/gherkin/reference/)

**Practice**

- Map the activity: “swap a shift” from start to finish (not tickets first).
- Write 5 stories. Each has:
  - User + capability + why
  - Acceptance criteria in Given/When/Then **or** a checklist that is still testable
  - Out of scope
- Split one story that is too big (it has “and then notify everyone and export payroll”).

**You know it when** QA can list tests from your AC without asking what you meant.

**AI:** Let it tighten wording. You own the rules. If the model adds a field nobody asked for, delete it.

---

## Week 4 — Process and data

**Outcome:** You can draw the flow and name the data without hiding in a novel.

**Learn**

1. [BPMN overview](https://www.bpmn.org/) — start, end, decision, swimlane. Enough to be understood.
2. [SQLBolt](https://sqlbolt.com/) lessons 1–8 — BAs who can query are dangerous in a good way
3. [MDN HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) — so API talk is not foreign
4. [Figma resource library](https://www.figma.com/resource-library/) — you need to **read** frames, not become a designer

**Practice**

- Current vs future process for shift swap: two swimlanes (intern, lead). Include the ugly exception: “lead ignores the request.”
- Data list: objects (Shift, Request, Person) and 5 fields each. Mark source of truth.
- In Figma (or paper): happy path + empty state + error. Comment like a BA, not a pixel pusher.

**You know it when** Dev can see where the workflow waits on a human.

**AI:** Diagrams from AI often skip exception paths. Add “what if they say no?” yourself.

---

## Week 5 — Specs engineers can build

**Outcome:** You write for the reader: Dev, QA, and the person who will support this in 6 months.

**Learn**

1. [Google Technical Writing courses](https://developers.google.com/tech-writing)
2. [Joel on Software](https://www.joelonsoftware.com/) — search “spec”
3. [NN/g heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — missing feedback, error prevention
4. Your team’s Confluence/Notion template — **match it**

**Practice**

Write a 2-page feature brief for “request shift swap”:

- Problem and non-goals
- Flow
- Rules (who can, deadlines, edit/cancel)
- AC
- Analytics / audit (even one sentence)
- Open questions (honest)

Give it to a developer intern. Sit silent for 5 minutes while they mark confusion. That markup is gold.

**You know it when** the open questions are real, not fake-complete.

**AI:** Use it as an editor: “make this shorter; keep every rule.” Do not use it as the author of business rules.

---

## Week 6 — Facilitation, estimation talk, and saying no

**Outcome:** You can run a 30-minute workshop and cut scope without drama.

**Learn**

1. Patton story mapping (again) — workshops live or on a whiteboard
2. Scrum events on [Atlassian](https://www.atlassian.com/agile/scrum) — refinement is your home
3. [nohello](https://www.nohello.net/) + async updates — BAs who write well need fewer meetings

**Practice**

- Facilitate a 20-minute mock refinement: 3 stories, 1 must be split, 1 must be deferred. Timebox.
- Write a “no” email: stakeholder wants a mobile app this sprint; you propose an MVP on web + a date for research.
- After a meeting, send a 8-line summary: decisions, owners, dates, open questions.

**You know it when** people leave the room knowing the next action, not just “good discussion.”

**AI:** It can draft the recap from **your** bullets. If you only have a recording dump, you will ship errors.

---

## Week 7 — AI, ethics, and traceability

**Outcome:** You use AI as a junior analyst that needs supervision.

**Learn**

1. [Anthropic prompt overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
2. [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
3. [W3C accessibility easy checks](https://www.w3.org/WAI/test-evaluate/) — BAs who forget disabled users ship incomplete AC
4. Traceability idea: every AC maps to a user need or a regulation you can name

**Practice**

- Feed AI a messy email of “requirements.” Ask for stories. Then **red-team** the output: invented SLAs, missing roles, fake integrations.
- Add AC for: permission denied, cancel, audit log, accessibility (keyboard, labels).
- Never put HR data, customer PII, or contracts into a public chatbot.

**You know it when** you can show a human source for every rule.

**AI:** Default posture: the model is a confident intern who did not attend the meeting.

---

## Week 8 — Capstone: ShiftBoard problem brief

Work with Dev and QA interns if you can.

**Deliverables**

1. Problem statement (no UI in paragraph 1)
2. Stakeholder map + 1 interview note
3. Story map photo / diagram
4. 6 stories with AC (include at least 2 exception paths)
5. Process sketch (current vs future)
6. Open questions and a proposed MVP cut
7. `RETRO.md`: AI usage and what you verified

## First week on the job

- Learn the product, the customer, and last quarter’s incidents.
- Read 10 recent tickets. Note how your team writes AC.
- Ask QA what they always have to guess. Fix that in the next story.
- Ask Dev what they always have to ping you for. Put it in the brief next time.
- Shadow a refinement. Speak once: a clarifying question.

## Questions you should be able to answer

| They ask | They want |
| --- | --- |
| Tell me about a time requirements changed | You updated AC and told QA/Dev; you did not hide it |
| How do you know this is needed? | User, evidence, not “the VP said in passing” |
| Walk through this story | Testable AC, exceptions, data |
| How do you work with QA? | Shared examples, not tickets over the wall |
| How do you use AI? | Editing and critique, not invented business rules |

## Extra links

- [IIBA](https://www.iiba.org/)
- [Mountain Goat Software: stories](https://www.mountaingoatsoftware.com/agile/user-stories)
- [Jeff Patton story mapping](https://www.jpattonassociates.com/user-story-mapping/)
- [SQLBolt](https://sqlbolt.com/)
- [Figma](https://www.figma.com/resource-library/)
- [NN/g articles](https://www.nngroup.com/articles/)
