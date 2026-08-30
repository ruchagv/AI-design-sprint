# E2 — Proactive Daily Suggestion

**Epic ID:** E2
**Sprint:** Food Decision AI Sprint
**Date:** August 2026
**Status:** Draft
**Priority:** 3 of 7 — core product moment
**Depends on:** E1 (completed preference profile)
**Ships with:** E3 (cook instruction handoff) — together these form the MVP core loop

---

## 1. Problem Statement

Even when urban Indian professionals know what they want to eat broadly, they have no fast, trustworthy answer to "what do I eat today?" at the exact moment the decision must be made — before the cook arrives, or at the start of a draining workday. The decision arrives at the worst possible time, with no ready answer waiting. Users scroll delivery apps, repeat yesterday's meal, or freeze. This epic delivers the core product moment: a suggestion that is already waiting before the user has to think about it, covering every meal the cook handles that day, visible for the full week ahead.

---

## 2. Target Users

**Primary — Cook-assisted professional:** Has completed E1 onboarding with cook schedule captured. Needs a suggestion ready before the cook arrives each morning. The suggestion must be immediately actionable — passable to the cook without deliberation. *(4 of 5 research participants)*

**Secondary — Delivery-first professional:** No cook. Still experiences daily decision fatigue when choosing what to eat. The week view gives them a plan to order against rather than opening Swiggy and scrolling. *(1 of 5 research participants)*

---

## 3. Product Outcomes & Instrumentation

> **Goal:** If we build this, users stop reaching for Swiggy/Zomato as their default decision tool. The product becomes the first thing they check when they need to know what to eat — and they act on what they see without deliberating.

| Phase | Product Outcome | Metric |
|---|---|---|
| **Private Preview** | Users open the app on Day 1 after onboarding | Day-1 open rate ≥ 70% among onboarded users |
| **Private Preview** | Users act on the suggestion (accept or swap) rather than dismissing | Suggestion acted-on rate ≥ 50% |
| **Public Preview** | Users return to the app on most days | Day-7 retention ≥ 50% among active users |
| **Public Preview** | Users act on suggestions without repeated swapping | Suggestion accepted without swap ≥ 60% of daily sessions |
| **GA** | The suggestion replaces scrolling as the default food decision behaviour | ≥ 60% of users act on their suggestion before opening a delivery app (self-reported or session-order signal) |
| **GA** | Week view drives planning behaviour | ≥ 40% of users view the full week at least once per week |

> ⚠️ **Note:** Suggestion act-on rate ≥ 60% is the hypothesis kill condition from the solution hypotheses. If users override or dismiss more than 50% of the time in Private Preview, the proactive suggestion model must be reconsidered.

---

## 4. Assumptions

- A curated meal database filtered by the user's preference profile (dietary type, cuisine ranking, health goal, spice tolerance, disliked ingredients) is sufficient to generate relevant suggestions for the MVP — AI-generated suggestions are a Phase 2 upgrade once the suggestion format is validated.
- Users trust a suggestion generated from their own preference profile enough to act on it without needing to validate it elsewhere.
- Showing one highlighted suggestion per meal per day, within a full week view, gives users enough context to feel in control without adding cognitive load.
- Variety enforcement at the engine level (no dish repeated within a 7-day window) is sufficient — a hard product-level constraint is not required at this stage.
- A push notification timed to the cook's arrival window (captured in E1) is the most reliable trigger; the home screen card is the fallback for users who don't open from the notification.
- The swap mechanic (user can replace any meal in the week view) provides enough user control without requiring a full feedback or rating system — that is deferred to E8.
- Cook-assisted users and delivery-first users can share the same suggestion surface; the difference in output format (cook instruction vs. delivery context) is handled downstream by E3.

---

## 5. User Needs

- A cook-assisted user needs to see today's meal suggestions — covering all meals the cook handles — before the cook arrives, so they can act immediately without deliberating.
- A delivery-first user needs to see a full week of meal suggestions so they have a plan to order against each day rather than opening Swiggy and starting from scratch.
- All users need to see the full week of suggestions from the home screen, with today highlighted, so they have a sense of the week ahead without having to navigate elsewhere.
- A user who doesn't want today's suggestion needs to swap it for an alternative so they remain in control without abandoning the product entirely.
- All users need the suggestion to arrive via push notification timed to their cook's arrival window (or a default morning time for delivery-first users) so the answer is waiting before the decision becomes stressful.
- All users need the home screen card to show the suggestion even if they missed the notification, so the product works regardless of notification behaviour.
- All users need to feel that suggestions are varied across the week — no repeated dishes — so the product doesn't replicate the same-meal-on-repeat failure mode they already experience.

---

## 6. Suggestion Logic — MVP Constraints

**Source:** Curated meal database (Phase 1). AI-generated suggestions introduced in Phase 2 once format is validated.

**Filtering inputs from E1:**
- Dietary type (hard filter — no violations)
- Disliked ingredients (hard filter — excluded from all suggestions)
- Food allergies / intolerances (hard filter — safety constraint)
- Cuisine preference ranking (weighted selection — higher-ranked cuisines appear more frequently)
- Health / fitness goal (soft filter — influences nutritional balance of suggestions)
- Spice tolerance (soft filter — influences dish selection)
- Meals the cook handles (scope — only suggest for meals captured in E1)

**Variety constraint:** No dish repeated within a 7-day window. Enforced at engine level, not surfaced as a product constraint to the user.

**Swap mechanic:** User can swap any meal in the week view. A swap surfaces one alternative from the same filtered pool. Swap signal is recorded for E8 (preference refinement) but does not trigger immediate preference updates in the MVP.

**Notification timing:** Derived from cook arrival time captured in E1. Default for delivery-first users: 8:00am.

---

## 7. E1 → E2 → E3 Handoff

| Handoff point | From | To | What passes |
|---|---|---|---|
| Onboarding complete | E1 | E2 | Completed preference profile; cook schedule; meals to cover |
| Post-onboarding confirmation screen | E1 | E2 | E2 owns the first week view the user sees after setup |
| Suggestion accepted or swapped | E2 | E3 | The confirmed meal(s) for today, passed to E3 for formatting and delivery |

---

## 8. Open Questions & Considerations

**Questions**
- [ ] How large does the curated meal database need to be to cover 7 days × all meal slots × the full range of dietary types and cuisine preferences without repetition? What is the minimum viable database size?
- [ ] How does the swap mechanic work when the user has already swapped once — can they keep swapping, or is there a limit per day?
- [ ] Should the week view show all meals per day expanded, or collapsed to a single "today" card with the week accessible via scroll or expand?
- [ ] What happens to the week view at the end of the week — does it auto-generate a new week, and when?
- [ ] How should the notification be worded to feel like a helpful nudge rather than an obligation?

**Considerations**
- The curated database is a deliberate MVP constraint, not a permanent architecture decision. The suggestion format, trust assumption, and act-on rate must all be validated before investing in dynamic AI generation. E2's Private Preview results should directly inform the Phase 2 AI upgrade decision.
- The variety constraint (no repeat within 7 days) is the product's primary defence against the "same 3 dishes on repeat" failure mode identified in research. It must be enforced from day one — even in the curated database — or the product replicates the exact problem it is trying to solve.
- The swap mechanic is the only user control in E2. It must feel lightweight — a single tap to replace, not a rating flow or a preference form. The swap signal feeds E8 passively; users should not be aware that it is being recorded.
- The boundary with E3 is clean: E2 surfaces what to eat, E3 handles how to act on it. E2 suggestion cards should not contain share buttons, recipe detail, or cook instructions — those belong entirely to E3.
- The notification timing logic depends entirely on E1 data being complete. If a user skipped cook arrival time during onboarding, E2 must have a sensible default (8:00am) rather than failing silently.
