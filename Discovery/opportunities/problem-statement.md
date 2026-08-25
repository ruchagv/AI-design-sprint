# Problem Statement — OPP-01 + OPP-02 + OPP-06
**Sprint:** Food Decision AI Sprint
**Scope:** P0 opportunities + upstream enabler
**Sources:** `opportunity-backlog.md` · `interview-findings.md` · `PROJECT-OVERVIEW.md`
**Date:** August 2026

---

## Combined Problem Statement

> **Urban Indian professionals who rely on a cook or food delivery to eat each day have no reliable way to know what they should eat — so every morning they face the same low-grade stress: freeze up, default to the same safe dishes, or order food they'll regret. And because they never ordered the right groceries in the first place, the cook can't do better either. The cost isn't just bad meals. It's a daily tax on mental energy, compounded week after week by a fridge that was never stocked for anything better.**

---

## The Three Moments This Covers

OPP-01, OPP-02, and OPP-06 form a single problem chain — each one sets up or undermines the next.

| | OPP-06 | OPP-01 | OPP-02 |
|---|---|---|---|
| **Moment** | Weekly grocery order | Any time during the day when the user needs to decide what to eat | Specifically when the cook is arriving and needs an instruction |
| **Root cause** | No plan to order against — defaults to the same 3 vegetables | No ready answer to "what should I eat?" | No ready answer that can be handed off to someone else |
| **Failure mode** | Same ingredients repeat → cook has nothing new to work with | Decision paralysis → scrolling delivery apps → ordering junk | Mental blank → repeating yesterday's meal → food boredom |
| **Execution path** | Blinkit / Zepto / BigBasket order | Order delivery, eat at office canteen, cook themselves | Tell the cook what to make |
| **Who it hits** | 2 of 5 participants explicitly, but structurally affects all with a cook | All 5 participants | 4 of 5 participants (those with a cook) |
| **Priority** | P2 — upstream enabler | P0 — must solve | P0 — must solve |

The root cause runs across all three: **users have no system that converts their preferences, health goals, and kitchen reality into a ready-to-act food plan — daily or weekly.**

---

## Problem Anatomy

### 1. The trigger
The decision moment arrives at the worst possible time — early morning, before the brain is fully engaged, or at the end of a draining workday when decision-making capacity is depleted.

> *"Very recently, it would be mostly in the mornings. Like when I wake up, I'm not fully woken up. So to decide at that point of time to put your mind into it, it is a bit of a struggle."* — P4

> *"Sometimes, you know, when you're hungry but you don't really know what you're hungry for. So it takes a lot of like scrolling time, then you're also getting hangry because you can't decide."* — P1

### 2. The knowledge gap
Users broadly know their preferences and goals, but they cannot translate that knowledge into a specific meal for today — especially one that accounts for what ingredients are actually in the fridge.

> *"The stress for me mostly is related to thinking about what to tell her to cook for me. So basically deciding on what to have, what to ask her to cook, if there are like what things are present in my house right now."* — P4

> *"It would be the part where I have to know what I have to eat, what I should eat. And correlating it to what possible things I can eat... If that part could be tackled, nothing like it."* — P2

### 3. The fallback
Without a ready answer, users default to the path of least resistance — repeating familiar meals, giving the cook no instruction, or scrolling delivery apps for something that looks acceptable. The outcome is neither satisfying nor nutritious.

> *"There are certain things that you keep repeating every week. And the repetition of that food item is not because you like it very much. It is because that it's always convenient."* — P4

> *"I've been ordering from the last 15 days. I'm already at a point where I can't decide anymore what to order because I think I've eaten everything."* — P1

### 4. The emotional cost
The failure isn't neutral. Users feel disappointment, guilt, and a low-level frustration with their relationship to food. Some describe it as "toxic." The food they end up with doesn't feel earned or intentional.

> *"I would really like to shift to a completely healthy diet. But you know, I don't really enjoy that too much... some toxicity is there in this."* — P1

> *"Too unhealthy. Need to change."* — P4 (survey, describing their relationship with food)

### 5. Why existing solutions fail
Users have tried apps (Healthify Me, MyFitnessPal, VoCal, unnamed diet apps), AI tools (ChatGPT, Claude), and nutritionist consultations. None have stuck. The consistent failure mode: they require the user to do more work, not less.

> *"AI is like very on demand. I don't have to do it every single day. It's not a compulsion."* — P1 (explaining why AI feels better than apps)

> *"There's like a lot of discipline involved in tracking anything. And I think I was lacking that... I would have to put a reminder to track this, which is like more work."* — P1

> *"I wasn't able to follow through it after like 3 weeks... used to clash sometimes, and one was just a bit of laziness."* — P5

The pattern is clear: **any solution that adds a daily obligation fails.** Users will only sustain a behaviour if it costs them nothing to do.

---

## Who This Is For

**The primary user:** An urban Indian professional, 25–35, living alone or with flatmates, who has a cook coming in daily and uses Swiggy or Zomato as the fallback. They care about their health and fitness but are too cognitively depleted by the time food decisions arise to make good ones. They are not looking for a diet app. They are looking for a smart shortcut.

| Characteristic | Evidence |
|---|---|
| Has a cook | 4 of 5 participants |
| Uses food delivery apps | All 5 participants |
| Has health or fitness goals | 4 of 5 participants (survey Q6) |
| Rates food decision effort 4/5 | 3 of 5 participants (survey Q4) |
| Has tried and abandoned a tracking app | 4 of 5 participants |
| Wants planning offloaded entirely | 4 of 5 participants (DO-03) |

---

## What "Solved" Looks Like

A user whose problem is solved would:

1. Wake up or reach a point of hunger and **not have to think** — a suggestion is already waiting
2. See a meal that accounts for what's in their fridge, fits their dietary preferences, and sounds genuinely appealing
3. Either **tell their cook in one message** with no further deliberation, or **know exactly what to order** without opening Swiggy and scrolling
4. Feel **quietly confident** that the choice is a good one — no guilt, no second-guessing
5. Experience this **without logging, tracking, or configuring anything that day**

> *"A successful week would be me eating healthy every, like at least five days when I'm working."* — P1

> *"I like this idea of not having to think about like what to eat every day, especially on those days when I am busy."* — P3

> *"If that part could be tackled, nothing like it."* — P2

---

## Design Constraints Implied by This Problem

These constraints are derived directly from what caused every prior solution to fail. Any prototype that violates them will reproduce the same failure.

| Constraint | Why it matters |
|---|---|
| **Zero daily input required** | Every app that demanded daily logging was abandoned within weeks. The product must work passively. |
| **Cook-friendly output** | 4/5 users have a cook. The suggestion must be something the user can immediately pass on — a dish name, brief instruction, not a macro breakdown. |
| **Contextually grounded** | Suggestions that ignore what's actually in the fridge are ignored. The product must account for available ingredients. |
| **Flexible, not prescriptive** | Rigid day-by-day plans clash with mood, shared living, and social life. The system should suggest, not mandate. |
| **Feels like a shortcut, not a tool** | Users described AI as preferable to apps precisely because it feels on-demand and non-obligatory. The product must carry that same lightness. |

---

## The Grocery Problem — OPP-06

### Why it belongs here

Grocery ordering was raised by 2 of 5 participants as a friction point in its own right. But its structural significance is larger than that frequency suggests — because what's in the fridge directly constrains what the cook can make, which in turn determines whether OPP-01 and OPP-02 can be solved well. A meal suggestion engine operating on an empty or repetitive fridge will only ever produce repetitive suggestions.

> *"When we order for groceries, you know that you have got like certain vegetables in your refrigerator and you know that what has been made out of it in the past. So you kind of go for those things."* — P4

> *"Ordering vegetables is something I find like [difficult]... I don't know what sabzi to order and I end up maybe just buying like those two, three sabzis that I usually eat."* — P5

P1 had already independently built a workaround — buying 5 different vegetables for 5 days — demonstrating both that the problem is real and that the desired solution is obvious: a planned, varied grocery list tied to what will actually be cooked.

### What makes it different from OPP-01/OPP-02

Unlike the daily decision moments, the grocery problem happens **once a week** and affects the entire week downstream. It is less emotionally acute but structurally foundational. Users are not necessarily distressed by it — they just default to the same items because they lack a better prompt. This makes it a low-resistance opportunity: a small, well-timed nudge (a suggested grocery list ahead of the weekly order) could unlock significantly better meal outcomes for the whole week.

### Its place in the solution

Grocery suggestions are best framed as a **natural extension of OPP-02**, not a standalone feature. The logical flow:

1. The product suggests meals for the week → (OPP-01)
2. The user forwards the right dish to the cook → (OPP-02)
3. The product shows what ingredients those meals need → the user adds them to the grocery order → (OPP-06)

This means OPP-06 should not add scope to the initial prototype, but should be designed as a downstream unlock — something the prototype points toward without fully building.

---

## Nested Problem Statements

The combined problem statement above covers the full chain. These nested versions isolate each layer for design and validation purposes.

---

### Level 1 — The root problem (strategic)

> **Urban Indian professionals have no system that converts their health goals, dietary preferences, and kitchen reality into a ready food plan — so they make the same bad or boring choices on repeat, not because they want to, but because they have nothing better to reach for.**

*This is the framing for a pitch, a PR-FAQ, or a north-star statement. It covers all three opportunities at once.*

---

### Level 2 — The daily decision (OPP-01)

> **When a busy professional needs to decide what to eat — in the morning before work, or at the end of an exhausting day — they have no fast, trustworthy answer that fits their goals and what's available. So they scroll, stall, or settle. Every single day.**

*This is the framing for the core product moment — the moment the app must nail on every open.*

---

### Level 3 — The cook instruction (OPP-02)

> **When a professional with a cook needs to give an instruction before the cook arrives, they have nothing prepared — so they either repeat yesterday's meal, say "make whatever's there," or spend mental energy they don't have. The cook is capable of more. The user just can't tell them what.**

*This is the framing for the cook-handoff feature — the specific output format the product must produce.*

---

### Level 4 — The grocery gap (OPP-06)

> **When a professional places their weekly grocery order, they have no plan to order against — so they buy the same 3–4 vegetables they always buy. The fridge resets to the same state. The cook makes the same meals. The cycle repeats.**

*This is the framing for the weekly grocery suggestion feature — a downstream unlock once OPP-01 and OPP-02 are validated.*

---

## What This Problem Statement Does NOT Cover

Explicitly out of scope (addressed in separate opportunities):

- Choosing what to order on delivery apps when no home food is available (OPP-03)
- Discovering new meals to break variety fatigue (OPP-04)
- Lightweight nutrition awareness without tracking (OPP-05)

These are real and evidenced problems, but secondary to the daily decision + cook instruction + grocery chain that this statement covers.

---

*Next step: Define the core user journey from waking up → meal decision → cook instruction / delivery order.*
