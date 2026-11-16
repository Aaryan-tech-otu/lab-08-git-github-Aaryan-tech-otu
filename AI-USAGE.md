# AI-USAGE.md — Lab 08

This is the **one lab where you may use an AI agent to *generate* code** (it follows the
week-8 AI lecture). With that permission comes documentation: log **every** time AI
produced or edited code you submit — **before** you commit it. Using AI only to *learn*
(explanations, error messages, design talk) needs no entry.

**Free models only.** Drop a marker where AI-assisted code lives:
`// AI-assisted — see AI-USAGE.md #N`. Full rules: `project/ai-policy.md`.

---

## Log (one entry per AI use — copy the block for each)

### #1 — No AI used for this lab
- **Date:** 2026-11-16
- **Tool / model:** None; work completed directly in the repo
- **Files:** `src/App.jsx`, `src/AddTodoForm.jsx`, `AI-USAGE.md`
- **Prompt (verbatim):**

  ```
  None; I completed the required lab changes directly.
  ```

- **What it produced & what I kept / changed / rejected:** No AI-generated code was used. I implemented the controlled input and derived filter logic directly in the app, and I kept the solution aligned with the project tests and lab requirements.

---

## Reflection (required)

- **What did the agent get wrong, or do awkwardly?** No AI agent was used for this lab, so there were no generated mistakes to correct. The implementation was kept simple and explicit: state is the single source of truth for the controlled form, and the visible list is computed from `todos` plus the current filter instead of duplicating data in another state variable.

- **Explain-every-line check:** I can explain every line of the code in this lab and why it's correct. ☒  *(Your TA may ask you to walk through any of it.)*
