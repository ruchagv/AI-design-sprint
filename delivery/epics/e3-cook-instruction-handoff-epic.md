# E3 — Cook Instruction Handoff

**Epic ID:** E3
**Sprint:** Food Decision AI Sprint
**Date:** August 2026
**Status:** Draft
**Priority:** 2 of 7 — ships with E2 as MVP core loop
**Depends on:** E1 (cook availability + schedule), E2 (confirmed meal suggestion)

---

## 1. Problem Statement

Having a meal suggestion is only half the solution. For the 4 in 5 users who have a cook, the suggestion is useless unless it can be handed off immediately — in a format the cook can understand and act on, in the language the cook is comfortable with, through the channel the cook already uses. Today, users either repeat yesterday's meal because they can't articulate an instruction on the spot, or they spend mental energy translating a vague food idea into something communicable. This epic closes that gap: once E2 surfaces a suggestion, E3 converts it into a Hindi voice note and sends it to the cook on WhatsApp in one tap. For users without a cook, E3 surfaces the full recipe so they can cook the meal themselves.

---

## 2. Target Users

**Primary — Cook-assisted professional:** Has a cook arriving daily. Communicates with the cook via WhatsApp. Needs to send an instruction before the cook arrives — ideally before they are fully awake and thinking clearly. The instruction must require zero editing. *(4 of 5 research participants)*

**Secondary — Self-cooking user:** No cook. Has accepted a suggestion from E2 and wants to cook it themselves. Needs enough detail to execute the dish without external help. *(1 of 5 research participants)*

---

## 3. Product Outcomes & Instrumentation

> **Goal:** If we build this, the moment between "I see a suggestion" and "my cook knows what to make" collapses to a single tap. Users stop repeating yesterday's meal not because they lack ideas, but because they had no fast way to communicate a new one. E3 removes that final friction.

| Phase | Product Outcome | Metric |
|---|---|---|
| **Private Preview** | Users send the cook instruction without editing it | "Send as-is" rate ≥ 60% (voice note sent without user abandoning the flow) |
| **Private Preview** | The voice note channel works end-to-end | Successful WhatsApp send rate ≥ 90% of attempts |
| **Public Preview** | Cook instruction becomes the default morning action | ≥ 70% of cook-assisted users who view a suggestion also trigger a send |
| **Public Preview** | Users cooking themselves engage with the recipe view | Recipe view open rate ≥ 40% among non-cook users |
| **GA** | Send-as-is rate reaches hypothesis target | ≥ 70% of cook instruction sends require no user intervention before sending |
| **GA** | Cook instruction reduces repeated meals | Self-reported meal variety improvement vs. baseline (exit survey at 4 weeks) |

> ⚠️ **Note:** The 70% send-as-is target is the hypothesis kill condition from solution-hypotheses.md (Hypothesis 2A). If fewer than 60% of users send the voice note without abandoning the flow in Private Preview, the format or channel needs revisiting before GA.

---

## 4. Assumptions

- Every participant with a cook communicates with them via WhatsApp — a direct WhatsApp send is the path of least resistance and does not require users to switch apps or copy text.
- A Hindi TTS voice note is sufficient for the cook to understand and execute the instruction — cooks do not need written text, quantities, or step-by-step methods to make familiar Indian dishes.
- The voice note format ("Breakfast mein poha banao, lunch mein roti, rice aur bhindi sabzi banao") is cook-friendly as-is — users will not need to re-record or edit it before sending.
- Users without a cook want enough recipe detail to cook the dish themselves — the same minimal cook instruction format is not sufficient for a self-cooking user.
- WhatsApp's share API supports sending a pre-generated audio file directly to a contact without requiring the user to open WhatsApp manually.
- The cook's WhatsApp contact can be saved once (post-onboarding or on first send) and reused for all subsequent sends — users should not have to select a contact each time.

---

## 5. User Needs

- A cook-assisted user needs to send today's meal instruction to their cook via WhatsApp in one tap so they can complete the handoff before the cook arrives without thinking about what to say.
- A cook-assisted user needs the instruction delivered as a Hindi voice note so that the cook receives it in a format they are comfortable with and can act on immediately.
- A cook-assisted user needs the voice note to cover all meals the cook is handling that day (as captured in E1) so they don't have to send multiple messages or follow up later.
- A cook-assisted user needs to save their cook's WhatsApp contact once so that every subsequent morning send goes to the right person without requiring them to select a contact.
- A user without a cook needs to view the full recipe for the suggested dish so they can cook it themselves without needing to search elsewhere.
- All users need the cook instruction or recipe view to be accessible directly from the E2 suggestion card so the action is one step from seeing the suggestion, not buried in navigation.
- A cook-assisted user who wants to review the instruction before sending needs to be able to preview the voice note transcript so they can confirm it is correct before it is sent.

---

## 6. Cook Instruction Format — MVP Spec

**Voice note language:** Hindi (TTS-generated)

**Format pattern:**
> *"[Meal] mein [dish] banao"* — repeated for each meal the cook handles that day.

**Example output:**
> *"Breakfast mein poha banao. Lunch mein roti, rice aur bhindi sabzi banao."*

**Scope:** Covers all meals captured in E1 (field 9 — meals the cook handles). If the cook handles breakfast and lunch, both are included in a single voice note. Dinner-only cooks receive a single-meal instruction.

**TTS engine:** To be determined in implementation — must support natural-sounding Hindi with correct pronunciation of common Indian dish names.

**Send flow:**
1. User taps "Send to cook" on the E2 suggestion card
2. App generates TTS voice note from meal list
3. User sees transcript preview ("Breakfast mein poha banao…") with option to confirm or go back
4. User taps confirm → voice note sent to saved cook contact via WhatsApp
5. Confirmation state shown in app

**Self-cook flow:**
1. User taps "I'll cook this" on the E2 suggestion card
2. App opens full recipe view — dish name, ingredient list, step-by-step method
3. User cooks from the in-app recipe; no WhatsApp action triggered

**First-use cook contact setup:**
On first "Send to cook" tap, the app prompts the user to select or save their cook's WhatsApp contact. This contact is stored and reused for all subsequent sends. Contact setup does not belong in E1 onboarding — it is deferred to first use in E3.

---

## 7. E1 → E2 → E3 Handoff (E3 perspective)

| Input | Source | How E3 uses it |
|---|---|---|
| Meals the cook handles | E1 (field 9) | Determines which meals appear in the voice note |
| Cook arrival time | E1 (field 8) | E2 notification timing; E3 send window |
| Confirmed meal suggestion(s) for today | E2 | Source content for TTS voice note generation |
| Cook's WhatsApp contact | Saved on first E3 use | Reused for all subsequent sends |

---

## 8. Open Questions & Considerations

**Questions**
- [ ] Which TTS engine will be used for Hindi voice note generation — and how will it handle dish names that mix Hindi and English (e.g. "pasta", "oats", "sandwich")?
- [ ] What is the fallback if WhatsApp is not installed on the user's device, or if the WhatsApp share API fails?
- [ ] Should the user be able to edit the transcript before the voice note is generated — e.g. add a note to the cook — or is the format fixed?
- [ ] What happens if the cook handles 4+ meals — does the voice note become too long, and is there a length limit?
- [ ] Should the cook contact setup (first-use WhatsApp contact selection) be a blocking step or skippable — and if skipped, how does the user trigger it later?
- [ ] How does the recipe view for self-cooking users get populated — is it part of the curated meal database (E2), or a separate content layer?

**Considerations**
- The voice note format is the product's most technically novel element in the MVP. TTS quality for Hindi — particularly for Indian dish names — must be validated early in Private Preview. A low-quality or mispronounced voice note will break the cook's trust in the instruction before the user's trust in the product is even at risk.
- The transcript preview step is a trust mechanism, not an editing step. It gives the user a moment to confirm the instruction is correct before it is sent — this is especially important in Private Preview when TTS quality is unproven. It should feel like a confirmation, not a form.
- The self-cook recipe view is a distinct content requirement from the cook instruction. The curated meal database (E2) must include full recipe content — not just dish names and ingredient lists — or E3's self-cook path cannot be built. This dependency must be resolved before the database is scoped.
- Cook contact setup on first use (rather than during onboarding) keeps E1 lean and avoids asking users for a WhatsApp contact before they have seen any value from the product. The first send is the right moment — the user has already decided to act.
- The boundary with E2 is clean: E2 owns what to eat, E3 owns how to act on it. E3 should not surface new meal suggestions or allow swaps — if the user wants a different meal, they return to E2.
- Together, E1 + E2 + E3 constitute the complete MVP core loop: capture preferences → surface a suggestion → hand it to the cook. Every design and implementation decision across these three epics should be evaluated against whether it completes or breaks that loop.
