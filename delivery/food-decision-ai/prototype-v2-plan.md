# Prototype V2 Plan — Navigation Rethink + MVP Gap Fill

## Top-Level Overview

Create `prototype-v2.html` as a copy of the existing prototype with two goals:

1. **Rethink navigation** — the current prototype has no persistent in-app navigation once onboarding ends. A shipped Android MVP needs a bottom navigation bar, a real app-bar with a back stack, and a Settings / Preferences entry point so users are not trapped with no way to update their setup. The Day View also needs a clearer visual hierarchy — "Send to cook" is the primary action and must be above the fold without scrolling on a 5.5" screen.

2. **Fill MVP gaps** — there are meaningful flows defined in the UX direction that are absent from V1 but must be prototyped before an engineer can build: the two-screen value proposition, the first-use contact selection step (Cook Handoff Variant A), the veg-lock conflict nudge, error/empty states (suggestion generation failed, no internet), the holding screen after onboarding, the push notification mockup, the Recipe View for no-cook users, and a Preferences screen for returning users.

The output is a single self-contained HTML file with no external dependencies beyond Google Fonts.

---

## Sub-Task 1 — Add bottom navigation bar and app-bar back stack

**Status:** `[ ] pending`

**Intent**
Post-onboarding, the app has no persistent chrome. A user who finishes onboarding has no way to get to Settings, return to Today, or understand what "level" they are in. For a shipped MVP, Android apps have a bottom nav bar (or at minimum a top app bar with back affordance). This sub-task adds:
- A persistent **bottom nav bar** with 3 tabs: **Today** (home icon), **Week** (calendar icon), **Settings** (gear icon) — visible on all post-onboarding screens only (not on splash/onboarding/confirm)
- A **top app bar** with a back button on drill-down screens (Handoff transcript, Sent, Recipe, Week view)
- The "Week →" text link in the Day View header is removed — the bottom nav handles that

**Expected Outcomes**
- Every post-onboarding screen has a visible tab bar at the bottom
- Active tab is highlighted with an accent dot and label
- Back arrows appear on screens that are navigated to from the main tabs
- Onboarding screens, splash, and confirmation screen do NOT show the tab bar

**Todo List**
1. Add `.tab-bar` CSS: fixed to bottom of `.phone`, 3 equal columns, 56px height, `background: var(--surface)`, `border-top: 1px solid var(--border)`
2. Add `.tab-item` CSS: flex column, icon + label, active state with accent color + filled icon
3. Insert the tab bar HTML just before `.home-bar` (inside `.phone`), rendered with `id="tab-bar"` hidden by default
4. Add SVG icons: Home (Today), Calendar (Week), Cog (Settings)
5. In `go()` JS function, show/hide the tab bar based on whether the target screen is a post-onboarding screen
6. Tab clicks navigate: Today → `s-day-view`, Week → `s-week-view`, Settings → `s-settings`
7. Highlight active tab when the current screen matches its target
8. Remove the inline "Week →" button from the Day View header
9. Remove the "← Back to today" ghost button from the Week View (back arrow in app bar handles this)

**Relevant Context**
- [`delivery/food-decision-ai/prototype.html`](delivery/food-decision-ai/prototype.html) — existing file to copy and modify
- Screens that show tab bar: `s-day-view`, `s-week-view`, `s-settings`, `s-sent` (secondary)
- Screens that do NOT: `s-splash`, `s-ob1–4`, `s-ob-confirm`, `s-handoff` (full-screen modal-like)

---

## Sub-Task 2 — Add two-screen value proposition (Flow 1, step 2)

**Status:** `[ ] in scope`

**Intent**
The UX direction specifies a two-screen value prop: screen 1 is a single headline ("We plan your meals. You just eat.") with a "See how →" link — no CTA button. Screen 2 has three icon + copy lines ("No logging / No daily decisions / One morning tap") and the "Get started" CTA. The current prototype collapses this into a single splash that shows the CTA immediately, skipping the deliberate reveal arc that pre-empts scepticism.

**Expected Outcomes**
- Splash screen (`s-splash`) shows only the headline and "See how →" link — no "Get started" button
- Tapping "See how →" navigates to a new `s-value` screen with 3 benefit rows and the "Get started" + "Sign in" CTAs
- "Sign in" on `s-value` opens a bottom sheet with email + Google sign-in fields (static, with inline error state mockup)

**Todo List**
1. Modify `s-splash` HTML: keep full-bleed background, headline, subtitle, remove "Get started" button, add "See how →" text link
2. Add new `s-value` screen: 3 icon+text rows (icons decorative, aria-hidden), "Get started" btn-p, "Sign in" btn-ghost
3. Add `s-value` to nav panel under "Onboarding"
4. Wire: splash "See how →" → `s-value`; `s-value` "Get started" → `s-ob1`
5. "Sign in" on `s-value` opens the bottom sheet with a static email+password form and "Sign in with Google" option — tapping either shows inline loading then navigates to `s-day-view`
6. Add `n-s-value` nav item in the left panel

**Relevant Context**
- UX direction Flow 1, steps 1–5 — the two-screen reveal and sign-in sheet
- The current `s-splash` button goes directly to `s-ob1`

---

## Sub-Task 3 — Add holding screen after onboarding (Flow 3 exit)

**Status:** `[ ] pending`

**Intent**
Per the UX direction: after the confirmation screen, tapping "Done" should navigate to a minimal holding screen — NOT the Day View. Suggestions are not generated yet (they generate overnight). Showing an empty Day View immediately after onboarding is a known failure mode. The current prototype's CTA says "See today's plan →" which takes the user directly to the Day View — incorrect.

**Expected Outcomes**
- `s-ob-confirm` CTA changes from "See today's plan →" to "Done"
- Tapping "Done" → navigates to new `s-holding` screen
- Holding screen message: "Your first week of meals is being prepared — check back tomorrow morning." with a soft illustration/icon, no CTA except "Send me a test notification" (optional)
- Tab bar is NOT shown on the holding screen

**Todo List**
1. Add `s-holding` screen: centered layout, large clock/moon icon, heading "All set.", body copy per spec, optional "Send test notification" ghost button
2. Change `s-ob-confirm` primary CTA label to "Done" and wire to `s-holding`
3. Wire `s-holding` "Send test notification" to `toast()`
4. Add `n-s-holding` to the nav panel under Onboarding
5. Do NOT show tab bar on `s-holding`

**Relevant Context**
- UX direction Flow 3, step 4 and the "User navigates back to Day View early" state

---

## Sub-Task 4 — Add push notification mockup screen

**Status:** `[ ] pending`

**Intent**
Flow 4 (Morning Notification & Deep Link) is the entry point for daily use. It is not prototypable in a browser natively, but a prototype screen can simulate it: a rendered Android-style notification card showing the "Today's meals are ready" notification with two action buttons ("Send to cook" and "View"), above a darkened home-screen mockup. Tapping the actions exercises the correct deep-link paths.

**Expected Outcomes**
- New `s-notification` screen shows a realistic Android notification card overlaid on a blurred/dark background
- Notification shows: title "Today's meals are ready 🍽", body "Breakfast: Poha · Lunch: Dal chawal", two action chips: "Send to cook" and "View"
- "Send to cook" → `s-handoff` (skips Day View per spec)
- "View" → `s-day-view`
- Nav panel gets a new "Notification (deep link)" entry under "E2 — Daily Suggestion"

**Todo List**
1. Add `s-notification` screen with a dark blurred background
2. Add notification card component: app icon, app name "Food Decision AI", timestamp "now", title, body, action chips
3. Wire "Send to cook" action chip → `s-handoff`
4. Wire "View" action chip → `s-day-view`
5. Add nav entry `n-s-notification`

**Relevant Context**
- UX direction Flow 4, step 1 and the notification permission-denied state

---

## Sub-Task 5 — Add first-use contact selection (Cook Handoff Variant A)

**Status:** `[ ] pending`

**Intent**
Currently the handoff screen goes straight to transcript preview showing "Sending to Savitri" — this is Variant B (repeat use). For a first-time user, the UX direction specifies: tapping "Send to cook" opens a bottom sheet asking "Who's your cook on WhatsApp?" with a contacts picker and "We'll remember this for every morning." subtext. The prototype never shows this step. It is a critical first-use moment and must be represented.

**Expected Outcomes**
- New `s-handoff-first` screen (or triggered via a flag) shows the contact selection bottom sheet before the transcript
- Sheet: heading "Who's your cook on WhatsApp?", a mock contact list with 2–3 contacts (Savitri, Raju, Priya), subtext "We'll remember this for every morning.", "Enter number manually" ghost link
- Selecting a contact → animates to transcript preview state (same `s-handoff`)
- A "First use?" toggle in the nav panel lets reviewers switch between Variant A and B

**Todo List**
1. Add `s-handoff-first` screen: shows contact selection bottom sheet open by default over a partially visible Day View background
2. Mock contact list: 3 items with avatar initials, name, phone
3. On contact select → `go('s-handoff')` with a brief transition
4. Add "Enter number manually" flow: inline numeric text input inside the sheet
5. Add nav entry `n-s-handoff-first` under E3 as "Handoff — First use (contact select)"

**Relevant Context**
- UX direction Flow 6 Variant A, steps 1–2
- UX direction contacts permission-denied error state

---

## Sub-Task 6 — Add veg-lock conflict nudge

**Status:** `[ ] pending`

**Intent**
The UX direction specifies: if the user selects Non-vegetarian but also adds all meat/poultry/fish to disliked ingredients, a bottom sheet appears before the confirmation screen: "Looks like you're eating vegetarian for now — we'll suggest accordingly. You can update this in your preferences anytime." This is an important trust moment that is entirely absent from V1.

**Expected Outcomes**
- On `s-ob4` "Done →" tap: JS checks if diet = nonveg AND dislikes contains all meat items → opens veg-lock sheet
- Sheet: friendly heading, body copy per spec, "Got it" primary button
- Tapping "Got it" → proceeds to `s-ob-confirm`
- If condition not met: proceeds directly without the sheet

**Todo List**
1. Define `MEAT_ITEMS` constant in JS: `['chicken','mutton','fish','prawn','beef','pork']`
2. In `ob4Next()` (new function replacing direct `go('s-ob-confirm')`), check selected dislikes for overlap with meat items AND diet = nonveg
3. If triggered: `openSheet(vegLockSheetHTML)` — sheet has "Got it" → `closeSheet(); go('s-ob-confirm')`
4. If not triggered: `go('s-ob-confirm')` directly

**Relevant Context**
- UX direction "Veg Lock — Inline Conflict Nudge" section
- `g-dislikes` chip group and `g-diet` chip group in `s-ob4`

---

## Sub-Task 7 — Add error and empty states

**Status:** `[ ] pending`

**Intent**
A shipped MVP must show graceful handling of failures. Currently the prototype has no error states at all. Three must be represented: (1) suggestion generation failed on Day View, (2) voice note TTS failed on handoff, (3) no internet on first launch.

**Expected Outcomes**
- Day View has an error card variant (`s-day-error`): "We couldn't prepare today's suggestion — tap to retry." with a retry button → simulates loading → goes to normal `s-day-view`
- Handoff screen has an error state toggle: when "TTS failed" is shown, the voice note indicator is replaced with an error row and the send button is replaced with "Copy text" as the primary
- No-internet state on `s-splash`: "No internet" banner shown at the top, "Get started" button is replaced with a disabled state and message "Connect to the internet to get started"
- Nav panel gets an "Error states" section with entries for each

**Todo List**
1. Add `s-day-error` screen with error card: icon, message, "Retry" button → `go('s-day-view')` after 800ms delay
2. Add a `?tts-error` flag toggle on `s-handoff`: show an error row instead of the waveform when active; swap Send button for "Copy text" as primary
3. Add `s-splash-offline` screen: same splash layout but with a top banner "No internet connection" and disabled CTA
4. Add nav entries under a new "Error states" group

**Relevant Context**
- UX direction Flow 4 "Suggestion generation failed" state
- UX direction Flow 6 "Voice note generation fails (TTS error)" state
- UX direction Flow 1 "No internet on first launch" state

---

## Sub-Task 8 — Add Recipe View (Flow 7 — no-cook user)

**Status:** `[ ] pending`

**Intent**
Flow 7 is entirely absent. For the secondary persona (no-cook user), the primary CTA on meal rows is "I'll cook this" not "Send to cook", which opens a full-screen Recipe View. The Day View in V1 has an "I'll cook this" label on the snack row but it is non-functional. For a shipped product, this flow needs to be represented so engineers can scope it.

**Expected Outcomes**
- New `s-recipe` screen: full-screen, not a sheet
- Recipe header: dish name (large), cuisine tag, health goal tag, estimated cook time
- Ingredients list: quantities, scaled note ("For 1 person")
- Numbered method steps
- Back button returns to `s-day-view`
- Nav entry under E3

**Todo List**
1. Add `s-recipe` screen with the dish "Roasted Chana" (the snack row's "I'll cook this")
2. Recipe data: 4 ingredients, 5 numbered method steps
3. Wire snack row "I'll cook this" text on Day View to `go('s-recipe')`
4. Add nav entry `n-s-recipe` under E3 as "Recipe View (no-cook)"

**Relevant Context**
- UX direction Flow 7, steps 1–5 and error state
- Day View snack row currently has an "I'll cook this" static label — make it a tappable link

---

## Sub-Task 9 — Add Settings / Preferences screen

**Status:** `[ ] pending`

**Intent**
The bottom tab bar (Sub-Task 1) includes a Settings tab. A shipped MVP must have a preferences screen — without it, users who complete onboarding have no way to update their dietary type, cook schedule, or disliked ingredients. This is a real abandonment vector if suggestions feel wrong and there is no correction path.

**Expected Outcomes**
- `s-settings` screen accessible from the bottom nav Settings tab
- Shows grouped preference summary rows, each tappable: Diet, Cuisines, Health goal, Household, Cook schedule
- Tapping any row opens an inline edit bottom sheet (simplified: just show the same chip group from onboarding, pre-populated with current values, "Save" and "Cancel" buttons)
- A "Sign out" ghost button at the bottom
- App version and privacy policy links at the very bottom

**Todo List**
1. Add `s-settings` screen: page heading "Preferences", grouped list
2. Add setting rows: Diet type, Top cuisine, Goal, Household, Cook schedule — each shows current value and a "Edit" chevron
3. Tapping any row opens a bottom sheet with the relevant chip group
4. "Save" → `closeSheet(); toast('Updated')` — no real state change needed
5. "Sign out" ghost button → `go('s-splash')`; `toast('Signed out')`
6. App version line at the bottom (static: "v0.1.0 · Private Preview")

**Relevant Context**
- This screen is the entry point for all post-onboarding preference editing
- Bottom tab bar from Sub-Task 1 must wire to this screen

---

## Sub-Task 10 — Update nav panel and prototype metadata

**Status:** `[ ] pending`

**Intent**
The left nav panel in V1 is labeled with epic codes (E1, E2, E3) which is internal-facing. For a prototype shared with stakeholders and engineers, the nav should be reorganized by **user scenario** — matching how a PM would walk through it in a review. Add a prototype title banner, version number, and a color-coded legend explaining the screen states.

**Expected Outcomes**
- Nav panel sections: "First launch", "Onboarding", "Daily use", "Cook handoff", "Settings", "Error states"
- Each section groups the relevant screens
- Nav panel has a small header: "Food Decision AI · v0.2 MVP Prototype"
- A legend at the bottom explains: Blue dot = interactive flow, Grey dot = state variant
- All new screens from Sub-Tasks 1–9 appear in the correct section

**Todo List**
1. Rename nav sections from epic codes to user-scenario labels
2. Add header text to nav panel
3. Add all new screen entries from previous sub-tasks
4. Add a small color legend at the bottom of the nav
5. Update `<title>` to "Food Decision AI — MVP Prototype v2"

**Relevant Context**
- Nav panel lives below the phone in [`delivery/food-decision-ai/prototype.html`](delivery/food-decision-ai/prototype.html)

---

## Screen Inventory (V2 vs V1)

| Screen ID | Label | In V1? | In V2? | Notes |
|---|---|---|---|---|
| `s-splash` | Welcome (headline only) | ✓ | ✓ modified | Remove Get started CTA, add "See how →" |
| `s-value` | Value proposition (2nd screen) | ✗ | ✓ new | 3 benefit rows + Get started |
| `s-ob1` | Diet & Allergies | ✓ | ✓ | — |
| `s-ob2` | Cuisines & Dislikes | ✓ | ✓ | — |
| `s-ob3` | Goal & Household | ✓ | ✓ | — |
| `s-ob4` | Cook Schedule | ✓ | ✓ modified | Veg-lock check before proceeding |
| `s-ob-confirm` | Setup complete | ✓ | ✓ modified | CTA → "Done" → holding screen |
| `s-holding` | Holding (suggestions pending) | ✗ | ✓ new | Post-onboarding wait state |
| `s-notification` | Push notification mockup | ✗ | ✓ new | Simulates deep link entry |
| `s-day-view` | Day View (primary surface) | ✓ | ✓ modified | No "Week →" header link; tab bar shown |
| `s-day-error` | Day View — error state | ✗ | ✓ new | Suggestion generation failed |
| `s-week-view` | Week View | ✓ | ✓ modified | Tab bar shown; no ghost back button |
| `s-handoff-first` | Handoff — contact select (Variant A) | ✗ | ✓ new | First use only |
| `s-handoff` | Handoff — transcript preview | ✓ | ✓ modified | TTS error toggle; tab bar hidden |
| `s-sent` | Sent confirmation | ✓ | ✓ | — |
| `s-recipe` | Recipe view (no-cook) | ✗ | ✓ new | Flow 7 |
| `s-settings` | Settings / Preferences | ✗ | ✓ new | Bottom nav tab |
| `s-splash-offline` | Splash — offline state | ✗ | ✓ new | Error state variant |

**Total:** 10 screens in V1 → 18 screens in V2

---

## Navigation Architecture (V2)

```
FIRST LAUNCH
  s-splash → s-value → s-ob1 → s-ob2 → s-ob3 → s-ob4 → s-ob-confirm → s-holding

DAILY USE  (all share bottom tab bar)
  s-notification ──► s-day-view (tab: Today)
                 └─► s-handoff-first → s-handoff → s-sent
  s-day-view → swap sheet (inline)
  s-day-view → s-recipe (snack "I'll cook this")
  s-day-view → s-week-view (tab: Week)
  s-day-view → s-settings (tab: Settings)
  s-day-error → retry → s-day-view

SETTINGS
  s-settings → inline edit sheets → s-settings
  s-settings → Sign out → s-splash
```
