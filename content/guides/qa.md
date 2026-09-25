# QA intern path

A sequenced path to become a tester teams trust — not a person who “clicks around” and files vague bugs.

**Time:** 8 weeks at 6–8 hours/week.  
**Rule:** Investigation skill first. Automation second. Tools never replace a model of risk.

## What industry actually needs from you

Good intern QA people:

- Think in **risk**: what would hurt a user or the business if it is wrong?
- Design tests on purpose (boundaries, negatives, combinations) — not only the demo script
- Write a bug that a developer can **reproduce in two minutes**
- Explore with a charter, then report what they covered
- Check APIs and data, not only screens
- Know when **not** to automate
- Use AI to draft cases, then **execute and edit** them — models invent happy paths and miss the sharp edges

ISTQB vocabulary helps you talk to other testers. A certificate without practice does not get you trusted on a squad.

## Skip this

- Downloading “500 test cases for login” PDF packs
- Learning 3 automation tools before you can write a clear bug
- Equating “number of test cases” with quality
- Automating a flow you have never explored by hand
- Reporting “not working” with no URL, user, step, or expected result
- Blindly trusting AI-generated test lists (they are biased to the happy path)

## How to study

Keep a folder `qa-lab/` with: charters, bug reports, Postman collections, and a notes file. That folder is your portfolio.

---

## Week 1 — Quality is not “find bugs”

**Outcome:** You can explain what you are trying to protect, and for whom.

Testing is not a phase after coding. It is a way of asking “is this good enough for these users, in this risk?”

**Learn**

1. [Ministry of Testing](https://www.ministryoftesting.com/) — browse articles; this is the professional neighborhood
2. [ISTQB Foundation syllabus](https://www.istqb.org/certifications/certified-tester-foundation-level) — **skim** for vocabulary (test levels, regression, severity vs priority). Exam is optional.
3. [Atlassian Agile Coach](https://www.atlassian.com/agile/scrum) — where QA sits in a sprint
4. [How to ask a good question](https://stackoverflow.com/help/how-to-ask)

**Practice**

- Pick an app you use (food delivery, campus portal, banking). Write: users, what must never break, what can be ugly but still ship.
- Write 5 risks, ranked. Example: “wrong price at checkout” beats “footer color.”
- Sit with a developer intern and list what *they* think QA does. Compare to this page.

**You know it when** you can say “I am not here to click all buttons; I am here to reduce this risk.”

**AI:** Ask it for risks on a product *you* described. Delete anything you cannot justify.

---

## Week 2 — Test design (the actual craft)

**Outcome:** You can turn a requirement into a small, powerful set of tests.

**Learn**

1. ISTQB syllabus sections on **equivalence partitioning**, **boundary value analysis**, **decision tables** — from the [CTFL page](https://www.istqb.org/certifications/certified-tester-foundation-level)
2. [Gherkin reference](https://cucumber.io/docs/gherkin/reference/) — Given / When / Then as a shared language with BA and Dev
3. [Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories) — you will test these
4. [Google Technical Writing](https://developers.google.com/tech-writing) — your bugs and charters are writing

**Practice**

- Feature: password field, 8–16 chars, at least one number.
  - List invalid / valid classes and **boundaries** (7, 8, 16, 17 chars).
  - Write 8 tests, not 80. Show why each exists.
- Write 3 Gherkin scenarios for “request a shift swap” (happy, validation, permission denied).

**You know it when** you can look at a story and name what you would test *before* the UI exists.

**AI:** Generate a table of cases, then **cut half**. If you cannot say why a case exists, it does not.

---

## Week 3 — Bug reports that get fixed

**Outcome:** Developers thank you for your bugs.

A weak bug: “Pay button not working.”  
A strong bug: environment, user, exact steps, expected vs actual, evidence, severity, and what you already checked.

**Learn**

1. [MDN: HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) — put the 500 in the ticket
2. [MDN: browser developer tools](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
3. [Google Technical Writing — documents](https://developers.google.com/tech-writing/one)
4. Your team’s Jira/Azure DevOps bug template — **follow it**

**Practice**

- File 3 bugs against a public demo or your intern app using this template:

```
Title: [Area] short, specific failure
Environment: URL, browser, user role, build
Steps: numbered, start from a clean state
Expected: the rule, not your feeling
Actual: what happened, including message/status
Evidence: screenshot + response body / console error
Tried: cache, other browser, other user
Severity: user impact
```

- Re-open a bad bug you find on the internet and rewrite it.

**You know it when** a developer can reproduce without pinging you.

**AI:** You may dictate notes to AI to format the template. You must still attach **your** screenshot and status code.

---

## Week 4 — Exploratory testing

**Outcome:** You can run a 45-minute session with a charter and a debrief.

Scripts find what you already imagined. Exploration finds what the team did not.

**Learn**

1. [Satisfice blog](https://www.satisfice.com/blog) — James Bach; read about charters and sessions
2. [DevelopSense](https://www.developsense.com/) — Michael Bolton; “testing vs checking”
3. Ministry of Testing articles on exploratory testing
4. Heuristic tours idea: [Satisfice – tours](https://www.satisfice.com/blog/archives/45) (use as inspiration, not law)

**Practice**

- Charter example: “Explore ShiftBoard swap requests as a **non-owner** intern. Goal: find permission and confusion problems. 45 minutes.”
- Take notes in a session sheet: time, charter, what you covered, bugs, questions, leftover risks.
- Debrief in 5 bullets to a fake lead.

**You know it when** you can show *coverage of a question*, not a pile of random clicks.

**AI:** Ask for charter ideas. You pick one and timebox. Do not let AI “explore” for you — it cannot see the product.

---

## Week 5 — APIs, data, and environments

**Outcome:** You can test a feature that has almost no UI.

Many intern bugs live in APIs, roles, and data, not in CSS.

**Learn**

1. [Postman Learning Center](https://learning.postman.com/)
2. [SQLBolt](https://sqlbolt.com/) lessons 1–12
3. [MDN HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
4. [Playwright API testing](https://playwright.dev/docs/api-testing) (skim)

**Practice**

- Build a Postman collection: 5 requests, 2 environments (mock “dev” vs “qa”), 3 assertions (`status`, a JSON field, response time).
- For a public API, test: happy path, missing auth, bad id, extra field.
- Write SQL: find duplicate emails; count rows per status.

**You know it when** you can catch a 200 OK that returns the **wrong resource**.

**AI:** Let it draft assertions. Run them. Watch for tests that pass on empty data.

---

## Week 6 — Automation literacy (not “become SDET overnight”)

**Outcome:** You can write a few stable checks, and you know what must stay human.

**Learn**

1. [Test Automation University](https://testautomationu.applitools.com/) — one intro + one Playwright (or Cypress) course
2. [Playwright getting started](https://playwright.dev/docs/intro)
3. [Testing Library principles](https://testing-library.com/docs/guiding-principles) — test as the user
4. Your team’s existing pipeline — **read a failing job once**

**Practice**

- Automate **one** flow you already tested by hand (login or create-item).
- Delete any wait(5000) you are tempted to add. Use Playwright’s locators and assertions instead.
- Write a note: 5 things you would **not** automate yet (visual polish, one-off admin, unreleased UX).

**You know it when** you can explain flakiness, and your test fails when the feature breaks — not randomly.

**AI:** Codegen is allowed to *start* a test. You must make it stable and readable. Generated selectors that use nth-child are intern-code smell.

---

## Week 7 — Accessibility, security awareness, AI in testing

**Outcome:** You notice intern-sized quality holes that teams skip.

**Learn**

1. [W3C: evaluating accessibility](https://www.w3.org/WAI/test-evaluate/)
2. [The A11Y Project checklist](https://www.a11yproject.com/checklist/)
3. [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/) — intro + auth; you are not a pentester
4. [OWASP Top 10 for LLM apps](https://owasp.org/www-project-top-10-for-large-language-model-applications/)

**Practice**

- Keyboard-only pass on your intern app. Tab order, focus, labels.
- Check: can you open another user’s id in the URL? (Tell the team; do not attack real systems.)
- Take an AI-generated test list for login and mark: useful / duplicate / missing negative / hallucinated.

**You know it when** you can file an a11y bug with impact (“cannot submit with keyboard”) not “WCAG 2.2 2.1.1.”

**AI:** Never paste credentials, session tokens, or production logs into a model.

---

## Week 8 — Capstone: quality pack for ShiftBoard

**Product:** ShiftBoard — intern shift swap (work with Dev and BA interns if you can).

**Deliverables**

1. Risk list (10 items, ranked)
2. Two exploratory charters + session notes
3. 5 bug reports (even if some are “no bug, question”)
4. Postman collection **or** a small Playwright spec for the happy path + one negative
5. Regression shortlist: what to retest if Dev changes permissions
6. `RETRO.md`: where AI helped, where it lied

## First week on the job

- Get environments, test users, and data rules. Write them down.
- Ask: “What must not break this sprint?”
- Read production bugs from last month. That is the real risk profile.
- Pair on one exploratory session with a senior if they have time.
- Do not block the release with low-severity noise; **do** block on data loss, security, and unusable core flows.

## Questions you should be able to answer

| They ask | They want |
| --- | --- |
| How do you decide what to test? | Risk, users, change, not “all cases” |
| Show me a bug you wrote | Repro, evidence, impact |
| Manual vs automation? | Checking vs investigating; cost of flaky tests |
| How do you use AI? | Draft, then execute; never skip seeing the product |
| A developer says “works on my machine” | Environment, data, logs, compare builds |

## Extra links

- [Ministry of Testing](https://www.ministryoftesting.com/)
- [Association for Software Testing](https://www.associationforsoftwaretesting.org/)
- [SQLBolt](https://sqlbolt.com/)
- [Postman](https://learning.postman.com/)
- [Playwright](https://playwright.dev/docs/intro)
