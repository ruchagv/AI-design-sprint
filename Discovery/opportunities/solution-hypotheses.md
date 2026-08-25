# Solution Hypotheses — OPP-01 + OPP-02 + OPP-06
**Sprint:** Food Decision AI Sprint  
**Method:** Assumption-based hypothesis framing (Lean UX)  
**Source:** `problem-statement.md` · `interview-findings.md` · `opportunity-backlog.md`  
**Date:** August 2026

---

## How to read these

Each hypothesis follows the structure:

> **We believe that** [product action] **will cause** [user behaviour change] **because** [research evidence].

Each hypothesis also names the assumption being tested — the belief that, if wrong, kills the solution.

---

## OPP-01 — The Daily Decision

### Hypothesis 1A — The proactive suggestion

> **We believe that** surfacing a ready meal suggestion before the user has to ask — via a morning notification or home screen card — **will cause** users to act on it immediately without deliberating, **because** the research shows decision fatigue peaks when the question is open-ended, and users who have a ready answer (e.g. a flatmate who manages the food) experience the least stress.

**Assumption being tested:** Users will trust and act on an AI-generated meal suggestion without needing to validate or override it.

**How to test in the prototype:** Show users a morning screen with one meal suggestion and measure whether they tap "use this" or immediately look for alternatives. If they override more than 50% of the time, the trust assumption is broken.

**Kill condition:** If users routinely dismiss or ignore the suggestion and generate their own, the proactive model fails — and the product needs to pivot to a reactive search model instead.

---

### Hypothesis 1B — Zero daily input

> **We believe that** a product that requires no daily configuration or logging **will cause** users to sustain engagement beyond 3 weeks, **because** every tracked app in the research was abandoned at the point where the daily obligation became too high — and users specifically described AI as preferable precisely because "it's not a compulsion."

**Assumption being tested:** A product can generate contextually relevant suggestions without daily input from the user — relying instead on a one-time setup (preferences, goals, pantry staples) and passive inference.

**How to test in the prototype:** Onboard users once. Do not ask them to log anything. After one week, ask whether they feel the suggestions are still relevant. If relevance drops significantly without daily input, the passive inference model needs strengthening.

**Kill condition:** If suggestions feel generic or irrelevant without daily logging, the zero-input premise fails — and the product must find a lighter-touch input mechanism that doesn't feel like tracking.

---

## OPP-02 — The Cook Instruction

### Hypothesis 2A — Cook-ready output format

> **We believe that** formatting the meal suggestion as a short, shareable cook instruction — dish name, key ingredients, brief method note — **will cause** users to forward it directly to their cook without any editing or translation, **because** 4 of 5 participants have a cook and described the friction as not knowing what to say, not inability to communicate once they knew.

**Assumption being tested:** A one-line dish name + ingredient note is sufficient for a domestic cook to execute the meal without further clarification.

**How to test in the prototype:** Show users a suggestion card formatted as a cook instruction. Ask them: "Would you send this to your cook as-is?" Measure the percentage who say yes without wanting to change anything. Target: 70%+.

**Kill condition:** If users consistently need to edit or add to the instruction before sending, the format isn't cook-ready — and needs richer detail (quantities, method steps) or a different delivery mechanism.

---

### Hypothesis 2B — WhatsApp as the delivery channel

> **We believe that** a one-tap "share to WhatsApp" action on the suggestion card **will cause** users to send the cook instruction within seconds of seeing the suggestion, **because** every participant with a cook communicates with them via WhatsApp voice notes or messages — the channel is already established.

**Assumption being tested:** Users already have a WhatsApp thread with their cook, making share-to-WhatsApp the path of least resistance.

**How to test in the prototype:** Include a WhatsApp share button on the suggestion card. In testing, ask users to walk through what they would actually do. If they wouldn't use WhatsApp (e.g., they call the cook, or communicate via a household member), the channel assumption is wrong.

**Kill condition:** If fewer than 3 of 5 test users confirm they would share via WhatsApp, the channel needs to be broadened (copy to clipboard, SMS, voice note prompt).

---

## OPP-06 — The Grocery Gap

### Hypothesis 3A — Weekly grocery list as a downstream unlock

> **We believe that** generating a suggested weekly grocery list tied to the upcoming week's meal suggestions **will cause** users to order a more varied set of vegetables and ingredients, **because** the research shows users default to the same 3–4 groceries not by preference but by inertia — and P1 independently built exactly this system (5 vegetables, 5 days) when given no other tool.

**Assumption being tested:** Users will act on a pre-generated grocery list rather than their default order — if the list arrives at the right moment (before the weekend grocery order) and is tied to meals they already want to eat.

**How to test in the prototype:** Show users a weekly grocery suggestion screen after they've seen the week's meal suggestions. Ask: "Would you order from this list instead of your usual order?" Measure acceptance rate and whether they want to edit it.

**Kill condition:** If users ignore the grocery suggestion and place their habitual order anyway, the upstream unlock fails — and OPP-06 is a feature that doesn't change behaviour despite solving the right problem.

---

## Summary Table

| Hypothesis | Opportunity | Core assumption | Test method | Kill condition |
|---|---|---|---|---|
| 1A — Proactive suggestion | OPP-01 | Users trust and act on AI suggestions | Measure override rate on morning card | >50% overrides |
| 1B — Zero daily input | OPP-01 | Passive inference produces relevant suggestions | Week-1 relevance check without logging | Suggestions feel generic |
| 2A — Cook-ready format | OPP-02 | A dish name + ingredients is enough for the cook | "Would you send this as-is?" — target 70%+ yes | Users need to edit before sending |
| 2B — WhatsApp channel | OPP-02 | Users communicate with cook via WhatsApp | Walk-through in prototype test | <3/5 users would use WhatsApp |
| 3A — Grocery list unlock | OPP-06 | Varied grocery list changes what gets cooked | Acceptance rate on grocery suggestion screen | Users ignore it and order as usual |

---

## Assumptions to Validate from PROJECT-OVERVIEW.md

These three are the make-or-break sprint assumptions. Each maps to one or more hypotheses above.

| Assumption | Mapped hypotheses | Validation method |
|---|---|---|
| **Demand** — The problem is painful enough to seek a product | All hypotheses | Do users engage with the prototype unprompted? Do they say "I would actually use this"? |
| **Behaviour change** — Users will choose this over a nutritionist | 1B, 2A | Does the suggestion feel trustworthy enough to act on without professional validation? |
| **Monetisation** — Users will pay for this | 1A, 1B | After testing, ask: "Would you pay ₹X/month for this?" Target: 3 of 5 say yes at ₹199–299/month. |
