# MealCraft — Sample Data · Profile 06
**Name:** Vikram · **Age:** 33 · **City:** Pune
**Dietary type:** Non-vegetarian (declared) → Veg-lock triggered · **Goal:** Weight loss · **Cook:** Weekdays · **Cuisine:** North Indian first · **Household:** Just me · **Spice:** Mild

> ⚠️ **Special state:** Vikram selected "Non-vegetarian" as dietary type but added chicken, mutton, and fish as disliked ingredients. The veg-lock conflict is triggered at the end of onboarding. His profile is stored internally as vegetarian. This profile demos the conflict bottom sheet and the resulting vegetarian meal plan.

---

## 1. User Profile

| Field | Value |
|---|---|
| **Name** | Vikram |
| **Age** | 33 |
| **City** | Pune |
| **Email (demo)** | vikram@example.com |
| **Password (demo)** | abcd1234 |

---

## 2. Onboarding Preferences

### Screen 1 — Diet & Allergies
| Field | Value |
|---|---|
| **Dietary type** | Non-vegetarian *(declared)* |
| **Food allergies / intolerances** | None |
| **Spice tolerance** | Mild |

### Screen 2 — Cuisines & Dislikes
| Field | Value |
|---|---|
| **Cuisine ranking** | 1. North Indian · 2. Continental · 3. South Indian · 4. Mediterranean · 5. Chinese |
| **Disliked ingredients** | Chicken · Mutton · Fish *(triggers veg-lock)* |

### Screen 3 — Goal & Household
| Field | Value |
|---|---|
| **Health / fitness goal** | Weight loss |
| **Household size** | Just me |

### Screen 4 — Cook Schedule
| Field | Value |
|---|---|
| **Has a cook?** | Yes |
| **Cook days** | Weekdays only (Mon–Fri) |
| **Cook arrival time** | 8–9am |
| **Meals the cook handles** | Breakfast · Lunch |
| **Notification time** | 7:30am |

---

## 3. Veg-Lock Conflict Screen

> Shown as a bottom sheet before the confirmation screen.

```
Bottom sheet — Veg Lock Nudge
─────────────────────────────
"Looks like you're eating vegetarian for now —
we'll suggest accordingly.

You can update this in your preferences anytime."

[ Got it ]
```

> On tap of "Got it": profile stored as vegetarian internally. Confirmation screen proceeds.

---

## 4. Confirmation Screen Summary
```
You're all set, Vikram.

🥗  Diet          Vegetarian (adjusted)
🍛  Top cuisine   North Indian
🏠  Household     Just me
👩‍🍳  Cook days     Weekdays · Breakfast & Lunch

🔔  Every morning at 7:30am, you'll get your meal plan.
```

---

## 5. Cook Contact
| Field | Value |
|---|---|
| **Cook name** | Savitri |
| **WhatsApp number** | +91 98765 43210 |

---

## 6. Weekly Meal Plan

> Rules: vegetarian (veg-lock applied internally) · mild spice · weight loss (low cal, high fibre) · North Indian–first · just me · no dish repeated within the week.

### Monday, 4 Aug
| Slot | Dish | Tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Poha | North Indian · Light | ✓ Cook |
| ☀️ Lunch | Moong dal + 2 rotis | North Indian · Low cal | ✓ Cook |
| 🫘 Evening snack | Cucumber + hummus | Continental · Light | – Self |
| 🌙 Dinner | Grilled paneer salad | Continental · Light | – Self |

### Tuesday, 5 Aug
| Slot | Dish | Tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Vegetable oats upma | Light · Weight loss | ✓ Cook |
| ☀️ Lunch | Dal fry + 2 rotis | North Indian · Balanced | ✓ Cook |
| 🫘 Evening snack | Mixed fruit bowl | Light · Seasonal | – Self |
| 🌙 Dinner | Tomato soup + multigrain toast | Light · Low cal | – Self |

### Wednesday, 6 Aug
| Slot | Dish | Tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Idli Sambar (3 pieces) | South Indian · Light | ✓ Cook |
| ☀️ Lunch | Lauki sabzi + 2 rotis | North Indian · Low cal | ✓ Cook |
| 🫘 Evening snack | Roasted makhana | Light · No cook | – Self |
| 🌙 Dinner | Steamed vegetables + paneer | Continental · Light | – Self |

### Thursday, 7 Aug
| Slot | Dish | Tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Ragi dosa + coconut chutney | South Indian · High fibre | ✓ Cook |
| ☀️ Lunch | Curd rice | South Indian · Light | ✓ Cook |
| 🫘 Evening snack | Boiled sprouts | High protein · Light | – Self |
| 🌙 Dinner | Veg soup + 1 roti | Light · Weight loss | – Self |

### Friday, 8 Aug
| Slot | Dish | Tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Upma | South Indian · Light | ✓ Cook |
| ☀️ Lunch | Palak dal + 2 rotis | North Indian · High fibre | ✓ Cook |
| 🫘 Evening snack | Mixed nuts (small portion) | High protein · No cook | – Self |
| 🌙 Dinner | Vegetable khichdi | Light · Weight loss | – Self |

### Saturday, 10 Aug *(no cook)*
| Slot | Dish | Tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Greek yoghurt + granola | Continental · Light | – Self |
| ☀️ Lunch | Masala dosa (1 piece) | South Indian · Light | – Delivery |
| 🫘 Evening snack | Fruit bowl | Light · Seasonal | – Self |
| 🌙 Dinner | Veg clear soup + toast | Light · Low cal | – Self |

### Sunday, 11 Aug *(no cook)*
| Slot | Dish | Tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Banana oats smoothie | Light · Weight loss | – Self |
| ☀️ Lunch | Rajma Chawal (small portion) | North Indian · High protein | – Self |
| 🫘 Evening snack | Sprout chaat | High protein · Light | – Self |
| 🌙 Dinner | Paneer tikka + salad | North Indian · Light | – Delivery |

---

## 7. Swap Options Pool *(vegetarian / veg-lock applied · mild · weight loss)*

### Breakfast swaps
1. Poha · North Indian · Light
2. Vegetable oats upma · Light · Weight loss
3. Idli Sambar · South Indian · Light

### Lunch swaps
1. Moong dal + roti · North Indian · Low cal
2. Dal fry + roti · North Indian · Balanced
3. Lauki sabzi + roti · North Indian · Low cal

### Evening snack swaps
1. Cucumber + hummus · Continental · Light
2. Mixed fruit bowl · Light · Seasonal
3. Roasted makhana · Light · No cook

### Dinner swaps
1. Grilled paneer salad · Continental · Light
2. Tomato soup + multigrain toast · Light · Low cal
3. Steamed vegetables + paneer · Continental · Light

---

## 8. Hindi Transcript (Monday)
```
Aaj breakfast mein poha banao.
Lunch mein moong dal aur do roti banao — thoda halka rakhna.
```

---

## 9. Push Notification Copy (Monday)
```
Title:  Today's meals are ready 🍽
Body:   Breakfast: Poha  ·  Lunch: Moong dal + roti
```
Action buttons: [Send to cook]  [View]

---

## 10. Sent Confirmation Screen (Monday)
```
Sent. Done.
Savitri got your voice note. Food is sorted.

🌅  Breakfast   Poha                Sent ✓
☀️  Lunch       Moong dal + roti    Sent ✓

Next suggestion arrives tomorrow at 7:30am.
```

---

## 11. Settings Screen Values
| Setting | Display value |
|---|---|
| Diet type | Vegetarian *(adjusted from non-veg)* |
| Top cuisine | North Indian |
| Health goal | Weight loss |
| Household size | Just me |
| Cook schedule | Weekdays · Breakfast & Lunch |
| Disliked ingredients | Chicken · Mutton · Fish |
| Cook's WhatsApp | Savitri · +91 98765 43210 |
| Notification time | 7:30am daily |
