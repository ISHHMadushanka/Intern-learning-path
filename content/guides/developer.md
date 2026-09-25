# Developer intern path

A sequenced path to become useful on a real team — not another tutorial collector.

**Time:** 8 weeks at 6–8 hours/week (or 12 weeks if you have less).  
**Rule:** One stack deeply beats ten frameworks shallowly. Match your intern team’s language when you can (Java, C#, Python, JavaScript). The habits below still apply.

## What industry actually needs from you

Companies do not hire intern developers who “know React.” They hire people who can:

- Take a ticket, find the right files, make a small change, and open a pull request
- Use Git without freezing
- Debug with logs, the network tab, and a breakpoint — not by pasting the whole repo into a chatbot
- Read other people’s code
- Write a short update: what you did, what is blocked, what you will do next
- Know enough HTTP and SQL to not be helpless
- Use AI as a pair, then **verify** the output

If you can do those, you are ahead of most campus hires.

## Skip this (it wastes intern months)

- Collecting certificates instead of shipping tiny projects
- Trying to finish [roadmap.sh](https://roadmap.sh/) as a checklist (use it as a **map** only)
- Watching 20-hour YouTube “complete courses” at 2× with no repo
- Learning 4 frameworks before you can explain HTTP status codes
- Pasting production code or secrets into ChatGPT / Claude / Copilot chat
- Memorizing 23 design patterns before you have written tests

## How to study

1. Read the week’s **why**.
2. Open the **links in order**. Official docs beat random blogs.
3. Do the **practice** in a GitHub repo named `intern-notes` or similar.
4. Tick the “you know it when” list honestly.
5. If stuck > 30 minutes: write what you tried, then ask a human.

---

## Week 1 — How software actually ships

**Outcome:** You can describe how a ticket becomes production, and you can ask a question that a senior will answer.

Work does not start in VS Code. It starts with a user problem, a ticket, a branch, a review, CI, and a deploy. Interns who only know tutorials get lost in week one because the repo is already huge and nobody watches a 4-hour course with them.

**Learn (in order)**

1. [How to ask a good question](https://stackoverflow.com/help/how-to-ask) — context, what you tried, what you expected.
2. [nohello](https://www.nohello.net/) — put the question in the first chat message.
3. [Atlassian Agile Coach: Scrum](https://www.atlassian.com/agile/scrum) — standup, sprint, retro: know the *purpose*, not the ritual.
4. [GitHub: about pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

**Practice (2–3 hours)**

- Create a GitHub account if you do not have one. Create repo `intern-lab`.
- Write `NOTES.md`: “How a bug goes from report → production on a typical web team” in 15 lines.
- Send yourself a fake Slack message that is a *good* intern question (problem, what you tried, screenshot/log, question).

**You know it when** you can explain branch → PR → review → merge without hand-waving.

**AI:** Ask the model to explain your *team’s* tools (Jira, GitHub, Azure DevOps) from public docs. Do not ask it to invent your company’s process.

---

## Week 2 — Git until it is boring

**Outcome:** Commit, branch, open a PR, respond to a comment, without panic.

Most intern “I broke the repo” moments are Git, not code.

**Learn**

1. [Pro Git, chapters 1–3](https://git-scm.com/book/en/v2) (free book)
2. [Atlassian Git tutorials](https://www.atlassian.com/git/tutorials) — especially branching and undoing
3. [The Missing Semester: Git](https://missing.csail.mit.edu/2020/version-control/)
4. [Conventional Commits](https://www.conventionalcommits.org/) — then **match whatever your team already uses**

**Practice**

- In `intern-lab`, make 8 real commits on a `notes` branch (not one giant commit).
- Open a pull request into `main`. Review it yourself: title, description, what to test.
- Clone a small open-source repo, create a branch, change a README typo, and describe the PR you *would* open (you do not have to send it).

**You know it when** you can recover from “I committed to main by accident” using a tutorial, not by deleting the folder.

**AI:** Use AI to explain `git reflog` output **you pasted from your own terminal**. Never let it run destructive Git commands you do not understand (`reset --hard`, `push --force`).

---

## Week 3 — The web you cannot fake (HTTP, HTML, JS)

**Outcome:** You can read a network request and write JavaScript without a framework.

Frameworks sit on HTTP, the DOM, and the language. If those are weak, AI-generated React will always feel like magic — until it breaks.

**Learn**

1. [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
2. [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) — bookmark this
3. [MDN Learn Web](https://developer.mozilla.org/en-US/docs/Learn)
4. [JavaScript.info](https://javascript.info/) — Part 1, then Part 2 as needed
5. Optional hole-fill: [freeCodeCamp JS](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/)

If programming still feels like copying, add [CS50x weeks 0–5](https://cs50.harvard.edu/x/) *instead of* another framework course.

**Practice**

- Using browser DevTools → Network: log in to any demo site and write 5 requests you see (method, URL, status).
- Build a single HTML file: a todo list with add/remove, no framework, hosted on GitHub Pages or opened locally.
- Write 10 lines: difference between 401, 403, 404, and 500.

**You know it when** you can explain GET vs POST, and why putting secrets in the frontend is a bug.

**AI:** Ask “explain this fetch error” with the **status code and response body**. Do not ask it to “write my whole app.”

---

## Week 4 — One UI stack, officially

**Outcome:** You can build a small interactive UI from official docs.

Pick **one**, matching the intern team if you know it:

| If your team uses | Study this |
| --- | --- |
| React / Next.js | [react.dev/learn](https://react.dev/learn) then [Next.js Learn](https://nextjs.org/learn) |
| Any web team, unclear | [The Odin Project](https://www.theodinproject.com/) Foundations + Full Stack JS |
| Java | Official Spring guides (start from your team’s repo README, not a random Udemy clone) |
| .NET | Microsoft Learn for ASP.NET, plus your team’s repo |
| Python | FastAPI or Django tutorial — again, match the team |

Also: [TypeScript Handbook — Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) if the repo is TS.

**Practice**

- Rebuild last week’s todo app in your chosen stack. Deploy it (Vercel, Netlify, or GitHub Pages).
- Add one empty state, one loading state, one error state. Interns who only build the happy path are not ready.

**You know it when** you can point to *your* code and explain data flow without reading it from the chatbot.

**AI:** Allowed to scaffold components. Forbidden: shipping code you cannot explain in the PR description.

---

## Week 5 — APIs and SQL (backend literacy)

**Outcome:** You can call an API, read JSON, and query a table.

Even “frontend interns” drown without this.

**Learn**

1. [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
2. [SQLBolt](https://sqlbolt.com/) lessons 1–12
3. [Postman Learning Center](https://learning.postman.com/) — send GET/POST, use an environment
4. Skim [web.dev Learn](https://web.dev/learn) only for gaps

**Practice**

- Hit a public API (for example GitHub users API or a JSON placeholder). Show loading/error/empty in your UI.
- Write SQL for: all rows, filter, join two tables, count by group. Save the queries in `sql-practice.md`.
- In Postman, save a collection with 3 requests and one failing assertion on purpose, then fix it.

**You know it when** you can describe JSON, query params vs body, and what `JOIN` is for.

**AI:** Let it draft SQL, then run it and check row counts yourself. Hallucinated column names are a classic intern failure.

---

## Week 6 — Debugging and tests

**Outcome:** You can find a bug with tools, and you can write one automated check.

Seniors trust interns who can *investigate*. They do not trust interns who only generate more code.

**Learn**

1. [Missing Semester: Debugging](https://missing.csail.mit.edu/2020/debugging-profiling/)
2. [Testing Library guiding principles](https://testing-library.com/docs/guiding-principles)
3. [Playwright intro](https://playwright.dev/docs/intro) *or* your team’s test runner (JUnit, PyTest, Jest)
4. Browser DevTools: Console, Breakpoints, Network (MDN has a [DevTools guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools))

**Practice**

- Break your todo app on purpose. Fix it using a breakpoint or a log, and write the story in `DEBUG.md`.
- Add **one** test that fails when the main button disappears. Run it in CI if you can (GitHub Actions starter is enough).
- Watch a teammate’s (or OSS) test file and annotate what each test protects.

**You know it when** your first move on a bug is to reproduce it, not to ask AI for a patch.

**AI:** Use it to suggest *hypotheses* (“could be CORS, could be 401”). You run the experiment.

---

## Week 7 — Working in someone else’s code

**Outcome:** You can read a foreign repo and leave a PR a human wants to review.

This is the actual internship.

**Learn**

1. [GitHub PR docs](https://docs.github.com/en/pull-requests) — reviews, suggested changes, CI
2. [Google Technical Writing (course 1)](https://developers.google.com/tech-writing/one)
3. [Refactoring Guru](https://refactoring.guru/design-patterns) — skim 3 patterns you have actually seen (Factory, Strategy, Observer). Do not memorize the catalog.
4. Your team README, CONTRIBUTING, and a recent merged PR — **this is the real textbook**

**Practice**

- Pick an open-source project or your intern repo. Write `MAP.md`: folders, how to run, how to test, where UI vs API lives.
- Open a PR with: why, how to test, screenshots, and a note about risk.
- Review a classmate’s PR with two comments: one must-fix, one nice-to-have. Be specific.

**You know it when** a teammate can run your PR from the description alone.

**AI:** Ask “what does this function do?” on a *single* function. Do not dump the company repo into a public model.

---

## Week 8 — Capstone: ShiftBoard slice

**Outcome:** One thin vertical slice you can demo in 5 minutes.

**Product:** *ShiftBoard* — intern shift swap.

A teammate should be able to **request a swap** (name, date, reason) and see it in a list. Empty, loading, and error states included.

**Deliverables**

1. GitHub repo with README: how to run, how to test
2. Working happy path + one validation error
3. At least one automated test
4. Short demo video or live demo (3–5 minutes)
5. `RETRO.md`: what AI wrote, what you changed, what you still do not understand

If your team is not web, do the same slice in **their** stack (API + simple UI or even a CLI).

---

## First week on the job (print this)

- Get access: repo, chat, tickets, staging. Write down who owns what.
- Run the app locally on day 1 or ask for help on day 1 — do not sit silent.
- Read 3 recent PRs. Note review style.
- Pick a “good first issue” *with your mentor*, not from the internet.
- Ship something tiny in week 1, even a docs fix. Momentum beats a perfect plan.
- Never commit `.env`, API keys, or production data.

## Intern interview questions they will actually ask

| They ask | They want |
| --- | --- |
| Walk me through a bug you fixed | Reproduction, tools, fix, how you knew it was fixed |
| What happens when you type a URL and hit enter? | HTTP, DNS-level comfort, HTML, not a memorized speech |
| How do you use GitHub Copilot / ChatGPT at work? | Secrets, verification, you still own the PR |
| Tell me about a PR you are proud of | Scope, tradeoff, tests, review |
| How would you learn our codebase? | Run it, map it, read PRs, ask targeted questions |

## Extra links (only after the path)

- [The Odin Project](https://www.theodinproject.com/) — default full web curriculum
- [freeCodeCamp](https://www.freecodecamp.org/) — fill holes, then stop collecting certs
- [web.dev Learn](https://web.dev/learn) — CSS/performance when you need it
- [A11Y Project checklist](https://www.a11yproject.com/checklist/) — accessibility pass on your capstone
- [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — AI risk overview
