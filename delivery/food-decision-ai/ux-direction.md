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

## To-Be User Journey: *The Week That Runs Itself*

**Persona:** Arjun, 28 · Weekday (Mon–Fri) + Weekend grocery moment
**Product entry points:** Push notification, app home screen, weekly nudge

### Stage Overview

| # | Stage | Time | Arjun's goal | Product's job |
|---|---|---|---|---|
| 1 | **Onboarding** | Once | Set it and forget it | Connect grocery app, capture preferences + goals |
| 2 | **Morning wake-up** | 7:00–7:15am | Know what to tell the cook before she asks | Deliver a suggestion before he has to think |
| 3 | **Cook handoff** | 7:15–7:30am | Give the cook a clear instruction | Make the handoff frictionless — one tap or copy |
| 4 | **Midday check-in** (optional) | 12:30–1:00pm | Know what's for dinner | Passively show the evening plan |
| 5 | **Dinner fallback** | 7:30–9:00pm | Not open Swiggy and scroll | Surface one specific delivery suggestion if needed |
| 6 | **Weekly grocery nudge** | Sunday ~6:00pm | Stock the fridge for a better week | Suggest a varied grocery list tied to next week's meals |

---

### Stage 1 — Onboarding *(Once)*

**User actions:**
- Downloads app, opens for the first time
- Answers 4–5 quick questions: dietary preference, health goal, who cooks (self / cook / both), household size
- Connects their grocery app (Blinkit, BigBasket, or Zepto) to establish pantry state
- Grants notification permission for the morning suggestion

**User thoughts:**
> *"This is fewer questions than I expected. I just want to get to the part where it works."*

**Feelings:** Cautious optimism. Has been burned by setup-heavy apps before. Relief that there's no food diary to fill in.

**System behaviour:**
- Inference engine builds a baseline pantry model from the last 4 weeks of grocery order history
- Preference profile is stored; no re-entry required
- First morning suggestion is queued for the next day

**Delight opportunity:** The final onboarding screen says something like: *"That's everything. Tomorrow morning, we'll have a suggestion waiting."* — sets the expectation without overpromising.

**Friction to address:** If no grocery app is connected or order history is empty, the system falls back to a "common Indian household staples" baseline and flags it softly: *"We've started with a default pantry — tap here to adjust."*

---

### Stage 2 — Morning Wake-Up *(7:00–7:15am)*

**User actions:**
- Wakes up, checks phone
- Sees a push notification: *"Today's meal: Palak dal + roti. Everything's in your fridge."*
- Opens the app (or acts directly from the notification)

**User thoughts:**
> *"Oh — it's already there. I don't have to think."*

**Feelings:** Quiet relief. The cognitive load that used to land at 7:15am has been absorbed by the product overnight.

**System behaviour:**
- Suggestion was generated at ~6:00am based on: pantry state, dietary preference, health goal, day-of-week variety logic (no repeat within 3 days), and meal history
- Notification is soft and warm — not an alarm or demand
- App home screen shows the suggestion card prominently; no navigation required

**Delight opportunity:** The card shows a small contextual note: *"High protein · Uses spinach from Sunday's order."* — signals intelligence without lecturing.

**Friction to address:**
- Notification not seen → app home screen is the fallback; same card is front and centre
- Suggestion feels wrong for the mood → "Not feeling this?" swap gesture available

---

### Stage 3 — Cook Handoff *(7:15–7:30am)*

**User actions:**
- Reads the suggestion card: dish name, 2–3 key ingredients, one-line instruction
- Chooses how to send it: WhatsApp share (primary fast path), copy text (universal fallback), or reads it aloud during a voice call
- Cook receives the instruction; Arjun goes back to his morning routine

**User thoughts:**
> *"I'd send this exactly as it is. She'll know what to do."*

**Feelings:** Decisive, unencumbered. The worst moment of the old morning has become a 15-second task.

**System behaviour:**
- WhatsApp deep link pre-populates the cook's contact if previously used
- Copied text is clean and human-readable: *"Please make palak dal today — spinach, dal, onion are in the fridge. Light oil."*
- App infers the suggestion was acted on from the share/copy action — no logging prompt

**Delight opportunity:** After sharing, a single-line confirmation: *"Done. Lunch sorted."* — closes the loop cleanly.

**Friction to address:**
- Cook communicates by phone / voice note → Arjun reads the card and calls; product does not block this path
- Arjun wants to swap the dish → "Try a different dish" shows one alternative (not a full list); choosing it re-formats the card

---

### Stage 4 — Midday Check-In *(Optional, 12:30–1:00pm)*

**User actions:**
- May open the app during lunch to see what's planned for dinner
- No required action; this stage is entirely passive

**User thoughts:**
> *"Oh good — dinner is already figured out too."*

**Feelings:** Low-key satisfaction. A sense of the day being organised without asking anything of Arjun.

**System behaviour:**
- Home screen passively shows: today's lunch (already sent to cook) + tonight's dinner plan
- No push notification for this stage — pull only, not push
- A soft weekly nutrition summary appears if it's mid-week: *"3 good days so far this week."* (no numbers, no logging)

---

### Stage 5 — Dinner Fallback *(7:30–9:00pm)*

**User actions:**
- Gets home; cook's food is either not there, or doesn't feel right for tonight
- Opens app (or receives a gentle 7:30pm notification: *"No dinner sorted yet — here's one option."*)
- Sees a single delivery suggestion: restaurant name, dish, one-line reason it fits his goals
- Opens Swiggy/Zomato directly to that item, or dismisses if the cook's food is fine

**User thoughts:**
> *"One option. That's all I needed. Not a list, just one."*

**Feelings:** Relief that replaces the usual 20-minute scrolling frustration. The worst moment in the current journey is neutralised.

**System behaviour:**
- Delivery suggestion is triggered only if no dinner was registered as planned from the morning cook instruction
- Suggestion is a specific dish at a specific restaurant — not a category browse
- Deep link to the item in Swiggy/Zomato if feasible; restaurant name + dish name as fallback

**Delight opportunity:** The reason line is human: *"Good protein hit — you've been light on it today."* Not a calorie count; a gentle nudge.

**Friction to address:**
- User already has food → dismisses the notification; no penalty, no follow-up
- Suggested restaurant not in the area → fallback shows a dish type: *"Try a dal tadka from anywhere nearby — protein and light."*

---

### Stage 6 — Weekly Grocery Nudge *(Sunday ~6:00pm)*

**User actions:**
- Receives a Sunday evening notification: *"Next week's meals are ready — here's what to order."*
- Opens app to see a suggested grocery list tied to 5 upcoming meal ideas for the week
- Reviews the list (can remove items or add their own)
- Taps "Open in Blinkit / BigBasket" — list is pre-populated in their cart

**User thoughts:**
> *"This is exactly what I would have had to figure out myself on Sunday night."*

**Feelings:** A sense that the week is set up to go well before it starts.

**System behaviour:**
- 5 meal suggestions for the coming week are generated Friday/Saturday; grocery list is derived from required ingredients across those meals
- List is de-duplicated against current pantry state (staples already in stock are not re-listed)
- Deep link to Blinkit/BigBasket cart with items pre-added, or a plain-text shareable list as fallback
- After the order is placed, the pantry model is updated for the coming week

**Delight opportunity:** The meal preview for the week (5 cards in a horizontal scroll) lets Arjun feel agency — he can see what he's stocking for, not just a faceless grocery list.

**Friction to address:**
- User doesn't place the grocery order → pantry model is not updated; suggestions fall back to a "typical staples" baseline; soft Monday nudge: *"Didn't get a chance to order groceries? We've adjusted this week's suggestions to what you likely have."*
- User orders from an unintegrated app → manual pantry update option available, not forced

---

### Emotion Curve — To-Be

```
Feeling
   │
★★★★★ ── Onboarding end ("Tomorrow it'll be ready")
   │       ── Morning wake-up (suggestion already there)
★★★★☆ ────────── Cook handoff done ("Lunch sorted")
   │                 ─── Dinner fallback ("One option, done")
★★★☆☆ ─────────────────── Midday check-in (passive calm)
   │                                   ──── Sunday grocery nudge
★★☆☆☆ ────────────────────────────────────────────────────────
   │
   └──────────────────────────────────────────────────────────▶
      Onboarding  Mon 7am  Mon 7:30  Mon 1pm  Mon 9pm  Sunday
```

---

### Journey Design Principles

1. **The suggestion must arrive before Arjun opens the app.** Push is the primary channel; the home screen is the safety net.
2. **One decision point at a time.** Never show multiple meals to choose between on the primary surface. One suggestion, one swap option if needed.
3. **The handoff exits the product.** After the cook instruction is sent, the app has no more job to do for that meal. No confirmation screens, no prompts.
4. **Dinner is the trust-building moment.** The app that relieves the worst moment (late-night scrolling) earns the deepest loyalty. Design for this stage with as much care as the morning flow.
5. **The grocery nudge closes the loop.** It is framed as "here's what to order for next week's meals" — not "add to your pantry." The meal preview leads; the grocery list follows.
6. **Tone throughout is a knowledgeable friend.** Warm, direct, never preachy. No calorie counts on primary surfaces. No streaks. No failure states.

---

## Detailed User Flows

---

### Flow 1 — First-Time Onboarding

**Purpose:** Capture the minimum context needed to generate a useful first suggestion. Establish grocery app connection. Set notification permission. Exit with the user confident the product will work tomorrow.

**Entry point:** First app open after install
**Exit point:** Home screen with "Your first suggestion arrives tomorrow morning" confirmation

#### Steps

| Step | User action | System response |
|---|---|---|
| 1 | Opens app for first time | Splash → Welcome screen. Headline: *"Tell us a little. Then we'll handle the rest."* Single CTA: "Get started" |
| 2 | Taps "Get started" | Screen 1 of 4: **Dietary preference** — single-select: Vegetarian / Eggetarian / Non-vegetarian / No preference. Subtext: *"We use this to filter every suggestion."* |
| 3 | Selects preference, taps "Next" | Screen 2 of 4: **Health goal** — single-select: Eat more protein / Reduce oil and sugar / Balanced and varied / No specific goal. Subtext: *"We lean your suggestions in this direction — not a diet plan."* |
| 4 | Selects goal, taps "Next" | Screen 3 of 4: **Who cooks?** — single-select: I have a daily cook / I cook myself / Mix of both. Subtext: *"This changes the format of your suggestions."* |
| 5 | Selects cook type, taps "Next" | Screen 4 of 4: **Connect your grocery app** — options: Blinkit / BigBasket / Zepto / Skip for now. Subtext: *"We read your recent orders to know what's in your fridge. We never modify your orders."* |
| 6a | Taps a grocery app | OS OAuth / deep link opens to grant read access. On return: ✓ *"Connected. We've read your last 4 weeks of orders."* Taps "Done" |
| 6b | Taps "Skip for now" | Soft note: *"No problem — we'll start with common Indian household staples and you can update anytime."* Taps "Continue" |
| 7 | Lands on notification permission prompt | Native OS permission dialog framed with: *"We'll send your morning meal suggestion before your cook arrives."* |
| 8a | Grants permission | System queues first suggestion for next morning at 6:00am |
| 8b | Denies permission | No error. Note: *"You can always open the app in the morning — your suggestion will be on the home screen."* |
| 9 | Lands on completion screen | *"That's everything. Tomorrow morning, we'll have a suggestion waiting."* CTA: "See your home screen" |

#### Decision points and branches

```
Start
  └─ Step 6: Grocery app connection
       ├─ Connected → pantry built from order history → full fridge-aware suggestions
       └─ Skipped → default staples pantry → suggestions still generated; less precise

  └─ Step 8: Notification permission
       ├─ Granted → morning push notification is primary delivery
       └─ Denied → home screen is primary delivery; no push
```

#### Error states
- **Grocery OAuth fails** → *"We couldn't connect right now. Try again or skip — you can connect later in Settings."* Retry + Skip options shown.
- **No order history found** (account is new) → treats as "Skip" silently; uses default staples; no error message shown to user.
- **App install on a new device / restore** → preferences restored from account; grocery connection must be re-authorised (OS-level).

#### Accessibility notes
- All 4 preference screens: min touch target 44×44px (Carbon standard), `aria-checked` on selected option, keyboard-navigable
- Progress indicator (1 of 4) is announced to screen readers as "Step 1 of 4"
- No timed screens; user advances only on explicit tap

---

### Flow 2 — Morning Meal Suggestion

**Purpose:** Deliver the day's meal suggestion before the cook arrives. Get the user from notification to a usable cook instruction in under 30 seconds.

**Entry point:** Push notification at ~6:00am (or app open on home screen if notification missed)
**Exit point:** User has read the suggestion and is ready to act (Flow 3 handles the handoff)

#### Steps

| Step | User action | System response |
|---|---|---|
| 1a | Sees notification on lock screen | Notification text: *"[Dish name] — everything's in your fridge. Tap to see."* |
| 1b | Opens app without seeing notification | Home screen shows suggestion card at full prominence (no scroll needed) |
| 2 | Taps notification / opens app | Home screen loads with suggestion card as the primary element |
| 3 | Reads suggestion card | Card shows: Dish name (large) · One-line cook instruction · 2–3 key ingredients · Contextual tag (e.g. "High protein · Uses Sunday's spinach") |
| 4 | Satisfied with suggestion | Proceeds to cook handoff (Flow 3) |
| 4 (alt) | Taps "Not feeling this?" | System shows one alternative suggestion inline. Card replaces with new content. |
| 5 (alt) | Accepts alternative | Proceeds to cook handoff with new suggestion |
| 5 (alt) | Still not satisfied | "See more options" expands to a short list (max 3 total alternatives). After this, no further alternatives — product does not become a browse experience. |
| 6 (alt) | Still not satisfied after 3 | "Tell us what you're in the mood for" text input appears. AI generates one suggestion from the input. |

#### Decision points and branches

```
App opens
  └─ Is today's suggestion already generated?
       ├─ Yes (normal path) → show suggestion card
       └─ No (generation failed / delayed)
            └─ Show loading state → retry
                 └─ Still failed → show fallback card:
                      "We couldn't generate a suggestion today. Here's a quick idea
                       based on your usual staples." [generic safe suggestion]

Suggestion shown
  └─ User satisfied → proceed to handoff (Flow 3)
  └─ User swaps → show 1 alternative
       └─ User swaps again → show up to 3 total (including original)
            └─ User still unsatisfied → "Tell us what you're in the mood for" [text input]
                 └─ AI generates one contextual suggestion from the input
                      └─ Proceed to handoff
```

#### States

| State | Behaviour |
|---|---|
| **Loading** | Skeleton card while suggestion fetches; shown only on slow connections |
| **Success** | Full suggestion card with dish, instruction, ingredients, contextual tag |
| **Swap (1st / 2nd)** | Card content replaces inline with new suggestion; "Not feeling this?" remains |
| **Swap (max reached)** | "Not feeling this?" replaced with "Tell us what you're in the mood for" |
| **Generation error** | Fallback card with a safe generic suggestion; no error language shown to user |
| **Empty pantry** | Suggestion generated from default staples; no ingredient tag shown; soft prompt to connect grocery app |

#### Accessibility notes
- Suggestion card is a single focusable region; dish name is `h1` equivalent on the screen
- "Not feeling this?" is a visible button, not a gesture-only interaction (gesture is a convenience shortcut)
- Contextual tag is supplemental; not required to understand the suggestion
- Loading skeleton includes `aria-busy="true"` and `aria-label="Loading today's suggestion"`

---

### Flow 3 — Cook Handoff

**Purpose:** Convert the meal suggestion into a message the cook can act on. Get it out of the app and into the cook's hands via the user's preferred channel in one action.

**Entry point:** Suggestion card (from Flow 2), after user is satisfied with the suggestion
**Exit point:** Message sent to cook (or user has the information to relay verbally); app shows confirmation

#### Steps

| Step | User action | System response |
|---|---|---|
| 1 | Reads suggestion card, ready to act | Card shows two primary actions: **"Share to WhatsApp"** (filled primary button) · **"Copy text"** (secondary button). Below: small text link "I'll tell them directly" |
| 2a | Taps "Share to WhatsApp" | WhatsApp share sheet opens. If cook's contact was saved previously: pre-selects that contact. Message pre-filled: *"Please make [dish] today — [ingredient 1], [ingredient 2], [ingredient 3] are in the fridge. [One-line method note]."* |
| 2b | Taps "Copy text" | Cook instruction copied to clipboard. Toast: *"Copied — paste it anywhere."* |
| 2c | Taps "I'll tell them directly" | No action taken. Card remains visible for reference. |
| 3a | Returns from WhatsApp after sending | App detects return from share intent. Home screen updates: suggestion card collapses to "sent" state. Confirmation line: *"Done. Lunch sorted."* |
| 3b | After copying text | Confirmation shown immediately after toast dismisses. |
| 3c | After "tell them directly" | Card stays on screen. Optional soft "Done" button; tapping it shows confirmation. |

#### Decision points and branches

```
Handoff action chosen
  ├─ WhatsApp share
  │    ├─ Cook contact saved → pre-selected in share sheet
  │    └─ No saved contact → generic WhatsApp contact picker opens
  │         └─ User selects contact → pre-filled message shown → user sends
  │
  ├─ Copy text
  │    └─ Text copied → toast → card remains readable
  │
  └─ "I'll tell them directly"
       └─ Card stays on screen for reading
            └─ Optional: user taps "Done" to confirm
```

#### Error states
- **WhatsApp not installed** → "Share to WhatsApp" button hidden; "Copy text" becomes the primary button.
- **Share intent fails** (OS error) → Toast: *"Couldn't open WhatsApp. Use 'Copy text' instead."* Copy button is highlighted.
- **User swaps suggestion after CTA visible** → Card and buttons reset with the new suggestion; any prior copy is overwritten.

#### Accessibility notes
- "Share to WhatsApp" and "Copy text" meet Carbon minimum button sizing; both reachable without scrolling on a standard phone viewport
- Share sheet is native OS — inherits OS accessibility
- "I'll tell them directly" text link meets 3:1 contrast ratio minimum
- Confirmation *"Done. Lunch sorted."* announced via `aria-live="polite"`

---

### Flow 4 — Dinner Fallback

**Purpose:** For evenings when the cook's food isn't available or doesn't feel right, surface one specific delivery recommendation so the user never has to open Swiggy and scroll.

**Entry point:** Push notification at ~7:30pm (if no dinner confirmed from morning flow) OR user opens app in the evening
**Exit point:** User has opened the delivery app to the specific item, or dismissed the suggestion

#### Steps

| Step | User action | System response |
|---|---|---|
| 1a | Receives 7:30pm notification | Notification: *"No dinner sorted yet — [Dish] from [Restaurant] fits tonight."* |
| 1b | Opens app in evening without notification | Home screen shows dinner suggestion card below the collapsed lunch card |
| 2 | Taps notification / sees dinner card | Dinner card: Restaurant name · Dish name · One-line reason · "Open in Swiggy" / "Open in Zomato" button |
| 3a | Taps "Open in Swiggy" / "Open in Zomato" | Deep link to the specific item. App moves to background. |
| 3b | Taps "Not this — suggest another" | One alternative delivery suggestion shown. Same card format. Max 2 alternatives total. |
| 3c | Dismisses / taps "I have food" | Card collapses. No follow-up. No penalty. |

#### Decision points and branches

```
Evening trigger
  └─ Was a cook instruction sent this morning?
       ├─ Yes → assume dinner likely handled → no notification
       │         (dinner card still visible if user opens app)
       └─ No → send 7:30pm notification → show dinner suggestion card

Suggestion shown
  ├─ User opens delivery app → flow exits product
  ├─ User swaps → show 1 alternative (max 2 swaps total)
  │    └─ Still not satisfied → "Search Swiggy yourself" link (graceful exit)
  └─ User dismisses → card removed; no re-trigger that evening
```

#### States

| State | Behaviour |
|---|---|
| **Success** | Dinner card with restaurant, dish, reason, and delivery app CTA |
| **Deep link available** | "Open in Swiggy" or "Open in Zomato" — whichever is installed |
| **Neither delivery app installed** | CTA: "Find this dish nearby" — opens maps/search |
| **Restaurant out of delivery range** | Fallback: dish type only — *"Try a [dish type] from anywhere nearby — [reason]."* No restaurant named. |
| **User dismissed** | Card removed; no re-trigger that evening |

#### Accessibility notes
- "Open in Swiggy", "I have food", and "Not this" are all full-width tappable buttons — not icon-only
- Reason text is supplementary; card is fully actionable without reading it
- Dismissed state is `aria-hidden` once collapsed; does not trap focus

---

### Flow 5 — Weekly Grocery Nudge

**Purpose:** On Sunday evening, show next week's 5 meal ideas alongside the grocery list they require, and let the user send that list to their grocery app cart in one tap.

**Entry point:** Push notification Sunday ~6:00pm
**Exit point:** User has opened their grocery app with the list pre-loaded, shared the plain-text list, or dismissed

#### Steps

| Step | User action | System response |
|---|---|---|
| 1 | Receives Sunday notification | Notification: *"Next week's meals are ready — here's what to order."* |
| 2 | Taps notification / opens app | Weekly view opens. Shows: 5 meal suggestion cards in a horizontal scroll (Mon–Fri) above a generated grocery list. |
| 3 | Scrolls through meal cards | Each card: Dish name · Day label (Mon / Tue / etc.) · One key ingredient highlighted. Cards are read-only at this stage. |
| 4 | Reviews grocery list | List grouped by category: Vegetables · Protein · Staples. Each item has a checkbox. Items already in pantry model are pre-checked / greyed out. |
| 5a | Taps "Add to Blinkit" / "Add to BigBasket" | Deep link opens grocery app with unchecked items pre-added to cart. User reviews and places order. |
| 5b | Taps "Copy list" | Plain-text list copied to clipboard. Shareable to anyone (flatmate, household member). |
| 5c | Removes items from list | User unchecks items; excluded from the cart push. |
| 5d | Adds items manually | User types additional items; appended to the list and included in cart push. |
| 6a | Places order and returns to app | App detects return (or user taps "I've ordered"). Pantry model updates. Home screen: *"Fridge stocked. Next week's meals are ready."* |
| 6b | Dismisses without ordering | No penalty. Pantry model unchanged. Soft Monday nudge sent once: *"Didn't get a chance to order? We've adjusted this week's suggestions to what you likely have."* |

#### Decision points and branches

```
Weekly nudge trigger
  └─ Sunday 5–8pm window
       └─ Notification sent → user opens weekly view
            ├─ User orders → pantry model updated → week runs on new stock
            └─ User skips → pantry model unchanged → suggestions use prior staples baseline
                 └─ Monday soft nudge sent once only

Grocery app integration
  ├─ Connected → "Add to [App]" deep link is primary CTA
  └─ Not connected → "Copy list" is primary CTA; soft prompt to connect shown below
```

#### States

| State | Behaviour |
|---|---|
| **Success** | 5 meal cards + categorised grocery list + "Add to [App]" CTA |
| **No grocery app connected** | "Copy list" is primary; soft prompt: *"Connect Blinkit or BigBasket to add to your cart in one tap."* |
| **Deep link fails** | Toast: *"Couldn't open [App]. Use 'Copy list' instead."* |
| **Meal cards not yet generated** | Loading skeleton; if still pending by Sunday 5pm → *"Your meal ideas for next week are on their way — check back later this evening."* |
| **Mid-week order detected** | Sunday nudge suppressed; pantry model updated from mid-week order instead |

#### Accessibility notes
- Horizontal meal card scroll: `role="list"`, each card is `role="listitem"`; left/right arrow buttons supplement swipe for keyboard/switch access
- Grocery list checkboxes: full Carbon `Checkbox` component with visible label and `aria-checked` state
- Category headers (Vegetables / Protein / Staples) are `h3`-equivalent; announced as section headings by screen readers
- "Add to Blinkit" is the first focusable element below the list (logical tab order)

---

## Flow Summary

| Flow | Primary path | Key error states | Key edge cases |
|---|---|---|---|
| **1. Onboarding** | Preferences → grocery connect → notification permission → home | OAuth fail; no order history | New device restore; grocery app skipped |
| **2. Morning suggestion** | Notification → home screen → suggestion card | Generation fail → fallback card | Empty pantry; suggestion swap (max 3) |
| **3. Cook handoff** | Read card → share / copy / direct → confirmation | WhatsApp not installed; share intent fails | User swaps after CTA visible |
| **4. Dinner fallback** | Notification → dinner card → open delivery app | Neither delivery app installed; restaurant out of range | Cook instruction sent → no notification triggered |
| **5. Weekly grocery nudge** | Notification → meal cards + list → grocery app cart | Meal cards not generated; deep link fails | No grocery app connected; user skips ordering |

---

## Design Rationale

### Why one suggestion, not a list
Every prior solution failed by making the user choose. The moment the product presents a list of options it reintroduces the decision fatigue it exists to eliminate. One suggestion, with one swap available, keeps the cognitive load near zero while still respecting user agency.

### Why the cook handoff is channel-agnostic
Research showed that 4 of 5 users have a cook, but communication styles vary — WhatsApp text, voice note, phone call, and in-person instruction all appeared across participants. Designing for WhatsApp-only would fail the users who call. Designing for copy-to-clipboard alone would miss the users who want the fastest path. The hierarchy (WhatsApp primary → copy secondary → verbal acknowledged) serves all three without cluttering the UI.

### Why the dinner fallback is a push, not a pull
The worst food moment in the current journey is late-evening hunger combined with decision fatigue. A suggestion that requires the user to remember to open the app at 9pm will not reach them in the moment it's most needed. A 7:30pm push — triggered only when dinner hasn't been arranged — intervenes at exactly the right time without becoming an intrusive daily habit.

### Why the grocery nudge leads with meal cards, not the list
Users don't want to stock a pantry. They want to eat good meals. Showing the 5 meal ideas first makes the grocery list feel purposeful — it's the cost of a good week, not a chore. Without the meal cards, the list is indistinguishable from the repetitive grocery orders users already make by default.

### Why onboarding is capped at 4 screens
The research is unambiguous: any product that demands daily logging is abandoned within weeks. Onboarding that is itself burdensome sets the wrong expectation before the product has had a chance to prove its value. Four screens is the minimum viable context for a useful first suggestion. Everything else is inferred from grocery history or updated lazily over time.
