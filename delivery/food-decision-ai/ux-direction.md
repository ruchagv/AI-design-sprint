# UX Direction — Food Decision AI
**Epic:** `food-decision-ai`
**Sprint:** Food Decision AI Sprint
**Scope:** OPP-01 (daily decision) + OPP-02 (cook instruction) + OPP-06 (weekly grocery nudge)
**Persona:** Arjun, 28 — urban Indian professional with a daily cook
**Date:** August 2026

---

## Design Problem Statement

### The User Need

Urban Indian professionals (25–35, living alone, with a daily cook) carry a silent cognitive tax every morning: the cook arrives at 7:15am, and there is no ready answer for what to make. The same plays out again at 9pm when dinner falls through and Swiggy opens. The user *knows* what they want from food — variety, health, something that tastes good — but that knowledge never converts into a ready-to-act decision at the moment it's needed. The week's groceries then reinforce the problem: ordered without a plan, they default to the same 3 vegetables, which means the cook has nothing new to work with, and the cycle repeats.

The user is not looking for a nutrition tool. They are looking for a **shortcut that thinks ahead on their behalf**.

### The Desired Outcome

A user whose problem is solved:
1. Wakes up to a meal suggestion already waiting — matched to their preferences, health goals, and what's actually in their fridge (inferred from their connected grocery app)
2. Forwards it to the cook in one tap, or relays it by voice — without editing, translating, or deliberating
3. Has a guided delivery suggestion ready for the nights the cook's food doesn't work — one restaurant, one dish, no scrolling
4. Gets a weekly grocery nudge (Sunday evening) that stocks the fridge for variety — tied to the coming week's meal ideas
5. Experiences none of this as an obligation — no logging, no daily configuration, no feeling of being tracked

The product earns trust not by being comprehensive, but by being **reliably useful in under 30 seconds**, every day.

### Key Constraints and Considerations

| Constraint | Implication for design |
|---|---|
| **Zero daily input** | The app must work passively. No daily logging, no required opens. Onboarding is once-only. |
| **Pantry state from grocery integration** | Fridge-awareness comes from Blinkit/BigBasket/Zepto order history — no manual entry. Onboarding must establish this connection. Edge case: integration unavailable, order history sparse, or item consumed before the week ends. |
| **Cook handoff is channel-agnostic** | Copy to clipboard is the core action. WhatsApp share is the fast path. Voice note / phone call users are acknowledged — the product does not force a text-only exit. |
| **Cook-friendly output, not macro data** | The suggestion card output is a dish name + brief instruction + 2–3 key ingredients. No calorie counts on the primary surface. |
| **OPP-06 as downstream unlock** | The weekly grocery nudge is designed as a natural extension of the meal suggestion flow — not a standalone feature. |
| **Flexible, not prescriptive** | Suggestions are presented as recommendations, not mandates. The user can dismiss, swap, or ignore without penalty. |
| **Tone: knowledgeable friend, not nutrition app** | Language is warm, direct, and unpretentious. No gamification, streaks, or guilt signals. |
| **Carbon Design System** | All UI patterns align with Carbon components and accessibility standards (WCAG 2.1 AA). |

---

*To-be user journey and detailed flows to follow.*
