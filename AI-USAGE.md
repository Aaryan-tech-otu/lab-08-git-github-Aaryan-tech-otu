# AI-USAGE.md — Lab 08

This is the **one lab where you may use an AI agent to *generate* code** (it follows the
week-8 AI lecture). With that permission comes documentation: log **every** time AI
produced or edited code you submit — **before** you commit it. Using AI only to *learn*
(explanations, error messages, design talk) needs no entry.

**Free models only.** Drop a marker where AI-assisted code lives:
`// AI-assisted — see AI-USAGE.md #N`. Full rules: `project/ai-policy.md`.

---

## Log (one entry per AI use — copy the block for each)

### #1 — Syntax Error
- **Date:** 2026-11-16
- **Tool / model:** Copilot Free
- **Files:** `src/AddTodoForm.jsx`
- **Prompt (verbatim):**  Getting an error syntax error on line 19 can you fix the error

### #2 — Return Statement
- **Date:** 2026-11-16
- **Tool / model:** Copilot Free
- **Files:** `src/App.jsx`
- **Prompt (verbatim):**  Write the return statement that allows users to switch between different views of their tasks(all,active, completed)

  ```
  1. Getting an syntax error on line 19 can you fix the error
  2. Write the return statement that allows users to switch between different views of their tasks(all,active, completed)

  ```

- **What it produced & what I kept / changed / rejected:** 
- For my first prompt it gave me 
      ```
        name="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Add a todo…"
      ```

-For my second prompt it gave me
    ```
        <div className="filter-bar">
            <button type="button" onClick={() => setFilter("all")}>
              All
            </button>
            <button type="button" onClick={() => setFilter("active")}>
              Active
            </button>
            <button type="button" onClick={() => setFilter("completed")}>
              Completed
            </button>
          </div>
    ```

---

## Reflection (required)

- **What did the agent get wrong, or do awkwardly?** 
Tried to change the import statement but overall accepted both changes

- **Explain-every-line check:** I can explain every line of the code in this lab and why it's correct. ☒  *(Your TA may ask you to walk through any of it.)*
