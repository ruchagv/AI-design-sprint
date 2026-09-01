# E1 — Personalised Onboarding & Preference Setup

**Epic ID:** E1
**Sprint:** Food Decision AI Sprint
**Date:** August 2026
**Status:** Draft
**Priority:** 1 of 7 — prerequisite gate

---

## 1. Problem Statement

Urban Indian professionals who rely on a cook or food delivery have no system that converts their health goals and dietary preferences into a ready food plan. Every other product capability — daily meal suggestions, cook instructions, grocery lists — depends entirely on knowing who the user is and what they need. Without a reliable, low-friction setup, the product cannot generate contextually relevant suggestions from day one, and users will experience the same generic output that caused every prior app to fail. This epic captures the one-time preference layer that makes the rest of the product possible.

---

## 2. Target Users

**Primary — Cook-assisted professional:** Urban Indian professional, 25–35, living alone or with flatmates, who has a daily cook and uses Swiggy/Zomato as a fallback. Has health or fitness goals but is cognitively depleted when food decisions arise. Has tried and abandoned at least one tracking app. *(4 of 5 research participants)*

**Secondary — Delivery-first professional:** Same profile without a cook. Relies primarily on delivery. Needs the same preference foundation for suggestion relevance, but cook-specific fields are not applicable. *(1 of 5 research participants)*

---

## 3. Product Outcomes & Instrumentation

> **Goal:** If we build this, every subsequent epic starts with a meaningful user profile — the product can generate a relevant suggestion on Day 1 with zero additional input. Onboarding completion rate is the single most important leading indicator for whether the rest of the product can function.

| Phase | Product Outcome | Metric |
|---|---|---|
| **Private Preview** | Users complete the full setup flow in a single session | Onboarding completion rate ≥ 70% |
| **Private Preview** | Setup does not feel like a new app burden | Median session duration ≤ 6 min |
| **Public Preview** | Users who complete onboarding return the next day | Day-1 → Day-2 retention ≥ 60% among onboarded users |
| **Public Preview** | Users feel the first suggestion is relevant to them | Post-onboarding suggestion relevance rating ≥ 4/5 |
| **GA** | Onboarding completion rate reaches target | Completion rate ≥ 80% |
| **GA** | Setup time target met at scale | Median session duration ≤ 5 min |

> ⚠️ **Note:** The 80% completion and 5-minute setup time targets are working assumptions from the backlog — not user-validated benchmarks. Private Preview should establish a real baseline before these are hardened as GA targets.

---

## 4. Assumptions

- Users are willing to invest a few minutes in a one-time setup if it means they never have to configure the product again day-to-day.
- Users know their dietary type, cuisine preferences, health goals, and cooking setup well enough to articulate them in a short flow — they do not need guided education to complete it.
- A universal onboarding flow with cook-availability as an optional conditional field is sufficient to serve both cook-assisted and delivery-first users; a fully branched experience is not required at this stage.
- Pantry and ingredient capture is not required at onboarding — standing preferences and goal data are sufficient for relevant Day-1 suggestions; contextual ingredient matching is deferred to a later epic.
- Field 2 (cuisine preference) as a stacked ranking provides enough signal for the system to weight suggestions meaningfully without additional input.
- The preference update flow (for users whose situation changes post-onboarding) is a standalone preferences page, not part of the onboarding flow itself, and does not require the user to re-run setup.
- The 80% completion and 5-minute duration targets are working assumptions and should be treated as hypotheses until validated in Private Preview.

---

## 5. User Needs

- A first-time user needs to complete the full preference setup in a single session so that the product is ready to generate relevant suggestions from the very next morning.
- A first-time user needs to declare their dietary type (vegetarian / eggetarian / non-vegetarian) so that every suggestion is appropriate for them from Day 1.
- A first-time user needs to rank their cuisine preferences in order so that suggestions reflect not just what they can eat, but what they actually want to eat most.
- A first-time user needs to flag any food allergies or intolerances so that the product never surfaces a suggestion that could harm them.
- A first-time user needs to share their health or fitness goal so that the product can balance nutrition appropriately across suggestions.
- A user with a cook needs to indicate cook availability, arrival time, and which meals the cook handles so that the product knows when to surface cook-ready instructions and when to suggest delivery instead.
- A first-time user needs to specify their household size and spice tolerance so that suggestions are appropriately portioned and seasoned.
- A first-time user needs to flag disliked ingredients so that the product never surfaces a meal they will immediately reject.
- A returning user whose situation has changed needs to update their preferences via a standalone preferences page so that suggestions remain accurate without requiring a full re-run of onboarding.
- All users need to feel that setup is a one-time cost so that the product does not feel like another daily obligation.

---

## 6. Mandatory Fields

These fields must be completed before the user can proceed. Field 13 (pantry staples) is explicitly deferred to a later epic.

| # | Field | Input type | Notes |
|---|---|---|---|
| 1 | Dietary type | Single select | Vegetarian / Eggetarian / Non-vegetarian |
| 2 | Cuisine preferences | Stacked ranking | North Indian / South Indian / Continental / Chinese / Mediterranean — user drags into preference order |
| 3 | Food allergies / intolerances | Multi-select | Dairy / Gluten / Nuts / Shellfish / None |
| 4 | Health / fitness goal | Single select | Weight loss / Muscle gain / General wellness / No specific goal |
| 6 | Cook availability | Single select | Yes, I have a cook / No cook |
| 7 | Cook days per week | Single select *(cook = yes only)* | Weekdays only / All 7 days / Varies |
| 8 | Cook arrival time | Single select *(cook = yes only)* | Before 8am / 8–9am / After 9am |
| 9 | Meals the cook handles | Multi-select *(cook = yes only)* | Breakfast / Lunch / Dinner / All |
| 10 | Household size | Single select | Just me / 2 people / 3+ people |
| 11 | Spice tolerance | Single select | Mild / Medium / Spicy |
| 12 | Disliked ingredients | Multi-select + free text | Pre-populated common options with free-text fallback |

**Deferred fields:**
- Field 5 (calorie/macro awareness) — not required for MVP suggestion relevance
- Field 13 (pantry staples) — deferred to E7 (weekly grocery suggestion)

**Post-onboarding state (E2 boundary):**
Onboarding ends with a confirmation screen that sets the expectation for the user ("your meals are being prepared"). E2 owns the week view and all subsequent meal surfaces — including the first time the user sees their suggestions.

---

## 7. Open Questions & Considerations

**Questions**
- [ ] At what point in the onboarding flow does the stacked ranking for cuisine preferences appear — early (to set tone) or late (after dietary type and allergies have narrowed the options)?
- [ ] Should disliked ingredients be presented as a pre-populated multi-select list, free text only, or both? What is the right default list for the Indian urban context?
- [ ] What is the exact copy and state of the post-onboarding confirmation screen — and does it include an estimated time for when the first suggestion will be ready?
- [ ] Should the preferences page (for post-onboarding updates) be accessible from the main navigation, or only discoverable via settings?
- [ ] How does the system handle a conflict between dietary type and a disliked ingredient (e.g. a non-vegetarian user who dislikes all meat)?

**Considerations**
- The zero-daily-input constraint is the defining design principle for this product. Onboarding must feel genuinely one-time — any hint of recurring configuration will reinforce the "another app to maintain" mental model that caused prior apps to fail with this user group.
- Cook-related fields (7, 8, 9) are conditional on field 6 — users without a cook should never see them. This keeps the flow short for the delivery-first user segment without requiring a fully branched experience.
- Field 5 (calorie/macro awareness) is deferred not because it is unimportant, but because it is not required to generate a relevant first suggestion — it can be added to the preferences page later without disrupting the core flow.
- Field 13 (pantry staples) must not appear in onboarding even as an optional step. Its absence is a deliberate product decision, not an oversight — introducing it here risks scope creep and adds cognitive load to a flow that must stay under 5 minutes.
- The boundary between this epic and E8 (feedback & refinement) should be explicitly agreed before E8 is written: editing preferences manually (this epic's preferences page) is distinct from the system learning from behavioural signals (E8). Both can coexist but should not overlap in implementation.
- The confirmation screen at the end of onboarding is the handoff point to E2. Its design should be coordinated across both epics to avoid the user landing in an empty or ambiguous state on Day 1.
