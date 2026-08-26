# Epic Backlog — Food Decision AI
**Sprint:** Food Decision AI Sprint
**Date:** August 2026
**Status:** Draft — ready for delivery planning

---

## Source Artifacts

This backlog was generated from the following discovery artifacts:

| Artifact | Path |
|---|---|
| Problem Statement (OPP-01 + OPP-02 + OPP-06) | `Discovery/opportunities/problem-statement.md` |
| Opportunity Backlog | `Discovery/opportunities/opportunity-backlog.md` |
| Solution Hypotheses | `Discovery/opportunities/solution-hypotheses.md` |

No solution overview or PR-FAQ exists yet — this backlog is derived directly from the discovery phase outputs. A PR-FAQ should be authored before delivery planning begins and linked here.

---

## Business Objective

> **Help urban Indian corporate professionals eliminate daily food decision fatigue — so they eat well, feel good, and never have to agonise over what to eat.**

The product must surface contextually relevant food suggestions with near-zero daily input, differentiate itself from junk-like diet apps, and validate willingness to pay within a 2-week sprint.

---

## Epic Candidates

> OPP-04 (Delivery Fallback Recommendation) was considered and deliberately excluded from this backlog.

---

### E1 — Personalised Onboarding & Preference Setup

Users complete a one-time setup (dietary preferences, health goals, cook availability, pantry staples) so the system can generate relevant suggestions from day one — with zero repeat configuration required.

**Linked opportunities:** All (prerequisite gate)

---

### E2 — Proactive Daily Meal Suggestion

Each morning, the app surfaces one ready-to-act meal suggestion on the home screen or via notification — no prompting needed. The user sees one answer to "what do I eat today?" before decision fatigue sets in.

**Linked opportunities:** OPP-01

---

### E3 — Cook Instruction Handoff

The meal suggestion is formatted as a shareable, cook-ready instruction (dish name, key ingredients, brief method note) that users can forward to their cook via WhatsApp in one tap — no editing required.

**Linked opportunities:** OPP-02

---

### E5 — Meal Discovery & Repertoire Building

The app surfaces curated meal ideas that are both genuinely tasty and nutritionally appropriate, helping users build a growing personal repertoire beyond their default 3–4 dishes.

**Linked opportunities:** OPP-04

---

### E6 — Passive Nutrition Awareness

Without any logging, the app provides a lightweight weekly summary of how the user's meals track against their goals — a quiet signal, not a tracker.

**Linked opportunities:** OPP-05

---

### E7 — Weekly Grocery Suggestion

Each week, the app generates a grocery list tied to the upcoming week's meal suggestions so the right ingredients are in the fridge — delivered at the moment the user places their weekly grocery order.

**Linked opportunities:** OPP-06

---

### E8 — Feedback & Preference Refinement

Users can accept, swap, or dismiss suggestions; the system learns from these lightweight signals to improve future suggestions without requiring explicit logging.

**Linked opportunities:** Cross-cutting (supports all OPPs)

---

## Epic Assessment

| | **E1** Onboarding & Preferences | **E2** Proactive Daily Suggestion | **E3** Cook Instruction Handoff | **E5** Meal Discovery | **E6** Passive Nutrition Awareness | **E7** Weekly Grocery Suggestion | **E8** Feedback & Refinement |
|---|---|---|---|---|---|---|---|
| **Business value** (1–10) | 8 | 10 | 9 | 7 | 6 | 7 | 7 |
| **Feasibility** (1–10) | 9 | 7 | 9 | 6 | 5 | 6 | 6 |
| **Dependencies** | None | E1 | E1, E2 | E1, E2 | E1, E8 | E1, E2, E3 | E2 |
| **Complexity** | Low | Medium | Low | Medium | High | Medium | Medium |
| **Target users** | All users | All users | Users with a cook (4/5) | All users | All users | Users with a cook + grocery shoppers | All users |
| **Success metrics** | Onboarding completion ≥80%; setup time ≤5 min | Suggestion acted on ≥60%; time-to-act <30 sec | "Send as-is" rate ≥70%; forwarded via WhatsApp | Users save or act on a new meal ≥1×/week | Users check nutrition summary ≥1×/week unprompted | Grocery list acceptance ≥50%; ingredient variety increase vs. baseline | Suggestion relevance improves over 2-week window |

---

## Prioritization Matrix

```
                        FEASIBILITY
                   Low ◄──────────────► High

         ┌─────────────────┬─────────────────┐
    High │   SEQUENCE      │   PRIORITIZE    │
         │   CAREFULLY     │   FIRST         │
  B      │                 │                 │
  U      │  E2 (10/7)  ●   │  E1 (8/9)   ●  │
  S      │                 │  E3 (9/9)   ●  │
  I      │                 │                 │
  N      ├─────────────────┼─────────────────┤
  E      │   AVOID /       │   DEPRIORITIZE  │
  S  Low │   DEFER         │                 │
  S      │                 │  E8 (7/6)   ●  │
         │  E6 (6/5)   ●   │  E5 (7/6)   ●  │
  V      │                 │  E7 (7/6)   ●  │
  A      │                 │                 │
  L      └─────────────────┴─────────────────┘
  U
  E
```

---

## Recommended Priority Order

| Priority | Epic | Quadrant | Rationale |
|---|---|---|---|
| **1** | **E1 — Onboarding & Preferences** | Prioritize first | Hard prerequisite — nothing else can run without it. High value, lowest risk. |
| **2** | **E3 — Cook Instruction Handoff** | Prioritize first | High value + high feasibility. Once E2 produces a suggestion, this is a formatting + share problem. Ships together with E2 in practice. |
| **3** | **E2 — Proactive Daily Suggestion** | Sequence carefully | Highest business value in the entire backlog but carries the central AI risk (passive inference). Must be sequenced behind E1; prototype should validate the trust assumption early. |
| **4** | **E8 — Feedback & Refinement** | Deprioritize | Medium value + medium feasibility. Needed to prevent suggestion decay but not day-one critical — lightweight signals can be added once E2 is live. |
| **5** | **E5 — Meal Discovery** | Deprioritize | Where delight lives, but depends on E2 working first. Sequence after the core loop is validated. |
| **6** | **E7 — Weekly Grocery Suggestion** | Deprioritize | High leverage downstream but explicitly a Phase 2 unlock (OPP-06). Depends on E2 + E3 being trusted. |
| **7** | **E6 — Passive Nutrition Awareness** | Avoid / defer | Lowest feasibility — requires meal history and passive inference. Risk of replicating the tracking-app failure mode if rushed. |

---

## Delivery Sequencing

```
Phase 1 — MVP core loop
  E1 Onboarding & Preferences
  └── E2 Proactive Daily Suggestion  ──┐
      E3 Cook Instruction Handoff    ──┘  (ship together)

Phase 2 — Retention & delight
  E8 Feedback & Refinement
  E5 Meal Discovery

Phase 3 — System closure
  E7 Weekly Grocery Suggestion
  E6 Passive Nutrition Awareness  (only after meal history established)
```

---

## Scoring Rationale Notes

- **E2** scores 10 on business value — it is the core product moment (OPP-01, cited by 4/5 users). Feasibility is 7 not 10 because passive AI inference with no daily input (Hypothesis 1B) is the central technical risk.
- **E3** scores 9/9 — high value (4/5 users have a cook), low complexity because it is a formatting + share-sheet problem once E2 produces a suggestion.
- **E1** is the prerequisite gate — low complexity, high feasibility, must ship first or nothing else works.
- **E6** scores 5 on feasibility because it requires meal history to be meaningful, and "passive" inference without logging is the very thing that caused HealthifyMe to fail with this user group.
- **E7** scores 6/6 — real value but depends on E2 and E3 being trusted first; explicitly framed as a downstream unlock in the problem statement.
- **E8** is medium across the board — necessary to prevent suggestion staleness, but lightweight signals (accept/swap/dismiss) mean it is not high complexity.
