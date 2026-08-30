# UX Direction — E1 + E2 + E3: MVP Core Loop
**Epic scope:** E1 (Onboarding & Preference Setup) · E2 (Proactive Daily Suggestion) · E3 (Cook Instruction Handoff)
**Sprint:** Food Decision AI Sprint
**Date:** August 2026
**Status:** In progress — approved through Step 2

---

## Design Problem Statement

### User need and pain point

Karan is a 28-year-old urban Indian professional living alone in Bengaluru. He has a cook who arrives at 8am, and Swiggy on his home screen for everything else. Every morning — barely awake, before his brain is on — he has to answer the same question: *"What should I tell her to make?"* He has no ready answer. He repeats yesterday's meal, or says "make whatever's there." By evening, he's scrolling Swiggy for 20 minutes and ordering something he'll regret. He has tried HealthifyMe. He stopped after three weeks because logging felt like homework.

The problem is not that Karan lacks preferences, goals, or access to food. The problem is that **he has no system that converts what he already knows about himself into an answer that is waiting for him at the right moment, in a form he can immediately act on.**

### The desired outcome

Karan wakes up, sees a notification: *"Breakfast mein poha, lunch mein dal chawal."* He taps. The app opens. The voice note is ready. He sends it to his cook in one tap. He doesn't think about food again until he eats — and it's good. Over the week, he notices he's eating differently than before. He hasn't configured anything. He hasn't logged anything. It just works.

The product succeeds when **the decision is already made before Karan has to make it** — and when the handoff to the cook costs him nothing.

### Key constraints and design considerations

| Constraint | Design implication |
|---|---|
| **Zero daily input** | No logging, no daily prompts, no configuration after onboarding. The product works passively. Any screen that asks Karan to do something before he gets value is a failure. |
| **One-time onboarding, felt as one-time** | The setup flow must feel conclusive. The confirmation screen must make Karan feel the product is now running for him — not waiting for more input. |
| **Cook-first output format** | The primary action in E3 is sending a Hindi voice note to the cook via WhatsApp share sheet. The design must make this feel like the natural, obvious next step from seeing a suggestion — not a feature he has to find. |
| **Suggestion trust before delight** | The week view and variety mechanics build delight. But the first design priority is trust: Karan must believe the suggestion is right for him before he'll act on it. The preference signal from E1 must be visible in E2's suggestion. |
| **Android-first, share sheet model** | No WhatsApp Business API. The voice note is generated and shared via Android's native share sheet. The flow must account for share sheet appearance and the possibility that WhatsApp is not the first app in the list. |
| **WhatsApp send failure is a real state** | If the share sheet is dismissed or the send fails, the app must recover gracefully — not leave Karan in a broken state the morning before his cook arrives. |
| **Conflict resolution: veg lock** | If Karan marks "non-vegetarian" as dietary type but dislikes all meat, the system treats him as vegetarian. This must be surfaced during onboarding — not silently applied. |
| **Missing cook time → 7am default** | If Karan skips cook arrival time, notifications default to 7:00am. Communicated on the confirmation screen. |
| **Week rollover** | At midnight every Sunday, the app silently generates the next week's suggestions. If generation fails, the app surfaces an error on Monday morning rather than an empty week view. |
| **Carbon Design System alignment** | Interaction patterns (bottom sheets, cards, notification patterns, form inputs) follow Carbon's mobile guidelines. Drag-and-drop ranking uses Carbon's reorder pattern. |

---


## To-Be User Journey

**Persona:** Karan, 28, Bengaluru · Cook arrives at 8am · Communicates via WhatsApp · Has tried and quit HealthifyMe

---

### Stage 1 — First Open: "What even is this?"
*Day 0 · App downloaded, first launch*

| | Detail |
|---|---|
| **User action** | Opens app for the first time. Sees a brief 2-screen value proposition: *"We plan your meals. You just eat."* Taps "Get started." |
| **Thoughts & feelings** | Sceptical but curious. *"Another app that'll make me log things."* Low commitment — he hasn't invested anything yet. |
| **System touchpoint** | Splash → value prop screen → "Get started" CTA. No login wall yet. |
| **Design opportunity** | The two value-prop screens must pre-empt the scepticism directly. Lead with the outcome, not the feature: *"No logging. No daily decisions. Just a suggestion waiting for you every morning."* |
| **Friction to address** | Don't ask for an account before showing value. Defer sign-up until after the preference setup — or at minimum, make it feel like a formality, not a gate. |

---

### Stage 2 — Onboarding: "OK, this is quick"
*Day 0 · Preference setup · ~5 minutes*

| | Detail |
|---|---|
| **User action** | Works through 4 grouped screens of preference questions. Each screen covers a logical cluster: (1) Diet & allergies, (2) Cuisine & dislikes, (3) Goal & household, (4) Cook schedule. Sees a progress indicator throughout. Finishes with a conflict check (veg lock surfaced if triggered). |
| **Thoughts & feelings** | Initially wary. By screen 2, starts to feel *"OK this is actually about me."* By screen 4 (cook schedule), experiences a small moment of recognition: *"It knows I have a cook."* |
| **System touchpoint** | 4-screen stepped form with a progress bar. Single-select chips, multi-select chips, drag-to-rank list, conditional fields (cook fields appear only if "Yes, I have a cook" is selected). |
| **Design opportunity** | Each screen transition should feel like the app is learning, not interrogating. Micro-copy between steps: *"Great — now let's talk about your cook."* The cook schedule screen is the emotional peak of onboarding — it's where the product feels different from every other food app. |
| **Friction to address** | The veg-lock conflict (non-veg user who dislikes all meat) must surface as a friendly inline nudge — not a validation error. Disliked ingredients free-text must have a clear "skip" affordance. |

---

### Stage 3 — Confirmation: "It's ready"
*Day 0 · End of onboarding · <30 seconds*

| | Detail |
|---|---|
| **User action** | Sees a confirmation screen. The app summarises what it now knows: dietary type, top cuisine preference, cook days. A single line tells him when to expect his first notification. Taps "Done." |
| **Thoughts & feelings** | Relief. *"That's it?"* The brevity of the confirmation is itself the message — the app is now doing the work, not him. If cook arrival time was skipped, the screen notes: *"We'll send your first suggestion at 7:00am."* |
| **System touchpoint** | Single confirmation screen with a summary card and a "Your first suggestion arrives tomorrow morning" message. Option to set a test notification now. |
| **Design opportunity** | This is the handoff moment — E1 ends here, E2 begins tomorrow. The screen should feel like pressing "start" on something that will now run in the background. Not a form receipt. |
| **Friction to address** | Do not show the week view immediately after onboarding. The week view with suggestions is not ready yet (first generation happens overnight). Showing an empty week view kills the momentum. |

---

### Stage 4 — Morning Nudge: "My answer is already here"
*Day 1+ · Every cook-day morning · Before 8am*

| | Detail |
|---|---|
| **User action** | Push notification arrives before the cook: *"🍽 Today: Poha for breakfast, Dal chawal for lunch. Ready to send?"* Karan taps the notification. |
| **Thoughts & feelings** | Still half-asleep. Sees the notification. *"Oh — it's done that thing."* Taps without fully thinking. The bar to act is intentionally lower than the bar to decide. |
| **System touchpoint** | Android push notification with a two-line preview of today's meals. Deep-links directly into the E2 day card — not the app home screen. |
| **Design opportunity** | The notification copy is a product moment, not a utility alert. It should name the dishes — not say "Your meal suggestion is ready." Specificity is the proof of relevance. |
| **Friction to address** | If Karan has not granted notification permission, the home screen card is the fallback — it must surface today's suggestion prominently, above the fold, without requiring any navigation. |

---

### Stage 5 — Week View: "I can see the whole week"
*Day 1+ · After tapping notification · Daily use surface*

| | Detail |
|---|---|
| **User action** | App opens to the week view. Today is highlighted. Karan sees all meals the cook handles today. He can scroll to see the rest of the week. If he doesn't like a meal, he swaps it with one tap. |
| **Thoughts & feelings** | First time: mildly surprised the week is already planned. *"It just did all of this."* Repeat visits: feels in control — he can see the plan and change it if something doesn't feel right. |
| **System touchpoint** | Week view with a horizontally scrollable day strip. Today's card is expanded. Each meal slot shows dish name, cuisine tag, and a swap icon. A subtle "Based on your preferences" label anchors trust. |
| **Design opportunity** | The swap mechanic is Karan's control mechanism — it must feel instant and lightweight. One tap to see an alternative, one tap to confirm. No rating, no reason required. |
| **Friction to address** | If Karan swaps repeatedly on the same meal, after 2 swaps show "That's all we have for today — check back tomorrow" rather than recycling options. |

---

### Stage 6 — Cook Handoff: "Sent. Done."
*Day 1+ · Morning · The core product moment*

| | Detail |
|---|---|
| **User action** | Taps "Send to cook" on today's card. On first use: prompted to select cook's WhatsApp contact (saved for all future sends). App shows the voice note transcript for review. Taps "Send" — Android share sheet opens with WhatsApp highlighted. Selects cook's chat. Done. |
| **Thoughts & feelings** | First use: *"Oh, it generated a voice note?"* Mild delight at the Hindi TTS. Trust check: reads the transcript to confirm it sounds right. Subsequent uses: muscle memory. Tap, confirm, send. Under 10 seconds. |
| **System touchpoint** | "Send to cook" primary CTA on the day card → transcript preview bottom sheet → Android share sheet → WhatsApp send → in-app confirmation state ("Sent ✓"). |
| **Design opportunity** | The transcript preview is a trust screen — it should look like a message preview, not a form. The cook's name should appear if saved: *"Sending to Savitri."* Voice note is generated in background while user reads transcript. |
| **Friction to address** | If share sheet is dismissed without sending, the app returns to the day card with "Send to cook" CTA still available — no error, no lost state. If WhatsApp is not installed, fall back to copy-to-clipboard with: *"WhatsApp not found — transcript copied. Paste it into any chat."* |

---

### Stage 7 — End of Day: "That actually worked"
*Day 1 · Evening · Quiet moment*

| | Detail |
|---|---|
| **User action** | No action required. Karan ate the suggested meal. No logging prompted. The app is silent. |
| **Thoughts & feelings** | Mild satisfaction. *"I didn't have to think about food today."* The absence of friction is itself the experience. |
| **System touchpoint** | No touchpoint. The product's restraint here is intentional design — not an omission. |
| **Design opportunity** | Do not send an evening check-in notification. Do not ask for a rating. The zero-input contract extends to post-meal behaviour. |
| **Friction to address** | Resist the product instinct to prompt engagement. A "How was lunch?" notification at 2pm breaks the zero-input promise and will trigger the same abandonment that killed HealthifyMe for Karan. |

---

### Stage 8 — Sustained Use: "This is just how I eat now"
*Week 2+ · Habit formation*

| | Detail |
|---|---|
| **User action** | Opens app most mornings from the notification. Occasionally views the full week to see what's coming. Rarely swaps. Never configures anything. |
| **Thoughts & feelings** | The product has faded into the background — in the best way. Food decisions no longer feel like a burden. Karan notices he's eating more variety than before. |
| **System touchpoint** | Notification → day card → optional week view scroll. The product surface gets smaller as trust grows. |
| **Design opportunity** | The week view's variety — no repeated dish within 7 days — becomes visible over time. Karan notices he's eaten 14 different dishes this fortnight without having planned any of them. |
| **Friction to address** | At week rollover (midnight Sunday), new suggestions are generated silently. If generation fails, Monday morning surfaces a gentle error on the day card: *"We're still preparing this week's suggestions — check back in a few minutes."* |

---

### Journey arc

```
Sceptical first-timer
    → Relieved by quick, personal setup
        → Pleasantly surprised the plan is already there
            → Cook handoff becomes effortless muscle memory
                → "This is just how I eat now"
```

**Aha moment:** Stage 6, first use — the Hindi voice note plays back and Karan realises the product has already written the message to his cook. That is the moment the product stops being a suggestion engine and becomes a daily assistant.

---


## Detailed User Flows

> **Note on primary view:** The Day View (all meals for today) is the primary product surface. The Week View is a secondary surface accessible from within the Day View. The app home screen always opens to the Day View.

---

### Flow 1 — Value Proposition & Sign-Up
**Purpose:** Convert a first-time opener into an onboarding starter without triggering scepticism.
**Entry point:** App first launch (cold start, no session)
**Exit point:** User lands on Screen 1 of the preference setup flow

| Step | User action | System response |
|---|---|---|
| 1 | App opens | Splash screen displayed (app logo, 1.5s). No loading spinner — content preloaded. |
| 2 | Splash fades | Value prop screen 1: *"We plan your meals. You just eat."* Single headline. "See how →" link below. No CTA button yet. |
| 3 | Taps "See how →" | Value prop screen 2: Three short lines with icons — *"No logging," "No daily decisions," "One morning tap."* Primary CTA: "Get started." Secondary: "Sign in" (small, muted). |
| 4 | Taps "Get started" | App creates an anonymous local session. Navigates to onboarding Screen 1. |
| 5 | Taps "Sign in" (returning user) | Opens sign-in bottom sheet. Email + password or Google sign-in. On success → Day View (bypasses onboarding). |

**Decision points:**
- New user → "Get started" → Flow 2 (Onboarding)
- Returning user → "Sign in" → Flow 5 (Day View)

**States:**

| State | Behaviour |
|---|---|
| **Sign-in loading** | Inline spinner on the "Sign in" button — no full-screen block. |
| **Sign-in error** | Inline error below the email field: *"Incorrect email or password."* No toast. |
| **No internet on first launch** | Value prop screens render normally (static). Block "Get started" only if account creation requires a network call — if anonymous local session is possible, allow onboarding to proceed offline and sync on completion. |

**Accessibility:**
- "See how →" has descriptive aria-label: *"See how the app works"*
- Value prop icons are decorative — mark `aria-hidden`

---

### Flow 2 — Onboarding: Preference Setup
**Purpose:** Capture all 10 mandatory fields in a single session, in under 5 minutes, without the user feeling interrogated.
**Entry point:** End of Flow 1 ("Get started" tapped)
**Exit point:** Confirmation screen (Flow 3)

Grouped into 4 screens. A persistent progress bar (steps 1–4) shows at the top throughout. "Back" always navigates to the previous screen without losing answers.

---

#### Screen 1 — Diet & Allergies
*Fields: Dietary type (F1), Food allergies/intolerances (F3)*

| Step | User action | System response |
|---|---|---|
| 1 | Screen appears | Heading: *"Let's start with what you can eat."* Subtext: *"We'll never suggest anything that doesn't fit."* |
| 2 | Selects dietary type | Single-select chip group: Vegetarian / Eggetarian / Non-vegetarian. One must be chosen to proceed. |
| 3 | Selects allergies | Multi-select chip group: Dairy / Gluten / Nuts / Shellfish / None. Tapping "None" deselects all others; tapping any specific item deselects "None." |
| 4 | Taps "Next" | Validates dietary type is selected. If not: chips shake with inline message *"Pick one to continue."* On valid → Screen 2. |

**States:**

| State | Behaviour |
|---|---|
| **Empty (no dietary type)** | "Next" is visually disabled but tappable — tapping triggers inline validation rather than silently failing. |

**Accessibility:** Dietary type chip group uses `role="radiogroup"`. Allergy chip group uses `role="group"`. Selected state announced to screen reader.

---

#### Screen 2 — Cuisines & Dislikes
*Fields: Cuisine preferences — stacked ranking (F2), Disliked ingredients (F12)*

| Step | User action | System response |
|---|---|---|
| 1 | Screen appears | Heading: *"What do you love to eat?"* Subtext: *"Drag to rank — your top pick goes first."* |
| 2 | Views cuisine list | 5 items in a drag-to-rank list (Carbon reorder pattern): North Indian / South Indian / Continental / Chinese / Mediterranean. All 5 pre-populated; user reorders. Drag handle on right. |
| 3 | Drags cuisines into order | List reorders in real time. A "1st choice" label appears next to the top item. |
| 4 | Views disliked ingredients | Multi-select chip list. Pre-populated with ~12 common items (Bitter gourd / Brinjal / Mushroom / Okra etc.). "+ Add your own" chip at the end. |
| 5 | Taps "+ Add your own" | Inline text input opens. User types ingredient, taps "Add" — chip appears in selected set. |
| 6 | Taps "Skip" (dislikes section) | All disliked ingredients deselected. "Skip" link appears below the chip group, not inline with chips. |
| 7 | Taps "Next" | No mandatory validation (cuisine order has a default). → Screen 3. |

**States:**

| State | Behaviour |
|---|---|
| **Drag in progress** | Dragged item has Carbon elevation/shadow drag state. Other items shift to show drop target. |
| **Free-text empty submit** | If user taps "Add" with empty field: field shakes with *"Type an ingredient first."* |

**Accessibility:** Drag-to-rank must include up/down arrow key alternatives. Each reorder action announces new position: *"North Indian moved to position 1."*

---

#### Screen 3 — Goal & Household
*Fields: Health/fitness goal (F4), Household size (F10), Spice tolerance (F11)*

| Step | User action | System response |
|---|---|---|
| 1 | Screen appears | Heading: *"Tell us a bit about your setup."* |
| 2 | Selects health goal | Single-select chips: Weight loss / Muscle gain / General wellness / No specific goal. |
| 3 | Selects household size | Single-select chips: Just me / 2 people / 3+ people. |
| 4 | Selects spice tolerance | Single-select chips: Mild / Medium / Spicy. |
| 5 | Taps "Next" | Validates all three fields selected. Inline message on any empty group: *"Pick one to continue."* On valid → Screen 4. |

**Accessibility:** Each chip group has a visible label above it — not placeholder text inside chips.

---

#### Screen 4 — Cook Schedule
*Fields: Cook availability (F6), Cook days (F7), Cook arrival time (F8), Meals the cook handles (F9)*

Conditional logic: F7, F8, F9 appear only if F6 = "Yes, I have a cook."

| Step | User action | System response |
|---|---|---|
| 1 | Screen appears | Heading: *"One last thing — tell us about your cook."* Subtext: *"This is where things get interesting."* |
| 2 | Selects cook availability | Single-select chips: Yes, I have a cook / No cook. |
| 3a | Selects "Yes, I have a cook" | Three conditional fields animate in (200ms ease-in): Cook days, Cook arrival time, Meals the cook handles. |
| 3b | Selects "No cook" | Conditional fields remain hidden. "Next" becomes available immediately. |
| 4 | Selects cook days | Single-select chips: Weekdays only / All 7 days / Varies. |
| 5 | Selects cook arrival time | Single-select chips: Before 8am / 8–9am / After 9am / Not sure. If "Not sure" selected, system defaults to 7am notification (communicated on confirmation screen). |
| 6 | Selects meals the cook handles | Multi-select chips: Breakfast / Lunch / Dinner / All. Tapping "All" selects all three individual options and vice versa. |
| 7 | Taps "Next" | Validates: if cook = yes, cook days and meals handled are mandatory; arrival time is optional. On valid → conflict check if applicable → Flow 3. |

**States:**

| State | Behaviour |
|---|---|
| **Conditional fields animation** | Fields slide in smoothly (200ms ease-in) — not a jump cut. Layout does not shift the "Next" button position. |
| **Accessibility** | When conditional fields appear, focus moves to the first newly visible field. Screen reader announces: *"Cook schedule fields added."* |

---

#### Veg Lock — Inline Conflict Nudge
*Triggered if: Dietary type = Non-vegetarian AND all non-veg items are in disliked ingredients*

| State | Behaviour |
|---|---|
| **Triggered** | Bottom sheet before confirmation screen: *"Looks like you're eating vegetarian for now — we'll suggest accordingly. You can update this in your preferences anytime."* "Got it" button. |
| **Dismissed** | Sheet closes, user proceeds to Flow 3. Preference stored as vegetarian internally. |
| **Not triggered** | No interruption. User proceeds directly to Flow 3. |

---

### Flow 3 — Onboarding Confirmation
**Purpose:** Close the onboarding loop, set expectations for Day 1, and leave Karan feeling the product is now running for him — not waiting for more input.
**Entry point:** End of Flow 2 (all screens complete, conflict check passed)
**Exit point:** User taps "Done" → app closes to a minimal holding screen

| Step | User action | System response |
|---|---|---|
| 1 | Confirmation screen appears | Heading: *"You're all set, Karan."* Compact summary card: dietary type, top cuisine, cook days (if applicable). |
| 2 | Reads notification timing | Below summary card: *"Your first suggestion arrives tomorrow at [cook arrival time / 7:00am if not set]."* |
| 3 | Optional: taps "Send me a test notification" | System fires a test push notification: *"🍽 Tomorrow: Your first meal suggestion will be here."* If notification permission not yet granted, Android permission dialog appears first. |
| 4 | Taps "Done" | App navigates to a minimal holding screen. Does **not** navigate to the Day View — suggestions are not yet generated. |

**States:**

| State | Behaviour |
|---|---|
| **Notification permission not granted** | "Send me a test notification" replaced with: *"Allow notifications to get your morning suggestion."* Tapping triggers Android permission dialog. |
| **Notification permission denied** | Link hidden. Inline note: *"You can enable notifications in Settings anytime."* |
| **User navigates back to Day View early** | Placeholder: *"Your first week of meals is being prepared — check back tomorrow morning."* Not an error state. |

---

### Flow 4 — Morning Notification & Deep Link
**Purpose:** Deliver today's meal suggestion before Karan has to think about it, and get him into the app with one tap.
**Entry point:** System fires push notification at cook arrival time minus ~45 min (or 7am default)
**Exit point:** App opens to Day View (Flow 5)

| Step | User action | System response |
|---|---|---|
| 1 | Notification delivered | Android notification. Title: *"Today's meals are ready."* Body: *"Breakfast: Poha · Lunch: Dal chawal."* Two action buttons: **Send to cook** and **View**. |
| 2a | Taps "Send to cook" from notification | App opens directly to transcript preview — skips Day View. Enters Flow 6 at Step 3. |
| 2b | Taps "View" from notification | App opens to Day View, today fully expanded. Flow 5 begins. |
| 2c | Taps notification body | Same as 2b. |
| 2d | Dismisses notification | App not opened. Next organic open lands on Day View. |

**States:**

| State | Behaviour |
|---|---|
| **Notification permission denied** | No notification sent. When Karan opens app, Day View surfaces today's suggestion above the fold with "Send to cook" CTA visible without scrolling. |
| **App in foreground when notification fires** | In-app banner (Carbon inline notification) at top: *"Today's meals are ready — Poha · Dal chawal."* Tapping banner scrolls to top of Day View. |
| **Suggestion generation failed** | Notification not sent. Day View shows error card: *"We couldn't prepare today's suggestion — tap to retry."* Retry triggers re-generation. If retry fails: *"Something went wrong. Try again or check back later."* |

---

### Flow 5 — Day View & Swap
**Purpose:** Show all of today's meals across all 4 slots in a single primary view. Give Karan lightweight control to swap any meal he doesn't want. Week View is accessible as a secondary surface.
**Entry point:** Notification tap / organic app open / returning from Flow 6
**Exit point:** Karan taps "Send to cook" (→ Flow 6), taps "I'll cook this" (→ Flow 7), or closes app

#### Primary surface — Day View

| Step | User action | System response |
|---|---|---|
| 1 | Day View loads | Full-screen card layout. Date + day at top (e.g., "Monday, 4 Aug"). Four meal rows below, one per meal type: Breakfast / Lunch / Snack / Dinner. Each row shows: meal type label, dish name, cuisine tag, swap icon. Rows for meals not covered by the cook are shown in a muted "delivery / self-cook" state. |
| 2 | Views meal rows | Rows for cook-handled meals are fully interactive (swap available, "Send to cook" CTA at bottom). Rows for delivery/self-cook meals show dish name + "Order from Swiggy" or "I'll cook this" as a secondary link — not a primary CTA. |
| 3 | Taps swap icon on a meal | Bottom sheet opens: *"Swap [meal type]?"* One alternative dish shown (same filtered pool, 7-day no-repeat enforced). Two buttons: "Use this" and "See another." |
| 4a | Taps "Use this" | Bottom sheet closes. Meal row updates to new dish name. Swap icon shows a subtle "swapped" dot indicator. Swap signal recorded passively for E8. |
| 4b | Taps "See another" (1st time) | Second alternative shown in the bottom sheet. |
| 4c | Taps "See another" (2nd time) | Third and final alternative shown. "See another" replaced with *"That's all for today."* Only "Use this" and "Cancel" remain. |
| 4d | Taps "Cancel" | Sheet closes. Original meal remains. No change recorded. |
| 5 | Taps "Send to cook" (primary CTA, bottom of screen) | Flow 6 begins. Covers all cook-handled meals for the day in one action. |
| 6 | Taps "View week" (secondary link, top-right or below day heading) | Navigates to Week View (secondary surface — see below). |

#### Secondary surface — Week View

| Step | User action | System response |
|---|---|---|
| 1 | Week View loads | Vertically scrollable list of 7 day cards (Mon–Sun). Each card is collapsed — shows date and one-line meal summary (e.g., "Breakfast · Lunch"). Today's card is slightly elevated/highlighted. |
| 2 | Taps a day card | Card expands to show all 4 meal rows for that day. Swap icon available for future days only. Past days are read-only (swap icon hidden). |
| 3 | Taps "Back" or swipe gesture | Returns to Day View. |

**States:**

| State | Behaviour |
|---|---|
| **Loading** | Skeleton screen — meal row outlines shimmer. Target: <1s on standard connection. |
| **Meal not covered by cook** | Row shown in muted style. Dish name still displayed (for awareness). CTA is "I'll cook this" or delivery link — not "Send to cook." |
| **All meals swapped** | "Send to cook" CTA remains active — voice note regenerated with swapped meals. |
| **Swap pool exhausted on first attempt** | "See another" hidden immediately. Only "Use this" shown with the one available alternative. |
| **Week rollover (Sunday midnight)** | New week generated silently. No notification. If generation fails, Monday Day View shows: *"We're still preparing this week — check back in a few minutes."* Retry available. |
| **Accessibility — swap sheet** | Bottom sheet is a modal — focus trapped inside until dismissed. Escape / Android back gesture closes sheet. Swap icon aria-label: *"Swap [dish name] for [meal type]."* |

---

### Flow 6 — Cook Instruction Handoff
**Purpose:** Convert today's confirmed meal list into a Hindi voice note and send it to the cook via WhatsApp in one tap.
**Entry point:** Karan taps "Send to cook" on the Day View (Flow 5), or from notification action button (Flow 4)
**Exit point:** In-app confirmation state, or error recovery state

Two variants based on whether cook contact is already saved.

#### Variant A — First Use (cook contact not saved)

| Step | User action | System response |
|---|---|---|
| 1 | Taps "Send to cook" | Bottom sheet opens: *"Who's your cook on WhatsApp?"* Contact picker (Android native contacts intent). Subtext: *"We'll remember this for every morning."* |
| 2 | Selects contact | Contact name saved to app. Bottom sheet transitions to transcript preview. |
| 3 | Transcript preview | Heading: *"Sending to [Cook Name]."* Transcript in a message bubble: *"Breakfast mein poha banao. Lunch mein roti, rice aur bhindi sabzi banao."* Buttons: **Send** (primary), **Back** (secondary). Voice note generated in background during this step. |
| 4 | Taps "Send" | Android share sheet opens, pre-filtered to WhatsApp if installed. Shared payload: voice note (.m4a file). |
| 5 | Selects cook's WhatsApp chat | WhatsApp opens, voice note pre-attached. User taps send in WhatsApp. |
| 6 | Returns to app | In-app confirmation: *"Sent to [Cook Name] ✓."* "Send to cook" CTA on Day View changes to *"Sent ✓"* (non-interactive). |

#### Variant B — Repeat Use (cook contact saved)

| Step | User action | System response |
|---|---|---|
| 1 | Taps "Send to cook" | Bottom sheet opens directly to transcript preview. No contact selection step. Heading: *"Sending to [Cook Name]."* Voice note already generating in background. |
| 2–6 | Same as Variant A Steps 3–6 | — |

**Error & edge case states:**

| Scenario | System response |
|---|---|
| **Share sheet dismissed (user backed out)** | App returns to Day View. "Send to cook" CTA still active — no error shown, no lost state. |
| **WhatsApp not installed** | Share sheet opens with all installed apps. In-app banner below sheet: *"WhatsApp not found — transcript copied. Paste it into any chat."* Transcript auto-copied to clipboard. |
| **Voice note generation fails (TTS error)** | Bottom sheet shows error state: *"Couldn't generate the voice note."* Transcript shown as plain text. "Copy text" button offered. |
| **Contacts permission denied** | Bottom sheet: *"We need contacts access to save your cook's details."* "Open Settings" link. Secondary: *"Enter number manually"* — opens numeric text input. |
| **Cook contact saved but needs updating** | Inside transcript preview, small *"Wrong cook? Change contact"* link below cook name. Tapping re-opens contact picker. |

---

### Flow 7 — Recipe View (Self-Cook / No-Cook User)
**Purpose:** For users without a cook, provide the full recipe for the suggested dish so they can cook it themselves.
**Entry point:** User (no-cook profile) taps "I'll cook this" on the Day View
**Exit point:** User reads recipe and navigates back to Day View

| Step | User action | System response |
|---|---|---|
| 1 | Taps "I'll cook this" | Full-screen recipe view opens (not a bottom sheet — this is a primary content view). |
| 2 | Views recipe header | Dish name (large), cuisine tag, health goal alignment tag (e.g., "Muscle gain–friendly"), estimated cook time. |
| 3 | Reads ingredient list | Quantities scaled to household size (from E1 F10). |
| 4 | Reads method | Numbered steps. One action per step. Concise. |
| 5 | Taps back / swipes down | Returns to Day View. |

**States:**

| State | Behaviour |
|---|---|
| **Recipe content missing** | *"Recipe details coming soon — ingredients are below."* Dish name + ingredient list shown; method steps hidden. |
| **CTA logic** | "I'll cook this" replaces "Send to cook" for no-cook users. Both CTAs must never appear simultaneously on the same meal row. |

**Accessibility:** Recipe steps use `<ol>` with `role="list"`. Step numbers are explicit ordinal text — not conveyed by font size alone.

---

### Flow Summary

| # | Flow | Epic | Entry | Exit |
|---|---|---|---|---|
| 1 | Value prop & sign-up | E1 | Cold app launch | Onboarding Screen 1 |
| 2 | Preference setup (4 screens) | E1 | Onboarding Screen 1 | Confirmation screen |
| 3 | Onboarding confirmation | E1 | All prefs complete | Holding screen |
| 4 | Morning notification & deep link | E2 | System notification | Day View |
| 5 | Day View & swap (+ secondary Week View) | E2 | Notification tap / organic open | "Send to cook" or app close |
| 6 | Cook instruction handoff | E3 | "Send to cook" tap | Confirmed send / error state |
| 7 | Recipe view (no-cook user) | E3 | "I'll cook this" tap | Back to Day View |

---

## Design Rationale Notes

**Day View as primary surface, not Week View**
The core user behaviour is a morning check-in, not a planning session. Karan does not open the app to plan the week — he opens it to deal with today. The Day View presents all 4 meals immediately, without requiring any navigation. The Week View is available for the occasional user who wants to look ahead — but it should never be the first thing Karan sees.

**All 4 meals in a single view**
Even though the cook may only handle 2–3 meals, showing all 4 slots gives Karan a complete picture of his day. Delivery and self-cook slots are shown in a muted state — they don't demand action but they are there as context. This reduces the risk that Karan reaches lunchtime with no plan because the app only showed breakfast.

**Hindi voice note over text message**
Domestic cooks in the Indian urban context predominantly communicate via WhatsApp voice notes, not text. A text message instruction requires the cook to read, process, and remember a dish name — a voice note is more natural to receive and easier to act on. The TTS format also means Karan never types anything.

**Transcript preview as a trust mechanism, not an editing step**
The preview exists because TTS quality is unproven in Private Preview. It is not an invitation to edit. The copy framing (*"Sending to Savitri"* + message bubble UI) signals "this is ready to go" rather than "review and correct this." The Back button is the escape valve — not an edit field.

**Zero evening engagement**
No end-of-day prompts, ratings, or check-ins. The product's competitive advantage over apps like HealthifyMe is the absence of obligation. Any screen that asks Karan to report back after he's eaten is a regression to the failure mode the product is designed to escape.

**Conflict resolution surfaced, not silently applied**
When the system detects a veg lock (non-veg dietary type + all meat disliked), it informs Karan rather than silently overriding his stated preference. This preserves his sense of control and prevents a confusing experience when he wonders why he's only seeing vegetarian suggestions.

---

## Design Review Checklist

Before moving from Design to Build, the squad should be able to answer all of these:

1. **Can a user complete onboarding in under 5 minutes on a mid-range Android device?** Test on a Redmi/Realme device with a fresh install.
2. **Does the Day View surface today's "Send to cook" CTA above the fold without scrolling?** Verify on a 5.5" screen (common Indian mid-range form factor).
3. **Does the voice note transcript render correctly for a cook handling 3+ meals?** Confirm the TTS sentence structure doesn't become unwieldy beyond 2 meals.
4. **Is the share sheet → WhatsApp → return-to-app flow tested on Android 12+ and Android 10?** Share sheet behaviour changed in Android 12; both must work.
5. **Does the app recover gracefully from every error state in Flow 6 without requiring Karan to restart the flow?** Walk through: dismissed share sheet, TTS failure, WhatsApp not installed, contacts permission denied.

