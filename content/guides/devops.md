# DevOps intern path

A sequenced path to become useful on a real delivery team — not a person who collected cloud certificates and still cannot ship a container.

**Time:** 8 weeks at 6–8 hours/week (or 12 weeks if you have less).  
**Rule:** Make something run, fail, and run again. Match your intern team’s tools (GitHub Actions, Azure DevOps, Jenkins, AWS, Azure). The habits below still apply.

## What industry actually needs from you

Companies do not hire intern DevOps people who “know Kubernetes.” They hire people who can:

- Explain how a commit becomes a running environment
- Use Linux well enough to find a file, a process, a port, and a log
- Read a failing CI job and fix the *reason*, not by clicking Re-run
- Build and run a Docker image, then say what is inside it
- Keep secrets out of Git
- Write a short update: what is down, since when, what you checked
- Pair with developers and QA instead of throwing YAML over a wall
- Use AI to explain a log, then **verify** on the real machine

If you can do those, you are ahead of most campus hires who only watched Docker videos.

## Skip this (it wastes intern months)

- Starting with Kubernetes before you can run one container
- Trying to finish the [DevOps roadmap](https://roadmap.sh/devops) as a checklist
- Collecting AWS / Azure / CKA certificates with no repo
- Pasting production kubeconfigs, `.env`, or SSH keys into a chatbot
- Learning five clouds before you understand HTTP, DNS, and Linux permissions
- “YAML engineer” work you cannot debug when it fails

## How to study

1. Read the week’s **why**.
2. Open the **links in order**. Official docs beat random blogs.
3. Do the **practice** in a GitHub repo named `intern-lab` (or your team repo if they allow it).
4. Tick the “you know it when” list honestly.
5. If stuck > 30 minutes: write the command, the error, what you tried, then ask a human.

---

## Week 1 — How software actually ships

**Outcome:** You can describe path-to-production, and you can ask a question a senior will answer.

DevOps is not “the server person.” It is making build, test, release, and run reliable enough that developers can ship.

**Learn (in order)**

1. [How to ask a good question](https://stackoverflow.com/help/how-to-ask) — command, error, what you expected.
2. [nohello](https://www.nohello.net/)
3. [Atlassian Agile Coach: Scrum](https://www.atlassian.com/agile/scrum)
4. [The Twelve-Factor App](https://12factor.net/) — config, logs, build vs run (skim)
5. [GitHub: about pull requests](https://docs.github.com/en/pull-requests)

**Practice**

- Create repo `intern-lab`. Write `NOTES.md`: how a change goes from laptop → CI → staging → production on a typical team (15 lines).
- List your intern project’s actual tools (Git host, CI, cloud, chat). If you do not know, ask once, in writing.

**You know it when** you can explain build vs deploy vs runtime without mixing them up.

**AI:** Ask it to explain *public* docs for GitHub Actions or Azure Pipelines. Do not paste your company’s private pipeline.

---

## Week 2 — Linux and the shell until they are boring

**Outcome:** You can move around a machine, find logs, and not panic at a terminal.

Most intern “the server is broken” moments are path, permissions, or a process that is not running.

**Learn**

1. [The Missing Semester: shell + debugging](https://missing.csail.mit.edu/)
2. [Linux Journey](https://linuxjourney.com/) — command line, permissions, processes, text-fu
3. [Pro Git, chapters 1–3](https://git-scm.com/book/en/v2) if Git is still shaky

**Practice**

- On your laptop (or a free Linux VM): `ls`, `cd`, `pwd`, `cat`, `grep`, `chmod`, `ps`, `curl`.
- Write `SHELL.md` with 10 commands you actually used and what they did.
- Break a permission on a file on purpose, then fix it. Write the story.

**You know it when** you can find which process holds a port, and read the last 50 lines of a log.

**AI:** Paste *your* error text, not “write me Linux.” Never paste private keys.

---

## Week 3 — Git, environments, and config

**Outcome:** Branch, PR, and keep secrets out of the repo.

**Learn**

1. [Atlassian Git tutorials](https://www.atlassian.com/git/tutorials)
2. [GitHub: using secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
3. [12-factor: config](https://12factor.net/config)
4. [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — data leak risk

**Practice**

- Add a `.gitignore` that excludes `.env`, `*.pem`, `node_modules`.
- Create a dummy `.env.example` with fake names, no real values.
- Open a PR that only adds a README “How to run locally.”

**You know it when** you would refuse to commit a password even if AI put it in the file.

**AI:** Allowed to draft `.gitignore`. You check it. Forbidden: “here is our production connection string, put it in YAML.”

---

## Week 4 — Containers (Docker) for real

**Outcome:** You can build, run, and explain a Docker image.

**Learn**

1. [Docker: Get started](https://docs.docker.com/get-started/)
2. [Docker: Dockerfile reference](https://docs.docker.com/reference/dockerfile/) — skim after you build one
3. [Play with Docker](https://labs.play-with-docker.com/) if you cannot install Docker locally

**Practice**

- Containerize a tiny app (static HTML, or last week’s intern app, or a one-file Python/Node server).
- `docker build`, `docker run`, `docker logs`, `docker ps`.
- Write `DOCKER.md`: base image, what COPY does, how you pass a port.

**You know it when** you can explain image vs container, and why baking secrets into an image is a bug.

**AI:** It will invent flags. Run the commands yourself. Delete `latest` cargo-cult if you do not know why.

---

## Week 5 — CI/CD: a pipeline that fails on purpose

**Outcome:** A git push runs a check. You can read the log when it goes red.

**Learn**

1. [GitHub Actions: Quickstart](https://docs.github.com/en/actions/writing-workflows/quickstart)  
   If your team uses Azure DevOps: [Azure Pipelines key concepts](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/key-pipelines-concepts) — same ideas, different YAML.
2. [GitHub Actions: using workflows](https://docs.github.com/en/actions/using-workflows)

**Practice**

- Add a workflow: install, lint or unit test, fail if tests fail.
- Break a test, push, watch CI go red, fix it, watch it go green. Screenshot both in `CI.md`.
- Write the difference between “CI failed” and “the app is down.”

**You know it when** your first move on a red X is the log, not a chat ping that says “CI broken.”

**AI:** Draft YAML is allowed. You must be able to point to each step. Generated `uses: some-action@v99` you did not look up is intern-code smell.

---

## Week 6 — HTTP, DNS, and “why can’t they reach it?”

**Outcome:** You can debug a “it works on my machine” network story at intern level.

**Learn**

1. [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
2. [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
3. [MDN: What is a URL](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
4. [Cloudflare: What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/)

**Practice**

- `curl -i` a public URL. Write method, status, two headers.
- Explain 502 vs 404 vs connection refused in `NET.md`.
- If your intern app is deployed, hit it with curl from your machine and from CI (or a teammate). Note the difference.

**You know it when** you stop saying “the network is down” and start saying “DNS / TLS / 403 / timeout.”

**AI:** Good at explaining a curl output you pasted. Bad at guessing your VPC.

---

## Week 7 — Observability lite + infrastructure as code lite

**Outcome:** You know where logs live, and you have seen one IaC file you can explain.

Do **not** become a Terraform expert this intern. Learn the idea: environments should be described in Git, not in a click-ops memory.

**Learn**

1. [12-factor: logs](https://12factor.net/logs)
2. [Terraform: tutorials (install + first resource)](https://developer.hashicorp.com/terraform/tutorials) — stop after “hello” if your team does not use it
3. If the team is Azure: [Bicep / ARM overview](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview) skim
4. [Prometheus overview](https://prometheus.io/docs/introduction/overview/) — stretch; know “metrics exist”
5. Kubernetes: **only if your team runs it** — [Kubernetes: Overview](https://kubernetes.io/docs/concepts/overview/) after Docker is solid

**Practice**

- Add structured logs (or even `console.log` with request id) to your tiny app. Show them in `docker logs`.
- Optional: one Terraform or Bicep file that would create *nothing expensive* (or only local/dummy). Or write `IAC.md`: what your team already uses.

**You know it when** you can say where you would look first: CI log, app log, or cloud console.

**AI:** IaC from a model will open paid cloud resources. Never apply what you did not read. Never use real account credentials in a prompt.

---

## Week 8 — Capstone: path-to-prod for a thin app

**Outcome:** One small app with Dockerfile + CI + a README a teammate can run.

Use ShiftBoard (intern shift swap) if Dev/QA/BA are doing that capstone, or a tiny health-check API.

**Deliverables**

1. Repo with README: how to run locally, how to run with Docker, how CI is triggered
2. Dockerfile that builds
3. CI workflow that runs on push (green)
4. `.env.example` and a `.gitignore` that protects secrets
5. `RUNBOOK.md`: if CI is red, if the container will not start, if curl fails — first three checks
6. `RETRO.md`: what AI wrote, what you ran, what you still do not understand

Demo in 5 minutes: push a tiny change, show the pipeline, show the running container.

---

## First week on the job (print this)

- Get access: repo, CI, cloud console (read-only first is fine), staging.
- Watch one real pipeline succeed and one fail. Save the failing log.
- Ask: “Where do production logs live? Who gets paged?”
- Add yourself to the intern runbook, not by rewriting production.
- Never rotate or delete credentials “to test.”
- Never apply Terraform / pipelines to production as an intern without a named reviewer.

## Intern interview questions they will actually ask

| They ask | They want |
| --- | --- |
| What happens after git push? | CI, artifact, deploy, env, not a vendor pitch |
| Docker image vs container? | Build vs run, layers at intern level |
| A pipeline is red. What do you do? | Open the log, reproduce, smallest fix |
| How do you handle secrets? | Env / secret store, never Git |
| How do you use ChatGPT / Copilot? | Explain logs, never paste keys, you still own the YAML |

## Extra links (only after the path)

- [roadmap.sh DevOps](https://roadmap.sh/devops) — map only
- [Microsoft Learn: Azure fundamentals](https://learn.microsoft.com/en-us/training/azure/) if your team is Azure
- [AWS Skill Builder](https://skillbuilder.aws/) if your team is AWS — one intro, then stop
- [Kubernetes docs](https://kubernetes.io/docs/home/) after Docker is boring
