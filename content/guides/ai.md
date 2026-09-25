# AI for interns (every role)

Knowledge is cheap now. Judgment is not. This is the missing skill: using AI without becoming fake-ready.

Read this in week 1. Re-read before the capstone.

## The rule

**You are the intern. The model is a fast junior who did not join the meeting, cannot see your screen unless you show it, and will lie confidently.**

If you cannot explain the output, you cannot ship the output.

## What AI is good for

- Explaining a concept five ways until it clicks
- Critiquing *your* draft (story, bug, code, email)
- Generating *candidates*: test ideas, interview questions, regex, SQL you will run
- Boilerplate you already understand (markdown tables, types, CSS)
- Translating jargon (“what is idempotent in this API?”)

## What AI is bad for

- Being the source of requirements, architecture, or test coverage
- Anything with secrets, production data, HR, or customer PII
- “Fix the whole repo”
- Legal, security, or accessibility sign-off
- Replacing the hour you needed to struggle with Git or the debugger

## Role-specific traps

**Developers**

- Copilot will write code that compiles and is still wrong (off-by-one, wrong auth, swallowed errors).
- If the PR is 400 lines of generated glue you cannot walk through, you did not do intern work.
- Never `git commit` `.env`. Never paste access tokens into a chat.

**QA**

- Generated test cases cluster on the happy path and login.
- Models cannot exploratory-test a UI they cannot see.
- A 200 OK with the wrong body will look “fine” to a model that did not run the request.

**BA**

- Models invent SLAs, fields, and integrations that sound real.
- Polished writing can hide that nobody asked for the feature.
- Stakeholder quotes must come from humans.

**DevOps**

- Generated YAML will look complete and still deploy secrets, wrong regions, or paid resources.
- A green pipeline that never ran your tests is not CI.
- Never paste kubeconfigs, `.pem`, or production logs into a public model.

## How to prompt at work (copy this shape)

1. **Role and goal:** “You are reviewing my bug report for a senior developer.”
2. **Context:** stack, constraint, audience.
3. **What you already tried.**
4. **Ask for options + tradeoffs**, not one true answer.
5. **Demand uncertainty:** “List assumptions. Mark anything you guessed.”

Example:

> Here is my acceptance criteria for shift swap cancel. Punch holes. What roles, deadlines, and error cases are missing? Do not add features. List assumptions.

## Verification checklist (print)

- [ ] I can explain every line / rule I will submit
- [ ] I ran it (code, query, test, or conversation with a human)
- [ ] No secrets in the prompt
- [ ] I deleted plausible fiction
- [ ] A teammate could reproduce my result from my notes

## Links

- [Anthropic: prompt engineering overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [OWASP Top 10 for LLM applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [How to ask a good question](https://stackoverflow.com/help/how-to-ask) — same skill, humans and models
- [Google Technical Writing](https://developers.google.com/tech-writing) — you still have to write

## Team policy (suggested)

Your intern lead can paste this into Slack:

> Use AI. Do not hide it. In PRs / stories / bugs, add a line: “AI used for X. I verified Y.”  
> Never paste secrets, customer data, or the whole private repo into a public tool.  
> If AI wrote it and you cannot explain it, it is not done.
